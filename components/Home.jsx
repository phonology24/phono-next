"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TagIcon from "@mui/icons-material/Tag";
import MessageIcon from "@mui/icons-material/Message";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Footer";
import TelecomBanner from "@/components/Home/TelecomBanner";
import Work from "@/components/Home/Work";
import Testimonials from "@/components/Home/Testimonial";
import PopupButton from "@/components/PopupContact";
import Form from "@/components/Form";
import { Helmet } from "react-helmet";
// import { MetaTags, ReactTitle } from "react-meta-tags";
import styles from "../styles/App.module.css";
import PhoneNumbers from "./InternationalNumbers/GetInternationalNumbersComponent";

const cardVariants = {
  whileHover: {
    scale: 1.04,
    borderRadius: ["0%", "20%", "20%", "20%", "10%"],
    backgroundColor: "#6CFF4F",
    translateY: -10,
  },
};
const cardTransition = {
  duration: 0.7,
  ease: "easeInOut",
  repeat: null,
  repeatDelay: 1,
};

const HomeImageSection = ({ icon, heading, text, linkTo, gradientColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className={styles.homeImageSection}
      whileHover="whileHover"
      initial="nonHovered"
      animate={isHovered ? "whileHover" : "nonHovered"}
      variants={cardVariants}
      transition={cardTransition}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      style={{ background: gradientColor }}
    >
      {icon && React.createElement(icon, { className: styles.cardImage1 })}
      <motion.h2
        className={styles.card2Heading}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {heading}
      </motion.h2>
      <p className={styles.pcard2}>{text}</p>
      <Link href={linkTo} className={styles.learnMoreButton}>
        Learn More <span className={styles.learnSpan}>&#8594;</span>
      </Link>
    </motion.div>
  );
};

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const additionalComponents = scrollY > 200 ? <Work /> : null;
  const text = "Connecting Conversations Worldwide.";
  const text2 = text.split(" ");

  useEffect(() => {
    const $card = document.querySelector(`.${styles.homeTextSection}`);
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x * 2 + center.y ** 2);

      $card.style.transform = `
        scale3d(1.01, 1.01, 1.01)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;
    }

    $card.addEventListener("mouseenter", () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    });

    $card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", rotateToMouse);
      $card.style.transform = "";
      $card.style.background = "";
    });
  });

  const cardData = [
    {
      icon: GraphicEqIcon,
      heading: "Enterprise VoIP Solution",
      text: "Specifically designed for SMEs, we offer SIP Trunk Solutions and Business VoIP Solutions.",
      linkTo: "/voip-service-providers-in-india",
      gradientColor: "linear-gradient(360deg, #fffd8d, #fffd8d, #ffffff)",
    },
    {
      icon: TagIcon,
      heading: "Virtual Numbers",
      text: "High-quality virtual numbers from 70+ countries. Both local and toll-free virtual numbers.",
      linkTo: "/virtual-phone-number-providers",
      gradientColor: "linear-gradient(360deg, #FAAFBA, #FAAFBA, #ffffff)",
    },
    {
      icon: MessageIcon,
      heading: "SIP Trunk",
      text: "For Businesses to enable Voice over IP (VoIP) services, facilitating cost-effective and scalable communication solutions.",
      linkTo: "/sip-trunk-providers",
      gradientColor: "linear-gradient(360deg, #87CEEB, #87CEEB, #FFFFFF)",
    },
  ];

  return (
    <div className={styles.homeContainer}>   

      <div className={styles.homeBannerContainer}>
        <div className={styles.homeBannerImageContainer}></div>
        {cardData.map((card, index) => (
          <HomeImageSection key={index} {...card} />
        ))}

        <div className={styles.homeTextSection}>
          <motion.div
            className={styles.primaryHeading}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {text2.map((el, i) => (
              <motion.span
                initial={{ opacity: 0.3, color: "green" }}
                animate={{ opacity: 1, color: "black" }}
                transition={{
                  duration: 2,
                  delay: i / 2,
                  ease: "backOut",
                }}
                key={i}
                style={{ display: "inline" }}
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.div>
          <p className={styles.primaryText}>
            Boost efficiency and productivity instantaneously with our
            all-encompassing voice routing and DID number solutions.
          </p>
        </div>
      </div>
      <Link
        href="https://forms.zoho.in/phonology/form/GetPricingForm"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {" "}
      </Link>
      <PopupButton />
      <Banner />
      <TelecomBanner />
      {additionalComponents}
      <Testimonials />
      <Form />
      <PhoneNumbers/>
      <Footer />
    </div>
  );
};

export default Home;
