const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Route for hello endpoint
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// Only start server if this file is run directly (not imported)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;