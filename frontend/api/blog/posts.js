export default async function handler(_req, res) {
  try {
    const username = process.env.VELOG_USERNAME;
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
    res.status(200).json(data.data?.posts || []);
  } catch (err) {
    console.error('Error fetching blog posts:', err.message);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}
