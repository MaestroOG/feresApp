import React, { useState, useRef } from 'react';
import { assets } from '../../assets/assets'

const OrderSchedule = () => {
    const dateInputRef = useRef(null);
    const timeInputRef = useRef(null);

    const handleDateLabelClick = () => {
        // Trigger click event on the hidden time input
        dateInputRef.current.click();
    };

    const handleTimeLabelClick = () => {
        // Trigger click event on the hidden time input
        dateInputRef.current.click();
    };

    return (
        <div className='px-4 mt-5 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.calendar_03} alt="" />
                    <label htmlFor='date' onClick={handleDateLabelClick} className='text-base text-[#2F2F3F]'>Schedule order</label>
                    <input type="date" name="" id="date" ref={dateInputRef} className='absolute left-[-9999px]' />
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.clock_light_green} alt="" />
                    <label htmlFor='time' onClick={handleTimeLabelClick} className='text-base text-[#2F2F3F]'>30 min</label>
                    <input type="time" name="" id="time" ref={timeInputRef} className='absolute left-[-9999px]' />
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.location_light_green} alt="" />
                    <p className='text-base text-[#2F2F3F]'>Elgin St. Celina, Delaware 10299</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
        </div>
    )
}

export default OrderSchedule