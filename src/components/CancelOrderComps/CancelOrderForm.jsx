import React, { useContext, useState } from 'react'
import { FeresContext } from '../../context/FeresContext'

const CancelOrderForm = () => {

    const { cancelOption, setCancelOption, setCancelReason } = useContext(FeresContext)


    const handleChange = (e) => {
        setCancelOption(e.target.value)
    }
    return (
        <div className='px-4 mt-9'>
            <div className='flex items-center justify-between'>
                <p className='text-lg text-[#1E1E1E]'>Waiting for long time</p>
                <input type="radio" name='cancelOrder' value={"1"} checked={cancelOption === '1'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='text-lg text-[#1E1E1E]'>Unable to contact driver</p>
                <input type="radio" name='cancelOrder' value={"2"} checked={cancelOption === '2'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='text-lg text-[#1E1E1E]'>Driver denied to go to destination</p>
                <input type="radio" name='cancelOrder' value={"3"} checked={cancelOption === '3'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='text-lg text-[#1E1E1E]'>Driver denied to come to pickup</p>
                <input type="radio" name='cancelOrder' value={"4"} checked={cancelOption === '4'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='text-lg text-[#1E1E1E]'>Wrong address shown</p>
                <input type="radio" name='cancelOrder' value={"5"} checked={cancelOption === '5'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='text-lg text-[#1E1E1E]'>The price is not reasonable</p>
                <input type="radio" name='cancelOrder' value={"6"} checked={cancelOption === '6'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <p className='text-lg text-[#1E1E1E]'>I want to order another restaurant</p>
                <input type="radio" name='cancelOrder' value={"7"} checked={cancelOption === '7'} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-between mt-8' onClick={() => setCancelReason(true)}>
                <p className='text-lg text-[#1E1E1E]'>Other reason</p>
                <input type="radio" name='cancelOrder' value={"other"} checked={cancelOption === 'other'} onChange={handleChange} />
            </div>
        </div>
    )
}

export default CancelOrderForm