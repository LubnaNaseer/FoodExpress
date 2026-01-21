
import React, { useState, useEffect } from 'react';
import { 
  Search, ShoppingCart, Menu, X, Star, Clock,  
  Heart, Plus, Minus, Trash2, ShoppingBag, Truck, 
  Shield, Gift, Users, Phone, Mail, MapPin, Facebook, 
  Twitter, Instagram, Youtube, CreditCard
} from 'lucide-react';
import "./App.css"

import heroBg from './assets/beef-brgur.jpg';
import pizzaImg from './assets/cheespizza.jpg';
import burgerImg from './assets/beef-brgur.jpg';
import biryaniImg from './assets/Biryani.jpg';
import saladImg from './assets/salad.jpg';
import pastaImg from './assets/Pasta.jpg';
import wingsImg from './assets/Wings.jpg';
import cakeImg from './assets/cake.jpg';
import juiceImg from './assets/cold-coffee.jpg';
import salmonImg from './assets/grilled.jpg';
import wrapImg from './assets/wrap.jpg';
import icecreamImg from './assets/icecream.jpg';
import chef1Img from './assets/chef1.jpg';
import chef2Img from './assets/chef2.jpg';
import chef3Img from './assets/chef3.jpg';
import customer1Img from './assets/1gril.jpg';
import customer2Img from './assets/boy2.jpg';
import customer3Img from './assets/gril3.jpg';

function App() {
  // ===== STATE MANAGEMENT =====
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [favorites, setFavorites] = useState([1, 3, 7]);

  // ===== DATA WITH IMPORTED IMAGES =====
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "pizza",
      price: 12.99,
      rating: 4.8,
      prepTime: "25 min",
      calories: 285,
      image: pizzaImg, // Direct imported image
      popular: true,
      description: "Classic pizza with fresh mozzarella and basil"
    },
    {
      id: 2,
      name: "Cheese Burger",
      category: "burger",
      price: 8.99,
      rating: 4.5,
      prepTime: "15 min",
      calories: 354,
      image: burgerImg, // Direct imported image
      popular: true,
      description: "Juicy beef patty with melted cheese"
    },
    {
      id: 3,
      name: "Chicken Biryani",
      category: "rice",
      price: 14.99,
      rating: 4.9,
      prepTime: "30 min",
      calories: 420,
      image: biryaniImg, // Direct imported image
      popular: false,
      description: "Fragrant rice with spiced chicken"
    },
    {
      id: 4,
      name: "Caesar Salad",
      category: "salad",
      price: 9.99,
      rating: 4.3,
      prepTime: "10 min",
      calories: 180,
      image: saladImg, // Direct imported image
      popular: false,
      description: "Fresh romaine with Caesar dressing"
    },
    {
      id: 5,
      name: "Pasta Carbonara",
      category: "pasta",
      price: 13.99,
      rating: 4.7,
      prepTime: "20 min",
      calories: 320,
      image: pastaImg, // Direct imported image
      popular: false,
      description: "Creamy pasta with bacon and eggs"
    },
    {
      id: 6,
      name: "Chicken Wings",
      category: "appetizer",
      price: 11.99,
      rating: 4.6,
      prepTime: "18 min",
      calories: 290,
      image: wingsImg, // Direct imported image
      popular: true,
      description: "Crispy wings with BBQ sauce"
    },
    {
      id: 7,
      name: "Chocolate Cake",
      category: "dessert",
      price: 6.99,
      rating: 4.9,
      prepTime: "5 min",
      calories: 450,
      image: cakeImg, // Direct imported image
      popular: false,
      description: "Rich chocolate layered cake"
    },
    {
      id: 8,
      name: "Fresh Juice",
      category: "drinks",
      price: 4.99,
      rating: 4.4,
      prepTime: "3 min",
      calories: 120,
      image: juiceImg, // Direct imported image
      popular: false,
      description: "Freshly squeezed orange juice"
    },
    {
      id: 9,
      name: "Grilled Salmon",
      category: "seafood",
      price: 18.99,
      rating: 4.8,
      prepTime: "22 min",
      calories: 310,
      image: salmonImg, // Direct imported image
      popular: false,
      description: "Atlantic salmon with lemon butter"
    },
    {
      id: 10,
      name: "Veggie Wrap",
      category: "wrap",
      price: 7.99,
      rating: 4.2,
      prepTime: "12 min",
      calories: 240,
      image: wrapImg, // Direct imported image
      popular: false,
      description: "Fresh vegetables in whole wheat wrap"
    },
    {
      id: 11,
      name: "Ice Cream",
      category: "dessert",
      price: 5.99,
      rating: 4.7,
      prepTime: "2 min",
      calories: 210,
      image: icecreamImg, // Direct imported image
      popular: true,
      description: "Vanilla ice cream with chocolate syrup"
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️', color: 'bg-gray-100' },
    { id: 'pizza', name: 'Pizza', icon: '🍕', color: 'bg-red-50' },
    { id: 'burger', name: 'Burger', icon: '🍔', color: 'bg-yellow-50' },
    { id: 'rice', name: 'Rice', icon: '🍚', color: 'bg-orange-50' },
    { id: 'salad', name: 'Salad', icon: '🥗', color: 'bg-green-50' },
    { id: 'pasta', name: 'Pasta', icon: '🍝', color: 'bg-pink-50' },
    { id: 'dessert', name: 'Dessert', icon: '🍰', color: 'bg-purple-50' },
    { id: 'drinks', name: 'Drinks', icon: '🥤', color: 'bg-blue-50' },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      comment: "Best food delivery service! Always fresh and on time.",
      rating: 5,
      image: customer1Img // Imported image
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Regular Customer",
      comment: "Their pizza is amazing! I order every Friday.",
      rating: 5,
      image: customer2Img // Imported image
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Health Enthusiast",
      comment: "Fresh salads and healthy options. Love it!",
      rating: 4,
      image: customer3Img // Imported image
    }
  ];

  const chefs = [
    {
      id: 1,
      name: "Chef Marco",
      specialty: "Italian Cuisine",
      experience: "15 years",
      image: chef1Img // Imported image
    },
    {
      id: 2,
      name: "Chef Sarah",
      specialty: "Asian Fusion",
      experience: "12 years",
      image: chef2Img // Imported image
    },
    {
      id: 3,
      name: "Chef David",
      specialty: "BBQ Master",
      experience: "10 years",
      image: chef3Img // Imported image
    }
  ];

  // ===== FUNCTIONS =====
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // ===== FILTER LOGIC =====
  useEffect(() => {
    let filtered = menuItems;
    
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    setFilteredItems(filtered);
  }, [searchQuery, selectedCategory]);

  // ===== COMPONENTS =====
  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 animate-slide-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍕</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Food<span className="text-red-500">Express</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Menu', 'Categories', 'Offers', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-slide-down">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search food..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              
              {['Home', 'Menu', 'Categories', 'Offers', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-right">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Taste The <span className="text-red-500">Difference</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Order delicious food from the best restaurants in town. 
              Fresh ingredients, authentic flavors, delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Order Now</span>
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-300">
                View Specials
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { number: '500+', label: 'Happy Customers', emoji: '😊' },
                { number: '50+', label: 'Expert Chefs', emoji: '👨‍🍳' },
                { number: '100+', label: 'Menu Items', emoji: '🍽️' }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="text-center animate-fade-in bg-white p-4 rounded-2xl shadow-lg"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Using Imported Image */}
          <div className="relative animate-slide-left">
            <div className="relative">
              {/* Imported hero image */}
              <img 
                src={heroBg} 
                alt="Delicious Food"
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Truck className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Fast Delivery</div>
                    <div className="text-gray-600">30 min guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const CategoriesSection = () => (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Food <span className="text-red-500">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our wide variety of food categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat.id
                  ? 'bg-red-500 text-white shadow-xl scale-105'
                  : 'bg-gray-50 hover:bg-gray-100'
              } animate-fade-in`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="text-3xl mb-3">{cat.icon}</span>
              <span className="font-semibold">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  const MenuSection = () => (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-500">Menu</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of fresh and tasty dishes
          </p>
        </div>

        <div className="mb-12 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search your favorite food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 shadow-sm transition-all duration-300"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-red-500 text-white border-red-500 shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Imported Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold animate-pulse">
                    Popular
                  </div>
                )}
                
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-red-500">${item.price}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{item.rating}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{item.prepTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                
                      <span className="text-gray-600">{item.calories} cal</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 active:scale-95 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-300 flex items-center justify-center gap-2"
                >
                  <span>Add to Cart</span>
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600">Try a different search or category</p>
          </div>
        )}
      </div>
    </section>
  );

  const SpecialOffers = () => (
    <section id="offers" className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Special <span className="text-yellow-300">Offers</span></h2>
          <p className="text-red-100 max-w-2xl mx-auto">Limited time deals you don't want to miss!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Family Pack",
              desc: "Get 30% off on family meals",
              icon: <Users className="w-12 h-12" />,
              color: "bg-yellow-500"
            },
            {
              title: "Free Delivery",
              desc: "On orders above $25",
              icon: <Truck className="w-12 h-12" />,
              color: "bg-green-500"
            },
            {
              title: "Combo Deal",
              desc: "Burger + Fries + Drink for $12.99",
              icon: <Gift className="w-12 h-12" />,
              color: "bg-blue-500"
            }
          ].map((offer, idx) => (
            <div 
              key={idx} 
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className={`${offer.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {offer.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
              <p className="text-red-100 mb-6">{offer.desc}</p>
              <button className="bg-white text-red-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Grab Offer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-red-500">Customers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Imported Customer Image */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ChefsSection = () => (
    <section id="chefs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-red-500">Chefs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented chefs create magic in the kitchen every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, idx) => (
            <div 
              key={chef.id} 
              className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="relative mb-6">
                {/* Imported Chef Image */}
                <img 
                  src={chef.image} 
                  alt={chef.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl"
                />
                <div className="absolute bottom-0 right-1/4 bg-red-500 text-white px-4 py-2 rounded-full">
                  {chef.experience}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{chef.name}</h3>
              <p className="text-red-500 font-semibold mb-4">{chef.specialty}</p>
              <p className="text-gray-600">Passionate about creating delicious memories</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FeaturesSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Truck className="w-10 h-10" />, title: "Fast Delivery", desc: "30 min guaranteed" },
            { icon: <Shield className="w-10 h-10" />, title: "Food Safety", desc: "100% hygienic" },
            { icon: <CreditCard className="w-10 h-10" />, title: "Easy Payment", desc: "Multiple options" },
            { icon: <Gift className="w-10 h-10" />, title: "Daily Offers", desc: "Discounts every day" }
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-red-50 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-red-500 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="font-bold">🍕</span>
              </div>
              <span className="text-2xl font-bold">Food<span className="text-red-500">Express</span></span>
            </div>
            <p className="text-gray-400 mb-6">Delivering happiness to your doorstep since 2015.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Contact', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              {['Pizza', 'Burger', 'Pasta', 'Salad', 'Desserts', 'Drinks'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@foodexpress.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>123 Food Street, New York</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const CartComponent = () => {
    if (!isCartOpen) return null;

    return (
      <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
          onClick={() => setIsCartOpen(false)}
        ></div>

        <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-500 animate-slide-in-right">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                {cartItems.length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {cartItems.length} items
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 animate-fade-in"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        {/* Imported Image in Cart */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify between items-start mb-2">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <span className="font-bold text-red-500">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">${item.price} each</p>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-6 animate-slide-up">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-xl font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Delivery</span>
                    <span className="text-gray-800">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-red-500">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-red-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 active:scale-95 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Checkout Now
                    </button>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="w-full mt-3 py-3 border-2 border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  // ===== ANIMATION STYLES =====
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideRight {
      from { transform: translateX(-50px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideLeft {
      from { transform: translateX(50px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInRight {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
    .animate-slide-down { animation: slideDown 0.5s ease-out; }
    .animate-slide-up { animation: slideUp 0.5s ease-out; }
    .animate-slide-right { animation: slideRight 0.5s ease-out; }
    .animate-slide-left { animation: slideLeft 0.5s ease-out; }
    .animate-slide-in-right { animation: slideInRight 0.4s ease-out; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-bounce { animation: bounce 1s infinite; }
    .animate-pulse { animation: pulse 2s infinite; }
  `;

  // ===== MAIN RENDER =====
  return (
    <div className="min-h-screen bg-white">
      <style>{animationStyles}</style>

      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <MenuSection />
      <SpecialOffers />
      <TestimonialsSection />
      <ChefsSection />
      <FeaturesSection />
      <Footer />
      <CartComponent />
    </div>
  );
}

export default App;