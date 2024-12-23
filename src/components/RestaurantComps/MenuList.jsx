import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import { setNewOrderPopup, setShowModel } from '../../redux/slices/modelToggleSlice'
import { setSelectedFood } from '../../redux/slices/selectedFoodSlice'
import { addItem } from '../../redux/slices/cartSlice'
import { usePost } from '../../servies/usePost'
import { setCartItemData } from '../../redux/slices/cartDetail'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'
import { setSupportItem } from '../../redux/slices/selectedResturantSlice'
import Spinner from '../Spinner'

const MenuList = ({ products, addItemInCart, cartUniqueToken, support }) => {
    const navigate = useNavigate()
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const loginUser = useSelector((state) => state.userAuth.user)
    const { post, loading } = usePost()
    const dispatch = useDispatch()
    const [orderCount, setOrderCount] = useState(1)
    const { setFoodPopup } = useContext(FeresContext)


    const handleAddItem = async (item) => {


        const requestBody = {
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
                _id: item._id,
                name: item.name,
                price: item.price,
                quantity: orderCount,
                specification: item.specifications || [],
                unique_id: item.unique_id,
                product_id: item.product_id,
                image_url: item.image_url ? item.image_url[0] : "",
                is_promotion_available: item.is_promotion_available,
                order_item_description: item.details || "",
                promotion: item.promotion || 0,
                total_quantity: item.total_quantity,
                sales_commission: 0,
                shipment_commission: 0,
                total_item_price: item.price * orderCount,
                store_id: item.store_id,
            }
        }

        const requestDataGroup = {
            user_id: cartItemData.user._id,
            type_product: "food",
            group_order: true,
            group_user: loginUser.user_id,
            item: {
                _id: item._id,
                name: item.name,
                price: item.price,
                quantity: orderCount,
                specification: item.specifications || [],
                unique_id: item.unique_id,
                product_id: item.product_id,
                image_url: item.image_url ? item.image_url[0] : "",
                is_promotion_available: item.is_promotion_available,
                order_item_description: item.details || "",
                promotion: item.promotion || 0,
                total_quantity: item.total_quantity,
                sales_commission: 0,
                shipment_commission: 0,
                total_item_price: item.price * orderCount,
                store_id: item.store_id,
            },
            destination: {
                location: {
                    lat: 0,
                    lng: 0
                },
                address: ""
            },
            cart_unique_token: cartUniqueToken
        }


        if (loginUser.cart_unique_token != cartUniqueToken && cartUniqueToken) {
            const responseData = await post('/api/user/new_add_group_item_in_cart', requestDataGroup)
            const userDetailsResponseprev = await post('/api/user/get_cart', {
                cart_unique_token: loginUser.cart_unique_token,
            })
            const userDetailsResponse = await post('/api/user/get_cart', {
                cart_unique_token: cartUniqueToken,
            })
            dispatch(setCartItemData(userDetailsResponse.cart))
            console.log(userDetailsResponse, "responseDataresponseDataresponseData");

        } else {
            if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                const data = await post('/api/user/new_add_item_in_cart', requestBody)
                if (data.success) {
                    const userDetailsResponse = await post('/api/user/get_cart', {
                        cart_unique_token: loginUser.cart_unique_token,
                    })
                    dispatch(setCartItemData(userDetailsResponse.cart))
                }
            } else {
                const data = await post('/api/user/new_add_item_in_cart', requestBody)
                const userDetailsResponse = await post('/api/user/get_cart', {
                    cart_unique_token: loginUser.cart_unique_token,
                })
                dispatch(setCartItemData(userDetailsResponse.cart))
            }

        }
    }

    // Helper function to check if an item is in the cart
    const findCartItemQuantity = (item) => {
        // Find matching item by _id or image_url
        const cartItem = cartItemData?.stores[0]?.items?.find(
            (cartItem) =>
                cartItem._id === item._id
        )
        return cartItem ? cartItem.quantity : null
    }
    return (
        <>
            {support ? <div>
                <div className='bg-[#FFD335] p-2 rounded-lg text-[#2F2F3F] text-xs font-medium w-max mt-6 mb-1'>Trending</div>
                {products?.map((item) => (
                    <div key={item._id} onClick={() => {
                        dispatch(setSupportItem(item))
                        navigate('/restaurantsupport/ingredientinfo')
                    }}>
                        <div className={`${item?.details.length > 0 && 'my-4'}`}>
                            <div className='flex items-center justify-between' onClick={() => {
                                dispatch(setSupportItem(item))
                                navigate('/restaurantsupport/ingredientinfo')

                            }}>
                                <div className='flex flex-col gap-1 flex-[3]'>
                                    <div className='flex items-center gap-2'>
                                        <h2 className='text-[#2F2F3F] text-sm font-medium'>{item?.name.split(/\s+/).slice(0, 3).join(' ')}</h2>
                                        {/* <button className='border border-[#0AB247] bg-white p-2 w-[70px] rounded-full text-[#0AB247] text-sm font-medium' onClick={() => {
                                    }}>
                                            Add
                                    </button> */}
                                    </div>
                                    <p className='text-[#AEAEAE] font-normal text-sm w-[90%]'>{item?.details.split(/\s+/).slice(0, 3).join(' ')}</p>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#AEAEAE] text-sm'>{`ETB 170`}</p>
                                        <p className='text-[#0AB247] text-sm font-bold'>{`ETB ${item?.price}`}</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end pb-3 justify-center top-[13px]'>
                                    {item?.image_url[0] && <img src={item?.image_url[0]} className='w-[132px] h-[123px] rounded-2xl object-cover ' alt=""
                                        style={{ width: '132px', height: '123px' }} />}
                                </div>
                            </div>
                        </div>
                        <hr className='my-3' />
                    </div>
                ))}
            </div> : <div>
                <div className='bg-[#FFD335] p-2 rounded-lg text-[#2F2F3F] text-xs font-medium w-max mt-6 mb-1'>Trending</div>
                {products?.map((item) => (
                    <div key={item._id} onClick={() => {
                        if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                            setFoodPopup(true)
                            handleAddItem(item)
                        } else {
                            dispatch(setNewOrderPopup(true))
                        }
                    }}>
                        <div className={`${item?.details.length > 0 && 'my-4'}`}>
                            <div className='flex items-center justify-between' onClick={() => {
                                if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                                    dispatch(setShowModel(true))
                                    dispatch(setSelectedFood(item))
                                } else {
                                    dispatch(setNewOrderPopup(true))
                                }
                            }}>
                                <div className='flex flex-col gap-1 flex-[3]'>
                                    <div className='flex items-center gap-2'>
                                        <h2 className='text-[#2F2F3F] text-sm font-medium'>{item?.name}</h2>
                                        {loading && <Spinner />}
                                        {!loading && findCartItemQuantity(item) > 0 && <button className='border border-[#0AB247] bg-white p-2 w-[70px] rounded-full text-[#0AB247] text-sm font-medium' onClick={(e) => {
                                            e.stopPropagation()

                                        }}>
                                            {findCartItemQuantity(item)}
                                        </button>}
                                    </div>
                                    <p className='text-[#AEAEAE] font-normal text-sm w-[90%]'>{item?.details}</p>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#AEAEAE] text-sm'>{`ETB 170`}</p>
                                        <p className='text-[#0AB247] text-sm font-bold'>{`ETB ${item?.price}`}</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end pb-3 justify-center top-[13px]'>
                                    {item?.image_url[0] && <img src={item?.image_url[0]} className='w-[132px] h-[123px] rounded-2xl object-cover ' alt=""
                                        style={{ width: '132px', height: '123px' }} />}
                                </div>
                            </div>
                        </div>
                        <hr className='my-3' />
                    </div>
                ))}
            </div>}
        </>
    )
}

export default MenuList
