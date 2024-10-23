"use client";
import React from "react";
import Logo from "../public/Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        {/* <div className="footer-logo-container">
          <Link href="/">
            <Image src={Logo} alt="Phonology Logo" className="footer-logo" width={1000} height={100} />
          </Link>
        </div> */}
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
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
      <div className="footer-icons">
          <a href="https://twitter.com/phonology" target="_blank" rel="noopener noreferrer nofollow">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/company/phonology-it-solutions" target="_blank" rel="noopener noreferrer nofollow">
            <SiLinkedin />
          </a>
          <a href="https://www.facebook.com/phonologyvoip" target="_blank" rel="noopener noreferrer nofollow">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/phonology_voip/" target="_blank" rel="noopener noreferrer nofollow">
            <FaInstagram />
          </a>
        </div>
          <span>info@phonology.io</span>
          <span>Sales: +91 98459 77788 / +91 98456 33355</span>
          <span>Support: +91 99865 09709 / +91 97404 54742</span>
          <span>Billing: +91 91085 40675</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
