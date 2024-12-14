import React from 'react'
import { assets } from '../../assets/assets'
import { useSelector } from 'react-redux'

const RateFoodCard = () => {
    const cartDetails = useSelector((state) => state.cartDetails.cartItemData)
console.log(cartDetails,"cartDetailscartDetails");
const formatDate = (isoString) => {
    const date = new Date(isoString);

    // Options for formatting
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    };

    // Format date using toLocaleString
    return date.toLocaleString("en-GB", options).replace(',', '');
};

    return (
        <div className='border border-[#EEEEEE] rounded-[16px] flex items-center justify-between p-5 mt-5'>
            <div className='flex items-center gap-2'>
                <img src={cartDetails?.stores[0]?.image_url} alt="" width={80}/>
                <div>
                    <p className='text-[#767578] text-sm mb-1'>{formatDate(cartDetails?.created_at)}</p>
                    <h4 className='text-[#2F2F3F] font-medium text-base'>{cartDetails?.stores[0]?.name}</h4>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 justify-end mb-1'>
                    <p className='text-[#767578] text-sm font-medium'>Delivered</p>
                </div>
                <p>{`ETB ${cartDetails?.total_cart_price}`}</p>
            </div>
        </div>
    )
}

export default RateFoodCard