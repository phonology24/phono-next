import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/drawer.css'
import SignUpComponent from './SignUpComponent';
import RazorpayComponent from './Tariff-Card';
import Cart from './Cart';
import { jwtDecode } from 'jwt-decode';

const AnchorTemporaryDrawer = ({ isOpen, toggleDrawer, orderConfirmationData, selectedAmount, forwardCountry, forwardToNumber, sendDataToParent, userID }) => {
  const [amount, setAmount] = useState('');
  const [showPayment, setShowPayment] = useState(false)
  const [showSignupComponent, setShowSignupComponent] = useState(true)
  const [userName, setUserName] = useState('');
  const [localUserID, setLocalUserID] = useState(userID);

  const receiveDataFromSignUp = (data) => {
    sendDataToParent(data);
  };
  const handlePaymentToggle = () => {
    setShowPayment(!showPayment);
  };

  const handleToggleSignupComponent = (value) => {
    setShowSignupComponent(value);
  };

  const getTokens = () => {
    const tokens = localStorage.getItem('access_token');
    console.log(tokens)
    return tokens ? tokens : null;
  };

  useEffect(() => {
    const accessToken = getTokens();
    console.log(accessToken, "accessToken from useEffect");
    if (accessToken !== null) {
      setShowPayment(true);
      setShowSignupComponent(false);
      const decodedToken = jwtDecode(accessToken);
      console.log(decodedToken);
      setUserName(decodedToken.name);
      const userIdFromToken = decodedToken.id;
      if (userIdFromToken){
        setLocalUserID(userIdFromToken);
      }
    }
  }, []);


  useEffect(() => {
    if (userID) {
      setLocalUserID(userID);
    }
  }, [userID]);

  return (
    <div className='drawer'>
      <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer} style={{ overflowX: 'hidden' }}>
        <div className="cartDiv">
          <button className="closeIconDrawer" onClick={toggleDrawer}><CloseIcon /></button>
          <h3 className='cartHeading'>Cart</h3>
          <p className='numbersLine'>Your Number(s) : </p>
        </div>
        <Cart orderConfirmationData={orderConfirmationData} selectedAmount={selectedAmount} forwardCountry={forwardCountry} forwardToNumber={forwardToNumber}
        />
       {showPayment &&  <div className='userDiv'><p>Logged In As <span id='username'>{userName}</span> </p></div>}
        {showSignupComponent && <SignUpComponent showPayment={showPayment} orderConfirmationData={orderConfirmationData} togglePayment={handlePaymentToggle} sendDataToParent={receiveDataFromSignUp}  setUserName={setUserName} toggleSignupComponent={handleToggleSignupComponent} />}
        {showPayment && <RazorpayComponent orderConfirmationData={orderConfirmationData} selectedAmount={selectedAmount} userID={localUserID} />}
      </Drawer>
    </div>
  );

}

export default AnchorTemporaryDrawer;
