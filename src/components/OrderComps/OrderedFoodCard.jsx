import React from 'react'
import { assets } from '../../assets/assets'
import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../../redux/slices/cartSlice'

const OrderedFoodCard = ({ title, desc, price, quantity, img, item }) => {
    const dispatch = useDispatch()

    const handleIncrease = () => {
        // Increase the item quantity by 1 and dispatch updateQuantity action
        dispatch(updateQuantity({
            product_id: item.product_id, // or sub_product_id if needed
            quantity: quantity + 1
        }));
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            // Decrease the item quantity by 1 and dispatch updateQuantity action
            dispatch(updateQuantity({
                product_id: item.product_id, // or sub_product_id if needed
                quantity: quantity - 1
            }));
        } else {
            // If quantity is 1, remove the item from the cart
            dispatch(removeItem({ product_id: item.product_id }));
        }
    }

    return (
        <>
            <div className='mt-6 flex items-center gap-3 rounded-2xl px-6'>
                <img src={img[0]} alt="" className='w-28 mb-auto py-[6px] rounded-2xl' />
                <div className='pr-1 w-[100%]'>
                    <h2 className='text-[#2F2F3F] font-medium text-base'>{title}</h2>
                    <p className='text-[#2F2F3F66] text-xs'>{desc}</p>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-[#0AB247] text-base font-bold'>ETB {(price * quantity).toFixed(2)}</p>
                        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-full gap-5 px-2 py-1'>
                            <img src={assets.minus_sign} alt="" className='invert w-[11px]'
                                onClick={handleDecrease} />
                            <p className='text-[9.6px] text-[#2F2F3F] font-bold'>{quantity}</p>
                            <img src={assets.plus_sign} alt="" className='w-[11px]'
                                onClick={handleIncrease} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-[90%] mt-3 mx-auto' />
        </>
    )
}

export default OrderedFoodCard
