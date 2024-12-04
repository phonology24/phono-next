import React from "react";
import BackImage from "../../public/Assets/whatsappbusiness2.png";
import "../../styles/hostedphonenumbers.css";
import Image from "next/image";
const WhatsappBusinessTwoCards = () => {
    return (
        <div className="hosted-numbers-two-cards">
            <div className="card-hosted">
                <Image src={BackImage} alt="Card Image" />
            </div>
            <div className="card-hosted">
                <h2>
                    Transforming Communication Across Industries
                </h2>
                <p>
                    <b>Education</b>: Streamline student communication, automate notifications, and enhance engagement through instant updates and reminders.<br />
                    <b>Travel and Hospitality</b>: Simplify bookings, share itineraries, and provide real-time support for an unforgettable customer experience.<br />
                    <b>Healthcare</b>: Enable appointment scheduling, send health reminders, and provide timely patient support via secure messaging.<br />
                    <b>E-commerce</b>: Boost sales with instant order updates, personalized promotions, and quick customer support.<br />
                    <b>Sales and Marketing</b>: Drive conversions with targeted campaigns, lead follow-ups, and real-time communication.<br />
                    <b>Customer Support</b>: Deliver 24/7 support, automate FAQs, and resolve issues quickly with personalized assistance.<br />
                    <b>Real Estate</b>: Engage leads with property details, schedule viewings, and nurture prospects with tailored messaging.<br />

                </p>

            </div>
        </div>
    );
};

export default WhatsappBusinessTwoCards;
