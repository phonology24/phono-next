import React, { useState, useEffect } from 'react';
import '../../styles/cart.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ orderConfirmationData, selectedAmount, forwardCountry, forwardToNumber }) => {
  const [cartItem, setCartItem] = useState(null);
  const [displayCartDiv, setDisplayCartDiv] = useState(false)
  const addToCart = (item) => {
    const keyValuePairs = item.split(', ');
    const extractedData = {};

    keyValuePairs.forEach(pair => {
      const [key, value] = pair.split(': ');
      const trimmedValue = value ? value.trim().replace(/^"(.*)"$/, '$1') : '';
      extractedData[key.trim()] = trimmedValue;
    });
    const { plan_id, UserID, Country, State, OTP, LoginOTP, RateCenter, DIDNumber, EmailID } = extractedData;

    if (extractedData.DIDNumber) {
      setCartItem(extractedData);
      setDisplayCartDiv(true);
      console.log(cartItem, "extracted Data")
    }
  };


  const removeFromCart = () => {
    setCartItem(null);
    setDisplayCartDiv(false);
  };

  useEffect(() => {
    if (orderConfirmationData) {
      addToCart(orderConfirmationData);
    }
  });

  return (
    <div id='Cart'>
      {displayCartDiv ? (
        <div id='cartDiv'>
          <div className="cartData">
            <p id='rateCenterName'><b>{cartItem.RateCenterName} </b></p>
            <p id='cartNumber'>{cartItem.DIDNumber} </p>
            <p id='cartAmount'> Total : <b> ₹ {selectedAmount}</b> /-</p>
            <p id='forward-text'>Forward To: {forwardCountry}</p>
            <p id='forward-text'>Forward To Number: {forwardToNumber}</p>
            <button onClick={removeFromCart} id='deleteBtn'><DeleteIcon /></button>
          </div>
        </div>
      ) : (
        <div className="phoneNumbersInCart">
          <p className='phoneNumbersP'> No Numbers Added To Cart.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
