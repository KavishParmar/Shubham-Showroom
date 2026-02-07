import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const dataDir = path.join(cwd, "data");
const jsonPath = path.join(dataDir, "instagram.json");
const csvPath = path.join(dataDir, "instagram.csv");
const outputPath = path.join(cwd, "src", "utils", "instagramData.ts");

const normalizeCategory = (caption = "") => {
  const lower = caption.toLowerCase();
  if (lower.includes("sherwani")) return "Sherwani";
  if (lower.includes("jodhpuri")) return "Jodhpuri";
  if (lower.includes("kurta") || lower.includes("pajama")) return "Kurta Sets";
  if (lower.includes("koti") || lower.includes("jacket")) return "Indo-Western";
  if (lower.includes("indo") || lower.includes("western")) return "Indo-Western";
  if (lower.includes("party")) return "Party Wear";
  if (lower.includes("wedding") || lower.includes("groom") || lower.includes("bridal"))
    return "Wedding";
  if (lower.includes("festive") || lower.includes("festival")) return "Festive";
  if (lower.includes("suit") || lower.includes("blazer")) return "Suits";
  return "Festive";
};

const pickName = (caption = "", fallback) => {
  const lines = caption
    .split("\n")
    .map((line) => line.replace(/[^\p{L}\p{N}\s-]/gu, "").trim())
    .filter(Boolean);
  if (lines.length === 0) return fallback;
  const candidate = lines[0];
  const words = candidate.split(/\s+/).slice(0, 6).join(" ");
  return words.length > 0 ? words : fallback;
};

const readJson = () => {
  if (!fs.existsSync(jsonPath)) return null;
  const raw = fs.readFileSync(jsonPath, "utf-8").replace(/^\uFEFF/, "");
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : parsed.posts ?? [];
};

const parseCsv = (content) => {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = lines.shift();
  if (!header) return [];
  const columns = header.split(",").map((c) => c.trim());
  return lines.map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const record = {};
    columns.forEach((col, index) => {
      record[col] = values[index] ?? "";
    });
    return record;
  });
};

const readCsv = () => {
  if (!fs.existsSync(csvPath)) return null;
  const raw = fs.readFileSync(csvPath, "utf-8").replace(/^\uFEFF/, "");
  return parseCsv(raw);
};

const rawPosts = readJson() ?? readCsv() ?? [];

const posts = rawPosts
  .map((item, index) => {
    const id = item.id || item.shortcode || `post-${index + 1}`;
    const link =
      item.permalink ||
      item.link ||
      (item.shortcode
        ? `https://www.instagram.com/p/${item.shortcode}/`
        : "https://www.instagram.com/shubham_showroom/");
    const image =
      item.media_url ||
      item.mediaUrl ||
      item.image ||
      item.thumbnail_url ||
      "";
    const caption = item.caption || item.description || "";
    const mediaType = item.media_type || item.mediaType || "IMAGE";
    return { id, link, image, caption, mediaType };
  })
  .filter((item) => item.image);

const curatedPosts = posts.filter(
  (post) => !/(explore|viral|follow|like|trending)/i.test(post.caption || "")
);

const fashionKeywords =
  /(kurta|pajama|sherwani|jodhpuri|jacket|koti|suit|blazer|indo|wedding|groom|collection|showroom|mens|ethnic|party wear)/i;
const gallerySource = curatedPosts.filter(
  (post) => post.caption && fashionKeywords.test(post.caption || "")
);

const instagramPosts = (
  gallerySource.length >= 20
    ? gallerySource
    : curatedPosts.length
      ? curatedPosts
      : posts
)
  .slice(0, 20)
  .map((post) => ({
    id: post.id,
    image: post.image,
    link: post.link,
    caption: post.caption
  }));

const productPosts = posts.slice(0, 40).map((post, index) => {
  const localProduct = `/images/products/post-${index + 1}.jpg`;
  const localPath = path.join(cwd, "public", "images", "products", `post-${index + 1}.jpg`);
  return {
    id: post.id,
    name: pickName(post.caption, `Designer Look ${index + 1}`),
    category: normalizeCategory(post.caption),
    description: post.caption
      ? post.caption.replace(/\s+/g, " ").slice(0, 90)
      : "Curated designer ensemble.",
    image: fs.existsSync(localPath) ? localProduct : post.image,
    instagramUrl: post.link
  };
});

const file = `export type InstagramItem = {
  id: string;
  image: string;
  link: string;
  caption?: string;
  category?: string;
};

export type InstagramProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  instagramUrl: string;
};

export const instagramPosts: InstagramItem[] = ${JSON.stringify(instagramPosts, null, 2)};

export const productPosts: InstagramProduct[] = ${JSON.stringify(productPosts, null, 2)};
`;

fs.writeFileSync(outputPath, file, "utf-8");
console.log(`Instagram data imported: ${instagramPosts.length} gallery items, ${productPosts.length} products.`);
