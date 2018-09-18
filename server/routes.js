const express = require('express');

const db = require('../database/database');

const router = express.Router();

router.get('/categories', async (req, res) => {
  const categories = await db.getCategories();
  res.send(categories);
});

module.exports = router;