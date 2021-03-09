const express = require('express');

const app = express();
const dbConnect = require('./connectDb');
const Product = require('./models/product');

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended : true}));
dbConnect();

app.post('/addProduct', async (req, res) => {
 const {name, category} = req.body;
 await Product.create({name, category});
 res.redirect('/');
})

app.post('/findproduct', async (req, res) => {
  const {name} = req.body;
  const products = await Product.find({name});
  res.render('index', {products});
 })

app.get('/', async(req, res) => {
 const products = await Product.find();
  res.render('index', {products});
})

app.get('/add', (req, res) => {
  res.render('add');
})

app.get('/find', (req, res) => {
  res.render('find');
})

app.get('/products/:id', async(req, res) => {
const product = await Product.findOne({_id: req.params.id});
res.render('product', { product });
})

app.post('/editProduct', async(req, res) => {
  const {id, name, category} = req.body;
  await Product.updateOne( {_id : id }, { name, category });
  res.redirect('/');
  })

app.get('/delete/:id', async(req, res) => {
  
  await Product.deleteOne({_id: req.params.id});
  res.redirect('/');
    })
  
app.listen(3000, () => console.log('Server started'));
