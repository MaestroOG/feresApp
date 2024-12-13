import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MartProductCard = ({ isDiscount, item }) => {
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)

    // Function to find cart item quantity
    const findCartItemQuantity = (item) => {
        // Find matching item by _id
        const cartItem = cartItemData?.stores[0]?.items?.find(
            (cartItem) => cartItem?._id === item?._id
        )
        return cartItem ? cartItem?.quantity : null
    }

    // Get the quantity of the current item
    const quantity = findCartItemQuantity(item)


    return (
        <div>
            <Link to={`/ecommerce/mart/martproduct/item/${item?._id}`} className='bg-[#F1F1F1] w-[189px] h-[159px] relative flex items-center justify-center rounded-2xl'>
                <img src={item?.image_url[0]} className="object-cover" width={"93px"} height={"132px"} />
                {isDiscount && <div className='text-xs font-medium text-white bg-[#0AB247] rounded-md px-3 py-2 absolute top-3 left-2'>Save 20%</div>}
                <div className='absolute w-8 h-8 bg-[white] rounded-full flex items-center justify-center right-[10px] bottom-[13px] text-[green]'> {quantity ? quantity : <img src="/green_plus_icon.svg" alt="" />}</div>
                
            </Link>
            <div className='w-[189px] my-1'>
                <p className='text-[#2F2F3F]'>{item?.name}</p>
                <p className='text-[#2F2F3F] font-bold'>EBT {item?.price}</p>
            
            </div>
        </div>
    )
}

export default MartProductCard
