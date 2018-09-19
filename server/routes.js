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

router.get('/model', async (req, res) => {
  const modelInfo = await db.getModelInfo(req.query.modelName);
  res.send(modelInfo);
});

router.get('/search', async (req, res) => {
  const searchRes = await db.getSearchResults(req.query.searchQuery);
  res.send(searchRes);
});

module.exports = router;