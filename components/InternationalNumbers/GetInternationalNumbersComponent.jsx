import React from 'react';
import '../../styles/InternationalNumbers/allCountries.css';
import Image from 'next/image';

const phoneNumbers = {
  Europe: [
    { country: 'Austria', path: '/austria-phone-number', flag: 'https://flagsapi.com/AT/flat/64.png' },
    { country: 'Belgium', path: '/belgium-phone-number', flag: 'https://flagsapi.com/BE/flat/64.png' },
    { country: 'Bulgaria', path: '/bulgaria-phone-number', flag: 'https://flagsapi.com/BG/flat/64.png' },
    { country: 'Croatia', path: '/croatia-phone-number', flag: 'https://flagsapi.com/HR/flat/64.png' },
    { country: 'Cyprus', path: '/cyprus-phone-number', flag: 'https://flagsapi.com/CY/flat/64.png' },
    { country: 'Czech Republic', path: '/czech-republic-phone-number', flag: 'https://flagsapi.com/CZ/flat/64.png' },
    { country: 'Denmark', path: '/denmark-phone-number', flag: 'https://flagsapi.com/DK/flat/64.png' },
    { country: 'Estonia', path: '/estonia-phone-number', flag: 'https://flagsapi.com/EE/flat/64.png' },
    { country: 'Finland', path: '/finland-phone-number', flag: 'https://flagsapi.com/FI/flat/64.png' },
    { country: 'France', path: '/france-phone-number', flag: 'https://flagsapi.com/FR/flat/64.png' },
    { country: 'Georgia', path: '/georgia-phone-number', flag: 'https://flagsapi.com/GE/flat/64.png' },
    { country: 'Germany', path: '/germany-phone-number', flag: 'https://flagsapi.com/DE/flat/64.png' },
    { country: 'Greece', path: '/greece-phone-number', flag: 'https://flagsapi.com/GR/flat/64.png' },
    { country: 'Hungary', path: '/hungary-phone-number', flag: 'https://flagsapi.com/HU/flat/64.png' },
    { country: 'Iceland', path: '/iceland-phone-number', flag: 'https://flagsapi.com/IS/flat/64.png' },
    { country: 'Ireland', path: '/ireland-phone-number', flag: 'https://flagsapi.com/IE/flat/64.png' },
    { country: 'Italy', path: '/italy-phone-number', flag: 'https://flagsapi.com/IT/flat/64.png' },
    { country: 'Latvia', path: '/latvia-phone-number', flag: 'https://flagsapi.com/LV/flat/64.png' },
    { country: 'Luxembourg', path: '/luxembourg-phone-number', flag: 'https://flagsapi.com/LU/flat/64.png' },
    { country: 'Malta', path: '/malta-phone-number', flag: 'https://flagsapi.com/MT/flat/64.png' },
    { country: 'Netherlands', path: '/netherlands-phone-number', flag: 'https://flagsapi.com/NL/flat/64.png' },
    { country: 'Norway', path: '/norway-phone-number', flag: 'https://flagsapi.com/NO/flat/64.png' },
    { country: 'Poland', path: '/poland-phone-number', flag: 'https://flagsapi.com/PL/flat/64.png' },
    { country: 'Portugal', path: '/portugal-phone-number', flag: 'https://flagsapi.com/PT/flat/64.png' },
    { country: 'Romania', path: '/romania-phone-number', flag: 'https://flagsapi.com/RO/flat/64.png' },
    { country: 'Russia', path: '/russia-phone-number', flag: 'https://flagsapi.com/RU/flat/64.png' },
    { country: 'Serbia', path: '/serbia-phone-number', flag: 'https://flagsapi.com/RS/flat/64.png' },
    { country: 'Slovakia', path: '/slovakia-phone-number', flag: 'https://flagsapi.com/SK/flat/64.png' },
    { country: 'Spain', path: '/spain-phone-number', flag: 'https://flagsapi.com/ES/flat/64.png' },
    { country: 'Sweden', path: '/sweden-phone-number', flag: 'https://flagsapi.com/SE/flat/64.png' },
    { country: 'Switzerland', path: '/switzerland-phone-number', flag: 'https://flagsapi.com/CH/flat/64.png' },
    { country: 'UK', path: '/uk-phone-number', flag: 'https://flagsapi.com/GB/flat/64.png' },
    { country: 'UK Toll Free', path: '/uk-toll-free-number', flag: 'https://flagsapi.com/GB/flat/64.png' },
  ],
  Asia: [
    { country: 'Bahrain', path: '/bahrain-phone-number', flag: 'https://flagsapi.com/BH/flat/64.png' },
    { country: 'Bangladesh', path: '/bangladesh-phone-number', flag: 'https://flagsapi.com/BD/flat/64.png' },
    { country: 'Cambodia', path: '/cambodia-phone-number', flag: 'https://flagsapi.com/KH/flat/64.png' },
    { country: 'China', path: '/china-phone-number', flag: 'https://flagsapi.com/CN/flat/64.png' },
    { country: 'Hong Kong', path: '/hong-kong-phone-number', flag: 'https://flagsapi.com/HK/flat/64.png' },
    { country: 'Indonesia', path: '/indonesia-phone-number', flag: 'https://flagsapi.com/ID/flat/64.png' },
    { country: 'Israel', path: '/israel-phone-number', flag: 'https://flagsapi.com/IL/flat/64.png' },
    { country: 'Japan', path: '/japan-phone-number', flag: 'https://flagsapi.com/JP/flat/64.png' },
    { country: 'Myanmar', path: '/myanmar-phone-number', flag: 'https://flagsapi.com/MM/flat/64.png' },
    { country: 'Malaysia', path: '/malaysia-phone-number', flag: 'https://flagsapi.com/MY/flat/64.png' },
    { country: 'Pakistan', path: '/pakistan-phone-number', flag: 'https://flagsapi.com/PK/flat/64.png' },
    { country: 'Philippines', path: '/philippines-phone-number', flag: 'https://flagsapi.com/PH/flat/64.png' },
    { country: 'Singapore', path: '/singapore-phone-number', flag: 'https://flagsapi.com/SG/flat/64.png' },
    { country: 'Singapore Toll Free', path: '/singapore-toll-free-number', flag: 'https://flagsapi.com/SG/flat/64.png' },
    { country: 'South Korea', path: '/south-korea-phone-number', flag: 'https://flagsapi.com/KR/flat/64.png' },
    { country: 'Sri Lanka', path: '/sri-lanka-phone-number', flag: 'https://flagsapi.com/LK/flat/64.png' },
    { country: 'Taiwan', path: '/taiwan-phone-number', flag: 'https://flagsapi.com/TW/flat/64.png' },
    { country: 'Thailand', path: '/thailand-phone-number', flag: 'https://flagsapi.com/TH/flat/64.png' },
    { country: 'Turkey', path: '/turkey-phone-number', flag: 'https://flagsapi.com/TR/flat/64.png' },
    { country: 'UAE', path: '/uae-phone-number', flag: 'https://flagsapi.com/AE/flat/64.png' },
    { country: 'Ukraine', path: '/ukraine-phone-number', flag: 'https://flagsapi.com/UA/flat/64.png' },
    { country: 'Vietnam', path: '/vietnam-phone-number', flag: 'https://flagsapi.com/VN/flat/64.png' },
  ],
  NorthAmerica: [
    { country: 'Belize', path: '/belize-phone-number', flag: 'https://flagsapi.com/BZ/flat/64.png' },
    { country: 'Canada', path: '/canada-phone-number', flag: 'https://flagsapi.com/CA/flat/64.png' },
    { country: 'Canada Toll Free', path: '/canada-toll-free-number', flag: 'https://flagsapi.com/CA/flat/64.png' },
    { country: 'Costa Rica', path: '/costa-rica-phone-number', flag: 'https://flagsapi.com/CR/flat/64.png' },
    { country: 'El Salvador', path: '/el-salvador-phone-number', flag: 'https://flagsapi.com/SV/flat/64.png' },
    { country: 'Panama', path: '/panama-phone-number', flag: 'https://flagsapi.com/PA/flat/64.png' },
    { country: 'United States', path: '/us-phone-number', flag: 'https://flagsapi.com/US/flat/64.png' },
    { country: 'US Toll Free', path: '/us-toll-free-number', flag: 'https://flagsapi.com/US/flat/64.png' },
  ],
  Oceania: [
    { country: 'Australia', path: '/australia-phone-number', flag: 'https://flagsapi.com/AU/flat/64.png' },
    { country: 'Australia Toll Free', path: '/australia-toll-free-number', flag: 'https://flagsapi.com/AU/flat/64.png' },
    { country: 'New Zealand', path: '/new-zealand-phone-number', flag: 'https://flagsapi.com/NZ/flat/64.png' },
  ],
  SouthAmerica: [
    { country: 'Argentina', path: '/argentina-phone-number', flag: 'https://flagsapi.com/AR/flat/64.png' },
    { country: 'Brazil', path: '/brazil-phone-number', flag: 'https://flagsapi.com/BR/flat/64.png' },
    { country: 'Chile', path: '/chile-phone-number', flag: 'https://flagsapi.com/CL/flat/64.png' },
    { country: 'Colombia', path: '/colombia-phone-number', flag: 'https://flagsapi.com/CO/flat/64.png' },
    { country: 'Peru', path: '/peru-phone-number', flag: 'https://flagsapi.com/PE/flat/64.png' },
  ],
  Africa: [
    { country: 'Ghana', path: '/ghana-phone-number', flag: 'https://flagsapi.com/GH/flat/64.png' },
    { country: 'Uganda', path: '/uganda-phone-number', flag: 'https://flagsapi.com/UG/flat/64.png' },
    { country: 'South Africa', path: '/south-africa-phone-number', flag: 'https://flagsapi.com/ZA/flat/64.png' },
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
                  {/* <a href={path}> */}
                    <img src={flag} alt={`${country} Flag`} className="flag-icon" />
                    <span>{country}</span>
                  {/* </a> */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );

export default PhoneNumbers;
