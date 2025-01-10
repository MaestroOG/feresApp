import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-custom.css';  // Import your custom CSS for the DatePicker
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { assets } from '../../assets/assets';
import CustomTimePicker from '../CustomTimePicker';
import { FeresContext } from '../../context/FeresContext';

const OrderSchedule = ({ onThirtyClick }) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('16:00');
    const { smValue } = useContext(FeresContext)
    const handleDateClick = () => {
        setIsDatePickerOpen(true);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleDateConfirm = () => {
        setIsDatePickerOpen(false);
        setIsTimePickerOpen(true);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        setIsTimePickerOpen(false);
    };

    const handleTimeClose = () => {
        setIsTimePickerOpen(false);
    };


    // Format the selectedDate dynamically
    const formattedDate = selectedDate
        ? {
            year: selectedDate.getFullYear(),
            day: selectedDate.toLocaleDateString('en-US', { weekday: 'short' }),
            monthDay: selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        }
        : { year: '2024', day: 'Thu', monthDay: '22 Feb' }; // Default text when no date is selected

    return (
        <div className='px-4 pt-5 mt-[10px] bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col gap-5'>
            {/* Schedule Order Section */}
            <div className='flex items-center justify-between' onClick={handleDateClick}>
                <div className='flex items-center gap-2'>
                    <img src={assets.calendar_03} alt="" />
                    <label htmlFor='date' className='text-base text-[#2F2F3F]'>{selectedDate ? selectedDate.toDateString() : "Schedule order"}</label>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />

            {/* 30 Minutes Section */}
            <div className='flex items-center justify-between' onClick={onThirtyClick}>
                <div className='flex items-center gap-2'>
                    <img src={assets.clock_light_green} alt="" />
                    <label htmlFor='time' className='text-base text-[#2F2F3F]'>{smValue}</label>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />

            {/* Location Section */}
            {/* <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.location_light_green} alt="" />
                    <p className='text-base text-[#2F2F3F]'>Elgin St. Celina, Delaware 10299</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr /> */}

            {/* Date Picker Modal */}
            {isDatePickerOpen && (
                <div className="modal z-50 fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="modal-content bg-white rounded-lg flex flex-col">
                        <div className='flex-[2] bg-[#0AB247] p-4 text-white rounded-t-lg w-[100%]'>
                            <h4 className='bold text-16'>{formattedDate.year}</h4>
                            <h2>{`${formattedDate.day}, ${formattedDate.monthDay}`}</h2>
                        </div>
                        <div className='flex-[4] p-5'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                inline
                                minDate={new Date()}  /* Disable previous dates */
                            />
                            <div className="flex justify-end gap-3 mt-2 mr-4">
                                <button onClick={() => setIsDatePickerOpen(false)} className="text-black rounded">Cancel</button>
                                <button onClick={handleDateConfirm} className="text-green-500 rounded">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Time Picker Modal */}
            {isTimePickerOpen && (
                <CustomTimePicker onTimeConfirm={handleTimeConfirm}
                    onClose={handleTimeClose} />
            )}
        </div>
    );
};

export default OrderSchedule;
