import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Georgia";

    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Buy {countryName} Phone Numbers Online in 4 Easy Steps:</h2>
                <p>Phonology makes it easy and affordable to buy phone numbers you need online. Set up your VoIP number service in four easy steps!</p>
            </div>
            
            <div className="steps-container">
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Choose Your Number Type</h2>
                        <p>Select between a local {countryName} phone number to establish a local presence or a toll-free number to make it easier for your customers to contact you without cost. Phonology offers options to fit your business needs.</p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Choose the Correct Plan for Your Business</h2>
                        <p>Explore our flexible pricing plans designed for businesses of all sizes. Whether you're just starting or already scaling, Phonology has the perfect plan to match your communication requirements.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Register & Complete the Simple Sign-Up Process</h2>
                        <p>Sign up with your business details and complete the quick and easy registration process. In just a few steps, you'll be ready to secure your {countryName} virtual number.</p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Personalize Your Number</h2>
                        <p>Once registered, activate your {countryName} number and configure features such as call forwarding, voicemail, and IVR. Our user-friendly platform ensures you can tailor your phone system to your exact business needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
