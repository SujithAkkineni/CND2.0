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
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2088'
    },
    {
      name: 'Mutton Biryani',
      price: 180,
      quantity: 8,
      description: 'Rich and flavorful biryani with succulent mutton pieces',
      seller: 'Telugu Tadka',
      image: 'https://images.unsplash.com/photo-1691170979035-27e5ec943205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=711'
    },
    {
      name: 'Prawns Curry',
      price: 200,
      quantity: 12,
      description: 'Spicy prawns cooked in coconut gravy',
      seller: 'Coastal Delights',
      image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Fish Fry',
      price: 120,
      quantity: 15,
      description: 'Crispy fried fish with Telugu spices',
      seller: 'Seafood Corner',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Gongura Chicken',
      price: 160,
      quantity: 10,
      description: 'Chicken cooked with tangy gongura leaves',
      seller: 'Andhra Spice',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Burger',
      price: 50,
      quantity: 20,
      description: 'Soft buns served with fillings,patty,hot sausce and lettuce',
      seller: 'Western Kitchen',
      image: '/images/idli-sambar.jpg'
    },
    
  ];

  await Dish.insertMany(dishes);
  console.log('Demo data added');
  process.exit();
})
.catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
