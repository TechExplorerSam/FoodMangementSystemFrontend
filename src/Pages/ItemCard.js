import React from 'react';
import '../Pages/ItemCard.css';

const ItemCard = ({ item, cart, onAdd, onRemove }) => {
  const existing = cart.find(i => i.id === item.id);

  return (
    <div className="item-card">
     {/* <img src={`/${item.image}`} alt={item.name} /> */}
<img src={item.image} alt={item.name} />
      <div className="item-info">
        <h4>{item.name}</h4>
        <p>₹ {item.price}</p>
        {existing ? (
          <div className="counter">
            <button onClick={() => onRemove(item.id)}>-</button>
            <span>{existing.qty}</span>
            <button onClick={() => onAdd(item)}>+</button>
          </div>
        ) : (
          <button className="add-btn" onClick={() => onAdd(item)}>+</button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
