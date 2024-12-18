import React from "react";
import "../../styles/subhero.css";
import Image from "next/image";
import HeroImage from "../../public/Assets/home-hero.png"

const SubHero = () => {
    return (
        <div className="subhero-container">
            <div className="subhero-text">
                <h2>Why VoIP?</h2>
                <p>
                <b>Cost Efficiency and Scalability<br/></b>
                    VoIP reduces communication costs with affordable call rates and eliminates the need for expensive hardware. You will be able to easily scale your system as your business grows.<br/><br/>
                    <b>Flexibility and Mobility<br/></b>
                    VoIP lets your team work from anywhere, offering multi-device compatibility for seamless communication.<br/><br/>
                    <b>Advanced Features for Better Productivity<br/></b>
                    From call forwarding and voicemail-to-email to analytics and CRM integration, VoIP empowers businesses with tools to enhance efficiency and customer service.
                </p>
            </div>
            <div className="subhero-image">
                <Image
                    src={HeroImage}
                    alt="Placeholder"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
};

export default SubHero;
