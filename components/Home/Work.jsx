import React from "react";
import WholesaleVoice from "../../public/Assets/wholesale-voice.png";
import VirtualNumbers from "../../public/Assets/virtual-numbers.png";
import Messaging from "../../public/Assets/messaging.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Byon from "../../public/Assets/byon.png";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from '../../styles/App.module.css';
import Image from 'next/image'
const Work = () => {
  const workInfoData = [
    {
      image: WholesaleVoice,
      endpoint: "/unified-communication-providers",
      title: "Unified Communications",
      text: "No matter where your audience resides, our platform guarantees smooth calls and messaging across various channels.",
    },
    {
      image: VirtualNumbers,
      endpoint: "/hosted-pbx-providers",
      title: "Hosted PBX",
      text: "Virtual phone numbers that businesses can use to manage calls via cloud-based systems.",
    },
    {
      image: Messaging,
      endpoint: "/direct-routing-service-providers",
      title: "Cloud Telephony",
      text: "Enables seamless and high-quality virtual meetings, connecting teams and clients worldwide.",
    },
    {
      image: Byon,
      endpoint: "/call-center-solution",
      title: "Call Center Solutions",
      text: "Utilizes cloud-based technology to efficiently manage customer interactions, offering flexible solutions tailored to enhance customer service.",
    },
  ];

  return (
    <div className={styles.workSectionWrapper}>
      <div className={styles.workSectionTop}>
        <h2 className={styles.primaryHeading1}>
          Our <b>Powerful</b> Products.
        </h2>
        <p className={styles.primaryTextWork}>
          A broad range of captivating and innovative offerings.
        </p>
      </div>
      <div className={styles.workSectionBottom}>
        {workInfoData.map((work, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              borderRadius: ["0%", "20%", "20%", "20%", "10%"],
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transition: 'background 0.3s ease-in-out, transform 0.3s ease-in-out',
            }}
          >
            <Link href={work.endpoint}>
              <Card className={styles.cardContainer}>
                <CardActionArea>
                <Image
                    src={work.image}
                    alt={work.title}
                    className={styles.cardImage2}
                    width={300}  // Adjust the width according to your design
                    height={200} // Adjust the height according to your design
                    layout="responsive"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className={styles.cardTitle}
                    >
                      {work.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.cardText}
                    >
                      {work.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
