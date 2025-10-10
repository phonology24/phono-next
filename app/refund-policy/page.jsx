import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Refund Policy | Phonology',
};

const RefundPolicy = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '100px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    marginBottom: '10px',
  };

  const listStyle = {
    marginLeft: '20px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>REFUND POLICY</h2>

      <p style={paragraphStyle}><b>Effective Date:</b> 01 January 2025</p>
      <p style={paragraphStyle}>
        This Refund Policy applies to all telecommunications services provided by <b>Phonology IT Solutions</b>. 
        By using our services, you acknowledge and agree to this policy.
      </p>

      <p style={paragraphStyle}><b>1. Overview</b></p>
      <p style={paragraphStyle}>
        Phonology IT Solutions strives to ensure customer satisfaction by delivering high-quality telecom services.
        This Refund Policy explains the circumstances under which refunds may be issued for our services.
      </p>

      <p style={paragraphStyle}><b>2. General Policy</b></p>
      <p style={paragraphStyle}>
        All payments made toward subscriptions, call credits, setup fees, or recurring charges are generally 
        <b> non-refundable</b> once services have been activated or used. However, exceptions may apply as described below.
      </p>

      <p style={paragraphStyle}><b>3. Eligible Refund Scenarios</b></p>
      <ul style={listStyle}>
        <li>Service activation failure due to a technical issue originating from Phonology IT Solutions.</li>
        <li>Duplicate payment for the same transaction.</li>
        <li>Billing or accounting error resulting in incorrect charges.</li>
      </ul>

      <p style={paragraphStyle}><b>4. Non-Refundable Scenarios</b></p>
      <ul style={listStyle}>
        <li>Service interruptions caused by internet connectivity, local network, or third-party carriers.</li>
        <li>Termination due to violation of our Terms of Service or misuse of the platform.</li>
        <li>Customer decision to discontinue services before the end of a billing period.</li>
        <li>Promotional or discounted plans, including trial-based subscriptions.</li>
      </ul>

      <p style={paragraphStyle}><b>5. Refund Request Process</b></p>
      <p style={paragraphStyle}>
        To request a refund, please contact us at <a href="mailto:info@phonology.io">info@phonology.io</a> 
        within <b>7 calendar days</b> of your payment. Include the following details:
      </p>
      <ul style={listStyle}>
        <li>Full name and registered email address</li>
        <li>Invoice number or transaction ID</li>
        <li>Reason for refund request</li>
      </ul>
      <p style={paragraphStyle}>
        Once verified, eligible refunds will be processed within <b>10–15 business days</b> via the original payment method.
      </p>

      <p style={paragraphStyle}><b>6. Service Credits</b></p>
      <p style={paragraphStyle}>
        In certain cases, Phonology IT Solutions may offer <b>service credits</b> instead of monetary refunds. 
        These credits can be applied toward future invoices or service usage.
      </p>

      <p style={paragraphStyle}><b>7. Dispute Resolution</b></p>
      <p style={paragraphStyle}>
        Any billing disputes must be reported within <b>15 days</b> of the transaction date. 
        After this period, all charges will be considered final.
      </p>

      <p style={paragraphStyle}><b>8. Policy Updates</b></p>
      <p style={paragraphStyle}>
        Phonology IT Solutions reserves the right to modify this Refund Policy at any time. 
        Updates will be posted on our official website, and continued use of our services implies acceptance of the revised policy.
      </p>

      <p style={paragraphStyle}><b>Contact Us</b></p>
      <p style={paragraphStyle}>
        For any questions regarding this Refund Policy, please contact:<br/>
        📧 <a href="mailto:info@phonology.io">info@phonology.io</a><br/>
        🌐 <a href="https://www.phonology.io" target="_blank" rel="noopener noreferrer">www.phonology.io</a>
      </p>
    </div>
  );
};

export default RefundPolicy;
