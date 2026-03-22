require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Velog 최신 포스트 프록시
app.get('/api/blog/posts', async (_req, res) => {
  try {
    const username = process.env.VELOG_USERNAME || 'username';
    const response = await fetch('https://v2.velog.io/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          posts(username: "${username}", limit: 3) {
            title
            short_description
            thumbnail
            url_slug
            released_at
            tags
          }
        }`,
      }),
    });
    const data = await response.json();
    res.json(data.data?.posts || []);
  } catch (err) {
    console.error('Error fetching blog posts:', err.message);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
