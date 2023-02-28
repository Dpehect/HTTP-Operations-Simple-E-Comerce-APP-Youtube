// Gerekli paketlerin yüklenmesi
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

// Veritabanı bağlantısı
mongoose.connect('mongodb+srv://username:password@cluster0.olfqcop.mongodb.net/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Veri modelleri
const Product = require('./models/product');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware'lerin tanımlanması
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Router'ların tanımlanması
const indexRouter = require('./controllers/indexController');
const addRouter = require('./controllers/addController');
const editRouter = require('./controllers/editController');
app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/edit', editRouter);

// Sunucunun dinlemesi
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
