const db = require('../config/connection');
const { User, Car, Category, Order } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const carData = require('./carData.json');
const categoryData = require('./categoryData.json');
const orderData = require('./orderData.json');

db.once('open', async () => {
  await cleanDB('user', 'users');
  await cleanDB('car', 'cars');
  await cleanDB('category', 'categories');
  await cleanDB('order', 'orders');

  const users = await User.insertMany(userData);
  console.log('Users seeded!');

  const cars = await Car.insertMany(carData);
  console.log('Cars seeded!');

  const categories = await Category.insertMany(categoryData);
  console.log('Categories seeded!');

  const orders = await Order.insertMany(orderData);
  console.log('Orders seeded!');

  process.exit(0);
});
