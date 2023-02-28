const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Yeni ürün ekleme sayfası
router.get('/', (req, res) => {
  res.render('add');
});

// Yeni ürünün veritabanına kaydedilmesi
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({
    name,
    price,
    description,
  });
  await product.save();
  res.redirect('/');
});

module.exports = router;
