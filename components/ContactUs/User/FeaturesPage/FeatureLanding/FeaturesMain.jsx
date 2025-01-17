"use client"
import React from "react";
import "./FeaturedCards.css";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SecurityIcon from "@mui/icons-material/Security";
import Link from "next/link";
import {useRouter  } from "next/navigation";

const FeaturedCards = () => {
    const router = useRouter();
    const cards = [
        {
            title: "Voicemail",
            content: `Improve network efficiency by leveraging advanced analytics to identify bottlenecks and ensure seamless connectivity for customers.`,
            icon: <NetworkCheckIcon className="featuredCards-muiIcon" />,
            image: "/Assets/australia.png",
            url: "features-explained/voicemail-features",
        },
        {
            title: "IVR",
            content: `Deploy cutting-edge solutions to expand network coverage in remote and underserved areas, ensuring accessibility for everyone.`,
            icon: <SignalCellularAltIcon className="featuredCards-muiIcon" />,
            image: "/Assets/australia.png",
            url: "features-explained/ivr-features",
        },
        {
            title: "Call Forwarding",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-forwarding-features",
        },
        {
            title: "Call Transfer",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-transfer-features",
        },
        {
            title: "Call Queueing",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-queueing-features",
        },
        {
            title: "Call Barging",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-barging-features",
        },
        {
            title: "Call Recording",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-recording-features",
        },
        {
            title: "Call Analytics",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-analytics-features",
        },
        {
            title: "Customized Reports",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/customized-reports-feature",
        },
        {
            title: "Call Conference",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-conference-features",
        },
        {
            title: "Call Masking",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-masking-features",
        },
        {
            title: "Call Whsipering",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/call-whispering-features",
        }, 
        {
            title: "Personalised Greetings",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/personalised-greetings-features",
        }, 
        {
            title: "Sticky Agents",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/sticky-agent-features",
        }, 
        {
            title: "Toll Free & Virtual Numbers",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/toll-free-and-virtual-numbers-features",
        }, 
    ];


  const handleRedirect = (url) => {
    router.push(url);
  };

  return (<>
        <h1 className="heading-features">Features</h1>
    <div className="featured-cards-container">
      {cards.map((card, index) => (
        <div 
          className="featured-card" 
          key={index} 
          onClick={() => handleRedirect(card.url)}
        >
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          {/* <p className="card-content">{card.content}</p> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default FeaturedCards;


