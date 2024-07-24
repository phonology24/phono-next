import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

import Diversity2Icon from "@mui/icons-material/Diversity2";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import Groups2Icon from "@mui/icons-material/Groups2";
import SipIcon from "@mui/icons-material/Sip";
import WebhookIcon from "@mui/icons-material/Webhook";
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import WifiChannelIcon from '@mui/icons-material/WifiChannel';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PieChartIcon from '@mui/icons-material/PieChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import styles from '../../styles/dropdownmenu.module.css';

const DropdownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.dropdownContent}>
        <Row className={styles.sectionRow}>
          {/* First set of stacked columns */}
          <Col className={styles.sectionCol}>
            <h4 className={styles.sectionHeadingDropdown}>Business Communications</h4>
            <Row className={styles.itemRow}>
              <Col><Link href="/unified-communication-providers" className={styles.itemColLink}> <Diversity2Icon /> Unified Communications</Link></Col>
              <p className={styles.itemDescription}>Enable your customer to call from anywhere.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="/call-center-solution" className={styles.itemColLink}><CallSplitIcon />  Hosted Call Centers</Link></Col>
              <p className={styles.itemDescription}>The business phone system that you love with added features for power call center users.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="/messaging-services" className={styles.itemColLink}><SipIcon /> Messaging Services</Link></Col>
              <p className={styles.itemDescription}>Have your own phone? No problem. Digital dial tone for any phone system.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="/hosted-pbx-providers" className={styles.itemColLink}><Groups2Icon /> Hosted Phone Systems</Link></Col>
              <p className={styles.itemDescription}>Everything you expect from Link business phone system, hosted through cloud technology</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="/direct-routing-service-providers" className={styles.itemColLink}><VideoCallIcon /> Microsoft Teams</Link></Col>
              <p className={styles.itemDescription}>Bring your own carrier with provisioning.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemColLink}><WebhookIcon /> Communication APIs</Link></Col>
              <p className={styles.itemDescription}>Coming Soon.</p>
            </Row>
          </Col>
          {/* Second set of stacked columns */}
          <Col className={styles.sectionCol}>
            <h4 className={styles.sectionHeadingDropdown}>Engagement Solutions</h4>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemColLink}><SettingsVoiceIcon /> Voice Interactions</Link></Col>
              <p className={styles.itemDescription}>Direct every call to the best person every time.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemColLink}><WifiChannelIcon /> Omnichannel Engagement</Link></Col>
              <p className={styles.itemDescription}>Connect and communicate with all your digital channels in one place.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemColLink}><AutoModeIcon /> Automation</Link></Col>
              <p className={styles.itemDescription}>Create workflows to maximize efficiencies.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemColLink}><PieChartIcon /> Analytics and Reporting</Link></Col>
              <p className={styles.itemDescription}>Real-time performance insights for everything.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemColLink}><SupportAgentIcon /> Agent Management</Link></Col>
              <p className={styles.itemDescription}>Tools to ensure your agents maximize potential.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="/phonology-blogs" className={styles.itemColLink}><BookOutlinedIcon /> Blogs</Link></Col>
              <p className={styles.itemDescription}>Read our blogs on business communication solutions and more.</p>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="/admin-login" className={styles.itemColLink}><BookOutlinedIcon /> Blogs Admin</Link></Col>
              <p className={styles.itemDescription}>Restricted.</p>
            </Row>
          </Col>
          {/* Third set of stacked columns */}
          <Col className={styles.sectionCol}>
            <h4 className={styles.sectionHeadingDropdown}>Integrations</h4>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemCol1}>Phonology Artificial Intelligence</Link></Col>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemCol1}>Microsoft Teams Integrations</Link></Col>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemCol1}>Developer Portal</Link></Col>
            </Row>
            <Row className={styles.itemRow}>
              <Col><Link href="#" className={styles.itemCol1}>Managed IT Services & Support</Link></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DropdownMenu;
