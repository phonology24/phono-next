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
            title: "Optimize Network",
            content: `Improve network efficiency by leveraging advanced analytics to identify bottlenecks and ensure seamless connectivity for customers.`,
            icon: <NetworkCheckIcon className="featuredCards-muiIcon" />,
            image: "/Assets/australia.png",
            url: "features-explained/optimize-network",
        },
        {
            title: "Enhance Coverage",
            content: `Deploy cutting-edge solutions to expand network coverage in remote and underserved areas, ensuring accessibility for everyone.`,
            icon: <SignalCellularAltIcon className="featuredCards-muiIcon" />,
            image: "/Assets/brazil.png",
            url: "features-explained/optimize-network",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/optimize-network",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/optimize-network",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/optimize-network",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            image: "/Assets/belgium.png",
            url: "features-explained/optimize-network",
        },
    ];

const redirector = (url)=> {
    router.push(url)
}

    return (
        <div className="featuredCards-container">
            {cards.map((card, index) => (
                <div className="featuredCards-card" style={{ cursor: "pointer" }}>
                        {/* <Link href={card.url} key={index} passHref> */}
                        <div className="featuredCards-icon">
                            {card.image ? (
                                <img src={card.image} alt={card.title} className="featuredCards-image" />
                            ) : (
                                card.icon
                            )}
                        </div>
                        <div className="featuredCards-content">
                            <h3 className="featuredCards-title" onClick={() => redirector( card.url)}>{card.title}</h3>
                            <p className="featuredCards-text">{card.content}</p>
                        </div>
                {/* </Link> */}
                    </div>
            ))}
        </div>
    );
};

export default FeaturedCards;
