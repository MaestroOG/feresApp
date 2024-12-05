import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { v4 as uuidv4 } from 'uuid'  // Import uuid for unique token generation
import { loginUser } from '../../redux/slices/userAuthSlice'
import { setCartItemData, setCartDetails, setCartCount } from '../../redux/slices/cartDetail'


const DelOrderPopUp = () => {
    const { delOrderVisible, setDelOrderVisible, clearCart } = useContext(FeresContext)
    const userDetail = useSelector((state) => state.userAuth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    console.log(userDetail, "here is a details ");

    const handleDelete = () => {
        const cartUniqueToken = uuidv4()
        const newUserDetail = { ...userDetail, token: cartUniqueToken }
        dispatch(loginUser(newUserDetail))
        localStorage.setItem("cart_unique_token", cartUniqueToken)
        localStorage.setItem("userData", JSON.stringify(newUserDetail))
        dispatch(addItem([]))
        dispatch(setCartItemData(null))
        dispatch(setCartDetails(null))
        dispatch(setCartCount(null))
        navigate('/')
        setDelOrderVisible(false)
    }


    return (
        <div className={`${!delOrderVisible ? 'hidden' : ''} fixed bg-white pt-4 w-full bottom-0 rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640] z-30`}>
            <div className='w-full'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <img src={assets.close} alt="" className='ml-auto mr-4' onClick={() => setDelOrderVisible(false)} />
            </div>
            <div className='flex flex-col justify-center items-center pb-6'>
                <h2 className='text-[#2F2F3F] font-black text-2xl'>Delete orders</h2>
                <h4 className='text-[#72737B] text-lg pb-3'>Are you sure, you want to delete these orders</h4>
                <button className='bg-[#E92D53] text-white rounded-full w-[90%] p-[16px] mb-4' onClick={handleDelete}>Delete</button>
                <button className='bg-[#F8F8F8] text-[#2F2F3F] rounded-full w-[90%] p-[16px]' onClick={() => setDelOrderVisible(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default DelOrderPopUp