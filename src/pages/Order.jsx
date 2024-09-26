import React from 'react'
import OrderNav from '../components/OrderComps/OrderNav'
import DelOrPickBtn from '../components/OrderComps/DelOrPickBtn'
import SelectRide from '../components/OrderComps/SelectRide'
import OrderedFoodCard from '../components/OrderComps/OrderedFoodCard'
import AddItemBtn from '../components/OrderComps/AddItemBtn'
import SpecialReq from '../components/OrderComps/SpecialReq'
import AddNoteBtn from '../components/OrderComps/AddNoteBtn'

const Order = () => {
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
        </div>
    )
}

export default Order