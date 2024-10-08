import React, { useContext, useState } from 'react'
import OrderNav from '../components/OrderComps/OrderNav'
import DelOrPickBtn from '../components/OrderComps/DelOrPickBtn'
import SelectRide from '../components/OrderComps/SelectRide'
import OrderedFoodCard from '../components/OrderComps/OrderedFoodCard'
import AddItemBtn from '../components/OrderComps/AddItemBtn'
import SpecialReq from '../components/OrderComps/SpecialReq'
import AddNoteBtn from '../components/OrderComps/AddNoteBtn'
import DelOrderPopUp from '../components/OrderComps/DelOrderPopUp'
import OrderConfirmBtn from '../components/OrderComps/OrderConfirmBtn'
import SelectDeliveryPopup from '../components/OrderComps/SelectDeliveryPopup'
import ExtraNotePopUp from '../components/FoodComps/ExtraNotePopUp'
import { FeresContext } from '../context/FeresContext'
import ExtraOrder from '../components/OrderComps/ExtraOrder'
import OrderSchedule from '../components/OrderComps/OrderSchedule'
import SaveMoneyPopUp from '../components/OrderComps/SaveMoneyPopUp'
import LocationPick from '../components/OrderComps/LocationPick'
import TipRider from '../components/OrderComps/TipRider'
import TIpRiderPopUp from '../components/OrderComps/TIpRiderPopUp'
import PaymentMethods from '../components/OrderComps/PaymentMethods'
import OtherTip from '../components/OrderComps/OtherTip'
import { assets } from '../assets/assets'
import TotalBill from '../components/OrderComps/TotalBill'
import RiderNote from '../components/OrderComps/RiderNote'
import DeliveryFeePopup from '../components/OrderComps/DeliveryFeePopup'
import ServiceFeePopup from '../components/OrderComps/ServiceFeePopup'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate()
    const { orderNote, riderNote, tipBtn, tipRidePop, setTipRidePop } = useContext(FeresContext)
    const [delPop, setDelPop] = useState(false)
    const [servicePop, setServicePop] = useState(false)

    return (
        <div className='pb-24'>
            <OrderNav />
            <DelOrPickBtn />
            <SelectRide />
            <OrderedFoodCard />
            <OrderedFoodCard />
            <AddItemBtn />
            <SpecialReq />
            <AddNoteBtn />
            <hr className='my-3' />
            <ExtraOrder />
            <OrderSchedule />

            <LocationPick />

            <TipRider />

            {tipBtn == 'other' ? <OtherTip /> : null}

            <PaymentMethods img={assets.wallet_01} text={"Payment Methods"} isCard={true} onClick={() => navigate('/selectpayment')} />
            <PaymentMethods img={assets.discount} text={"Get Discounts"} isDiscount={true} onClick={() => navigate('/getdiscount')} />

            <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} />

            {riderNote ? <RiderNote /> : null}

            {tipRidePop ? <TIpRiderPopUp /> : null}
            {/* <SaveMoneyPopUp /> */}
            {delPop ? <DeliveryFeePopup /> : null}
            {servicePop ? <ServiceFeePopup /> : null}

            <DelOrderPopUp />

            <SelectDeliveryPopup />

            {orderNote ? <ExtraNotePopUp placeholder={"Write anything else we need to know"} /> : null}

            <OrderConfirmBtn />
            {/* <SwipeToConfirm /> */}
        </div>
    )
}

export default Order