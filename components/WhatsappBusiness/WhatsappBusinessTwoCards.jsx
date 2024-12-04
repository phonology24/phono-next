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
                    At Phonology, we know every industry has unique communication needs,
                    so we designed Watel to adapt to your business. Whether you’re
                    in e-commerce, offering real-time order updates and personalized
                    promotions, or in healthcare, simplifying appointment scheduling
                    and patient follow-ups, Watel ensures seamless, secure, and efficient interactions.
                    <br />
                    From education, and enhancing learning with interactive updates, to banking,
                    providing real-time alerts and support, and retailer logistics, optimizing
                    promotions and shipment tracking, Watel is your trusted partner. Let us
                    help you deliver exceptional customer experiences that drive engagement,
                    loyalty, and success in your industry.

                </p>

            </div>
        </div>
    );
};

export default WhatsappBusinessTwoCards;
