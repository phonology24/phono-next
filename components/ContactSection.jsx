import React, {useEffect, useRef}from 'react'
import '../styles/contactsection.css'
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


const ContactSection = () => {
  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.2, ease: "power1.inOut" }
  });
  const menuOpen = useRef(false);

  useEffect(() => {
    const menuIcon = document.querySelector('.sales-button');
    const handleClick = () => {
      if (!menuOpen.current) {
        console.log(menuOpen.current);
        tl.play();
        menuOpen.current = true;
      } else {
        tl.reverse();
        menuOpen.current = false;
      }
    };

    menuIcon.addEventListener('click', handleClick);
    return () => {
      menuIcon.removeEventListener('click', handleClick);
    };
  });
  
  useGSAP(() => {
    tl.fromTo(".menu-icon", { scale: 1 }, { scale: 1 }, 0.)
        .fromTo(
            ".menu",
            {opacity: 0, visibility: "hidden" },
            { opacity: 1, visibility: "visible"},
        
            0
        )
        .fromTo(
            ".menu-item1",
            { opacity: 0, y: ".5em", stagger: 0.1 },
            { opacity: 1, y: "0em", stagger: 0.1 }
        )
        .fromTo(
            ".menu-item2",
            { opacity: 0, y: ".5em", stagger: 0.1 },
            { opacity: 1, y: "0em", stagger: 0.1 }
        )
        .fromTo(
            ".menu-item3",
            { opacity: 0, y: ".5em", stagger: 0.1 },
            { opacity: 1, y: "0em", stagger: 0.1 }
        );
  })



  return (
    <div className="button-div">
<div className="sales-button">
<RingVolumeIcon style={{ fontSize: '1.5em', color:"blue"}} />
<div className="menu-icon"></div>
<ul className="menu">
    <li className="menu-item1" ></li>
    <li className="menu-item2"></li>
    <li className="menu-item3"></li>
</ul>
</div>
    {/* <button className="support-button"></button>
    <button className="billing-button"></button> */}
    </div>
  );
};


export default ContactSection