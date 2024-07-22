"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/getPhoneNumbers.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AnchorTemporaryDrawer from './Drawer';
import PlanCards from './PlanCards';
import { event } from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countriesData from '../../public/jsonFiles/countries.json'

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const defaultCountryCode = '+91';
  const [forwardCountry, setForwardCountry] = useState(defaultCountryCode);
  const [states, setStates] = useState([]);
  const [rateCenters, setRateCenters] = useState([]);
  const [didNumber, setDidNumber] = useState([]);
  const [enableCallForward, setEnableCallForward] = useState(false)
  const [forwardToNumber, setForwardToNumber] = useState('');
  const [validForwardNumber, setValidForwardNumber] = useState(false);
  const [validNumberDiv, setValidNumberDiv] = useState(false)
  const [activationRequirement, setActivationRequirment] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [AdditionalRequirements, setAdditionalRequirements] = useState('');
  let [selectedNumberType, setSelectedNumberType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US');
  let [CountryForActivationRequirements, setCountryForActivationRequirements] = useState('');
  let [selectedState, setSelectedState] = useState('US-TX');
  let [selectedRateCenter, setSelectedRateCenter] = useState('42284');
  const [selectedRateCenterName, setSelectedRateCenterName] = useState('');
  const [selectedDidNumber, setSelectedDidNumber] = useState('');
  const [ResponseMessage, setResponseMessage] = useState('');
  const [dataFromChild, setDataFromChild] = useState('');
  const [userIdforConfirmation, setUserIdforComfirmation] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [fetch, setFetch] = useState(true);
  const handleSelect = (amount) => {
    setSelectedAmount(amount);
  };
  const receiveDataFromSignUp = (data) => {
    console.log('Data received from SignUpComponent:', data);
    setUserIdforComfirmation(data);
  };
  let orderConfirmationData = ` plan_id:1, UserID:${userIdforConfirmation} , Country: ${selectedCountry}, State: ${selectedState}, RateCenter: ${selectedRateCenter}, RateCenterName: ${selectedRateCenterName}, DIDNumber: ${selectedDidNumber}, EmailID:"athuljonnie93@gmail.com"`;
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCountryChange = (event) => {
    let newValue = event.target.value;
    if (newValue !== '') {
      setSelectedCountry(newValue);
      setSelectedState('');
      console.log(selectedState)
      setDidNumber('');
      setSelectedRateCenter('');
      setRateCenters('');
      setResponseMessage('');
      setStates('');
      fetchedStates(newValue);
    }
    const selectedOption = event.target.selectedOptions[0];
    const countryName = selectedOption.getAttribute('data');
    setCountryForActivationRequirements(countryName);
 
  };

  const handleForwardCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    setForwardCountry(event.target.value);
    setForwardToNumber('');

  }

  const handleEnableForward = () => {
    setEnableCallForward(true);
  }

  const handleForwardToNumberChange = (event) => {
    const number = event.target.value;
    setValidNumberDiv(true);
    setForwardToNumber(number);
    if (number.length === 10 && /^\d+$/.test(number)) {
      setValidForwardNumber(true);
      setValidNumberDiv(false);
    }
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    let newStateName = event.target.value;
    let newStateValue = states[1].value
    fetchRateCenters(newStateName);
    setResponseMessage('');
    setDidNumber('');

  };

  const handleRateCenterChange = (event) => {
    let newValue1 = event.target.value;
    setSelectedRateCenter(newValue1);
    const selectedOption = event.target.selectedOptions[0];
    const rateCenterName = selectedOption.getAttribute('data');
    setSelectedRateCenterName(rateCenterName);
    setResponseMessage('');
    setDidNumber('');
  };

  const handleDidNumberChange = (event) => {
    setSelectedDidNumber(event.target.value);
    setShowCards(true);
    setResponseMessage('');

  }

  const handleNumberTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedNumberType(selectedType);
    setActivationRequirment(true);
    setResponseMessage('');
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://api.phonology.io/countries',
        );
        const fetchedCountries = response.data || [];

        setCountries(fetchedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
    fetchedStates();
  }, []);

  const handleActivationRequirement = async (selectedCountry) => {
    try {

      if (CountryForActivationRequirements == '') {
        CountryForActivationRequirements = 'US'
      }

      if (selectedNumberType == '') {
        selectedNumberType = 'Tf';
      }

      const response = await axios.get(`https://api.phonology.io/countries/activation-requirements/${CountryForActivationRequirements}/${selectedNumberType}`);
      const additionalRequirements = response.data;
      setAdditionalRequirements(additionalRequirements);
      console.log(selectedNumberType);
    } catch (error) {
      console.error('Error submitting data:', error);
      const errorMessage = error.response ? error.response.data.message : 'An error occurred while submitting the data.';
    }
  };

  useEffect(() => {
    if (activationRequirement) {
      handleActivationRequirement(selectedCountry, selectedNumberType);
    }
  }, [activationRequirement]);

  const fetchedStates = async (newValue) => {
    try {

      let countryCode;

      console.log(newValue);
      if (newValue !== undefined) {
        countryCode = newValue
      } else {
        countryCode = selectedCountry
      }
      console.log(countryCode, "Country code from fetchedstates")
      const response = await axios.post(
        'https://api.phonology.io/states',
        {
          country: countryCode,
          value: selectedNumberType
        });
      const fetchStates = response.data || [];
      console.log(fetchStates, "Fetched States");
      if (fetchStates.length === 0) {
        setSelectedState('')
        setResponseMessage('No states found.');
        setRateCenters('');
        // setFetch(false)
      } else {
        setStates(fetchStates);
        fetchRateCenters(selectedState);

      }
    } catch (error) {
      console.error('Error fetching states:', error);
    }
    console.log("before calling frc func")
  };




  const fetchRateCenters = async (newStateName) => {
    try {
      console.log(selectedCountry, selectedState, newStateName);
      let stateCode;
      if (newStateName === '') {
        stateCode = 'US-TX';
      } else {
        stateCode = newStateName;
      }
      console.log(selectedCountry, stateCode);
      setRateCenters('');
      const response = await axios.post(
        'https://api.phonology.io/rate-centers',
        {
          country: selectedCountry,
          state: stateCode
        }
      )
      const fetchedRateCenters = response.data || [];
      if (fetchedRateCenters.length === 0) {
        setResponseMessage("No rate centers found.");
        setSelectedRateCenter('');
      } else {
        console.log(fetchedRateCenters, "frc")
        setRateCenters(fetchedRateCenters);
      }

    } catch (error) {
      console.error('Error fetching rate centers:', error);
    }
  };

  useEffect(() => {
    const fetchDidNumbers = async (newValue1) => {
      try {
        let rateCenter;
        if (rateCenter === '') {
          rateCenter = newValue1
        } else {
          rateCenter = selectedRateCenter
        }
        console.log(rateCenter, "fdidn");
        const countryCode = selectedCountry;
        const stateCode = selectedState;
        console.log(countryCode, stateCode, rateCenter, "sd")
        const response = await axios.post(
          'https://api.phonology.io/numbers',
          { country: countryCode, state: stateCode, ratecenter: rateCenter }
        );
        const fetchedNumbers = response.data || [];
        let fetchedNumbersLength = fetchedNumbers.length

        if (fetchedNumbersLength === 0) {
          setResponseMessage(" No numbers found.");
        }
        setDidNumber(fetchedNumbers);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (selectedRateCenter) {
      fetchDidNumbers();
      }
  }, [selectedRateCenter])


  useEffect(() => {
    const callForwardApi = async () => {
      try {
        const postData = {
          i_account: "51046740",
          service_feature_name: "forward_mode",
          flag_value: "F"
        };

        const response = await axios.post('https://api.phonology.io/call-forward', postData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    if (enableCallForward === true) {
      callForwardApi();
    }
  }, [handleForwardToNumberChange])

  useEffect(() => {
    const forwardNumber = async () => {
      try {
        const postData = {
          "i_account": "51046740",
          "domain": "192.168.1.5",
          "redirect_number": forwardToNumber,
          "countrycode": forwardCountry,
          "name": "test"
        }
        console.log(postData)
        const response = await axios.post('https://api.phonology.io/call-forward/number', postData);

        if (response.status == 201) {
          console.log(response.data.i_follow_me_number)
          toast.success('Call forwarding have been enabled');

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    if (enableCallForward) {
      forwardNumber();
    }
    setEnableCallForward(false)
  }, [handleEnableForward])

  return (
    <div className='dropdownDiv'>
      <h1 className="mainHeadingDIDNumbers">International Virtual Phone Numbers from 150+ Countries </h1>
      <button className="shoppingBag" onClick={toggleDrawer} style={{fontSize: "20px"}}><LocalMallIcon /></button>
     <div className='countrysDiv'>
      <div className='countryDropDown'>
        <div className="selectHeading"><p>SELECT A PHONE NUMBER</p></div>
        <select value={selectedCountry} onChange={handleCountryChange} id='countrySelect'>

          {countries &&
            countries.map((country, index) => (
              <option key={index} value={country.value} data={country.name}>
                {country.name}
              </option>
            ))}
        </select>
      </div>
      <div className='actReqDiv'>
        <select value={selectedNumberType} onChange={handleNumberTypeChange} id='numberTypeSelect'>
          <option value="Tf">Toll-free</option>
          <option value="Geo">Geographic</option>
          <option value="Mob">Mobile</option>
        </select>
      </div>

      <div className='dropdownDiv1'>
        <select value={selectedState} onChange={handleStateChange} id='stateSelect'>
          <option value="" disabled>
            Select a state
          </option>
          {states &&
            states.map((state, index) => (
              <option key={index} value={state.value}>
                {state.name}
              </option>
            ))}
        </select>

        <div className='dropdivb'>
          <select value={selectedRateCenter} onChange={handleRateCenterChange} id='rateCenterSelect'>
            <option value="" disabled>
              Select a rate center
            </option>
            {rateCenters &&
              rateCenters.map((rateCenter, index) => (
                <option key={index} value={rateCenter.value} data={rateCenter.name}>
                  {rateCenter.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className='didnumberDrop' style={{ marginBottom: "3rem" }} >
        <select value={selectedDidNumber} onChange={handleDidNumberChange} id='didNumberSelect'>
          <option value="" disabled>
            Select a DID number
          </option>
          {didNumber.length > 0 && didNumber.map((didNumber, index) => (
            <option key={index} value={didNumber.value}>
              {didNumber.number}
            </option>
          ))}
        </select>

        {(selectedNumberType &&
          <div className="activation-requirements-dropdown">
            <div className="dropdown-act">
              <button className="dropbtn">  <span style={{ color: "blue", fontSize: "20px" }}> <InfoIcon /></span>&nbsp;&nbsp;&nbsp;&nbsp;Activation Requirements <span><ArrowDropDownIcon /></span></button>
              <div className="dropdown-act-content">
                {Object.keys(AdditionalRequirements).length === 0 ? (
                  <p style={{ fontSize: "14px" }}>Not required</p>
                ) : (
                  <ul>
                    {Object.entries(AdditionalRequirements).map(([key, value]) => (
                      <li key={key}>
                        {key.replace(/_/g, " ")}:<strong><i> {value}</i> </strong>,
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
</div>
      <div className='callForwarding'>
        <div className="callForwardHeading">FORWARD CALLS TO</div>
        <select value={forwardCountry} onChange={handleForwardCountryChange} id='callForwardServiceSelect'>

          <option value="ip">
            IP Address / PBX
          </option>

          <option value="voip" >
            VoIP / SIP Trunking
          </option>

          <option value="+91">
            +91 - India
          </option>

          <option value="+1">
            +1 - United States
          </option>

          <option value="+1">
            +1 - Canada
          </option>

          <option value="+52">
            +52 - Mexico
          </option>

          <option value="+44">
            +44 - United Kingdom
          </option>

          <option value="+61">
            +61 - Australia
          </option>

          <option value="" disabled>
            ----------------
          </option>
          {countriesData.countries && countriesData.countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.code} - {country.name}
            </option>
          ))}
        </select>

        <div >
          <span id="countryCodeSpan">{forwardCountry}</span>
          <input
            type='text'
            id='callForwardNumberInput'
            value={forwardToNumber}
            onChange={handleForwardToNumberChange}
            placeholder=''
          />
        </div>
        <button
          id="enableforwardBtn"
          disabled={validNumberDiv}
          onClick={handleEnableForward}
          className={!validNumberDiv && selectedDidNumber ? "" : "disabled"}
        >
          Enable Forwarding
        </button>
        <div className="responsemessage">
          {ResponseMessage && <p>{ResponseMessage}</p>}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        theme="light"
      />
      <ToastContainer />
      <AnchorTemporaryDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} orderConfirmationData={orderConfirmationData} userID={userIdforConfirmation} selectedAmount={selectedAmount} forwardCountry={forwardCountry} forwardToNumber={forwardToNumber} sendDataToParent={receiveDataFromSignUp} />
      {showCards && (<PlanCards onSelect={handleSelect} toggleDrawer={toggleDrawer} />)}

    </div>
  );
};

export default CountryDropdown;
