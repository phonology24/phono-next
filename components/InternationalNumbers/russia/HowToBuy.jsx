import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Russia";
  
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Get a {countryName} Phone Number in 4 Steps:</h2>
                <p>Phonology makes it easy and affordable to buy phone numbers online. Set up your VoIP number service in four easy steps!</p>
            </div>
            
            <div className="steps-container">
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1: Select Your Number Type" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Select Your Number Type</h2>
                        <p>
                            Choose between a local {countryName} phone number to establish a stronger local presence or opt for a toll-free number to provide your customers with a convenient, cost-free way to reach your business.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2: Choose a Plan" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Pick the Right Plan for Your Business</h2>
                        <p>
                            Explore our wide range of pricing plans, tailored for businesses of all sizes. Whether you’re a startup or a large corporation, Phonology has a plan that fits your needs.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3: Complete Registration" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Registration Process</h2>
                        <p>
                            Sign up with your business details and complete our quick, easy sign-up process. In just a few minutes, your {countryName} virtual number will be ready to go live.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4: Activate & Customize" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Number</h2>
                        <p>
                            Once registered, you can activate your {countryName} phone number and set up the features you need, like call forwarding, voicemail, and IVR. Phonology’s intuitive platform allows you to easily tailor your phone system to suit your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
