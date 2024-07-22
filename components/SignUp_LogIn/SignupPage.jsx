import { useState } from 'react';
import '../../styles/signupForm.css'
import axios from 'axios';

export default function SignupForm() {
  // States for registration
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');



  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setSubmitted(false);

    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(enteredEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    setPasswordErrorMessage(false);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
    setPasswordErrorMessage(false);

    if (e.target.value !== password) {
      setPasswordErrorMessage(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setError(true);
    } else {
      try {
        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          number: number, 
          password: password,
        }

        const response = await axios.post('http://localhost:3001/signup', userData);
        console.log('Backend response:', response.data);
        setSubmitted(true);
        setError(false);
      } catch (error) {
        console.error('Error sending data to the backend:', error);
        setError(true);
      }

    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="signup-success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <p>User {firstName + ' ' + lastName} successfully registered.</p>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="signup-error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p>*Please enter all the fields*: {error}</p>
      </div>
    );
  };


  const passwordError = () => {
    return (
      <div className='signup-error'
        style={{
          display: passwordErrorMessage ? '' : 'none',
        }}>
        <p>*Password confirmation failed* </p>
      </div>
    )
  }


  const emailErrorMessage = () => {
    return (
      <div className="signup-error" style={{ display: emailError ? '' : 'none' }}>
        <p>*Please enter a valid email address*     </p>
      </div>
    );
  };

  const handleNumberChange = (e) => {
    const enteredNumber = e.target.value;
    setNumber(enteredNumber);

    // Validation logic for contact number
    if (!/^[0-9()+-]*$/.test(enteredNumber)) {
      setNumberError('Please enter a valid contact number');
    } else {
      setNumberError('');
    }
  };


  return (
    <div className="signup-form">
      <div>
        <div className="signup-heading" ><h1 style={{ fontWeight: 700, fontSize: "35px" }}>Get $25 Free Test Credit with a Trial Account</h1></div>
        <p style={{ fontSize: "18px" }}>Our experts are here to help you every step of the way. Try our products to see how<br />Phonology can benefit your company.</p>
      </div>

      {/* Calling to the methods */}
      <div className="signup-messages">
        {errorMessage()}
        {passwordError()}
        {emailErrorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="signup-label"></label>
        <input onChange={handleFirstName} className="signup-input" placeholder='First Name'
          value={firstName} type="text" />
        <label className="signup-label"></label>
        <input onChange={handleLastName} className="signup-input" placeholder='Last Name'
          value={lastName} type="text" />

        <label className="signup-label"></label>
        <input onChange={handleEmail} className="signup-input" placeholder='Email Address'
          value={email} type="email" />

        <label className="signup-label"></label>
        <input
          onChange={handleNumberChange}
          className="signup-input"
          placeholder='Contact Number'
          value={number}
          type="text" />

        <label className="signup-label"></label>
        <input onChange={handlePassword} className="signup-input" placeholder='Password'
          value={password} type="password" />

        <label className="signup-label"></label>
        <input onChange={handleConfirmPassword} className="signup-input" placeholder='Confirm Password'
          value={confirmPassword} type="password" />

        <button onClick={handleSubmit} className="signup-btn" type="submit" disabled={!confirmPassword || confirmPassword !== password || emailError}
        >
          Signup
        </button>
      </form>
    </div>
  );
}