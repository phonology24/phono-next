import React, { useState } from 'react';
import '../../../styles/campaign/campaign1.css';
import logo from '../../../public/Assets/logo.png';
import LandingPageImage from '../../../public/Assets/cloud.png'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import EarbudsOutlinedIcon from '@mui/icons-material/EarbudsOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Image from 'next/image';

const CampaignHeader = () => {
    const [cards, setCards] = useState([
        { id: 2, content: 'Global Connectivity', icon: <AutoAwesomeMotionOutlinedIcon /> },
        { id: 3, content: '24/7 Connectivity', icon: <BlurOnOutlinedIcon /> },
        { id: 1, content: 'High call quality', icon: <AcUnitOutlinedIcon /> },
        { id: 5, content: 'Advanced Features', icon: <EarbudsOutlinedIcon /> },
        { id: 6, content: 'Instant Setup', icon: <AutorenewOutlinedIcon /> },
        { id: 4, content: 'Virtual Numbers', icon: <EqualizerOutlinedIcon /> },
    ]);

    return (
        <>
            <div className="campaignHeaderContainer">
                {/* <div className="phono-img">
                    <a href='/'><Image src={logo} alt="phono-img" /></a>
                </div> */}
                {/* <div className='button-campaign-div'>
                <button>Talk To An Expert &nbsp;  &rarr;</button>
            </div> */}
                <div className='twocards'>
                    <div className='cards left'>
                        <div className="button-div">
                    <button className='button-86'>Voice</button>
                    <button className='button-86'>Use Cases</button>
                    <button className='button-86'>SIP Trunking</button>
                    <button className='button-86'>IVR</button>
                    {/*  <button>button 1</button> */}
                    </div>
                        <h1>Trusted VoIP Communication for Small, Medium, and Large Enterprises.</h1>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        {/* <div className='six-cards'>
                        {cards.map(card => (
                            <div key={card.id} className='cards1'>                    
                            <div className="card-icon11">{card.icon}</div>
                            {card.content}
                            </div>
                        ))}
                    </div> */}
                    <div className="cta-buttons">
                    <button className='button-85'>Try it for free &nbsp; {`\u2192`}</button>
                    {/* <button>Contact An Expert</button> */}
                    </div>
                    </div>
                    <div className='cards right'>
                        {/* <iframe aria-label='SIGN UP FOR A FREE DEMO' frameBorder="0" src='https://forms.zohopublic.in/phonology/form/CampaignForm/formperma/ZSZ6bo7a2Bc7eKru1S4sKmXzI4dMI8Rp-9bOSbnInZ4' className='form-frame'></iframe> */}
                        <Image src={LandingPageImage} alt='phono-img' width={1000} height={1000} className='right-image' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampaignHeader;
