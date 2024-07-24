"use client"
import React, { useEffect, useState } from "react";
// import Abouts from "../Components/Home/About";
import AboutHeading from "./About/Heading";
import Footer from "../components/Footer";
import Achievements from "./About/Achievements";
import Cards from "./About/Cards";
import Head from "next/head";

function About() {

  return (<>
      <Head>
        <link rel="canonical" href="https://www.phonology.io/about-phonology" />
      </Head>
    <div className="about-page" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <AboutHeading />
      <Cards />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.386785533576!2d77.593719!3d12.991452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1642f412af2b%3A0xd0db6cd7eb47bddd!2sPhonology%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1704773824067!5m2!1sen!2sin"
        width="350"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" title="gmap"
      ></iframe>
      <Footer />
    </div>
    </>

  );
}

export default About;
