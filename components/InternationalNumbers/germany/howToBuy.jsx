import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Germany";
  
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Buy {countryName} Phone Numbers Online in 4 Simple Steps:</h2>
                <p>
                    Phonology makes it easy and affordable to buy the phone numbers you need online.
                    Set up your VoIP number service in four easy steps!
                </p>
            </div>
            
            <div className="steps-container">
                {/* Step 1 */}
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Choose Your Number Type</h2>
                        <p>
                            Select a local {countryName} phone number to establish a local presence or opt for a toll-free number, allowing customers to contact your business at no cost. Phonology offers solutions tailored to fit your business needs.
                        </p>
                    </div>
                </div>
                
                {/* Step 2 */}
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Pick the Best Plan for Your Business</h2>
                        <p>
                            Explore our adaptable pricing plans, designed to meet the needs of businesses of any size. Whether you're a new startup or a large enterprise, Phonology has a plan that aligns with your communication goals.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Register & Complete the Easy Sign-Up Process</h2>
                        <p>
                            Simply register with your business information and complete the quick and seamless sign-up process. Within minutes, you’ll be ready to activate your {countryName} virtual number.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Number</h2>
                        <p>
                            Once registered, activate your {countryName} number and configure the features that matter most—such as call forwarding, voicemail, and IVR. Our platform allows you to customize your phone system to meet your specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
