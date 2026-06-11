module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
<!DOCTYPE html>
<html>
  <head>
    <title>NQ Wishlist</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h2>NQ Wishlist Backend is running ✅</h2>
    <p>API endpoint: <code>/api/wishlist</code></p>
  </body>
</html>
  `);
};
