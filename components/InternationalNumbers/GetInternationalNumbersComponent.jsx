import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COUNTRIES, REGIONS, flagSrc } from '../numbers/countries';
import '../../styles/InternationalNumbers/allCountries.css';

// Directory of every country page, grouped by region. `except` hides the page you are on.
const PhoneNumbers = ({ title = 'Phone numbers by country', except }) => (
  <>
    <h2 className="phone-numbers-heading">{title}</h2>
    <div className="phone-numbers">
      {REGIONS.map((region) => (
        <div key={region} className="region">
          <h3>{region}</h3>
          <ul>
            {COUNTRIES.filter((c) => c.region === region && c.slug !== except).map((c) => (
              <li key={c.slug} className="country-card">
                <Link href={`/${c.slug}`}>
                  <Image src={flagSrc(c.iso)} alt="" width={36} height={36} className="ph-flag" />
                  <span>{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

export default PhoneNumbers;
