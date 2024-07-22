import React, { useState } from 'react';
import axios from 'axios'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../../styles/signupComponent.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';

const SignUpComponent = ({ orderConfirmationData, togglePayment, sendDataToParent, setUserName, toggleSignupComponent }) => {
    const [IsSignUpVisible, setIsSignUpVisible] = useState(true);
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [showOTPField, setShowOTPField] = useState(false);
    const [showLoginOTPField, setShowLoginOTPField] = useState(false);
    const [otp, setOTP] = useState('');
    const [loginOTP, setLoginOTP] = useState('');
    const [ResponseMessage, setResponseMessage] = useState('');
    const [emailId, setEmailId] = useState('');
    const [userId, setUserId] = useState('')
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [inputUserName, setInputUserName] = useState('');

    const sendDataToParentComponent = (UserId) => {
        sendDataToParent(UserId);
        console.log(userId);
    };
    console.log(orderConfirmationData);
    const [SignupData, setSignupData] = useState({
        name: '',
        email: '',
        phone: '',
        country: 'india'
    });

    let handleLoginOTPChange = (event) => {
        setLoginOTP(event.target.value);
        console.log(loginOTP);
    }

    let handleEmailChange = (event) => {
        setEmailId(event.target.value);
    }

    const openSignUpDiv = () => {
        setIsSignUpVisible(true);
        setIsLoginVisible(false);
    };

    const openLoginDiv = () => {
        setIsLoginVisible(true);
        setIsSignUpVisible(false);
    };

    const openLoginOTPField = () => {
        setShowLoginOTPField(true);
        setIsLoginVisible(false);
    };

    const hideLoginOTPField = () => {
        setShowLoginOTPField(false);
        // setShowPayment(true);
        togglePayment()
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...SignupData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting data to the backend:', SignupData);
        console.log(ResponseMessage);
        try {
            console.log(SignupData);
            const response = await axios.post('https://api.phonology.io/users/sign-up', SignupData);
            console.log(response);
            if (response.data.code === 1001) {
                setShowOTPField(true);
                setEmailId(SignupData.email);
            }
            toast.info('OTP Has Been Sent To Provided Mail Address, Verify To Continue');
        } catch (error) {
            toast.error('Mail Address Already Exists, Log In To Continue');
        }
    };


    const handleOTPSubmit = async (e, SignupData, closeSignUpDiv) => {
        e.preventDefault();
        try {
            console.log(SignupData.email, "SignUp Data")
            let email = SignupData.email;
            const response = await axios.post('https://api.phonology.io/users/verify-signup', { email, otp: otp });
            console.log(response, "response from verify signup")
            let userID = response.data.id

            if (response.data.code === 1001) {
                setUserId(userID);
                console.log(response.data.id, "in response")
                setIsSignUpVisible(false);
                setShowOTPField(false);
                togglePayment();
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                sendDataToParentComponent(response.data.id);
            }
            const tokens = localStorage.getItem('access_token') || null;
            setupAxiosInterceptors();
            // getTokens();
            if (tokens !== null) {
                const decodedToken = jwtDecode(tokens);
                console.log(decodedToken.name);
                setUserName(decodedToken.name);
                toggleSignupComponent(false);
            }
        } catch (error) {
            toast.error('Invalid OTP', error);
        }
    };


    const handleEmailSubmit = async (e, emailId) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('https://api.phonology.io/users/login', { email: emailId })
            if (response.data.code === 1001) {
            toast.info('OTP Has Been Send to Email')
            }
        } catch (error) {
            toast.error('Email ID Not Registered')
        }
    }


    const handleLoginOTPSubmit = async (e, emailId, loginOTP) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.phonology.io/users/verify-login', { email: emailId, otp: loginOTP })
            let responseMessage = response.data.message
            let userID = response.data.id
            if (response.data.code === 1001) {
                setUserId(userID);
                togglePayment();
                setShowLoginOTPField(false);
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                sendDataToParentComponent(response.data.id);
            }
            const tokens = localStorage.getItem('access_token') || null;
            setupAxiosInterceptors();
            // getTokens();
            if (tokens !== null) {
                const decodedToken = jwtDecode(tokens);
                console.log(decodedToken.name);
                setUserName(decodedToken.name);
                toggleSignupComponent(false);
            }
        } catch (error) {
            console.log(error)
        }
    }


    const setupAxiosInterceptors = (accessToken) => {
        // Add a request interceptor
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('access_token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        // Add a response interceptor
        // axios.interceptors.response.use(
        //     response => {
        //         return response;
        //     },
        //     async error => {
        //         const originalRequest = error.config;
        //         if (error.response.status === 401 && !originalRequest._retry) {
        //             originalRequest._retry = true;
        //             const refreshToken = localStorage.getItem('refresh_token');
        //             const res = await axios.post('https://api.phonology.io/auth/refresh-token', { token: refreshToken });

        //             if (res.status === 200) {
        //                 localStorage.setItem('access_token', res.data.access_token);
        //                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
        //                 return axios(originalRequest);
        //             }
        //         }
        //         return Promise.reject(error);
        //     }
        // );
    };

    const getTokens = () => {
        const tokens = localStorage.getItem('tokens');
        return tokens ? JSON.parse(tokens) : null;
        console.log(tokens)
    };


    return (
        <div>
            <div className='signupDiv'>
                {IsSignUpVisible && (
                    <h6 className='signupHeading'>Sign Up To Continue Purchase : </h6>
                )}
                {IsSignUpVisible && (
                    <p className='loginLinkText'>Already a Customer? Log In <button className='loginLinkButton' onClick={() => openLoginDiv()}>Here</button></p>
                )}
                {IsSignUpVisible && (
                    <form onSubmit={handleSubmit} className='signupFormCart'>
                        <label>
                            <input type="text" name="name" value={SignupData.name} onChange={handleInputChange} required placeholder='Full Name' id='nameInput' />
                        </label>
                        <br />
                        <label>
                            <input type="email" name="email" value={SignupData.email} onChange={handleInputChange} required placeholder='Email Address' id='emailInput' />
                        </label>
                        <br />
                        <label>
                            <input type="tel" name="phone" value={SignupData.phone} onChange={handleInputChange} required placeholder='Contact Number' id='phoneInput' />
                        </label>
                        <br />
                        <button type="submit" id='signupButton'>Submit<ArrowRightIcon /></button>
                    </form>
                )}

                {showOTPField && (
                    <div className="otpSignUpDiv">
                        <form onSubmit={(e) => handleOTPSubmit(e, SignupData)}>
                            <div>
                                <input type="text" id="otpField" name="otp" onChange={(e) => setOTP(e.target.value)} required placeholder='Please Enter OTP Received in Mail' />
                            </div>
                            <input type="hidden" name="email" value={emailId} />
                            <button type="submit" id='OTPSignupBtn'>Submit<ArrowRightIcon /></button>
                        </form>
                    </div>
                )}
            </div>

            {isLoginVisible && (<h6 className='signupHeading'>Log In To Continue Purchase : </h6>)}
            {isLoginVisible && (<p className='loginLinkText'>Don &apos; t Have An Account? Sign Up <button className='loginLinkButton' onClick={() => openSignUpDiv()}>Here</button></p>
            )}
            {isLoginVisible && (
                <div className='loginDiv'>
                    <form onSubmit={(e) => handleEmailSubmit(e, emailId)}>
                        <label>
                            <input type="email" id='loginEmailInput' name="email" onChange={handleEmailChange} placeholder='Please Enter Registered Email.' required />
                        </label>
                        <br />
                        <button type="submit" id='LoginButton' onClick={(e) => {
                            handleEmailSubmit(e, emailId);
                            openLoginOTPField();
                        }}>Get OTP <ArrowRightIcon /></button>
                    </form>
                </div>
            )}

            {showLoginOTPField && (<h6 className='signupHeading'>An OTP Has Been Send To Your Mail.</h6>)}

            {showLoginOTPField && (
                <form onSubmit={(e) => handleLoginOTPSubmit(e, emailId, loginOTP)}>
                    <div>
                        <input type="text" id="LoginOTPInput" name="otp" onChange={handleLoginOTPChange} required placeholder='Enter Log In OTP To Continue' />
                        <button type="submit" id='OTPLoginBtn' >Submit</button>
                    </div>
                </form>
            )}


        </div>
    )
}

export default SignUpComponent;