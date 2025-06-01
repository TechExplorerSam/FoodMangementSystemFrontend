import React, { useState } from 'react';
import ItemCard from './ItemCard';
import './Menu.css';

const mockItems = [
  { id: 1, name: 'Classic Burger', category: 'Burger', price: 120, image: 'classicburger.png' },
  { id: 2, name: 'Cheese Burger', category: 'Burger', price: 140, image: 'cheeseburger.png' },
  { id: 3, name: 'Capricciosa', category: 'Pizza', price: 200, image: 'capricciosa.png' },
  { id: 4, name: 'Sicilian', category: 'Pizza', price: 150, image: 'sicilian.png' },
  { id: 5, name: 'Cola', category: 'Drink', price: 60, image: 'cola.png' },
  { id: 6, name: 'French Fries', category: 'French_fries', price: 80, image: 'fries.png' },
  { id: 7, name: 'Green Salad', category: 'Veggies', price: 100, image: 'salad.png' },
  { id: 9, name: 'Veggie Pizza', category: 'Pizza', price: 170, image: 'veggiepizza.png' },
  { id: 10, name: 'Pepperoni Pizza', category: 'Pizza', price: 220, image: 'pepperoni_pizza.png' },
  { id: 11, name: 'Iced Tea', category: 'Drink', price: 50, image: 'iced_tea.png' },
  { id: 12, name: 'Garlic Bread', category: 'French_fries', price: 90, image: 'garlic_bread.png' },
  { id: 13, name: 'Caesar Salad', category: 'Veggies', price: 110, image: 'caesar_salad.png' },
  { id: 14, name: 'Spicy Chicken Burger', category: 'Burger', price: 160, image: 'spicy_chicken_burger.png' },
  { id: 15, name: 'Veggie Delight Pizza', category: 'Pizza', price: 180, image: 'veggie_delight_pizza.png' },
  { id: 16, name: 'Lemonade', category: 'Drink', price: 70, image: 'lemonade.png' },
  { id: 17, name: 'Onion Rings', category: 'French_fries', price: 85, image: 'onion_rings.png' },
  { id: 18, name: 'Greek Salad', category: 'Veggies', price: 120, image: 'greek_salad.png' },
  { id: 19, name: 'Chicken Fajita', category: 'Burger', price: 170, image: 'chicken_fajita.png' },
  { id: 20, name: 'Chicken Pizza', category: 'Pizza', price: 210, image: 'chicken_pizza.png' },
  { id: 21, name: 'Mango Smoothie', category: 'Drink', price: 80, image: 'mango_smoothie.png' },
  { id: 22, name: 'Sweet Potato Fries', category: 'French_fries', price: 95, image: 'sweet_potato_fries.png' },
  { id: 23, name: 'Avocado Salad', category: 'Veggies', price: 130, image: 'avocado_salad.png' },
  { id: 24, name: 'Double Cheese Burger', category: 'Burger', price: 180, image: 'double_cheese_burger.png' },
  { id: 25, name: 'BBQ Chicken Pizza', category: 'Pizza', price: 230, image: 'bbq_chicken_pizza.png' },
  { id: 26, name: 'Fruit Punch', category: 'Drink', price: 75, image: 'fruit_punch.png' },
  { id: 27, name: 'Loaded Nachos', category: 'French_fries', price: 110, image: 'loaded_nachos.png' },
  { id: 28, name: 'Cobb Salad', category: 'Veggies', price: 140, image: 'cobb_salad.png' },
  { id: 29, name: 'Chicken Tikka Burger', category: 'Burger', price: 190, image: 'chicken_tikka_burger.png' },
  { id: 30, name: 'Veg Supreme Pizza', category: 'Pizza', price: 200, image: 'veg_supreme_pizza.png' },
  { id: 31, name: 'Iced Coffee', category: 'Drink', price: 65, image: 'iced_coffee.png' },
  { id: 32, name: 'Curly Fries', category: 'French_fries', price: 100, image: 'curly_fries.png' },
  { id: 33, name: 'Caprese Salad', category: 'Veggies', price: 115, image: 'caprese_salad.png' },
  { id: 34, name: 'Fish Burger', category: 'Burger', price: 200, image: 'fish_burger.png' },
  { id: 35, name: 'Hawaiian Pizza', category: 'Pizza', price: 220, image: 'hawaiian_pizza.png' },
  { id: 36, name: 'Sparkling Water', category: 'Drink', price: 55, image: 'sparkling_water.png' },
  { id: 37, name: 'Cheesy Fries', category: 'French_fries', price: 120, image: 'cheesy_fries.png' },
  { id: 38, name: 'Spinach Salad', category: 'Veggies', price: 125, image: 'spinach_salad.png' },
  { id: 39, name: 'BBQ Burger', category: 'Burger', price: 210, image: 'bbq_burger.png' },
  { id: 40, name: 'Meat Lovers Pizza', category: 'Pizza', price: 240, image: 'meat_lovers_pizza.png' },
  { id: 41, name: 'Herbal Tea', category: 'Drink', price: 60, image: 'herbal_tea.png' },
  { id: 42, name: 'Truffle Fries', category: 'French_fries', price: 130, image: 'truffle_fries.png' },
  { id: 43, name: 'Roasted Veggie Salad', category: 'Veggies', price: 135, image: 'roasted_veggie_salad.png' },



];

const Menu = ({ cart, setCart, goToCheckout }) => {
    const [category, setCategory] = useState('Pizza');

 const handleAdd = (item) => {
  const exists = cart.find(i => i.id === item.id);
  if (exists) {
    setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
};
  const filteredItems = mockItems.filter(item => item.category === category);



  const handleRemove = (itemId) => {
    const existing = cart.find(i => i.id === itemId);
    if (existing.qty === 1) {
      setCart(cart.filter(i => i.id !== itemId));
    } else {
      setCart(cart.map(i => i.id === itemId ? { ...i, qty: i.qty - 1 } : i));
    }
  };

  return (
    <div className="menu-container">
      <h2>Good evening</h2>
      <p>Place you order here</p>
    <div className="search-container">
  <input type="text" className="search-bar" placeholder="Search..." />
 <img src="/search.png" alt="Search" className="search-icon" />

</div>

      <div className="category-buttons">
        {['Burger', 'Pizza', 'Drink', 'French_fries', 'Veggies'].map((c, idx) => (
          <>
         
           <button
            key={idx}
            className={c === category ? 'active' : ''}
            onClick={() => setCategory(c)}
          >
            <img src={`/${c.toLowerCase()}.png`} alt={c} className="category-icon" /> {c}
          </button>
          </>
         
        ))}
      </div>
      <h3>Pizza</h3>
      <div className="items-grid">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} cart={cart} onAdd={handleAdd} onRemove={handleRemove} />
        ))}
      </div>
      <button className="next-btn" onClick={goToCheckout}>Next</button>
    </div>
  );
};

export default Menu;
