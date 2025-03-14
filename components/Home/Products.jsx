import React from "react";
import Link from "next/link";
import "../../styles/Features.css";
import Voice from "../../public/Assets/voice.png";
import vn from "../../public/Assets/vn1.png";
import uf from "../../public/Assets/uf.png";
import ct from "../../public/Assets/ct.png";
import wapi from "../../public/Assets/wapi.png";
import sip from "../../public/Assets/sip.png";
import Image from "next/image";

const Products = () => {
  return (
    <div className="features-container">
      <h2 className="features-heading">
        Our Innovative Solutions - Trusted by Businesses Worldwide
      </h2>
      <div className="features-grid">
        <div className="feature-card">
          <Link href="/unified-communication-providers">
            <div>
              <Image src={Voice} alt="Enterprise Voice Solution" width={1000} height={1000} />
              <h3>Enterprise Voice Solutions: Affordable, Scalable, and Secure Communication</h3>
              <p>
                Enhance your enterprise communication with VoIP—affordable, scalable, and secure solutions built to support global business operations.
              </p>
            </div>
          </Link>
        </div>
        <div className="feature-card">
          <Link href="/sip-trunk-providers">
            <div>
              <Image src={sip} alt="SIP Trunking" width={1000} height={1000} />
              <h3>Unlock seamless connectivity with SIP Trunking</h3>
              <p>
                Unlock seamless connectivity with SIP Trunking—reliable, scalable, and cost-effective voice solutions that integrate effortlessly with your existing PBX systems, empowering global communication.
              </p>
            </div>
          </Link>
        </div>
        <div className="feature-card">
          <Link href="/virtual-phone-number-providers">
            <div>
              <Image src={vn} alt="Virtual Number" width={1000} height={1000} />
              <h3>Stay connected with Virtual Numbers</h3>
              <p>
                Stay connected with Virtual Numbers—they are cost-effective, flexible, and perfect for delivering a seamless communication experience to your customers globally.
              </p>
            </div>
          </Link>
        </div>
        <div className="feature-card">
          <Link href="/unified-communication-providers">
            <div>
              <Image src={uf} alt="Unified Communication" width={1000} height={1000} />
              <h3>Empower your business with Unified Communication</h3>
              <p>
                Empower your business with Unified Communication—integrating all communication channels into a single, intuitive solution for ultimate efficiency.
              </p>
            </div>
          </Link>
        </div>
        <div className="feature-card">
          <Link href="/cloud-telephony-providers">
            <div>
              <Image src={ct} alt="Cloud Telephony" width={1000} height={1000} />
              <h3>Experience the power of Cloud Telephony</h3>
              <p>
                Experience the power of Cloud Telephony—streamlined, cost-efficient, and built to keep your team and customers connected worldwide.
              </p>
            </div>
          </Link>
        </div>
        <div className="feature-card">
          <Link href="/whatsapp-business">
            <div>
              <Image src={wapi} alt="WhatsApp API" width={1000} height={1000} />
              <h3>Watel: Empowering Business Communication with WhatsApp API</h3>
              <p>
                Watel, our WhatsApp Business API platform, empowers your business with instant messaging, automation, and personalized customer experiences.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
