import React from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import RiderCard from '../../components/RateRiderComps/RiderCard'
import { useNavigate } from 'react-router-dom'

const DeliveryTipRider = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <Container className={'py-5 flex items-center gap-[32vw] bg-white'}>
                    <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                    <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Tip rider</h1>
                </Container>

                <Container>
                    <RiderCard />
                </Container>

                <Container>
                    <div className='mt-6'>
                        <h1 className='text-[#2F2F3F] font-medium text-[32px] text-center'>Tip your rider in appreciation.</h1>
                        <p className='text-[#767578] text-center text-base font-normal mt-3 w-[70%] mx-auto'>Would you like to leave a tip to make your rider's day?</p>
                        <div className='mt-6 grid grid-cols-4 gap-x-4 gap-y-6'>
                            {Array(8).fill().map((_, index) => (
                                <div key={index} className='bg-[#EBF9EE] rounded-xl flex item-center justify-center py-4 px-5'>
                                    <p className='text-[#0AB247] font-bold text-lg'>ETB 5</p>
                                </div>
                            ))}
                            <input type="text" inputMode='numeric' name="" id="" className='mt-6 outline-none w-[93vw] bg-[#F8F8F8] rounded-[13px] focus:bg-white focus:border focus:border-[#0AB247] transition-all ease-linear placeholder:text-[#767578] px-5 py-4' placeholder='Enter custom amount' />
                        </div>
                    </div>
                </Container>

                <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white flex items-center justify-between gap-5'}>
                    <button className='w-1/2 rounded-full bg-[#F8F8F8] p-4 flex items-center gap-4 justify-center'>
                        <p className='text-[#0AB247] text-lg font-bold'>No, thanks!</p>
                    </button>
                    <button className='w-1/2 rounded-full bg-[#0AB247] p-4 flex items-center gap-4 justify-center' onClick={() => setVisible(false)}>
                        <p className='text-white text-lg font-bold'>Pay tip</p>
                    </button>
                </Container>
            </div>

        </>
    )
}

export default DeliveryTipRider