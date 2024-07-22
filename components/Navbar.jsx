"use client"
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import Groups2Icon from '@mui/icons-material/Groups2';
import SipIcon from '@mui/icons-material/Sip';
import { ShoppingBag } from "@mui/icons-material";
import DropdownMenu from "./Home/dropdownMenu";
import styles from '../styles/App.module.css'
import Logo from '../public/Assets/logo.png'
import Image from "next/image";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Unified Communications",
      icon: <Diversity2Icon />,
      href: "/voip-service-providers-in-india",
    },
    {
      text: "Hosted Phone Systems",
      icon: <AddToHomeScreenIcon />,
      href: "/virtual-phone-number-providers",
    },
    {
      text: "Hosted Call Centers",
      icon: <CallSplitIcon />,
      href: "/call-center-solution",
    },
    {
      text: "Microsft Teams",
      icon: <Groups2Icon />,
      href: "/direct-routing-service-providers",
    },
    {
      text: "SIP Trunking",
      icon: <SipIcon />,
      href: "/sip-trunk-providers",
    },
    {
      text: "Buy Now",
      icon: <ShoppingBag />,
      href: "/get-phone-numbers",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      href: "/about-phonology",
    },
    {
      text: "Book A Meeting",
      icon: <PhoneRoundedIcon />,
      href: "https://nilesh-phonology60.zohobookings.in/#/208025000000027072"
    },
    {
      text: "Contact Us",
      icon: <CommentRoundedIcon />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen)
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLogoContainer} onClick={scrollToTop}>
        <Link href="/">
        <Image src={Logo} alt="" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.navbarLinksContainer}>
        <a className={styles.dropbutton} onClick={toggleDropdown}> Solutions  {isDropdownOpen && (<DropdownMenu />)}</a>
        <Link href="/about-phonology" state={[]} className={styles.navlink1}>
          Company
        </Link>
        <Link href="/get-phone-numbers" className={styles.navlink1}>
          Buy Now
        </Link>
        <Link href="/phonology-blogs" className={styles.navlink1}>
          Blogs
        </Link>
        <Link href="/" target="_blank" rel="noopener noreferrer nofollow">
          <button className={styles.primaryButtonBook}>Book a Meeting</button>
        </Link>
      </div>
      <div className={styles.navbarMenuContainer}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 400 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
