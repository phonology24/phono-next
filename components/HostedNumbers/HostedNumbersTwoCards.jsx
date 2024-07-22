import React from "react";
import BackImage from "../../public/Assets/1.png";
import "../../styles/hostedphonenumbers.css";
import { Helmet } from "react-helmet";
import Image from "next/image";
const HostedNumbersTwoCards = () => {
  return (
    <div className="hosted-numbers-two-cards">
      <Helmet>
        <title>
          Hosted PBX | Cloud PBX | IP PBX |Providers in India
        </title>
        <meta name='description' content='Phonology Hosted PBX, Cloud PBX, and IP PBX solutions. 
        Elevate your business with our advanced telephony services tailored for modern connectivity needs, 24x7 Support, and a free trial option.'
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta name="keywords" content="hosted pbx,cloud pbx,cloud phone system,cloud hosted phone system,hosted voip,cloud communications,
        cloud pbx system,cloud pbx phone system,hosted ip pbx,cloud pbx sytem,hosted pbx voip,hosted pbx phone,fonality hosted pbx,cloud pbx explained,
        cloud pbx phone sytem,pbx cloud,benefits of hosted pbx,cloud voip"
        />
      </Helmet>
      <div className="card-hosted">
        <Image src={BackImage} alt="Card Image" />
      </div>
      <div className="card-hosted">
        <h2>
          <span className="gradient-ltr">Empowering Growth with Our VoIP & UC Platform</span>
        </h2>

        <h3>Streamlined Operations: Quoting, Activate, Billings, and Supporting – All in a Place</h3>
        <p>
        Leave behind the inefficiencies of swivel-chair operations and the challenges of managing loosely integrated systems.
         Embrace a unified solution tailored specifically for MSPs. Provide your customer with a branded cloud PBX service that is easy to set up and manage.
          It is equipped with in-built billing and support tools, putting you firmly in control.
        </p>

      </div>
    </div>
  );
};

export default HostedNumbersTwoCards;
