import React from "react";
import "./FeaturedCards.css";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SecurityIcon from "@mui/icons-material/Security";

const FeaturedCards = () => {
    const cards = [
        {
            title: "Optimize Network",
            content: `Improve network efficiency by leveraging advanced analytics to identify bottlenecks and ensure seamless connectivity for customers. Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <NetworkCheckIcon className="featuredCards-muiIcon" />,
            // Uncomment the following line if you want to use an image instead of an icon
            image: "/Assets/australia.png",
        },
        {
            title: "Enhance Coverage",
            content: `Deploy cutting-edge solutions to expand network coverage in remote and underserved areas, ensuring accessibility for everyone. Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SignalCellularAltIcon className="featuredCards-muiIcon" />,
            // Uncomment the following line if you want to use an image instead of an icon
            image: "/Assets/brazil.png",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            // Uncomment the following line if you want to use an image instead of an icon
            image: "/Assets/belgium.png",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            // Uncomment the following line if you want to use an image instead of an icon
            image: "/Assets/croatia.png",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            // Uncomment the following line if you want to use an image instead of an icon
            image: "/Assets/greece.png",
        },
        {
            title: "Boost Security",
            content: `Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.Implement robust security protocols to safeguard customer data and prevent unauthorized access across telecom networks.`,
            icon: <SecurityIcon className="featuredCards-muiIcon" />,
            // Uncomment the following line if you want to use an image instead of an icon
            image: "/Assets/belize.png",
        },
    ];

    return (
        <div className="featuredCards-container">
            {cards.map((card, index) => (
                <div className="featuredCards-card" key={index}>
                    <div className="featuredCards-icon">
                        {/* Check if an image is provided, otherwise use the MUI icon */}
                        {card.image ? (
                            <img src={card.image} alt={card.title} className="featuredCards-image" />
                        ) : (
                            card.icon
                        )}
                    </div>
                    <div className="featuredCards-content">
                        <h3 className="featuredCards-title">{card.title}</h3>
                        <p className="featuredCards-text">{card.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedCards;
