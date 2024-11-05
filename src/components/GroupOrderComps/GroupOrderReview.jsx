import React, { useContext, useState } from 'react'
import GroupOrderNav from './GroupOrderNav'
import Container from '../Container'
import { assets } from '../../assets/assets'
import OrderedFoodCard from '../OrderComps/OrderedFoodCard'
import AddItemBtn from '../OrderComps/AddItemBtn'
import TotalBill from '../OrderComps/TotalBill'
import DeliveryFeePopup from '../OrderComps/DeliveryFeePopup'
import ServiceFeePopup from '../OrderComps/ServiceFeePopup'
import { FeresContext } from '../../context/FeresContext'
import DelOrderPopUp from '../OrderComps/DelOrderPopUp'
import IsReadyPopup from './IsReadyPopup'
import { useNavigate } from 'react-router-dom'

const GroupOrderReview = () => {

    const { delOrderVisible } = useContext(FeresContext)
    const [delPop, setDelPop] = useState(false)
    const [servicePop, setServicePop] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <div>
                <GroupOrderNav />

                {/* Group Controls */}
                <Container className={'my-5 w-full flex items-center justify-around'}>
                    <div className='border border-[#EEEEEE] rounded-2xl flex items-center justify-between gap-6 p-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.clock_blue} alt="" />
                            <div>
                                <p className='text-[#979797] whitespace-nowrap'>Today</p>
                                <h3 className='text-[#2F2F3F] text-lg font-medium whitespace-nowrap'>16:05 PM</h3>
                            </div>
                        </div>
                        <div className='flex items-center relative'>
                            <img src={assets.edit_blue} alt="" />
                        </div>
                    </div>

                    <div className='border border-[#EEEEEE] rounded-2xl flex items-center justify-between gap-6 p-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.user_group} alt="" />
                            <div>
                                <p className='text-[#979797] whitespace-nowrap'>Users</p>
                                <h3 className='text-[#2F2F3F] text-lg font-medium whitespace-nowrap'>2</h3>
                            </div>
                        </div>
                        <div className='flex items-center relative'>
                            <img src={assets.add_circle_blue} alt="" />
                        </div>
                    </div>
                </Container>


                {/* Cart */}
                <Container className={'py-5'}>
                    <div className='flex items-center gap-1 mb-5'>
                        <img src={assets.user_blue} alt="" />
                        <h2 className='text-[#2F2F3F] text-lg'>Abraham (Host)</h2>
                    </div>

                    <OrderedFoodCard title={"Beef Burger"} img={assets.burger_img} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} price={140} quantity={1} />

                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex items-center gap-1'>
                            <img src={assets.user_blue} alt="" />
                            <h2 className='text-[#2F2F3F] text-lg'>John</h2>
                        </div>
                        <div className='font-medium text-base text-[#0AB247] border border-[#0AB247] w-max px-[16px] py-[8px] rounded-full mt-2'>Add items</div>
                    </div>

                    <OrderedFoodCard title={"Beef Burger"} img={assets.burger_img} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} price={140} quantity={1} />
                </Container>

                <div className={'mt-7'}>
                    <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} />
                </div>

                <Container className={'py-5 fixed bottom-0 left-0 bg-white w-full'}>
                    <button className='w-full p-4 rounded-full text-lg font-medium text-white bg-[#0AB247]' onClick={() => setIsReady(true)}>Continue</button>
                </Container>
            </div>

            {delPop ? <DeliveryFeePopup /> : null}
            {servicePop ? <ServiceFeePopup /> : null}
            {delOrderVisible && <DelOrderPopUp />}
            {isReady && <IsReadyPopup onCancelClick={() => setIsReady(false)} onReadyClick={() => navigate('/grouporder/cart')} />}
        </>
    )
}

export default GroupOrderReview