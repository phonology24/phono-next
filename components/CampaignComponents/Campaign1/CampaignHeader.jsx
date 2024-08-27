import React, { useState } from 'react';
import '../../../styles/campaign/campaign1.css';
import logo from '../../../public/Assets/logo.png';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import EarbudsOutlinedIcon from '@mui/icons-material/EarbudsOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Image from 'next/image';

const CampaignHeader = () => {
    const [cards, setCards] = useState([
        { id: 2, content: 'Global Connectivity', icon:<AutoAwesomeMotionOutlinedIcon/> },
        { id: 3, content: '24/7 Connectivity', icon:<BlurOnOutlinedIcon/> },
        { id: 1, content: 'High call quality', icon:<AcUnitOutlinedIcon/> },
        { id: 5, content: 'Advanced Features', icon:<EarbudsOutlinedIcon/>  },
        { id: 6, content: 'Instant Setup', icon:<AutorenewOutlinedIcon/>  },
        { id: 4, content: 'Virtual Numbers', icon:<EqualizerOutlinedIcon/> },
    ]);

    return (
        <>
        <div className="campaignHeaderContainer">
            <div className="phono-img">
                <a href='/'><Image src={logo} alt="phono-img" /></a>
            </div>
            {/* <div className='button-campaign-div'>
                <button>Talk To An Expert &nbsp;  &rarr;</button>
            </div> */}
            <div className='twocards'>
                <div className='cards left'>
                    <h1>Trusted VoIP Communication for Small, Medium, and Large Enterprises.</h1>
                    <p>                  
                          </p>
                    <div className='six-cards'>
                        {cards.map(card => (
                            <div key={card.id} className='cards1'>                    
                            <div className="card-icon11">{card.icon}</div>
                            {card.content}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='cards right'>
                    <iframe aria-label='SIGN UP FOR A FREE DEMO' frameBorder="0" src='https://forms.zohopublic.in/phonology/form/CampaignForm/formperma/ZSZ6bo7a2Bc7eKru1S4sKmXzI4dMI8Rp-9bOSbnInZ4' className='form-frame'></iframe>
                </div>
            </div>
            </div>
        </>
    );
}

export default CampaignHeader;
