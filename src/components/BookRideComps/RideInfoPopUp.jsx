import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'

const RideInfoPopUp = () => {
    const { setRideInfoPop } = useContext(FeresContext)
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    return (
        <div className='fixed bottom-0 left-0 max-h-[90vh] w-full bg-white px-3 rounded-tr-[13px] rounded-tl-[13px] overflow-y-auto pb-48 transition-all'>
            <div className='sticky top-0 bg-white w-full z-20 py-2'>
                <div className='mb-4 pt-2'>
                    <img src={assets.popup_down_arrow} alt="" className='mx-auto' onClick={() => setRideInfoPop(false)} />
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#2F2F3F] text-4xl font-medium'>15:25</h1>
                    <p className='text-lg text-[#979797]'>Estimated time of delivery</p>
                </div>
            </div>
            <p className='mt-5 text-[#2F2F3F] text-xl font-medium'>Order progress</p>
            {/* Order Progress */}
            <div className='relative'>
                <div className='flex items-center gap-2 mt-6' onClick={() => setProgress(0)}>
                    <img src={progress === 0 ? assets.order_progress : assets.order_progress_2} alt="" />
                    <p className='text-base text-[#2F2F3F]'>Waiting for KFC Eastlight to confirm your order</p>
                </div>
                <hr className='rotate-90 w-10 absolute top-14 -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' onClick={() => setProgress(1)}>
                    <img src={progress === 1 ? assets.order_progress : assets.order_progress_2} alt="" />
                    <p className='text-base text-[#979797]'>Preparing your order</p>
                </div>
                <hr className='rotate-90 w-10 absolute top-36 -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' onClick={() => setProgress(2)}>
                    <img src={progress === 2 ? assets.order_progress : assets.order_progress_2} alt="" />
                    <p className='text-base text-[#979797]'>Looking for a rider</p>
                </div>
                <hr className='rotate-90 w-10 absolute top-[230px] -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' onClick={() => setProgress(3)}>
                    <img src={progress === 3 ? assets.order_progress : assets.order_progress_2} alt="" />
                    <p className='text-base text-[#979797]'>The rider is on their way to KFC Eastlight</p>
                </div>
                <hr className='rotate-90 w-10 absolute top-[318px] -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' onClick={() => {
                    navigate('/raterider')
                }}>
                    <img src={progress === 4 ? assets.order_progress : assets.order_progress_2} alt="" />
                    <p className='text-base text-[#979797]'>The rider is on their way to you</p>
                </div>
            </div>
            {/* Order Info */}
            <div className='mt-10 mb-4'>
                <p className='text-[#2F2F3F] text-xl font-medium'>Order #792SH</p>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-[#2F2F3F] text-base'>1 X 7 Piece Chicken</p>
                    <p className='text-[#2F2F3F] text-base'>ETB 1,450</p>
                </div>
                <hr className='mt-4' />
                <div className='flex items-center justify-between mt-4'>
                    <h2 className='text-[#2F2F3F] text-xl font-medium'>Total</h2>
                    <h2 className='text-[#2F2F3F] text-xl font-medium'>ETB280</h2>
                </div>
            </div>

            {/* Payment Info */}
            <div className='mt-9'>
                <h3 className='text-[#2F2F3F] text-base font-medium'>Payment methods</h3>
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.ebirr_sticker} alt="" />
                        <p className='font-medium text-sm text-[#2F2F3F]'>E-birr</p>
                    </div>
                    <div>
                        <h3 className='text-base font-medium text-[#2F2F3F]'>ETB280</h3>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className='w-full'>
                <img src={assets.address_sticker} alt="" className='mx-auto mt-8' />
                <div className='mt-4'>
                    <h3 className='text-[#2F2F3F] text-xl font-medium'>Delivery address</h3>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_green} alt="" />
                        <p className='text-[#0AB247] text-base'>Terminal 1 berlin Brandenburg Airport</p>
                    </div>
                    <img src={assets.edit_02} alt="" />
                </div>
            </div>

            {/* Buttons */}
            <div className='fixed bottom-0 left-0 w-full px-2 py-4 bg-white'>
                <button className='text-[#2F2F3F] text-lg font-medium bg-[#F8F8F8] p-[16px] rounded-[30px] w-full mb-3' onClick={() => navigate('/feressupport')}>Get help</button>
                <button className='text-white text-lg font-medium bg-[#E92D53] p-[16px] rounded-[30px] w-full' onClick={() => navigate('/cancelorder')}>Cancel order</button>
            </div>
        </div>
    )
}

export default RideInfoPopUp