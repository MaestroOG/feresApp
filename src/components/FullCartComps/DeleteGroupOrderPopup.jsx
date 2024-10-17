import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const DeleteGroupOrderPopup = () => {
    const { setDeleteGroupOrder } = useContext(FeresContext)
    return (
        <div className='h-screen w-full z-50 bg-[#06060633] fixed top-0 left-0'>
            <div className='fixed bottom-0 left-0 w-full rounded-tr-2xl rounded-tl-2xl py-3 pb-10 bg-white'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='flex flex-col items-center justify-center w-[90%] mx-auto mt-5'>
                    <h2 className='text-[#2F2F3F] font-black text-2xl mb-1'>Delete group orders</h2>
                    <p className='text-[#72737B] text-base text-center'>This will delete you and your items from the group order. To add items, you’ll have to join again.</p>
                </div>
                <div className='px-4 mt-4'>
                    <button className='bg-[#E92D53] rounded-full p-4 text-white text-lg font-bold w-full'>Yes, delete</button>
                    <button className='bg-[#F8F8F8] rounded-full p-4 text-[#2F2F3F] text-lg font-bold w-full mt-3' onClick={() => setDeleteGroupOrder(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteGroupOrderPopup