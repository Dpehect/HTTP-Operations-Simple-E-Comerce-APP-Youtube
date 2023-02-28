const mongoose = require('mongoose');

// Veri modeli tanımlama
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

// Veri modeli oluşturma
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
