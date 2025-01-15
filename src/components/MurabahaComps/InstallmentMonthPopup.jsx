import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const InstallmentMonthPopup = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className='fixed h-screen w-full bg-[#06060640] top-0 left-0'>
            <div className='bg-white fixed w-full min-h-[478px] rounded-t-[20px] bottom-0 left-0'>
                <div className='border-b border-[#F7F7F7]'>
                    <img src={assets.popup_bar} alt="" className='mx-auto mt-[10px] mb-5' />
                    <div className='flex items-center justify-between w-[77%] ml-auto pb-5'>
                        <h3 className='text-[#2F2F3F] text-xl font-extrabold'>Select Installment Months</h3>
                        <img src={assets.close} alt="" className='pr-4' />
                    </div>
                </div>
                <div className='mt-[23px] flex items-center justify-between px-4 py-[13px] mb-[6px]'>
                    <h1 className='text-xl text-[#2F2F3F]'>1 Months</h1>
                    <div
                        onClick={() => setSelected(prev => !prev)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${selected
                            ? "border-4 border-green-500 bg-green-500"
                            : "border-4 border-gray-300 bg-white"
                            }`}
                    >
                        {selected && (
                            <div className="w-4 h-4 rounded-full bg-white"></div>
                        )}
                    </div>
                </div>
                <div className='mt-[23px] flex items-center justify-between px-4 py-[13px] mb-[6px]'>
                    <h1 className='text-xl text-[#2F2F3F]'>1 Months</h1>
                    <div
                        onClick={() => setSelected(prev => !prev)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${selected
                            ? "border-4 border-green-500 bg-green-500"
                            : "border-4 border-gray-300 bg-white"
                            }`}
                    >
                        {selected && (
                            <div className="w-4 h-4 rounded-full bg-white"></div>
                        )}
                    </div>
                </div>
                <div className='mt-[23px] flex items-center justify-between px-4 py-[13px] mb-[6px]'>
                    <h1 className='text-xl text-[#2F2F3F]'>1 Months</h1>
                    <div
                        onClick={() => setSelected(prev => !prev)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${selected
                            ? "border-4 border-green-500 bg-green-500"
                            : "border-4 border-gray-300 bg-white"
                            }`}
                    >
                        {selected && (
                            <div className="w-4 h-4 rounded-full bg-white"></div>
                        )}
                    </div>
                </div>
                <div className='mt-[23px] flex items-center justify-between px-4 py-[13px] mb-[6px]'>
                    <h1 className='text-xl text-[#2F2F3F]'>1 Months</h1>
                    <div
                        onClick={() => setSelected(prev => !prev)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${selected
                            ? "border-4 border-green-500 bg-green-500"
                            : "border-4 border-gray-300 bg-white"
                            }`}
                    >
                        {selected && (
                            <div className="w-4 h-4 rounded-full bg-white"></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstallmentMonthPopup