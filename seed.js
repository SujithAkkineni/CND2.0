const mongoose = require('mongoose');
const Dish = require('./models/Dish');

mongoose.connect('mongodb+srv://akkinenisujith_db_user:1234@cooknextdoor.6z80hg3.mongodb.net/?appName=CookNextDoor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');

  // Clear existing data
  await Dish.deleteMany({});

  // Add demo dishes
  const dishes = [
    {
      name: 'Chicken Biryani',
      price: 150,
      quantity: 10,
      description: 'Aromatic basmati rice cooked with tender chicken and spices',
      seller: 'Hyderabad Biryani House',
      image: 'https://via.placeholder.com/300x200?text=Chicken+Biryani'
    },
    {
      name: 'Mutton Biryani',
      price: 180,
      quantity: 8,
      description: 'Rich and flavorful biryani with succulent mutton pieces',
      seller: 'Telugu Tadka',
      image: 'https://via.placeholder.com/300x200?text=Mutton+Biryani'
    },
    {
      name: 'Prawns Curry',
      price: 200,
      quantity: 12,
      description: 'Spicy prawns cooked in coconut gravy',
      seller: 'Coastal Delights',
      image: 'https://via.placeholder.com/300x200?text=Prawns+Curry'
    },
    {
      name: 'Fish Fry',
      price: 120,
      quantity: 15,
      description: 'Crispy fried fish with Telugu spices',
      seller: 'Seafood Corner',
      image: 'https://via.placeholder.com/300x200?text=Fish+Fry'
    },
    {
      name: 'Gongura Chicken',
      price: 160,
      quantity: 10,
      description: 'Chicken cooked with tangy gongura leaves',
      seller: 'Andhra Spice',
      image: 'https://via.placeholder.com/300x200?text=Gongura+Chicken'
    },
    {
      name: 'Idli Sambar',
      price: 50,
      quantity: 20,
      description: 'Soft idlis served with sambar and chutney',
      seller: 'Amma\'s Kitchen',
      image: 'https://via.placeholder.com/300x200?text=Idli+Sambar'
    },
    {
      name: 'Dosa',
      price: 40,
      quantity: 25,
      description: 'Crispy dosa with potato filling',
      seller: 'South Spice',
      image: 'https://via.placeholder.com/300x200?text=Dosa'
    }
  ];

  await Dish.insertMany(dishes);
  console.log('Demo data added');
  process.exit();
})
.catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
