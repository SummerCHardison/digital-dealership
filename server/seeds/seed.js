const db = require('../config/connection');
const { User, Car, Category, Order } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const carData = require('./carData.json');
const categoryData = require('./categoryData.json');
const orderData = require('./orderData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Car', 'cars');
  await cleanDB('Category', 'categories');
  await cleanDB('Order', 'orders');

  const users = await User.insertMany(userData);
  console.log('Users seeded!');
  
  const categories = await Category.insertMany(categoryData);
  console.log('Categories seeded!');

  const newCarData = carData.map(car => {
    if (car.model === "Toyota Camry") {
      car.category = categories.filter(category => category.name === "sedan")[0]._id
    } else if (car.model === "pagani") {
      car.category = categories.filter(category => category.name === "luxury")[0]._id
    } else if (car.model === "Mazda Miata") {
      car.category = categories.filter(category => category.name === "coup")[0]._id
    }
    return car;
  });
  
  const cars = await Car.insertMany(newCarData);
  console.log('Cars seeded!');

  const orders = await Order.insertMany(orderData);
  console.log('Orders seeded!');

  process.exit(0);
});
