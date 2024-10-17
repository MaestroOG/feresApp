import React, { useContext } from 'react'
import Menu from '../components/ServiceComps/Menu'
import OrderPageNav from '../components/OrderPageComps/OrderPageNav';
import OrderCategoryBtn from '../components/OrderPageComps/OrderCategoryBtn';
import NoOrderWarn from '../components/OrderPageComps/NoOrderWarn';
import { FeresContext } from '../context/FeresContext';
import OrderCards from '../components/OrderPageComps/OrderCards';

const OrderPage = () => {
    const { orderCat } = useContext(FeresContext)
    return (
        <div className='h-screen overflow-hidden'>
            <OrderPageNav />
            <div className='px-2 mt-5'>
                <OrderCategoryBtn />
            </div>
            {/* <NoOrderWarn orderCat={orderCat} /> */}
            <div className='mt-12'>
                {orderCat === 'Active' ? <>
                    <OrderCards paidStatus={"Paid"} btnText={"Track Rider"} />
                    <OrderCards paidStatus={"Not yet"} btnText={"Track Rider"} />
                </> : orderCat === 'Upcoming' ? <>
                    <OrderCards paidStatus={"Paid"} btnText={"Edit Order"} />
                    <OrderCards paidStatus={"Not yet"} btnText={"Edit Order"} />
                </> : orderCat === 'Completed' ? <>
                    <OrderCards paidStatus={"Completed"} btnText={"Reorder"} />
                    <OrderCards paidStatus={"Completed"} btnText={"Reorder"} />
                </> : orderCat === 'Cancelled' ? <>
                    <OrderCards paidStatus={"Cancelled"} btnText={"Reorder"} />
                </> : <NoOrderWarn orderCat={orderCat} />}
                {/* <NoOrderWarn orderCat={orderCat} /> */}
            </div>
            <Menu />
        </div>
    )
}

export default OrderPage