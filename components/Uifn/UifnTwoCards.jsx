import React from "react";
import '../../styles/uifn.css';

const UifnTwoCards = () => {
  return (
    <div className="uifn-two-cards">

      <div className="uifn-card uifn-right-card">
        <h3>How UIFN Numbers Work</h3>
        <ul className="uifn-ul">
          <li className="uifn-li">
          <b>Single Global Toll-Free Number: </b>UIFN offers a single, toll-free number that customers can dial from various countries, enabling them to connect with your business at no cost to them.
          </li>
          <li className="uifn-li">
          <b>Managed by the ITU: </b> UIFN numbers are regulated by the International Telecommunication Union (ITU), which ensures consistent standards for accessibility and operation across regions.
          </li>
          <li className="uifn-li">
          <b>Requires Country-Specific Activation: </b>Although it’s a universal number, businesses must activate UIFN in each country where they want it to be accessible, allowing for controlled international reach.
          </li>
          <li className="uifn-li">
          <b>Country Code and Format: </b> UIFN numbers use a +800 country code, indicating their global toll-free status. The full number format includes 11 digits to standardize dialing across regions.
          </li>
          <li className="uifn-li">
          <b>Cost Coverage by the Business: </b> Calls made to UIFN numbers are toll-free for the caller, with the business covering the charges, making it customer-friendly and accessible.

          </li>
          <li className="uifn-li">
          <b>Accessible from Landlines and Some Mobile Networks: </b> UIFN numbers are primarily reachable from landlines, though some mobile networks may also support them, depending on the country’s regulations and network providers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UifnTwoCards;
