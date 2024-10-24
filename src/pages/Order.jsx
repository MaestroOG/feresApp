import React, { useContext, useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'

const Order = () => {
    const navigate = useNavigate()
    const { orderNote, riderNote, tipBtn, tipRidePop } = useContext(FeresContext)
    const { cartItems } = useContext(FeresContext)
    const [delPop, setDelPop] = useState(false)
    const [servicePop, setServicePop] = useState(false)
    const { smPop, setSmPop } = useContext(FeresContext)
    const { deliveryPickup } = useContext(FeresContext)
    const cartData = useSelector((state) => state.cart.items);

    useEffect(() => {
        console.log(cartData, 'here is the data ');
    }, [])
    return (
        <div className='pb-24'>
            <OrderNav />
            <DelOrPickBtn />
            {!deliveryPickup && <SelectRide />}

            {cartData.map(item => (
                <OrderedFoodCard key={item?.unique_id} title={item?.name} price={item?.price} desc={item?.details} img={item?.image_url} quantity={cartData[cartData?.length - 1]?.quantity} />
            ))}
            {/* <OrderedFoodCard title={item.name} price={item.price} desc={item.details} quantity={item.quantity} /> */}
            <AddItemBtn />
            <SpecialReq />
            <AddNoteBtn />
            <hr className='my-3' />
            <ExtraOrder />
            <OrderSchedule onThirtyClick={() => setSmPop(true)} />

            {!deliveryPickup && <LocationPick />}

            {!deliveryPickup && <TipRider />}


            {tipBtn == 'other' ? <OtherTip /> : null}

            <PaymentMethods img={assets.wallet_01} text={"Payment Methods"} isCard={true} onClick={() => navigate('/selectpayment')} />
            <PaymentMethods img={assets.discount} text={"Get Discounts"} isDiscount={true} onClick={() => navigate('/getdiscount')} />

            <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} />

            {riderNote ? <RiderNote /> : null}

            {tipRidePop ? <TIpRiderPopUp /> : null}
            {smPop ? <SaveMoneyPopUp /> : null}
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