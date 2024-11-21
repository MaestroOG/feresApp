import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../../redux/slices/cartSlice'
import { usePostRequest } from '../../servies/usePostRequest'
import { useSelector } from 'react-redux'

const OrderedFoodCard = ({ title, desc, price, quantity, img, item, quaUpdate }) => {
    const userDetail = useSelector((state) => state.userAuth.user)
    const { error, loading, postRequest, response } = usePostRequest()
    const dispatch = useDispatch()

    const handleIncrease = () => {
        // console.log(item, 'myitemhere');
        postRequest('/api/user/new_update_item_quantity', {
            cart_unique_token: userDetail.cart_unique_token,
            item: {
                _id: item?._id,
                image_url: item?.image_url,
                is_promotion_available: item?.is_promotion_available,
                name: item?.name,
                order_item_description: item?.order_item_description,
                price: item?.price,
                product_id: item?.product_id,
                promotion: item?.promotion,
                quantity: (item?.quantity + 1),
                sales_commission: item?.sales_commission,
                shipment_commission: item?.shipment_commission,
                specificationLast: [],
                specification: [],
                store_id: item?.store_id,
                total_item_price: item?.total_item_price,
                total_quantity: item?.total_quantity,
                unique_id: item?.unique_id
            },
            server_token: userDetail.token
        })


    }

    const handleDecrease = () => {
        postRequest('/api/user/new_update_item_quantity', {
            cart_unique_token: userDetail.cart_unique_token,
            item: {
                _id: item?._id,
                image_url: item?.image_url,
                is_promotion_available: item?.is_promotion_available,
                name: item?.name,
                order_item_description: item?.order_item_description,
                price: item?.price,
                product_id: item?.product_id,
                promotion: item?.promotion,
                quantity: (item?.quantity - 1),
                sales_commission: item?.sales_commission,
                shipment_commission: item?.shipment_commission,
                specificationLast: [],
                specification: [],
                store_id: item?.store_id,
                total_item_price: item?.total_item_price,
                total_quantity: item?.total_quantity,
                unique_id: item?.unique_id
            },
            server_token: userDetail.token
        })
    }

    useEffect(() => {
        if (response) {
            quaUpdate(response)
        }

    }, [response])


    return (
        <>
            <div className='mt-6 flex items-center gap-3 rounded-2xl px-6'>
                <img src={img && img} alt="" className='w-[111px] h-[98px] mb-auto py-[6px] rounded-[13px] object-cover' />
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
