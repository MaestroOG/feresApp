import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SuccessPopup = ({ image, title, desc }) => {

    const navigate = useNavigate()
    const [successVisible, setSuccessVisible] = useState(true)

    return (
        <div className={`h-screen w-full bg-[#0606064D] fixed top-0 left-0 z-30 flex items-center justify-center ${successVisible ? '' : 'hidden'}`}>

            <div className='bg-white rounded-3xl flex items-center justify-center flex-col w-4/5 py-6 px-4'>
                <img src={image} alt="" />
                <h3 className='font-bold text-xl text-center text-[#0AB247] mt-5'>{title}</h3>
                <p className='text-sm text-[#2F2F3F] text-center mt-2'>{desc}</p>
                <button onClick={() => {
                    setSuccessVisible(false)
                    navigate('/')
                }} className='bg-[#0AB247] px-8 py-4 text-white rounded-full w-3/4 mt-4 font-medium text-xl'>Got it</button>
            </div>

        </div>
    )
}

export default SuccessPopup