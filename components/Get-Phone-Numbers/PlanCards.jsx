import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../styles/plancard.css'

const PlanCards = ({ onSelect, toggleDrawer }) => {
  const generateRandomMinutes = () => {
    return Math.floor(Math.random() * 900) + 100;
  };

  const handleSelect1 = (amount) => {
    onSelect(amount);
    toggleDrawer(true)
    console.log(amount)
  };

   return (
    <div className="cardsContainer">
    <div className="planCard">
      <div className="cardTitle">STANDARD</div>
      <div className="cardContent">
        <div className="price">₹96.79/Month</div>
        <div className="minutes">{generateRandomMinutes()} Minutes*</div>
        <div className="additionalMinutes">₹0.68 / additional minutes</div>
        <button className="selectButton" onClick={()=>{handleSelect1(99.7)}}>
          Select
        </button>
      </div>
    </div>
    <div className="planCard">
      <div className="cardTitle">STANDARD</div>
      <div className="cardContent">
        <div className="price">₹96.79/Month</div>
        <div className="minutes">{generateRandomMinutes()} Minutes*</div>
        <div className="additionalMinutes">₹0.68 / additional minutes</div>
        <button className="selectButton" onClick={()=>{handleSelect1(99.7)}}>
          Select
        </button>
      </div>
    </div>
    <div className="planCard">
      <div className="cardTitle">STANDARD</div>
      <div className="cardContent">
        <div className="price">₹96.79/Month</div>
        <div className="minutes">{generateRandomMinutes()} Minutes*</div>
        <div className="additionalMinutes">₹0.68 / additional minutes</div>
        <button className="selectButton" onClick={()=>{handleSelect1(99.7)}}>
          Select
        </button>
      </div>
    </div>
    <div className="planCard">
      <div className="cardTitle">STANDARD</div>
      <div className="cardContent">
        <div className="price">₹96.79/Month</div>
        <div className="minutes">{generateRandomMinutes()} Minutes*</div>
        <div className="additionalMinutes">₹0.68 / additional minutes</div>
        <button className="selectButton" onClick={()=>{handleSelect1(99.7)}}>
          Select
        </button>
      </div>
    </div>
    </div>
  );
};

export default PlanCards;