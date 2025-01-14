import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const ChooseAddressPopup = ({ onClick }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className='w-full h-screen bg-[#0606064D] fixed top-0 left-0 z-[71]'>
            <div className='rounded-t-[20px] bg-white w-full min-h-[453px] absolute bottom-0 left-0'>
                <img src={assets.popup_bar} className='mt-[10px] mx-auto' alt="" />
                <div className='flex items-center justify-center gap-[61px] w-[80%] ml-auto mt-[18px] mb-[17px]'>
                    <h1 className='text-[#2F2F3F] text-[19px] font-[700]'>Choose delivery location</h1>
                    <img src={assets.close} alt="" onClick={onClick} />
                </div>
                <hr />
                <h3 className='px-4 text-[#2F2F3F] font-[500] text-lg mt-5 mb-[14px]'>Saved Addresses</h3>
                <div className='px-4 py-[10.5px] flex items-center gap-4 justify-between'>
                    <div className='flex items-center gap-4'>
                        <img src={assets.home_11} alt="" />
                        <div>
                            <h3 className='text-[#2F2F3F] text-lg'>Home</h3>
                            <p className='text-[#8E8E93] text-sm'>Polo Apartments, Hamu Mukasa Rd, Kampa...</p>
                        </div>
                    </div>
                    <div>
                        <button
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${isChecked ? "bg-green-500" : "bg-gray-200"
                                }`}
                            onClick={toggleCheckbox}
                        >
                            {isChecked && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    viewBox="0 0 21 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <hr className='w-[90%] mx-auto' />
                <div className='my-5 py-[14px] px-5 max-w-[398px] mx-auto border border-[#F1F1F1] rounded-[13px] flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <img src={assets.pin_location_03} className='object-contain' alt="" />
                        <div>
                            <h3 className='text-lg font-medium text-[#2F2F3F]'>Deliver to a different location</h3>
                            <p className='text-[#8E8E93]'>Choose location on map</p>
                        </div>
                    </div>
                    <img src={assets.arrow_right} alt="" />
                </div>
                <div className='my-5 py-[14px] px-5 max-w-[398px] mx-auto border border-[#F1F1F1] rounded-[13px] flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <img src={assets.sent} className='object-contain' alt="" />
                        <div>
                            <h3 className='text-lg font-medium text-[#2F2F3F]'>Deliver to current location</h3>
                            <p className='text-[#8E8E93]'>Outside Delivery Zone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseAddressPopup