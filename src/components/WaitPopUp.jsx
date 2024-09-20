import React, { useCallback, useContext } from 'react'
import { assets } from '../assets/assets'
import { FeresContext } from '../context/FeresContext'

const WaitPopUp = () => {
    const { setVisible } = useContext(FeresContext)
    return (
        <div className='rounded-2xl w-full fixed bottom-0 z-20 bg-white pt-4'>
            <div className='bg-[#ECFFF3] w-11/12 mx-auto rounded-lg'>
                <img src={assets.popup_img} alt="" />
            </div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-xl font-bold mt-5'>Your order could be delivered later than usual today.</h2>
                <p className='font-medium text-sm text-[#72737B] mt-3'>Due to On going  events, the government has prohibited motorcycles in various places, therefore there are few available restaurants and drivers now.</p>
                <p className='font-medium text-sm text-[#72737B] mt-3'>We apologise that you might experience some delays in receiving your order</p>
                <button onClick={() => setVisible(false)} className='bg-[#0AB247] p-4 w-full rounded-3xl mt-5 mb-3 text-lg font-bold text-white'>Got It</button>
            </div>
        </div>
    )
}

export default WaitPopUp