"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Footer";
import Work from "@/components/Home/Work";
import Testimonials from "@/components/Home/Testimonial";
import PopupButton from "@/components/PopupContact";
import Form from "@/components/Form";
import styles from "../styles/App.module.css";
import PhoneNumbers from "./InternationalNumbers/GetInternationalNumbersComponent";
import Hero from "./Home/Hero";
import Products from "./Home/Products";
import SubHero from "./Home/SubHero";
import TwelveCards from "./TwelveCards";

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

  const additionalComponents = scrollY > 200 ? (
    <>
      <Work />
      
      <PopupButton />  
    </>
  ) : null;


 

  return (
    <div className={styles.homeContainer}>   
    
      <Hero/>
      <Banner />
      <SubHero/>
      <Products/>
      <TwelveCards/>
      <Testimonials />
      <Form />
      <PhoneNumbers/>
      <Footer />
    </div>
  );
};

export default Home;
