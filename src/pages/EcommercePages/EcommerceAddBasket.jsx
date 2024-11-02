import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const EcommerceAddBasket = ({ to }) => {
    const navigate = useNavigate();
    return (
        <div className='p-4 px-3 w-full bg-white fixed bottom-0 left-0'>
            <button onClick={() => navigate(`${to}`)} className='text-white font-medium text-lg flex items-center justify-center gap-2 bg-[#0AB247] w-full p-4 rounded-full'>
                <img src={assets.shopping_basket} alt="" className='invert' />
                <p>Add To Basket</p>
            </button>
        </div>
    )
}

export default EcommerceAddBasket