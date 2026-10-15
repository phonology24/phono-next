"use client";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-links">
          <h4>Bussiness Communications</h4>
          <span>
            <a href="/unified-communication-providers">Unified Communications</a>
          </span>
          <span>
            <a href="/sip-trunk-providers">SIP Trunking</a>
          </span>
          <span>
            <a href="/virtual-phone-number-providers">Virtual Numbers</a>
          </span>
          <span>
            <a href="/cloud-telephony-providers">Cloud telephony</a>
          </span>
          <span>
            <a href="/call-center-solution">Call Center Solutions</a>
          </span>
          <span>
            <a href="/uifn-number">UIFN Numbers</a>
          </span>
        </div>


        <div className="footer-links">
          <h4>Engagement Solutions</h4>
          <span>
            <a href="/">Voice Interactions</a>
          </span>
          <span>
            <a href="/">Omnichannel Engagement</a>
          </span>
          <span>
            <a href="/">Automation</a>
          </span>
          <span>
            <a href="/">Analytics and Reporting</a>
          </span>
          <span>
            <a href="/">Agent Mangement</a>
          </span>    
        </div>


        <div className="footer-links">
          <h4>Integrations</h4>
          <span>
            <a href="/">Phonology AI</a>
          </span>
          <span>
            <a href="/">Microsoft Teams Integrations</a>
          </span>
          <span>
            <a href="/">Developer Portal</a>
          </span>
          <span>
            <a href="/">Managed IT Services & Support</a>
          </span>      
        </div>


        <div className="footer-links">
          <h4>Others</h4>
          <span>
            <Link href="/phonology-blogs">Blogs</Link>
          </span>
          <span>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>
          <span>
            <Link href="/refund-policy">Refund Policy</Link>
          </span>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <BrandLogo height={28} />
          <div className="footer-icons">
            <a href="https://twitter.com/phonology" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter">
              <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/company/phonology-it-solutions" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn">
              <SiLinkedin />
            </a>
            <a href="https://www.facebook.com/phonologyvoip" target="_blank" rel="noopener noreferrer nofollow" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/phonology_voip/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <span>info@phonology.io</span>
          <span>Sales: <span className="ph-mono">+91 98459 77788</span> / <span className="ph-mono">+91 98456 33355</span></span>
          <span>Support: <span className="ph-mono">+91 99865 09709</span> / <span className="ph-mono">+91 97404 54742</span></span>
          <span>Billing: <span className="ph-mono">+91 91085 40675</span></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
