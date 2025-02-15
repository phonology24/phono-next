import React from 'react';
import '../VoicemailFeaturesPage/FAQSection.css';
import chooseImg from "../../public/Assets/why.png"; // Importing the image
import Image from 'next/image';

const WhyUse = () => {
    return (
        <section className="faq-section">
            <div className="faq-content">
                {/* Left Side - Image */}
                <div className="faq-image">
                    <Image  src={chooseImg} alt="Why Choose Phonology" />
                </div>
                
                {/* Right Side - Text Content */}
                <div className="faq-container">
                    <h2 className="faq-question">
                        Why Choose Phonology’s Voice API?
                    </h2>
                    <p className="faq-answer">
                        Phonology’s Voice API sets itself apart by delivering a seamless integration experience, high performance, and robust tools. Here’s why businesses trust Phonology:
                    </p>
                    <ul className="faq-benefits-list">
                        <li><strong>Developer-Friendly:</strong> Simple SDKs and detailed documentation ensure quick integration of APIs, including voice-over APIs and phone call APIs.</li>
                        <li><strong>Global Reliability:</strong> Enjoy superior voice quality with 99.99% uptime.</li>
                        <li><strong>Advanced Features:</strong> Access innovative tools like AI voice APIs for smart call handling and sentiment analysis.</li>
                        <li><strong>Dedicated Support:</strong> Phonology’s 24/7 support ensures smooth implementation and ongoing operations.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyUse;
