# Instagram Import

Place an export file here and run:

```bash
npm run import:instagram
```

Supported formats:
- `data/instagram.json` (preferred)
- `data/instagram.csv`

Expected JSON shape (array or `{ posts: [...] }`):

```json
[
  {
    "id": "post-id",
    "shortcode": "ABC123",
    "permalink": "https://www.instagram.com/p/ABC123/",
    "media_url": "https://...",
    "caption": "Caption text"
  }
]
```

CSV columns (first row as headers):
`id,shortcode,permalink,media_url,caption`
