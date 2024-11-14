import React, { useContext, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { usePostRequest } from '../../servies/usePostRequest'
import { useDispatch } from 'react-redux'
import { FoodOptionCb } from '../FoodComps/FoodOptionCb'
import ExtraNotePopUp from '../FoodComps/ExtraNotePopUp'
import FoodOptions from '../FoodComps/FoodOptions'

const FoodPopUp = ({ img, text, itemFoodPopup }) => {
    const closeRef = useRef()
    const handleMinusClick = () => {
        if (orderCount > 1) {
            setOrderCount(orderCount - 1)
        }
    }

    const handlePlusClick = () => {
        setOrderCount(orderCount + 1)
    }

    const handleAddItem = () => {
        closeRef.current.click()
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
        dispatch(setShowModel(false))
    }

    console.log(itemFoodPopup, "placing order");

    const { loading, error, response, postRequest } = usePostRequest();
    const dispatch = useDispatch()
    const [orderCount, setOrderCount] = useState(1)
    const { foodPopup, setFoodPopup, foodSelected, setFoodSelected } = useContext(FeresContext)
    return (
        <div className={`${foodPopup || !foodSelected ? '' : 'hidden'} sticky bottom-0 left-0 right-0 z-[1005] bg-white`}>
            <div className='relative'>
                <img src={itemFoodPopup?.image_url} alt="" className='z-50 rounded-tr-3xl rounded-tl-3xl' />
                <img ref={closeRef} src={assets.cancel_icon} alt="" className='absolute right-[3%] top-[7%] bg-white rounded-full' onClick={() =>
                    setFoodPopup(false)
                } />
            </div>
            <div className='bg-white px-4 py-4 rounded-tr-[16px] rounded-tl-[16px]'>
                <h2 className='text-[#2F2F3F] text-xl font-bold mb-2'>{itemFoodPopup?.name}</h2>
                <p className='text-[#767578] text-base'>{itemFoodPopup?.details}</p>
                <div className='flex items-center gap-2 mt-3'>
                    <p className='text-[#9E9E9E] line-through text-base'>ETB 170</p>
                    <p className='text-[#0AB247] font-bold text-base'>{itemFoodPopup?.price}</p>
                </div>
                <p className='text-[#C4C4C4] mt-6 mb-5 text-base'>Add a note</p>
                <div className='flex items-center w-full justify-between'>
                    <button className='border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]'>
                        <img src={assets.minus_sign} alt="" onClick={handleMinusClick} />
                        <p>{orderCount}</p>
                        <img src={assets.plus_sign} alt="" onClick={handlePlusClick} />
                    </button>
                    <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]' onClick={() => {
                        handleAddItem()
                        setFoodSelected(text)

                    }}>{`Add EBT ${orderCount == 1 ? itemFoodPopup?.price : (itemFoodPopup?.price * orderCount).toFixed(2)}`}</button>
                </div>
            </div>
            {/* <FoodOptions /> */}
        </div>
    )
}

export default FoodPopUp