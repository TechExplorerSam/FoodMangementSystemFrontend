import React, { useState } from 'react';
import './CheckOut.css';
import InstructionModal from '../Components/InstructionModal';

const Checkout = ({ cart, setCart, goBack }) => {
  const [dineType, setDineType] = useState('Dine In');
  const [showModal, setShowModal] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: 'Divya Sigatapu',
    phone: '9109109109',
    address: 'Flat no: 301, SVR Enclave, Hyper Nagar',
  });
  const handleQuantity = (index, action) => {
    const newCart = [...cart];
    if (action === 'inc') newCart[index].quantity += 1;
    if (action === 'dec') {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else {
        newCart.splice(index, 1);
      }
    }
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getItemTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deliveryCharge = dineType === 'Take Away' ? 50 : 0;
  const tax = 5;
  const grandTotal = getItemTotal() + deliveryCharge + tax;

  return (
    <div className="checkout">
      <h3>Good evening</h3>
      <p>Place your order here</p>

      <div className="cart-items">
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={`/images/${item.image}`} alt={item.name} />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p>₹ {item.price}</p>
              <div className="qty-controls">
                <button onClick={() => handleQuantity(index, 'dec')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantity(index, 'inc')}>+</button>
              </div>
              <p onClick={() => setShowModal(true)} className="add-note">Add cooking instructions (optional)</p>
            </div>
            <button className="remove-btn" onClick={() => removeItem(index)}>❌</button>
          </div>
        ))}
      </div>

      <div className="dine-options">
        <button
          className={dineType === 'Dine In' ? 'active' : ''}
          onClick={() => setDineType('Dine In')}
        >
          Dine In
        </button>
        <button
          className={dineType === 'Take Away' ? 'active' : ''}
          onClick={() => setDineType('Take Away')}
        >
          Take Away
        </button>
      </div>

      <div className="cost-summary">
        <p>Item Total <span>₹{getItemTotal()}</span></p>
        <p>Delivery Charge <span>₹{deliveryCharge}</span></p>
        <p>Taxes <span>₹{tax}</span></p>
        <h4>Grand Total <span>₹{grandTotal}</span></h4>
      </div>
 <div className='form-header'>
          <h4>Your Details</h4>
          </div>
      <div className="your-details">
       <form>
       
        
        
        <label>
   
          <input
            type="text"
            value={customerDetails.name}
            onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
          />
        </label>
        <label>
        
          <input
            type="text"
            value={customerDetails.phone}
            onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
          />
        </label>
        
         
        
       </form>
       
       <div className="address-label">
<img src="/Location.png" alt="Address Icon" />
  <input
            type="text"
            value={customerDetails.address}
            onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
          />
         </div>
      </div>

      <button className="swipe-order-btn">➡️ Swipe to Order</button>

      {showModal && (
        <InstructionModal
          instructions={instructions}
          setInstructions={setInstructions}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Checkout;
