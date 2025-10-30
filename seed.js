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

  // Add demo dishes - Authentic Telugu Dishes
  const dishes = [
    {
      name: 'Idli Vada Sambar',
      price: 80,
      quantity: 15,
      description: 'Steamed rice cakes and crispy vadas served with spicy sambar and chutneys',
      seller: 'South Indian Delights',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Pesarattu',
      price: 60,
      quantity: 12,
      description: 'Green gram dosa with onion, ginger, and upma filling',
      seller: 'Telugu Traditional Foods',
      image: 'https://images.unsplash.com/photo-1626074369867-14f06e059d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      name: 'Pulihora',
      price: 70,
      quantity: 10,
      description: 'Tamarind rice with peanuts and spices - perfect for festivals',
      seller: 'Andhra Heritage Kitchen',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80'
    },
    {
      name: 'Gongura Pachadi',
      price: 90,
      quantity: 8,
      description: 'Sour sorrel leaf chutney cooked with onions, garlic, and spices',
      seller: 'Andhra Spice Masters',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
    },
    {
      name: 'Hyderabadi Biryani',
      price: 180,
      quantity: 10,
      description: 'Aromatic basmati rice with tender mutton or chicken, layered with saffron and boiled eggs',
      seller: 'Hyderabad Royal Biryani',
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2088'
    },
    {
      name: 'Avakaya Pickle',
      price: 120,
      quantity: 20,
      description: 'Traditional mango pickle with mustard seeds, fenugreek and chili',
      seller: 'Grandma\'s Pickles',
      image: 'https://images.unsplash.com/photo-1564415075616-e1a3b800fc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      name: 'Pappu Charu',
      price: 50,
      quantity: 15,
      description: 'Lentil soup with tamarind, drumsticks, and traditional spices',
      seller: 'Telugu Comfort Foods',
      image: 'https://images.unsplash.com/photo-1559847844-da226fd3d7ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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
