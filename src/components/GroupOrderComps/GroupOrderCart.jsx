import React, { useContext, useState } from 'react'
import GroupOrderNav from './GroupOrderNav'
import DelOrPickBtn from '../OrderComps/DelOrPickBtn'
import { FeresContext } from '../../context/FeresContext'
import SelectRide from '../OrderComps/SelectRide'
import { assets } from '../../assets/assets'
import OrderedFoodCard from '../OrderComps/OrderedFoodCard'
import Container from '../Container'
import SpecialReq from '../OrderComps/SpecialReq'
import OrderSchedule from '../OrderComps/OrderSchedule'
import LocationPick from '../OrderComps/LocationPick'
import TipRider from '../OrderComps/TipRider'
import OtherTip from '../OrderComps/OtherTip'
import PaymentMethods from '../OrderComps/PaymentMethods'
import { useNavigate } from 'react-router-dom'
import TotalBill from '../OrderComps/TotalBill'
import ServiceFeePopup from '../OrderComps/ServiceFeePopup'
import DeliveryFeePopup from '../OrderComps/DeliveryFeePopup'
import SaveMoneyPopUp from '../OrderComps/SaveMoneyPopUp'
import TIpRiderPopUp from '../OrderComps/TIpRiderPopUp'
import RiderNote from '../OrderComps/RiderNote'
import OrderConfirmBtn from '../OrderComps/OrderConfirmBtn'

const GroupOrderCart = () => {
    const navigate = useNavigate();
    const { deliveryPickup, smPop, setSmPop, tipBtn, tipRidePop, riderNote } = useContext(FeresContext)
    const [delPop, setDelPop] = useState(false)
    const [servicePop, setServicePop] = useState(false)
    return (
        <>
            <div className='pb-24'>
                <GroupOrderNav />
                <DelOrPickBtn />
                {!deliveryPickup && <SelectRide />}

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

                <SpecialReq />

                <OrderSchedule onThirtyClick={() => setSmPop(true)} />

                {!deliveryPickup && <LocationPick />}

                {!deliveryPickup && <TipRider />}

                {tipBtn == 'other' && <OtherTip />}

                <PaymentMethods img={assets.wallet_01} text={"Payment Methods"} isCard={true} onClick={() => navigate('/selectpayment')} />
                <PaymentMethods img={assets.discount} text={"Get Discounts"} isDiscount={true} onClick={() => navigate('/getdiscount')} />

                <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} />

                <OrderConfirmBtn />
            </div>

            {riderNote ? <RiderNote /> : null}

            {tipRidePop && <TIpRiderPopUp />}
            {smPop && <SaveMoneyPopUp />}
            {delPop && <DeliveryFeePopup />}
            {servicePop && <ServiceFeePopup />}
        </>
    )
}

export default GroupOrderCart