import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'  // Import uuid for unique token generation
import Container from '../components/Container'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import axios from 'axios'
import { usePost } from '../servies/usePost'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/slices/userAuthSlice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error, post } = usePost()
    const [number, setNumber] = useState('')
    const [login, setLogin] = useState(true)
    const [loading, setLoading] = useState(true)
    const [fadingOut, setFadingOut] = useState(false)
    const [showOtpInput, setShowOtpInput] = useState(false)
    const [otp, setOtp] = useState(['', '', '', ''])

    const otpRefs = Array(4).fill().map(() => useRef())

    useEffect(() => {
        const timeoutId = setTimeout(() => setLoading(false), 3000)

        const handleLoad = () => {
            clearTimeout(timeoutId)
            setFadingOut(true)
            setTimeout(() => setLoading(false), 500)
        }

        window.addEventListener("load", handleLoad)

        return () => {
            window.removeEventListener("load", handleLoad)
            clearTimeout(timeoutId)
        }
    }, [])

    const handleLogin = () => {
        setShowOtpInput(true)
    }

    const handleOtpChange = (value, index) => {
        if (isNaN(value)) return
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        // Focus next input box
        if (value && index < otpRefs.length - 1) {
            otpRefs[index + 1].current.focus()
        }

        // If all OTP fields are filled, trigger OTP submission
        if (newOtp.every(digit => digit !== "")) {
            handleOtpSubmit(newOtp.join(''))
        }
    }

    const handleOtpSubmit = async (otpnumber) => {
        try {
            const response = await axios.post(
                'https://demo.feres.co/userslogin',
                {
                    social_unique_id: "",
                    password: "",
                    device_timezone: "GMT+5",
                    app_version: "1.0.0",
                    device_type: "android",
                    number: otpnumber,
                    phone: number,
                    device_id: "device12345",
                    login_by: "",
                    country_phone_code: "+251",
                    device_token: ""
                }
            )

            if (response?.data?.success) {
                // Check if cart_unique_token already exists in local storage
                let cartUniqueToken = localStorage.getItem("cart_unique_token")
                if (!cartUniqueToken) {
                    // Generate a new cart_unique_token if it doesn't exist
                    cartUniqueToken = uuidv4()
                    localStorage.setItem("cart_unique_token", cartUniqueToken)
                }

                // Await user details from API
                const userDetailsResponse = await post('/api/user/get_user_detail', {
                    phone: response.data.phone,
                    server_token: response.data.token,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    city: response.data.city,
                    country_code: response.data.country_phone_code,
                    app_version: response.data.app_version,
                    device_type: response.data.device_type,
                    device_token: response.data.device_token,
                    address: response.data.address,
                })

                // Assign user details to userData and dispatch to store
                const userData = {
                    ...response.data,
                    userDetail: userDetailsResponse?.data?.user,
                    cart_unique_token: cartUniqueToken
                }

                dispatch(loginUser(userData))
                localStorage.setItem("userData", JSON.stringify(userData))
            }

            navigate('/')
        } catch (error) {
            console.error("Error during OTP verification:", error)
        }
    }

    return (
        <>
            {loading && <Loader fadingOut={fadingOut} />}
            <Container className={'py-5'}>
                <div className='flex items-center gap-2 justify-end'>
                    <div className='bg-[#EBF9EE] rounded-full flex items-center justify-center p-2 w-max'>
                        <img src={assets.help_circle_green} alt="" />
                    </div>
                    <div className='bg-[#EBF9EE] flex items-center justify-center py-2 px-3 gap-2'>
                        <img src={assets.message_translate_green} alt="" />
                        <p className='text-sm text-[#0AB247] font-medium'>English</p>
                        <img src={assets.arrow_down_green} alt="" />
                    </div>
                </div>

                <div className='mt-14'>
                    <img src={assets.feres_icon} alt="" className='mx-auto' />

                    {!showOtpInput ? (
                        <div className='mt-12'>
                            <h2 className='text-[#2F2F3F] text-[26px] font-bold text-center'>Enter your mobile number</h2>
                            <div className='flex items-center gap-3 mt-6'>
                                <Link to={'/deliveryservice/deliverydetails/recipientdetails/updatephone/selectphonecountry'} className='w-[129px] h-[58px] p-2 rounded-xl bg-[#F8F8F8] flex items-center justify-between'>
                                    <img src={assets.country_flag} alt="" />
                                    <p className='font-medium text-[#2F2F3F]'>+44</p>
                                    <img src={assets.arrow_down} alt="" />
                                </Link>
                                <div className='w-[259px] h-[58px] rounded-xl py-2 px-5 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] flex items-center justify-between transition-all'>
                                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className='w-full bg-transparent outline-none h-full' />
                                    {number.length > 0 && <img src={assets.close} alt="" onClick={() => setNumber("")} />}
                                </div>
                            </div>
                            <button className='mt-6 w-full bg-[#0AB247] p-4 text-white text-lg font-medium rounded-full' onClick={handleLogin}>{login ? 'Sign In' : 'Sign Up'}</button>
                        </div>
                    ) : (
                        <div className='mt-12'>
                            <h2 className='text-[#2F2F3F] text-[26px] font-bold text-center'>Enter the 4-digit OTP</h2>
                            <div className='flex justify-center gap-3 mt-6'>
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(e.target.value, index)}
                                        maxLength="1"
                                        ref={otpRefs[index]}
                                        className='w-12 h-12 text-center text-2xl border rounded-md'
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className='mt-7 flex items-center justify-center gap-2'>
                        <hr className='w-full' />
                        <p className='text-[#767578]'>Or</p>
                        <hr className='w-full' />
                    </div>

                    {/* Auth Buttons */}

                    <div className='mt-6 w-full'>
                        <button className='w-full border border-[#D7D7D9] rounded-full flex items-center justify-center gap-2 p-4 mb-6'>
                            <img src={assets.google_icon} alt="" />
                            <p className='text-[#323136] text-lg font-medium'>Continue with Google</p>
                        </button>
                        <button className='w-full border border-[#D7D7D9] rounded-full flex items-center justify-center gap-2 p-4 mb-7'>
                            <img src={assets.fb_icon} alt="" />
                            <p className='text-[#323136] text-lg font-medium'>Continue with Facebook</p>
                        </button>
                    </div>
                </div>

                <footer className='text-sm text-[#767578] text-center w-[90%] mx-auto'>
                    If you are creating a new account, <span className='underline'>Terms & Conditions</span> and <span className='underline'>Privacy Policy</span> will apply. You can also set up your communication preferences
                </footer>
            </Container>
        </>
    )
}

export default Login
