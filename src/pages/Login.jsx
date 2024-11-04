import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

const Login = () => {
    const [number, setNumber] = useState('')
    const [login, setLogin] = useState(true)

    const [loading, setLoading] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => setLoading(false), 3000);

        const handleLoad = () => {
            clearTimeout(timeoutId);
            setFadingOut(true);
            setTimeout(() => setLoading(false), 500);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeoutId);
        };
    }, []);

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

                        <button className='mt-6 w-full bg-[#0AB247] p-4 text-white text-lg font-medium rounded-full'>{login ? 'Sign In' : 'Sign Up'}</button>
                    </div>
                </div>

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


                <div className='flex items-center justify-center gap-1 mb-14 text-[#2F2F3F]'>
                    {!login ? 'Already have an account' : "Don't have an account"}
                    <span className='text-[#0AB247] font-bold' onClick={() => setLogin(prev => !prev)}>{!login ? 'Sign In' : 'Sign Up'}</span>
                </div>

                <footer className='text-sm text-[#767578] text-center w-[90%] mx-auto'>
                    If you are creating a new account, <span className='underline'>Terms & Conditions</span> and <span className='underline'>Privacy Policy</span> will apply. You can also set up your communication preferences
                </footer>
            </Container>
        </>
    )
}

export default Login