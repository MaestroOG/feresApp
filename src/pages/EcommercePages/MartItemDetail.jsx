import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { usePost } from '../../servies/usePost'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NewOrderPopUpModel from '../NewOrderPopUp'
import { setNewOrderPopup } from '../../redux/slices/modelToggleSlice'
import { setCartItemData } from '../../redux/slices/cartDetail'
import Spinner from '../../components/Spinner'

const MartItemDetail = () => {

    const { id } = useParams()
    const { post, loading, error } = usePost()
    const [itemDetail, setItemDetail] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    const newOrderPopup = useSelector((state) => state.modelToggle.newOrderPopup)
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const store_info = useSelector((state) => state.promotions.store_info)
    const product_info = useSelector((state) => state.promotions.product_info)
    const item_info = useSelector((state) => state.promotions.item_info)
    const promoPer = useSelector((state) => state.promotions.promoPer)
    const loginUser = useSelector((state) => state.userAuth.user)
    const dispatch = useDispatch()
    const [favRes, setFavRes] = useState(null)

    const fetchItemDetail = async () => {
        const endpoint = '/api/e-commerce/get_item_detial'
        try {
            const data = await post(endpoint, {
                item_id: id
            })
            setItemDetail(data)
            console.log(itemDetail)
        } catch (error) {
            console.log(error.message)
        }
    }

    const toggleFavorite = async () => {
        const endpoint = '/api/user/toggle_favourite_items'
        try {
            const data = await post(endpoint, {
                "user_id": loginUser?.user_id,
                "item_id": id,
                "store_id": itemDetail?.item.store_id
            })

            if (data) {
                setFavRes(data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    const favSrc = () => {
        if (condition) {

        }
    }
    const removeNextFourAfterAmpersand = (inputString) => {
        return inputString.replace(/&.{4}/g, ''); // Match '&' followed by any 4 characters and replace it with an empty string
    };

    const addItemInCart = async () => {
        if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {


            const endpoint = '/api/user/new_add_item_in_cart'
            try {
                const data = await post(endpoint, {
                    cart_unique_token: loginUser.cart_unique_token,
                    user_id: loginUser.user_id,
                    // user_id: "621fc0e0c2545594abfd644e",
                    server_token: loginUser.token,
                    // server_token: "0Iqb69j2rP7x4yY7ZGeRst5pfnyp8vfZ",
                    device_type: loginUser.device_type,
                    destination: {
                        address: "",
                        location: {
                            lat: 9.001826571711009,
                            lng: 38.76956474035978
                        }
                    },
                    item: {
                        _id: itemDetail?.item?._id,
                        name: itemDetail?.item?.name,
                        price: itemDetail?.item?.price,
                        quantity: quantity,
                        specification: itemDetail?.item?.specifications || [],
                        unique_id: itemDetail?.item?.unique_id,
                        product_id: itemDetail?.item?.product_id,
                        image_url: itemDetail?.item.image_url ? itemDetail?.item.image_url[0] : "",
                        is_promotion_available: itemDetail?.item?.is_promotion || 0,
                        order_item_description: itemDetail?.item.details || "",
                        promotion: itemDetail?.item.promotion || 0,
                        total_quantity: itemDetail?.item.total_quantity,
                        sales_commission: itemDetail?.product?.sales_commission || 0,
                        shipment_commission: 0,
                        total_item_price: itemDetail?.item.price * quantity,
                        store_id: itemDetail?.item.store_id,
                    }
                })


                const cartResponse = await post('/api/user/get_cart', {
                    cart_unique_token: loginUser.cart_unique_token
                })
                dispatch(setCartItemData(cartResponse.cart))

                if (data.success) {
                    navigate(-1)
                }

            } catch (error) {
                console.log(error.message)
            }

        } else {
            dispatch(setNewOrderPopup(true))

        }

    }

    const handleNewItem = async (cartUniqueToken) => {
        const endpoint = '/api/user/new_add_item_in_cart'

        const data = await post(endpoint, {

            cart_unique_token: cartUniqueToken,
            user_id: loginUser.user_id,
            // user_id: "621fc0e0c2545594abfd644e",
            server_token: loginUser.token,
            // server_token: "0Iqb69j2rP7x4yY7ZGeRst5pfnyp8vfZ",
            device_type: loginUser.device_type,
            destination: {
                address: "",
                location: {
                    lat: 9.001826571711009,
                    lng: 38.76956474035978
                }
            },
            item: {
                _id: itemDetail?.item?._id,
                name: itemDetail?.item?.name,
                price: itemDetail?.item?.price,
                quantity: quantity,
                specification: itemDetail?.item?.specifications || [],
                unique_id: itemDetail?.item?.unique_id,
                product_id: itemDetail?.item?.product_id,
                image_url: itemDetail?.item.image_url ? itemDetail?.item.image_url[0] : "",
                is_promotion_available: itemDetail?.item?.is_promotion || 0,
                order_item_description: itemDetail?.item.details || "",
                promotion: itemDetail?.item.promotion || 0,
                total_quantity: itemDetail?.item.total_quantity,
                sales_commission: itemDetail?.product?.sales_commission || 0,
                shipment_commission: 0,
                total_item_price: itemDetail?.item.price * quantity,
                store_id: itemDetail?.item.store_id,
            }
        })
        const userDetailsResponse = await post('/api/user/get_cart', {
            cart_unique_token: loginUser.cart_unique_token,
        })
        dispatch(setCartItemData(userDetailsResponse.cart))

    }

    useEffect(() => {
        fetchItemDetail()
    }, [])


    function calculateDiscount(amount, discountPer) {


        const discount = (parseFloat(amount) * parseInt(discountPer)) / 100;
        const finalPrice = amount - discount;
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
            {newOrderPopup && <NewOrderPopUpModel handleOK={handleNewItem} />}
            {/* Top Bar */}
            <Container className={'py-5 flex items-center justify-between sticky top-0 w-full bg-white z-30'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Product details</h1>
                <button className='border border-[#EEEEEE] rounded-xl p-2' onClick={() => toggleFavorite()}>
                    <img src={favRes && favRes?.success && favRes?.message.startsWith('Item added') ? assets.favourite_active : assets.favourite} alt="" />
                </button>
            </Container>

            {/* Details */}
            {loading && <Spinner />}
            {error && <div>An Error Ocurred</div>}
            {itemDetail && itemDetail?.success && <Container className={'pb-24'}>
                <div className='bg-[#F1F1F1] rounded-2xl relative'>
                    <img src={assets.zoom_in_area} alt="" className='absolute top-4 right-4' onClick={() => navigate(`/ecommerce/item/itemzoom/${id}`)} />
                    <img src={itemDetail?.item?.image_url[0] && itemDetail?.item?.image_url[0]} className="object-cover rounded-2xl" width={"398px"} height={"297px"} />
                </div>


                {/* Detail Text */}
                <div className='flex items-center justify-between mt-5'>
                    <h1 className='text-[#2F2F3F] text-2xl font-medium'>{itemDetail?.item?.name}</h1>
                    {/* <div className='flex items-center gap-2'>
                        <img src={assets.star} alt="" />
                        <p className='text-lg font-medium text-[#2F2F3F]'>4.5 <span className='text-[#CCCCCC]'>(3)</span></p>
                    </div> */}
                </div>

                {/* Price */}
                <div className='flex items-center gap-2 my-3'>
                                            {store_info ? <>
                                                <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${itemDetail?.item?.price}`}</p>
                                                <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(itemDetail?.item?.price, promoPer)}`}</p></>
                                                : product_info ?
                                                    checkProductInfo(itemDetail?.item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${itemDetail?.item?.price}`}</p>
                                                        <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(itemDetail?.item?.price, promoPer)}`}</p></> :
                                                        <> 
                                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {itemDetail?.item?.price}</p> </> :
                                                    item_info ?
                                                        checkItemInfo(itemDetail?.item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${itemDetail?.item?.price}`}</p>
                                                            <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(itemDetail?.item?.price, promoPer)}`}</p></> :
                                                            <> 
                                                                <p className='text-[#0AB247] font-bold text-sm'>EBT {itemDetail?.item?.price}</p> </> : <> 
                                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {itemDetail?.item?.price}</p> </>}
                    <p className='text-sm text-[#767578]'>(Incl. VAT)</p>
                                        </div>


                {/* Description */}
                <div className='text-[#767578]'>{removeNextFourAfterAmpersand(itemDetail?.item?.details.replace(/<[^>]+>/g, ''))}</div>

                {/* Item */}
                <div className='my-3 text-[#0AB247] font-medium'>
                    {itemDetail?.item?.name} x{itemDetail?.item?.total_quantity}
                </div>
                <div className='my-3 text-[#0AB247] font-medium'>
                    {itemDetail?.item?.size_dimension}
                </div>

                {/* Delivery Info */}
                <div className='flex items-center gap-2 my-5'>
                    <img src={assets.delivery_truck_green} alt="" />
                    <p className='text-[#2F2F3F]'>Ready for delivery by {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} order in {itemDetail?.item?.expected_delivery}hrs</p>
                </div>

                {/* Extra Note (Optional) */}
                <div>
                    <h3 className='text-lg'>Note to store (optional)</h3>
                    <div className='w-[398px] h-[142px] bg-[#F8F8F8] p-3 my-3 rounded-2xl transition-all focus-within:border focus-within:border-[#0AB247] focus-within:bg-white'>
                        <textarea name="" id="" className='w-full border-none outline-none h-full overflow-auto bg-transparent placeholder:text-[#767578]' placeholder='Leave a note for the store'></textarea>
                    </div>
                </div>
            </Container>}


            {/* Bottom Buttons */}
            <Container className={'py-4 fixed w-full bottom-0 left-0 bg-white flex items-center justify-between gap-3 rounded-[13px]'}>
                <div className='w-[158px] h-[58px] flex items-center justify-between border border-[#EEEEEE] px-3 rounded-2xl'>
                    <img src={assets.minus_sign} alt="" onClick={() => {
                        if (quantity > 1) setQuantity(prev => prev - 1)
                    }} />
                    <img src={assets.separator} alt="" className='h-[57px]' />
                    <p className='font-medium text-[#2F2F3F]'>{quantity}</p>
                    <img src={assets.separator} alt="" className='h-[57px]' />
                    <img src={assets.plus_sign} alt="" onClick={() => setQuantity(prev => prev + 1)} />
                </div>

                <div className='w-1/2'>
                    <button onClick={addItemInCart} className='text-white font-medium text-lg flex items-center justify-center gap-2 bg-[#0AB247] w-full p-4 rounded-lg'>
                        <img src={assets.shopping_basket} alt="" className='invert' />
                        <p>Add To Basket</p>
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default MartItemDetail