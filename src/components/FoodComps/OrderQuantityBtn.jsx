import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setShowModel } from '../../redux/slices/modelToggleSlice'
import { addItem } from '../../redux/slices/cartSlice'

const OrderQuantityBtn = ({ itemFoodPopup }) => {
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
            // Dispatch both item and its quantity
            dispatch(addItem({ ...itemFoodPopup, quantity: orderCount }))
        }
        dispatch(setShowModel(false))
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
            <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]' onClick={handleAddItem}>
                {`Add EBT ${orderCount == 1 ? itemFoodPopup?.price : (itemFoodPopup?.price * orderCount).toFixed(2)}`}
            </button>
        </div>
    )
}

export default OrderQuantityBtn
