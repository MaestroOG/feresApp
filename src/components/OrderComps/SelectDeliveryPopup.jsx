import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const SelectDeliveryPopup = () => {
    const { selectDel, setSelectDel } = useContext(FeresContext)
    return (
        <div className={`${!selectDel ? 'hidden' : ''} fixed bottom-0 w-full z-30 pt-4 pb-2 bg-white rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640]`}>
            <div className='w-full mb-3'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
            </div>
            <div className='w-max ml-auto'>
                <div className='flex items-center gap-[70px]'>
                    <h2 className='text-xl font-bold text-[#2F2F3F] text-center'>Select delivery option</h2>
                    <img src={assets.close} alt="" className='mr-3' onClick={() => setSelectDel(false)} />
                </div>
            </div>
            <hr className='my-4' />
            <div>
                <div className='px-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.scooter_02} alt="" />
                        <p className='text-[#2F2F3F] text-xl'>Motor bike</p>
                    </div>
                    <input type="radio" name="delivery" id="" />
                </div>
                <div className='px-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.delivery_truck_02} alt="" />
                        <p className='text-[#2F2F3F] text-xl'>Delivery truck</p>
                    </div>
                    <input type="radio" name="delivery" id="" />
                </div>
                <div className='px-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.user_full_view} alt="" />
                        <p className='text-[#2F2F3F] text-xl'>Courier</p>
                    </div>
                    <input type="radio" name="delivery" id="" />
                </div>
            </div>
        </div>
    )
}

export default SelectDeliveryPopup