const express = require('express');

const db = require('../database/database');

const router = express.Router();

router.get('/categories', async (req, res) => {
  const categories = await db.getCategories();
  res.send(categories);
});

router.get('/category', async (req, res) => {
  const catFurn = await db.getCategoryFurn(req.query.catName);
  res.send(catFurn);
});

module.exports = router;