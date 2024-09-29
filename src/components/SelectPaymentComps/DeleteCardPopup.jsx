import React from 'react'
import { assets } from '../../assets/assets'

const DeleteCardPopup = ({ onCancelClick }) => {
    return (
        <div className='fixed bottom-0 left-0 w-full z-30 pt-4 pb-5 bg-white rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640]'>
            <div>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
            </div>
            <div className='mt-4 flex flex-col items-center '>
                <h3 className='text-[#2F2F3F] text-2xl font-black'>Add credit or debit card</h3>
                <p className='text-[#72737B] text-base text-center w-[75%]'>To add a new credit or debit card you need to delete one of your card</p>
                <button className='bg-[#E92D53] p-[16px] rounded-[30px] w-[92%] my-4 mx-auto text-white text-lg font-medium'>Delete card</button>
                <button className='bg-[#F8F8F8] p-[16px] rounded-[30px] w-[92%] my-2 mx-auto text-[#2F2F3F] text-lg font-medium' onClick={onCancelClick}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteCardPopup