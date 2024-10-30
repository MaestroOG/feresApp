import React, { useContext } from 'react'
import Container from '../../Container'
import { assets } from '../../../assets/assets'
import { FeresContext } from '../../../context/FeresContext'

const DeliveryItemDetail = ({ isActive, isActive_02 }) => {
    const { setDeliveryItemDetail } = useContext(FeresContext)
    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-[#06060626] z-30'>
            <Container className='bg-white w-full fixed bottom-0 left-0 rounded-t-2xl py-4 pb-32 transition-all'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='text-center py-4'>
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Vehicle Type</h1>
                </div>
                <hr />
                <div className={`w-[398px] h-[87px] rounded-xl ${isActive ? 'border border-[#0AB247] bg-[#EBF9EE]' : 'border border-[#EEEEEE]'} my-3 p-4`} >
                    <div className='flex items-center gap-3'>
                        <div className='w-full'>
                            <div className='flex items-center justify-between w-full'>
                                <h4 className='text-[#2F2F3F] text-lg font-medium'>Instant - priority</h4>
                                <h3 className='font-bold text-[#2F2F3F]'>ETB90.00</h3>
                            </div>
                            <p className='text-[#B1B1B1]'>Pickup within 30 mins, drop-off within 90mins</p>
                        </div>
                    </div>
                </div>
                <div className={`w-[398px] h-[87px] rounded-xl ${isActive_02 ? 'border border-[#0AB247] bg-[#EBF9EE]' : 'border border-[#EEEEEE]'} my-3 p-4`} >
                    <div className='flex items-center gap-3'>
                        <div className='w-full'>
                            <div className='flex items-center justify-between w-full'>
                                <h4 className='text-[#2F2F3F] text-lg font-medium'>Instant</h4>
                                <h3 className='font-bold text-[#2F2F3F]'>ETB110.00</h3>
                            </div>
                            <p className='text-[#B1B1B1]'>Pickup within 30 mins, drop-off within 90mins</p>
                        </div>
                    </div>
                </div>
                <div className={`w-[398px] h-[87px] rounded-xl ${isActive_02 ? 'border border-[#0AB247] bg-[#EBF9EE]' : 'border border-[#EEEEEE]'} my-3 p-4`} >
                    <div className='flex items-center gap-3'>
                        <div className='w-full'>
                            <div className='flex items-center justify-between w-full'>
                                <h4 className='text-[#2F2F3F] text-lg font-medium'>4 Hours</h4>
                                <h3 className='font-bold text-[#2F2F3F]'>ETB140.00</h3>
                            </div>
                            <p className='text-[#B1B1B1]'>Pickup within 2h, drop-off within 4h</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className={'py-5 w-full fixed bottom-0 left-0 bg-white'}>
                <button className='w-full p-4 rounded-full bg-[#0AB247] text-white font-medium text-lg' onClick={() => setDeliveryItemDetail(false)}>Done</button>
            </Container>
        </div>
    )
}

export default DeliveryItemDetail