import React, { useEffect, useState } from 'react';
import useRazorpay from "react-razorpay";

const PaymentComponent = (data) => {
    const [rzp, setRzp] = useState(null);
    const [Razorpay] = useRazorpay();

    useEffect(() => {
        if (Razorpay) {
            const options = {
                "key": "rzp_test_MllPNQa2DVXCoU",
                "amount": "50000",
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": "order_9A33XWu170gUtm",
                "callback_url": "",
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            setRzp(new Razorpay(options));
        }
    }, [Razorpay]); 
    const handleClick = (e) => {
        if (rzp) {
            rzp.open();
            e.preventDefault();
        }
    };

    return (
        <div>
            <button id="rzp-button1" onClick={handleClick}>Pay</button>
        </div>
    );
};

export default PaymentComponent;
