const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Erreur du serveur');
  }
});


router.post('/products', async (req, res) => {
  const { name, description, price, image } = req.body;
  const newProduct = new Product({ name, description, price, image });
  try {
    await newProduct.save();
    res.status(201).send('Produit ajouté');
  } catch (err) {
    res.status(500).send('Erreur du serveur');
  }
});

module.exports = router;
