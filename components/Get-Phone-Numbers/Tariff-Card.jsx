import React, { useState } from 'react';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
// import { Alert } from 'bootstrap';
import '../../styles/cart.css'
import { toast } from 'react-toastify';

const RazorpayComponent = ({ orderConfirmationData, selectedAmount, userID }) => {
  const [responseMessage, setResponseMessage] = useState('');
  const [paymentData, setPaymentData] = useState('');
  console.log(userID)
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const showRazorpay = async () => {
    const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Error");
      return;
    }
    let Data = {
      amount: selectedAmount * 100,
      id: userID,
      plan_id: 1
    };
    console.log("data", Data)
    Data.orderConfirmationData = orderConfirmationData;



    axios
      .post("https://api.phonology.io/payment/generate-order", Data)
      .then((response) => {
        console.log(paymentData)
        const options = {
          key: "rzp_test_MllPNQa2DVXCoU",
          amount: response.data.amount,
          currency: response.data.currency,
          name: "Phonology",
          description: "",
          image: "",
          order_id: response.data.order_id,
          handler: function (response) {
            console.log(Data)
            const orderConfirmationDataObject = Object.fromEntries(
              Data.orderConfirmationData.split(', ').map(entry => {
                const [key, value] = entry.split(': ');
                return [key.trim(), value];
              })
            )

            Data.orderConfirmationData = orderConfirmationDataObject;
            const data = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              hello: Data.amount, 
              plan_id: 1,
              name: "x",
              country: Data.orderConfirmationData.Country,
              state: Data.orderConfirmationData.State,
              ratecenter: Data.orderConfirmationData.RateCenter,
              password: "logim_3easycall",
              package: "DIDAPI::IDT",
              number: Data.orderConfirmationData.DIDNumber,
              iso_4217: "INR",
              login: "logim_easycall",
              id: userID,
            }

            console.log(data)
            axios
              .post("https://api.phonology.io/payment/validate-order", data, Data)
              .then((response) => {
                toast.success(response.data.message);
              })
              .catch((error) => {
                if (error.response.data.code === 2001) {
                  const errors = error.response.data.errors;
                  console.log(errors)
                } else {
                  alert(error.response.data.message);
                }
              })

          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })
      .catch((error) => {
        console.log(error)
        alert(
          "Unable to Process your request. Please try again later."
        );
      })
  };


  const handleFormSubmit = async () => {
    if (!selectedAmount) {
      console.error('Please select an amount option.');
      return;
    }

    try {
      let data = {
        amount: selectedAmount,
        id: orderConfirmationData.UserID,
        plan_id: 1
      };
      const response = await axios.post('https://api.phonology.io/payment/generate-order', data);
      console.log(response, "res");
      const responsemessage = response.data.message;
      setResponseMessage(responsemessage);
      setPaymentData(response.data.order);
    } catch (error) {
      console.error('Error submitting amount selection:', error);
    }
  };

  return (
    <div className="amount-cards-container">
      <button onClick={showRazorpay} id='razorpaybuttonComp'>Checkout</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default RazorpayComponent;