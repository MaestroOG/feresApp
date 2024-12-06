import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const EcommerceAddBasket = ({ to, cart_price, cart_quantity }) => {
    const navigate = useNavigate();
    return (
        <div className='p-4 px-3 w-full bg-white fixed bottom-0 left-0'>
            <button onClick={() => navigate(`${to}`)} className='text-white font-medium text-lg flex items-center justify-between gap-2 bg-[#0AB247] w-full p-4 rounded-full'>
                <div className='flex items-center gap-2 relative'>
                    <div className='py-[0px] px-[8px] bg-[red] ml-[5px] flex items-center justify-center rounded-full absolute right-[93%] bottom-[6px] z-10'>{cart_quantity}</div>
                    <img src={assets.shopping_basket} alt="" className='invert' />
                    <p>View Basket</p>
                </div>
                <div>
                    <p>ETB {cart_price}</p>
                </div>
            </button>
        </div>
    )
}

export default EcommerceAddBasket