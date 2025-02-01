import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const TotalBill = ({ onDelClick, onServiceClick, selectedResturant, order_payment }) => {
    const { tipBtn, setTipBtn, discount, customTip, deliveryPickup, smValue } = useContext(FeresContext)

    function calculateDiscountedAmount(discountedPrice, discountPercentage) {
        // Calculate the original price
        const originalPrice = discountedPrice / (1 - discountPercentage / 100);
        // Calculate the discounted amount
        const discountedAmount = originalPrice - discountedPrice;
        return discountedAmount;
    }

    console.log(order_payment, "order_paymentorder_paymentorder_payment");


    return (
        <div className='px-4 pt-7 mt-[10px] pb-4 bg-white'>
            {order_payment !== undefined && <>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[#767578] font-bold'>Subtotal</h3>
                    <p className='text-[#2F2F3F] font-medium text-base'>{`ETB${order_payment && order_payment[0]?.total}`}</p>
                </div>
                {/* {!deliveryPickup && <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#767578]'>Delivery Time</h3>
                        <img src={assets.information_circle} alt="" onClick={onDelClick} />
                    </div>
                    <p className='text-[#2F2F3F] font-medium text-base'>{`${smValue?.split(' ')[0]} Mins`}</p>
                </div>} */}
                {!deliveryPickup && <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#767578]'>Delivery Fee</h3>
                        <img src={assets.information_circle} alt="" onClick={onDelClick} />
                    </div>
                    <p className='text-[#2F2F3F] font-medium text-base'>{`ETB ${30}`}</p>
                </div>}

                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#767578]'>Service Fee</h3>
                        <img src={assets.information_circle} alt="" onClick={onServiceClick} />
                    </div>
                    <p className='text-[#2F2F3F] font-medium text-base'>{`ETB${order_payment && order_payment[0]?.total_service_price}`}</p>
                </div>
                {
                    tipBtn === 'other' ? null : tipBtn && tipBtn !== 'no' && <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-[#767578]'>Rider Tip</h3>
                            <img src={assets.information_circle} alt="" />
                        </div>
                        <p className='text-[#0AB247] font-medium text-base'>ETB{tipBtn}</p>
                    </div>
                }
                {tipBtn === 'other' && <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#767578]'>Rider Tip</h3>
                        <img src={assets.information_circle} alt="" />
                    </div>
                    <p className='text-[#0AB247] font-medium text-base'>ETB{customTip}</p>
                </div>}
                {order_payment && order_payment[0]?.order_discount && order_payment[0]?.order_discount > 0 ?
                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-[#767578]'>Discount</h3>
                            <img src={assets.information_circle} alt="" />
                        </div>
                        <p className='text-[#0AB247] font-medium text-base'>{`-ETB${Number(Math.floor(calculateDiscountedAmount(order_payment[0]?.total, order_payment[0]?.order_discount)))}`}</p>
                    </div>
                    : null}
                <div className='flex items-center justify-between mt-2'>
                    <h3 className='text-[#767578] font-bold'>Total</h3>
                    <p className='text-[#0AB247] font-medium text-base'>{`ETB${order_payment && order_payment[0]?.total}`}</p>
                </div>
            </>}
        </div>
    )
}

export default TotalBill