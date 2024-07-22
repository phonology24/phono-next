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
        { id: 1, content: 'Lorem', icon:<AcUnitOutlinedIcon/> },
        { id: 2, content: 'Ipsum', icon:<AutoAwesomeMotionOutlinedIcon/> },
        { id: 3, content: 'Dolor', icon:<BlurOnOutlinedIcon/> },
        { id: 4, content: 'Sit', icon:<EqualizerOutlinedIcon/> },
        { id: 5, content: 'Amet', icon:<EarbudsOutlinedIcon/>  },
        { id: 6, content: 'Consectetur', icon:<AutorenewOutlinedIcon/>  }
    ]);

    return (
        <>
            <div className="phono-img">
                <a href='/'><Image src={logo} alt="phono-img" /></a>
            </div>
            <div className='button-campaign-div'>
                <button>Chat With An Expert &nbsp;  &rarr;</button>
            </div>
            <div className='twocards'>
                <div className='cards left'>
                    <h2>A Reliable VoIP based Phone System for SMBs and Enterprise</h2>
                    <p>A Reliable VoIP based Phone System for SMBs and Enterprise</p>
                    <div className='six-cards'>
                        {cards.map(card => (
                            <div key={card.id} className='cards1'>
                            {/* <div className="cards12as">sasdasdda</div>
                                <div className="cards12as">sasdasdda</div>
                                <div className="cards12as">sasdasdda</div> */}
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
        </>
    );
}

export default CampaignHeader;
