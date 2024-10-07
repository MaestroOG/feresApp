import React, { useState, useRef } from 'react';
import { assets } from '../../assets/assets'

const OrderSchedule = () => {
    const dateInputRef = useRef(null);
    const timeInputRef = useRef(null);

    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const handleDateLabelClick = () => {
        // Trigger click event on the hidden time input
        dateInputRef.current.click();
    };

    const handleTimeLabelClick = () => {
        // Trigger click event on the hidden time input
        timeInputRef.current.click();
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value)
    }

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value)
    }

    return (
        <div className='px-4 mt-5 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2' onClick={handleDateLabelClick}>
                    <img src={assets.calendar_03} alt="" />
                    <label htmlFor='date' className='text-base text-[#2F2F3F]'>{selectedDate ? selectedDate : "Schedule order"}</label>
                    <input type="date" name="" id="date" ref={dateInputRef} onChange={handleDateChange} className='absolute left-[-9999px]' />
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2' onClick={handleTimeLabelClick}>
                    <img src={assets.clock_light_green} alt="" />
                    <label htmlFor='time' className='text-base text-[#2F2F3F]'>{selectedTime ? selectedTime : "30 min"}</label>
                    <input type="time" name="" id="time" ref={timeInputRef} onChange={handleTimeChange} className='absolute left-[-9999px]' />
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