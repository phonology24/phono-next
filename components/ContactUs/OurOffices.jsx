"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../styles/contactus/ouroffices.css";

const officeData = [
  {
    city: "New York",
    address: "5th Avenue, Manhattan, NYC",
    phone: "+1 212 555 7890",
    image: "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "London",
    address: "Oxford Street, Central London",
    phone: "+44 20 7946 1234",
    image: "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Sydney",
    address: "George Street, Sydney, Australia",
    phone: "+61 2 9000 4567",
    image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const OurOffices = () => {
  const [hoverImage, setHoverImage] = useState(
    "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  return (
    <div className="offices-container">

      {/* Left Section */}
      <div className="left-section">
        {officeData.map((office, index) => (
          <div
            className="office-card"
            key={index}
            onMouseEnter={() => setHoverImage(office.image)}
          >
            <div className="avatar">
              <Image
                src={office.image}
                alt={`${office.city} Avatar`}
                width={60}
                height={60}
              />
            </div>
            <div className="info">
              <p className="cityname">
                <strong>{office.city}</strong>
              </p>
              <p>{office.address}</p>
              <p>{office.phone}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section (only for desktop screens) */}
      <div className="right-section">
        {hoverImage && (
          <Image src={hoverImage} alt="Hovered Office" width={1000} height={1000} />
        )}
      </div>
    </div>
  );
};

export default OurOffices;
