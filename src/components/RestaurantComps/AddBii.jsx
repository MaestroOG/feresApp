import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext';
import { assets } from '../../assets/assets';

const AddBii = ({ items }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(FeresContext)
    return (
        <div className='bg-white px-2 py-4 fixed bottom-0 w-full z-10'>
            <button onClick={() => {
                addToCart(items)
                navigate('/order')
            }} className='flex items-center justify-between bg-[#0AB247] text-white w-full rounded-full p-4 px-5'>
                <div className='flex items-center text-center gap-2'>
                    <img src={assets.shopping_basket} alt="" className='invert' />
                    Add To Basket
                </div>
                <div className='text-white text-lg font-medium'>ETB{items.reduce((sum, item) => sum + item.price, 0)}</div>
            </button>
        </div>
    )
}

export default AddBii