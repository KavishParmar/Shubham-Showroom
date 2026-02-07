import fs from "node:fs";
import path from "node:path";

const headers = {
  "User-Agent": "Mozilla/5.0",
  "X-IG-App-ID": "936619743392459",
  Referer: "https://www.instagram.com/shubham_showroom/",
  "X-Requested-With": "XMLHttpRequest",
  Accept: "*/*"
};

const fetchJson = async (url) => {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);
  return res.json();
};

const getBestImageUrl = (item) => {
  if (item?.image_versions2?.candidates?.length) {
    const sorted = [...item.image_versions2.candidates].sort(
      (a, b) => (b.width ?? 0) - (a.width ?? 0)
    );
    return sorted[0].url;
  }
  return item?.thumbnail_url || item?.display_url || null;
};

const download = async (url, outPath) => {
  if (!url) return;
  if (fs.existsSync(outPath)) return;
  const res = await fetch(url, { headers });
  if (!res.ok) return;
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
};

const run = async () => {
  const items = [];
  let maxId = null;
  for (let i = 0; i < 5 && items.length < 40; i += 1) {
    const url = new URL(
      "https://www.instagram.com/api/v1/feed/user/shubham_showroom/username/"
    );
    url.searchParams.set("count", "12");
    if (maxId) url.searchParams.set("max_id", maxId);
    const data = await fetchJson(url.toString());
    items.push(...(data.items ?? []));
    if (!data.more_available || !data.next_max_id) break;
    maxId = data.next_max_id;
  }

  if (items.length === 0) {
    throw new Error("No items fetched from Instagram feed.");
  }

  const productsDir = path.join("public", "images", "products");
  const galleryDir = path.join("public", "images", "gallery");
  fs.mkdirSync(productsDir, { recursive: true });
  fs.mkdirSync(galleryDir, { recursive: true });

  const posts = [];
  for (let i = 0; i < 40; i += 1) {
    const item = items[i % items.length];
    const code = item.code;
    const imageUrl = getBestImageUrl(item);
    const localProduct = `/images/products/post-${i + 1}.jpg`;
    const outPath = path.join(productsDir, `post-${i + 1}.jpg`);
    await download(imageUrl, outPath);
    posts.push({
      id: item.id,
      shortcode: code,
      permalink: `https://www.instagram.com/p/${code}/`,
      media_url: localProduct,
      caption: item?.caption?.text ?? ""
    });
  }

  for (let i = 0; i < 20; i += 1) {
    const item = items[i % items.length];
    const imageUrl = getBestImageUrl(item);
    const outPath = path.join(galleryDir, `insta-${i + 1}.jpg`);
    await download(imageUrl, outPath);
  }

  const output = path.join("data", "instagram.json");
  fs.mkdirSync("data", { recursive: true });
  fs.writeFileSync(output, JSON.stringify(posts, null, 2), "utf-8");
  console.log(`Saved ${posts.length} posts to ${output}`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
