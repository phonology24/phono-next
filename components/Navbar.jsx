"use client"
import React, { use, useEffect, useState } from "react";
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
// import DropdownMenuSolutions from "./Home/dropdownMenuSolutions";
import styles from '../styles/App.module.css' 
import BrandLogo from "./BrandLogo";
import DropdownMenuResources from "./Home/DropdownMenuResources";
import DropdownMenuProducts from "./Home/DropdownMenuProducts";
import ThemePicker from "./ThemePicker";

// themed: route supports dark mode, so offer the theme picker.
const Navbar = ({ themed }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      text: "Blogs",
      icon: <CommentRoundedIcon />,
      href: "/phonology-blogs",
    },
    {
      text: "Book A Meeting",
      icon: <PhoneRoundedIcon />,
      href: "https://phonology.zohobookings.in/#/phonologybookameeting"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen)
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? styles["nav-glass"] : styles.nav}>
      <div className={styles.navLogoContainer} onClick={scrollToTop}>
        <Link href="/">
          <BrandLogo height={30} />
        </Link>
      </div>

      <div className={styles.navbarLinksContainer}>
        <Link href="/about-phonology" state={[]} className={styles.navlink1}>
          Company
        </Link>
        <a className={styles.dropbutton} onClick={toggleDropdown}> <DropdownMenuProducts/></a>
      {/* <a className={styles.dropbutton} onClick={toggleDropdown}><DropdownMenuSolutions /></a>  */}
        {/* <a className={styles.dropbutton} onClick={toggleDropdown}>   <DropdownMenuResources /></a> */}
        <Link href="/phonology-blogs" className={styles.navlink1}>
          Blogs
        </Link>
        <Link href="/contact-us" className={styles.navlink1}>
          Contact Us
        </Link>
        {/* <Link href="/phonology-blogs" className={styles.navlink1}>
          Resources
        </Link> */}
      </div>
        {themed && <ThemePicker className={styles.themePickerNav} />}
        <Link href="https://phonology.zohobookings.in/#/phonologybookameeting" target="_blank" rel="noopener noreferrer nofollow">
          <button className={styles.primaryButtonBook}>Book a Meeting</button>
        </Link>
      <div className={styles.navbarMenuContainer}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        PaperProps={{ sx: { bgcolor: 'var(--surface-raised)', color: 'var(--ink)', boxShadow: 'var(--shadow-pop)', '& .MuiListItemIcon-root': { color: 'var(--mint-text)' }, '& .MuiDivider-root': { borderColor: 'var(--line)' } } }}
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
        {themed && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <span className="ph-label">Theme</span>
            <ThemePicker />
          </Box>
        )}
      </Drawer>
    </nav>
  );
};

export default Navbar;
