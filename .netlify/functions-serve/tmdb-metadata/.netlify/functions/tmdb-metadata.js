// .netlify/functions/tmdb-metadata.cjs
async function tmdbMetadata() {
  const apiKey = process?.env?.VITE_TMDB_API_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey, error: null })
  };
}
module.exports = { tmdbMetadata, handler: tmdbMetadata };
//# sourceMappingURL=tmdb-metadata.js.map
