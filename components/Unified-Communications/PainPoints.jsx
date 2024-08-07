import React from 'react';
// import '../../styles/unified-communications.css';

const PainPoints = () => {
  return (
    <div className="pain-points-container">
      <div className="left-section">
        <h3 className="section-heading-unified">
          Challenges <span className="solved">Addressed</span>
        </h3>
        <ul className="painpointsul">
          <li>
            Constraining your income potential.
            <p className="painpoints-p">
              Cease earning minimal commissions on another entity&apos;s service.<br />
              Commence earning 70% margins or even higher.
            </p>
          </li>
          <li>
            Assisting for a system beyond your control.
            <p className="painpoints-p">
              Take ownership of the solution and acquire the control necessary <br />to support your customers effectively.
            </p>
          </li>
          <li>
            Relinquishing your customers to others.
            <p className="painpoints-p">
              Instead of directing your customers to other vendors,<br /> provide them with a solution branded for your business.
            </p>
          </li>
          <li>
            Training your team
            <p className="painpoints-p">
              Training your employees becomes effortless with our user-friendly web portal.
            </p>
          </li>
        </ul>
      </div>

      <div className="right-section">
        <div className="client-feedback">
          <p className="feedback-paragraph">
            &quot;Embracing UCaaS has been a game-changer for our business. It not only slashed costs but also enhanced our agility, enabling swift access to cutting-edge collaboration features. A truly transformative solution!&quot;
          </p>
          <p>- TechTarget</p>
        </div>
      </div>
    </div>
  );
}

export default PainPoints;
