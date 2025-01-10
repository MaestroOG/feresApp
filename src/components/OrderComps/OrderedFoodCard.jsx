import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../../redux/slices/cartSlice'
import { usePostRequest } from '../../servies/usePostRequest'
import { useSelector } from 'react-redux'

const OrderedFoodCard = ({ title, desc, price, quantity, img, item, quaUpdate }) => {
    const userDetail = useSelector((state) => state.userAuth.user)
    const store_info = useSelector((state) => state.promotions.store_info)
    const product_info = useSelector((state) => state.promotions.product_info)
    const item_info = useSelector((state) => state.promotions.item_info)
    const promoPer = useSelector((state) => state.promotions.promoPer)
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


    function calculateDiscount(amount, discountPer) {


        const discount = (parseFloat(amount) * parseInt(discountPer)) / 100;
        const finalPrice = amount - discount;
        return finalPrice;
    }

    const checkProductInfo = (item) => {
        const promoItem = product_info?.find(element => {
            if (element._id == item.product_id) {
                return true
            } else {
                return false
            }
        })
        return promoItem

    }

    const checkItemInfo = (item) => {
        const promoItem = item_info?.find(element => {
            if (element._id == item._id) {
                return true
            } else {
                return false
            }
        })
        return promoItem

    }

    return (
        <>
            <div className='pt-6 flex items-center gap-3 rounded-2xl px-6'>
                <img src={img && img} alt="" className='w-[111px] h-[98px] mb-auto py-[6px] rounded-[13px] object-cover' />
                <div className='pr-1 w-[100%]'>
                    <h2 className='text-[#2F2F3F] font-medium text-base'>{title}</h2>
                    <p className='text-[#2F2F3F66] text-xs'>{desc}</p>
                    <div className='flex items-center justify-between mt-2'>
                        <div className="flex items-center gap-2 mt-3">
                            {store_info ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${(price * quantity).toFixed(2)}`}</p>
                                <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount((price * quantity).toFixed(2), promoPer)}`}</p></>
                                : product_info ?
                                    checkProductInfo(item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${(price * quantity).toFixed(2)}`}</p>
                                        <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount((price * quantity).toFixed(2), promoPer)}`}</p></> :
                                        <>
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </> :
                                    item_info ?
                                        checkItemInfo(item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${(price * quantity).toFixed(2)}`}</p>
                                            <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount((price * quantity).toFixed(2), promoPer)}`}</p></> :
                                            <>
                                                <p className='text-[#0AB247] font-bold text-sm'>EBT {(price * quantity).toFixed(2)}</p> </> : <>
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {(price * quantity).toFixed(2)}</p> </>}
                        </div>
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
