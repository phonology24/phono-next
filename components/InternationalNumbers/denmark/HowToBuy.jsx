import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Denmark";
    
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Buy {countryName} Phone Numbers Online in 4 Simple Steps:</h2>
                <p>Phonology makes it easy and affordable to buy phone numbers you need online. Set up your VoIP number service in four easy steps!</p>
            </div>
            
            <div className="steps-container">
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Pick Your Number Type</h2>
                        <p>
                            Choose between a local {countryName} phone number to build a strong local presence or a toll-free number that allows your customers to reach you at no cost. Phonology offers options tailored to your business needs.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Select the Best Plan for Your Business</h2>
                        <p>
                            Select from our range of flexible pricing plans that are designed for businesses of all sizes. Whether you’re a small business or a growing enterprise, Phonology has the right plan to meet your communication requirements.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Register and Complete the Sign-Up Process</h2>
                        <p>
                            Simply register your business details, and in a matter of minutes, you’ll be on your way to securing your {countryName} virtual number. Our process is quick and hassle-free.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Number</h2>
                        <p>
                            Once you’ve registered, activate your {countryName} number and configure features such as call forwarding, voicemail, and IVR. Our user-friendly platform lets you customize your virtual phone system to fit your business requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
