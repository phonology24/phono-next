import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Slovakia";
  
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Get a {countryName} Phone Number in 4 Simple Steps</h2>
                <p>Phonology makes it easy and affordable to buy the phone numbers you need online. Set up your VoIP number service in four simple steps!</p>
            </div>
            
            <div className="steps-container">
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Choose Your Number Type</h2>
                        <p>Select between a local {countryName} phone number to create a strong local presence or a toll-free number to give your customers a cost-free way to contact your business. Phonology provides flexible options to meet your specific business requirements.</p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Pick a Plan That Suits Your Business</h2>
                        <p>Explore our range of tailored pricing plans designed to meet the needs of businesses of all sizes. Whether you’re a small startup or a large enterprise, Phonology has a plan that aligns with your communication goals.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Simple Sign-Up Process</h2>
                        <p>Register your business details and complete our fast, hassle-free registration process. You’ll be ready to activate your {countryName} virtual number in just a few minutes.</p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Number</h2>
                        <p>Once registered, activate your {countryName} phone number and personalize features like call forwarding, voicemail, and IVR. Phonology’s platform makes it easy to adjust your virtual phone system to suit your exact business needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
