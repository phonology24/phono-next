import React from 'react';
import '../../styles/hostedphonenumbers.css';
import MyGlobe from '../MyGlobe';
import HostedPBXIMG from '../../public/Assets/whatsappbusinesshero.png'
import Image from 'next/image';

const WhatsappBusinessHero = () => {
    return (
        <div className="hosted-phone-numbers">
            <div className="hosted-phone-numbers-inner constrain" style={{ paddingTop: '90px' }}>

                <div className="hosted-phone-numbers-grid hosted-phone-numbers-grid-middle hosted-phone-numbers-grid-gap-large">
                    <div className="hosted-phone-numbers-content">
                        <div className="hosted-phone-numbers-content-inner">
                            <h1 className="hosted-phone-numbers-display-4">
                                <span className="gradient-ltr">
                                    <br />
                                    Transform Conversations with WhatsApp Business API            
                                                            </span>
                             
                            </h1>
                            <p className="hosted-phone-numbers-large">
                            Watel by Phonology is an advanced WhatsApp Business API platform designed to
                                revolutionize customer engagement. Empower your business with seamless
                                messaging, automated workflows, and real-time support, all through
                                the trusted WhatsApp interface. Watel enables personalized, secure,
                                and scalable communication, enhancing customer experiences and
                                driving business growth. Simplify interactions and build
                                stronger connections with Watel.
                            </p>
                            <ul className="hosted-phone-numbers-list">
                            </ul>
                        </div>
                    </div>
                    <div className="hosted-phone-numbers-photo">
                        <div className="hosted-phone-numbers-photo-inner">
                            {/* <MyGlobe /> */}
                            <Image src={HostedPBXIMG} height={500} width={500} alt="hosted-pbx-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WhatsappBusinessHero;
