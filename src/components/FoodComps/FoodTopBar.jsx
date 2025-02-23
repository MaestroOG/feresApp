import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setShowModel } from '../../redux/slices/modelToggleSlice'

const FoodTopBar = ({ itemImg }) => {
    const dispatch = useDispatch()
    return (
        <div className='relative'>
            <img src={itemImg[0]} alt="" className='w-screen' />
            <button className='absolute top-[10%] left-[4%] bg-[#FFFFFF33] p-3 rounded-xl' onClick={() => dispatch(setShowModel(false))}>
                <img src={assets.arrow_left_02} alt="" className='invert' />
            </button>
            <div className='absolute top-[10%] right-[4%]'>
                <button className='bg-[#FFFFFF33] p-3 rounded-xl ml-4'>
                    <img src={assets.share} alt="" />
                </button>
                <button className='bg-[#FFFFFF33] p-3 rounded-xl ml-4'>
                    <img src={assets.heart_icon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default FoodTopBar