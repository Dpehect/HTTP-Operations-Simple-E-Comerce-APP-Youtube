const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Tüm ürünlerin listesi
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.render('index', { products });
});

// Yeni ürün ekleme sayfası
router.get('/add', (req, res) => {
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

// Ürün silme işlemi
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/');
});

module.exports = router;
