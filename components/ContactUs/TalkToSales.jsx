import React from 'react';
import '../../styles/contactus/talktosales.css';

const TalkToSales = () => {

    const contactData = [
        { country: "USA", number: "+1 123 456 7890", flagUrl: "https://flagcdn.com/w320/us.png" },
        { country: "UK", number: "+44 20 7946 0958", flagUrl: "https://flagcdn.com/w320/gb.png" },
        { country: "India", number: "+91 987 654 3210", flagUrl: "https://flagcdn.com/w320/in.png" },
        { country: "Australia", number: "+61 400 123 456", flagUrl: "https://flagcdn.com/w320/au.png" },
    ];

    return (
        <div className="contact-container">
            <h2 className='talkh2'>Talk to Sales</h2>
            <div className='contact-child'>   
                {contactData.map((contact, index) => (
                    <div className="contact-card" key={index}>
                        <img src={contact.flagUrl} alt={`${contact.country} flag`} className="flag" />
                              <div className='card-content'>                           
                        <h3>{contact.country}</h3>
                        <p>{contact.number}</p>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TalkToSales;
