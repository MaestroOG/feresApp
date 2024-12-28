import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MartProductCard = ({ isDiscount, item }) => {
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const store_info = useSelector((state)=> state.promotions.store_info)
    const product_info = useSelector((state)=> state.promotions.product_info)
    const item_info = useSelector((state)=> state.promotions.item_info)
    const promoPer = useSelector((state) => state.promotions.promoPer)


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

    function calculateDiscount(amount, discountPer) {

        
        const discount = (parseFloat(amount) * parseInt(discountPer)) /100;
        const finalPrice =  amount-discount ; 
        return finalPrice;
    }
    
    const checkProductInfo = (item) => {
        const promoItem = product_info?.find(element => {
            if (element._id == item.product_id) {
                return true
            } else {
                return false
            }
        })
        return promoItem

    }

    const checkItemInfo = (item) => {
        const promoItem = item_info?.find(element => {
            if (element._id == item._id) {
                return true
            } else {
                return false
            }
        })
        return promoItem

    }


    return (
        <div>
            <Link to={`/ecommerce/mart/martproduct/item/${item?._id}`} className='bg-[#F1F1F1] w-[189px] h-[159px] relative flex items-center justify-center rounded-2xl'>
            {product_info ? checkProductInfo(item) && <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div> : item_info ? checkItemInfo(item) && <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div> : store_info ? <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div> : <></> }
                <img src={item?.image_url[0]} className="object-cover" width={"93px"} height={"132px"} />
                {isDiscount && <div className='text-xs font-medium text-white bg-[#0AB247] rounded-md px-3 py-2 absolute top-3 left-2'>Save 20%</div>}
                <div className='absolute w-8 h-8 bg-[white] rounded-full flex items-center justify-center right-[10px] bottom-[13px] text-[green]'> {quantity ? quantity : <img src="/green_plus_icon.svg" alt="" />}</div>
                
            </Link>
            <div className='w-[189px] my-1'>
                <p className='text-[#2F2F3F]'>{item?.name}</p>
                <div className='my-2'>
                                           {store_info ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${item?.price}`}</p>
                                           <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(item?.price,promoPer)}`}</p></>
                                             : product_info ?  
                                             checkProductInfo(item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${item?.price}`}</p>
                                            <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(item?.price,promoPer)}`}</p></> :                                   
                                             <> 
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </> :
                                             item_info ?  
                                             checkItemInfo(item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${item?.price}`}</p>
                                            <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(item?.price,promoPer)}`}</p></> :                                   
                                             <> 
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </> :  <> 
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </>}
                                        </div>

            
            </div>
        </div>
    )
}

export default MartProductCard
