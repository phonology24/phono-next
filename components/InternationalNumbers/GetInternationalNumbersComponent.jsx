import React from 'react';
import '../../styles/InternationalNumbers/allCountries.css';
import Image from 'next/image';

const phoneNumbers = {
  Europe: [
    { country: 'Austria', path: '/austria-virtual-phone-number', flag: 'https://flagsapi.com/AT/flat/64.png' },
    { country: 'Belgium', path: '/belgium-virtual-phone-number', flag: 'https://flagsapi.com/BE/flat/64.png' },
    { country: 'Bulgaria', path: '/bulgaria-virtual-phone-number', flag: 'https://flagsapi.com/BG/flat/64.png' },
    { country: 'Croatia', path: '/croatia-virtual-phone-number', flag: 'https://flagsapi.com/HR/flat/64.png' },
    { country: 'Cyprus', path: '/cyprus-virtual-phone-number', flag: 'https://flagsapi.com/CY/flat/64.png' },
    { country: 'Czech Republic', path: '/czech-republic-virtual-phone-number', flag: 'https://flagsapi.com/CZ/flat/64.png' },
    { country: 'Denmark', path: '/denmark-virtual-phone-number', flag: 'https://flagsapi.com/DK/flat/64.png' },
    { country: 'Estonia', path: '/estonia-virtual-phone-number', flag: 'https://flagsapi.com/EE/flat/64.png' },
    { country: 'Finland', path: '/finland-virtual-phone-number', flag: 'https://flagsapi.com/FI/flat/64.png' },
    { country: 'France', path: '/france-virtual-phone-number', flag: 'https://flagsapi.com/FR/flat/64.png' },
    { country: 'Georgia', path: '/georgia-virtual-phone-number', flag: 'https://flagsapi.com/GE/flat/64.png' },
    { country: 'Germany', path: '/germany-virtual-phone-number', flag: 'https://flagsapi.com/DE/flat/64.png' },
    { country: 'Greece', path: '/greece-virtual-phone-number', flag: 'https://flagsapi.com/GR/flat/64.png' },
    { country: 'Hungary', path: '/hungary-virtual-phone-number', flag: 'https://flagsapi.com/HU/flat/64.png' },
    { country: 'Iceland', path: '/iceland-virtual-phone-number', flag: 'https://flagsapi.com/IS/flat/64.png' },
    { country: 'Ireland', path: '/ireland-virtual-phone-number', flag: 'https://flagsapi.com/IE/flat/64.png' },
    { country: 'Italy', path: '/italy-virtual-phone-number', flag: 'https://flagsapi.com/IT/flat/64.png' },
    { country: 'Latvia', path: '/latvia-virtual-phone-number', flag: 'https://flagsapi.com/LV/flat/64.png' },
    { country: 'Luxembourg', path: '/luxembourg-virtual-phone-number', flag: 'https://flagsapi.com/LU/flat/64.png' },
    { country: 'Malta', path: '/malta-virtual-phone-number', flag: 'https://flagsapi.com/MT/flat/64.png' },
    { country: 'Netherlands', path: '/netherlands-virtual-phone-number', flag: 'https://flagsapi.com/NL/flat/64.png' },
    { country: 'Norway', path: '/norway-virtual-phone-number', flag: 'https://flagsapi.com/NO/flat/64.png' },
    { country: 'Poland', path: '/poland-virtual-phone-number', flag: 'https://flagsapi.com/PL/flat/64.png' },
    { country: 'Portugal', path: '/portugal-virtual-phone-number', flag: 'https://flagsapi.com/PT/flat/64.png' },
    { country: 'Romania', path: '/romania-virtual-phone-number', flag: 'https://flagsapi.com/RO/flat/64.png' },
    { country: 'Russia', path: '/russia-virtual-phone-number', flag: 'https://flagsapi.com/RU/flat/64.png' },
    { country: 'Serbia', path: '/serbia-virtual-phone-number', flag: 'https://flagsapi.com/RS/flat/64.png' },
    { country: 'Slovakia', path: '/slovakia-virtual-phone-number', flag: 'https://flagsapi.com/SK/flat/64.png' },
    { country: 'Spain', path: '/spain-virtual-phone-number', flag: 'https://flagsapi.com/ES/flat/64.png' },
    { country: 'Sweden', path: '/sweden-virtual-phone-number', flag: 'https://flagsapi.com/SE/flat/64.png' },
    { country: 'Switzerland', path: '/switzerland-virtual-phone-number', flag: 'https://flagsapi.com/CH/flat/64.png' },
    { country: 'UK', path: '/uk-virtual-phone-number', flag: 'https://flagsapi.com/GB/flat/64.png' },
    { country: 'UK Toll Free', path: '/uk-toll-free-virtual-phone-number', flag: 'https://flagsapi.com/GB/flat/64.png' },
  ],
  Asia: [
    { country: 'Bahrain', path: '/bahrain-virtual-phone-number', flag: 'https://flagsapi.com/BH/flat/64.png' },
    { country: 'Bangladesh', path: '/bangladesh-virtual-phone-number', flag: 'https://flagsapi.com/BD/flat/64.png' },
    { country: 'Cambodia', path: '/cambodia-virtual-phone-number', flag: 'https://flagsapi.com/KH/flat/64.png' },
    { country: 'China', path: '/china-virtual-phone-number', flag: 'https://flagsapi.com/CN/flat/64.png' },
    { country: 'Hong Kong', path: '/hong-kong-virtual-phone-number', flag: 'https://flagsapi.com/HK/flat/64.png' },
    { country: 'Indonesia', path: '/indonesia-virtual-phone-number', flag: 'https://flagsapi.com/ID/flat/64.png' },
    { country: 'Israel', path: '/israel-virtual-phone-number', flag: 'https://flagsapi.com/IL/flat/64.png' },
    { country: 'Japan', path: '/japan-virtual-phone-number', flag: 'https://flagsapi.com/JP/flat/64.png' },
    { country: 'Myanmar', path: '/myanmar-virtual-phone-number', flag: 'https://flagsapi.com/MM/flat/64.png' },
    { country: 'Malaysia', path: '/malaysia-virtual-phone-number', flag: 'https://flagsapi.com/MY/flat/64.png' },
    { country: 'Pakistan', path: '/pakistan-virtual-phone-number', flag: 'https://flagsapi.com/PK/flat/64.png' },
    { country: 'Philippines', path: '/philippines-virtual-phone-number', flag: 'https://flagsapi.com/PH/flat/64.png' },
    { country: 'Singapore', path: '/singapore-virtual-phone-number', flag: 'https://flagsapi.com/SG/flat/64.png' },
    { country: 'Singapore Toll Free', path: '/singapore-toll-free-virtual-phone-number', flag: 'https://flagsapi.com/SG/flat/64.png' },
    { country: 'South Korea', path: '/south-korea-virtual-phone-number', flag: 'https://flagsapi.com/KR/flat/64.png' },
    { country: 'Sri Lanka', path: '/sri-lanka-virtual-phone-number', flag: 'https://flagsapi.com/LK/flat/64.png' },
    { country: 'Taiwan', path: '/taiwan-virtual-phone-number', flag: 'https://flagsapi.com/TW/flat/64.png' },
    { country: 'Thailand', path: '/thailand-virtual-phone-number', flag: 'https://flagsapi.com/TH/flat/64.png' },
    { country: 'Turkey', path: '/turkey-virtual-phone-number', flag: 'https://flagsapi.com/TR/flat/64.png' },
    { country: 'UAE', path: '/uae-virtual-phone-number', flag: 'https://flagsapi.com/AE/flat/64.png' },
    { country: 'Ukraine', path: '/ukraine-virtual-phone-number', flag: 'https://flagsapi.com/UA/flat/64.png' },
    { country: 'Vietnam', path: '/vietnam-virtual-phone-number', flag: 'https://flagsapi.com/VN/flat/64.png' },
  ],
  NorthAmerica: [
    { country: 'Belize', path: '/belize-virtual-phone-number', flag: 'https://flagsapi.com/BZ/flat/64.png' },
    { country: 'Canada', path: '/canada-virtual-phone-number', flag: 'https://flagsapi.com/CA/flat/64.png' },
 // { country: 'Mexico', path: '/mexico-virtual-phone-number', flag: 'https://flagsapi.com/MX/flat/64.png' },
    { country: 'USA', path: '/usa-virtual-phone-number', flag: 'https://flagsapi.com/US/flat/64.png' },
    { country: 'USA Toll Free', path: '/usa-toll-free-virtual-phone-number', flag: 'https://flagsapi.com/US/flat/64.png' },
  ],
  Oceania: [
    { country: 'Australia', path: '/australia-virtual-phone-number', flag: 'https://flagsapi.com/AU/flat/64.png' },
    { country: 'Australia Toll Free', path: '/australia-toll-free-virtual-phone-number', flag: 'https://flagsapi.com/AU/flat/64.png' },
    { country: 'New Zealand', path: '/new-zealand-virtual-phone-number', flag: 'https://flagsapi.com/NZ/flat/64.png' },
  ],
  SouthAmerica: [
    { country: 'Argentina', path: '/argentina-virtual-phone-number', flag: 'https://flagsapi.com/AR/flat/64.png' },
    { country: 'Brazil', path: '/brazil-virtual-phone-number', flag: 'https://flagsapi.com/BR/flat/64.png' },
    { country: 'Chile', path: '/chile-virtual-phone-number', flag: 'https://flagsapi.com/CL/flat/64.png' },
    { country: 'Colombia', path: '/colombia-virtual-phone-number', flag: 'https://flagsapi.com/CO/flat/64.png' },
    { country: 'Peru', path: '/peru-virtual-phone-number', flag: 'https://flagsapi.com/PE/flat/64.png' },
    { country: 'Panama', path: '/panama-virtual-phone-number', flag: 'https://flagsapi.com/PA/flat/64.png' },
  ],
  Africa: [
    { country: 'Ghana', path: '/ghana-virtual-phone-number', flag: 'https://flagsapi.com/GH/flat/64.png' },
    { country: 'Uganda', path: '/uganda-virtual-phone-number', flag: 'https://flagsapi.com/UG/flat/64.png' },
    { country: 'South Africa', path: '/south-africa-virtual-phone-number', flag: 'https://flagsapi.com/ZA/flat/64.png' },
  ],
};

  const PhoneNumbers = () => (
    <>
      <h3 style={{ fontSize: '30px', textAlign: 'center', marginTop:"20px", fontWeight: 600 }}>Gain Access To International Phone Numbers</h3>
      <div className="phone-numbers">
        {Object.keys(phoneNumbers).map(region => (
          <div key={region} className="region">
            <h2>{region}</h2>
            <ul>
              {phoneNumbers[region].map(({ country, path, flag }) => (
                <li key={country} className="country-card">
                  <a href={path}>
                    <img src={flag} alt={`${country} Flag`} className="flag-icon" />
                    <span>{country}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );

export default PhoneNumbers;
