const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Ürün düzenleme sayfası
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('edit', { product });
});

// Ürünün güncellenmesi
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const product = await Product.findByIdAndUpdate(id, { name, price, description });
  res.redirect('/');
});

module.exports = router;
