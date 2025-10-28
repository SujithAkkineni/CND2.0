const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Dish = require('../models/Dish');
const Order = require('../models/Order');

// Home page with Order and Sell options
router.get('/', (req, res) => {
  res.render('index');
});

// Order flow
router.get('/order', async (req, res) => {
  const dishes = await Dish.find({ quantity: { $gt: 0 } });
  res.render('order', { dishes });
});

router.post('/order/:id', (req, res) => {
  const dishId = req.params.id;
  const quantity = req.body.quantity;
  res.redirect(`/address/${dishId}?quantity=${quantity}`);
});

router.get('/address/:id', (req, res) => {
  const dishId = req.params.id;
  const quantity = req.query.quantity;
  res.render('address', { dishId, quantity });
});

router.post('/address/:id', (req, res) => {
  const { address, flatNo, landmark, pincode, mobile, quantity } = req.body;
  const dishId = req.params.id;
  const fullAddress = `${address}, Flat No: ${flatNo || 'N/A'}, Landmark: ${landmark || 'N/A'}, Pincode: ${pincode}`;
  res.redirect(`/payment/${dishId}?address=${encodeURIComponent(fullAddress)}&flatNo=${encodeURIComponent(flatNo || '')}&landmark=${encodeURIComponent(landmark || '')}&pincode=${encodeURIComponent(pincode)}&mobile=${encodeURIComponent(mobile)}&quantity=${quantity}`);
});

router.get('/payment/:id', async (req, res) => {
  const dishId = req.params.id;
  const address = req.query.address;
  const flatNo = req.query.flatNo;
  const landmark = req.query.landmark;
  const pincode = req.query.pincode;
  const mobile = req.query.mobile;
  const quantity = req.query.quantity;
  const dish = await Dish.findById(dishId);
  if (!dish || !address || !quantity) {
    return res.redirect('/order');
  }
  res.render('payment', { dish, address, flatNo, landmark, pincode, mobile, quantity });
});

router.post('/payment/:id', async (req, res) => {
  try {
    const buyer = req.body.buyer;
    const address = req.query.address;
    const flatNo = req.query.flatNo;
    const landmark = req.query.landmark;
    const pincode = req.query.pincode;
    const mobile = req.query.mobile;
    const quantity = req.query.quantity;
    const dishId = req.params.id;
    const dish = await Dish.findById(dishId);
    if (!dish || !address || !quantity) {
      return res.redirect('/order');
    }
    const totalPrice = dish.price * parseInt(quantity);

    const order = new Order({
      dish: new mongoose.Types.ObjectId(dishId),
      buyer,
      address,
      flatNo,
      landmark,
      pincode,
      mobile,
      quantity: parseInt(quantity),
      totalPrice
    });

    await order.save();
    res.redirect(`/order-pickup?dishId=${dishId}&quantity=${quantity}&totalPrice=${totalPrice}&address=${encodeURIComponent(address)}&seller=${encodeURIComponent(dish.seller)}`);
  } catch (error) {
    console.error('Error saving order:', error);
    res.redirect('/order');
  }
});

// Sell flow
router.get('/sell', (req, res) => {
  res.render('sell');
});

router.post('/sell', async (req, res) => {
  const { name, price, quantity, description, seller } = req.body;
  const dish = new Dish({
    name,
    price,
    quantity,
    description,
    seller
  });
  await dish.save();
  res.redirect('/sell-success');
});

// Success pages
router.get('/order-success', (req, res) => {
  res.render('order-success');
});

router.get('/order-pickup', async (req, res) => {
  const { dishId, quantity, totalPrice, address, seller } = req.query;
  const dish = await Dish.findById(dishId);
  if (!dish) {
    return res.redirect('/order');
  }
  res.render('order-pickup', { dish, quantity, totalPrice, address, seller });
});

router.get('/sell-success', (req, res) => {
  res.render('sell-success');
});

// View orders
router.get('/orders', async (req, res) => {
  const orders = await Order.find().populate('dish');
  res.render('orders', { orders });
});

module.exports = router;
