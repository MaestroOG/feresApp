import React from 'react'
import { assets } from '../../assets/assets'

const ConfirmInstallmentPopup = () => {
    return (
        <div className='fixed h-screen w-full bg-[#06060640] top-0 left-0'>
            <div className='bg-white fixed w-full min-h-[274px] rounded-t-[20px] bottom-0 left-0'>
                <div className='border-b border-[#F7F7F7] mb-9'>
                    <img src={assets.popup_bar} alt="" className='mx-auto mt-[10px] mb-5' />
                    <h3 className='text-[#2F2F3F] text-xl font-extrabold text-center'>Confirm Installment</h3>
                </div>
                <h3 className='text-center text-[#72737B] text-lg w-[60%] mx-auto'>Do you want to confirm this installment schedule?</h3>
                <div className='w-full flex items-center justify-between px-4 mt-5'>
                    <button className='w-[48%] bg-[#F8F8F8] rounded-[30px] px-4 py-[18px] text-lg text-[#2F2F3F] font-semibold'>No, don't</button>
                    <button className='w-[48%] bg-[#0AB247] rounded-[30px] px-4 py-[18px] text-lg text-white font-semibold'>Yes, confirm</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmInstallmentPopup