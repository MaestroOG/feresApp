import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setShowModel } from '../../redux/slices/modelToggleSlice'
import { addItem } from '../../redux/slices/cartSlice'
import { usePostRequest } from '../../servies/usePostRequest'

const OrderQuantityBtn = ({ itemFoodPopup }) => {
    const { loading, error, response, postRequest } = usePostRequest();
    const dispatch = useDispatch()
    const [orderCount, setOrderCount] = useState(1)
    const navigate = useNavigate();

    const handleMinusClick = () => {
        if (orderCount > 1) {
            setOrderCount(orderCount - 1)
        }
    }

    const handlePlusClick = () => {
        setOrderCount(orderCount + 1)
    }

    const handleAddItem = () => {
        if (itemFoodPopup) {
            const requestBody = {
                cart_unique_token: "i5H3Gacl5CPbcOSY4Wip",
                user_id: "665ff60f83157cfd6e1b0b48",
                server_token: "co47wswKut7emZp2qOUWdEWVDbZvVTDl",
                device_type: "android",
                destination: {
                    address: "2Q29+PV, አዲስ አበባ",
                    location: {
                        lat: 9.001826571711009,
                        lng: 38.76956474035978
                    }
                },
                item: {
                    _id: itemFoodPopup._id,
                    name: itemFoodPopup.name,
                    price: itemFoodPopup.price,
                    quantity: orderCount,
                    specification: itemFoodPopup.specifications || [],
                    unique_id: itemFoodPopup.unique_id,
                    product_id: itemFoodPopup.product_id,
                    image_url: itemFoodPopup.image_url ? itemFoodPopup.image_url[0] : "",
                    is_promotion_available: itemFoodPopup.is_promotion_available,
                    order_item_description: itemFoodPopup.details || "",
                    promotion: itemFoodPopup.promotion || 0,
                    total_quantity: itemFoodPopup.total_quantity,
                    sales_commission: 0,
                    shipment_commission: 0,
                    total_item_price: itemFoodPopup.price * orderCount,
                    store_id: itemFoodPopup.store_id,
                }
            };
            postRequest('/api/user/new_add_item_in_cart', requestBody)
            // Dispatch both item and its quantity
            dispatch(addItem({ ...itemFoodPopup, quantity: orderCount }))
        }
        // dispatch(setShowModel(false))
    }

    console.log(itemFoodPopup, "placing order");

    return (
        <div className='flex items-center w-full gap-3 fixed bottom-0 bg-white py-6 justify-center'>
            <div className='border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]' >
                <button className='flex items-center justify-center' onClick={handleMinusClick}>
                    <img src={assets.minus_sign} alt="minus" className='invert' />
                </button>
                <p>{orderCount}</p>
                <button className='flex items-center justify-center' onClick={handlePlusClick}>
                    <img src={assets.plus_sign} alt="plus" />
                </button>
            </div>
            {loading ? <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]'>
                Loading ...
            </button> :
                <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]' onClick={handleAddItem}>
                    {`Add EBT ${orderCount == 1 ? itemFoodPopup?.price : (itemFoodPopup?.price * orderCount).toFixed(2)}`}
                </button>}
        </div>
    )
}

export default OrderQuantityBtn
