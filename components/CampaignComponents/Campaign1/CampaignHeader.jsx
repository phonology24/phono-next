import React, { useState } from 'react';
import '../../../styles/campaign/campaign1.css';
import BrandLogo from '../../BrandLogo';
import LeadForm from '../../LeadForm';
import LandingPageImage from '../../../public/Assets/cloud.png'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import EarbudsOutlinedIcon from '@mui/icons-material/EarbudsOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import '../../../styles/campaign/carousel.css'
import Image from 'next/image';
import EmblaCarousel from '../../CampaignComponents/Campaign1/carouselComps/Carousel'
import Autoplay from 'embla-carousel-autoplay';

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
                <div className="phono-img">
                    <a href='/'><BrandLogo height={36} /></a>
                </div>
                {/* <div className='button-campaign-div'>
                <button>Talk To An Expert &nbsp;  &rarr;</button>
            </div> */}
                <div className='twocards'>
                    <div className='cards left'>
                    <div className="button-div">
    <a href="https://www.phonology.io/unified-communication-providers">
        <button className='button-86'>UCaaS</button>
    </a>
    <a href="https://www.phonology.io/sip-trunk-providers">
        <button className='button-86'>SIP Trunk</button>
    </a>
    <a href="https://www.phonology.io/sip-trunk-providers">
        <button className='button-86'>Virtual Numbers</button> 
    </a>
    <a href="https://www.phonology.io/hosted-pbx-providers">
        <button className='button-86'>Hosted PBX</button>
    </a>
</div>

                        <h1>Trusted VoIP Communication for Small, Medium, and Large Enterprises.</h1>
                        <p>
                            Welcome to Phonology, where your business communication isn’t just better—it’s brilliant!
                          <br/>  Whether you’re a bold startup or a global enterprise, our VoIP solutions are built to power your success.
                         Ready to break away from the
                            ordinary and experience something extraordinary?
                            <br/>  Discover how Phonology is transforming the
                            way businesses connect. Let’s reimagine what’s possible together—your next level of
                            communication starts here. Dive in and see the difference today!
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
                        <button 
    className='button-85' 
    onClick={() => document.getElementById('campaign-form')?.scrollIntoView({ behavior: 'smooth' })}>
    Start your free trial &nbsp; {`\u2192`}
</button>

                            {/* <button>Contact An Expert</button> */}
                        </div>
                    </div>
                    <div className='cards right'>
                    <div id='campaign-form' className='form-frame lead-sheet'><LeadForm /></div>                        {/* <Image src={LandingPageImage} alt='phono-img' width={1000} height={1000} className='right-image' /> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default CampaignHeader;
