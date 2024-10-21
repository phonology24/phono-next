import React from 'react';
import '../../../styles/howtobuy.css'; // Ensure your styles are in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Netherlands"; // Declaring the country name for consistent use

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
                {/** Step 1 */}
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Select Your Number Type</h2>
                        <p>
                            Explore the available options and choose the {countryName} phone number that best suits your needs—local, toll-free, or mobile.
                        </p>
                    </div>
                </div>
                
                {/** Step 2 */}
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Choose a Plan of Your Choice</h2>
                        <p>
                            Take up a pricing plan that aligns with your budget and call volume requirements.
                        </p>
                    </div>
                </div>

                {/** Step 3 */}
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Sign Up & Complete Registration</h2>
                        <p>
                            Create an account and provide the necessary business or personal details to complete the registration process.
                        </p>
                    </div>
                </div>

                {/** Step 4 */}
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Configure</h2>
                        <p>
                            After purchase, your {countryName} phone number will be activated instantly. Customize settings like call forwarding, voicemail, and more to start using your number.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
