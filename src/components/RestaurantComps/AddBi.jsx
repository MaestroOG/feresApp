import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext';
import { assets } from '../../assets/assets';
import { useSelector } from 'react-redux';

const AddBi = ({ items, cartResponse, total_item_count, total_cart_price, loading }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(FeresContext)
    const { id } = useParams();
    const cartItems = useSelector((state) => state.cart.items)

    return (
        <div className='bg-white px-2 py-4 fixed bottom-0 w-full z-[999]'>
            {total_item_count < 1 ? <button onClick={() => {
                addToCart(items)
                navigate(`/cart/${id}`)
            }} className='flex items-center justify-center bg-[#0AB247] text-white w-full rounded-full p-4 px-5'>
                <div className='flex items-center text-center gap-2 relative'>
                    Add To Basket
                </div>
                {/* <div className='text-white text-lg font-medium'>ETB140.00</div> */}
            </button> : <button onClick={() => {
                addToCart(items)
                navigate(`/cart/${id}`)
            }} className='flex items-center justify-around bg-[#0AB247] text-white w-full rounded-full p-4 px-5'>
                <div className='flex items-center text-center gap-2 relative'>
                    <div className='py-[0px] px-[8px] bg-[red] ml-[5px] flex items-center justify-center rounded-full absolute right-[93%] bottom-[6px] z-10'>{total_item_count}</div> <img src={assets.shopping_basket} alt="" className='invert' />
                    View Basket
                </div>
                <div className='text-white text-lg font-medium'>{`ETB ${total_cart_price}`}</div>
            </button>}
        </div>
    )
}

export default AddBi