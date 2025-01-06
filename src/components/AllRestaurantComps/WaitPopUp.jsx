import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import Spinner from '../Spinner'

const WaitPopUp = ({ details, loading }) => {
    const { setVisible } = useContext(FeresContext)

    if (loading) {
        return <Spinner />
    }
    return (
        <div className='rounded-2xl w-full fixed bottom-0 z-20 bg-white pt-4'>
            <div className='bg-[#ECFFF3] w-11/12 mx-auto rounded-lg'>
                <img src={assets.popup_img} alt="" />
            </div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-xl font-bold mt-5'>{details?.name}.</h2>
                <p className='font-medium text-sm text-[#72737B] mt-3'>{details?.details}.</p>
                <button onClick={() => setVisible(false)} className='bg-[#0AB247] p-4 w-full rounded-3xl mt-5 mb-3 text-lg font-bold text-white'>Got It</button>
            </div>
        </div>
    )
}

export default WaitPopUp