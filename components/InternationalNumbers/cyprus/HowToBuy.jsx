import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Cyprus";
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
                        <h2>Step 1: Choose Your Number Type</h2>
                        <p>
                            Select between a local Cyprus phone number to establish a local presence or a toll-free number to allow your customers to contact you at no cost. Phonology gives you both options tailored to your business needs.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Pick a Plan That Fits Your Business</h2>
                        <p>
                            Browse through our flexible pricing plans, tailored for businesses of all sizes. Whether you’re a small startup or a large corporation, we have a plan that suits your communication requirements.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Register & Complete the Sign-Up Process</h2>
                        <p>
                            Sign up with your business details and complete the quick and easy registration. Within a few minutes, you'll be on your way to securing your Cyprus virtual number.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Set Up Your Number</h2>
                        <p>
                            Once registered, activate your Cyprus number and configure important features like call forwarding, voicemail, and IVR. Our intuitive platform allows you to tailor your virtual phone system to your exact business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
