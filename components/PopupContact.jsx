import React, { useEffect, useState } from 'react';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/chatbox.module.css';
import chatboximage from '../public/Assets/chatboximage.svg';

const PopupContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [manuallyClosed, setManuallyClosed] = useState(false);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
    setManuallyClosed(!isOpen);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <button className={styles.popupBtn} onClick={toggleChatbox}>
        <HeadsetMicIcon />
      </button>
      {isOpen && (
        <div className={styles.chatbox}>
          <button className={styles.boxclosebutton} onClick={toggleChatbox}>
            <CloseIcon style={{ fontSize: '20px' }} />
          </button>
          <div className={styles.chatboxImg}>
            <Image src={chatboximage} alt="" />
          </div>
          <div className={styles.chatboxText}>
            <p className={styles.headingChatbox}>Welcome To Phonology 🎊</p>
            <p className={styles.preheadingChatbox}>Here are some quick access options.</p>
          </div>
          <div className={styles.buttonDivChatbox}>
            <button>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Book A Demo
              </Link>
            </button>
            <button>
              <Link href="https://zfrmz.in/uVhtnQbhSsWHU9Z8Xy8T" target="_blank" rel="noopener noreferrer nofollow">
                Get Pricing
              </Link>
            </button>
            <button>
              <Link href="/about-phono">
                What Does Phonology.io do?
              </Link>
            </button>
            <button>
              <Link href="mailto:support@phonology.io" rel="nofollow">
                Need Support?
              </Link>
            </button>
          </div>
          <p className={styles.pptext}>
            <Link href="/privacy-policy">privacy policy</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default PopupContact;
