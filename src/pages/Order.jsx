import React, { useContext } from 'react'
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

const Order = () => {
    const { orderNote } = useContext(FeresContext)
    return (
        <div>
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

            <DelOrderPopUp />

            <SelectDeliveryPopup />

            {orderNote ? <ExtraNotePopUp placeholder={"Write anything else we need to know"} /> : null}

            {/* <OrderConfirmBtn /> */}
        </div>
    )
}

export default Order