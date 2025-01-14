import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewOrderPopup, setShowModel } from '../../redux/slices/modelToggleSlice';
import { setSelectedFood } from '../../redux/slices/selectedFoodSlice';
import { usePost } from '../../servies/usePost';
import { setCartItemData } from '../../redux/slices/cartDetail';
import { assets } from '../../assets/assets';
import { FeresContext } from '../../context/FeresContext';
import { useNavigate } from 'react-router-dom';
import { setSupportItem } from '../../redux/slices/selectedResturantSlice';
import Spinner from '../Spinner';


const TableList = ({ products, support }) => {
    const dispatch = useDispatch();
    const { post } = usePost();
    const navigate = useNavigate()
    // Redux Selectors
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData);
    const loginUser = useSelector((state) => state.userAuth.user);
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const store_info = useSelector((state) => state.promotions.store_info)
    const product_info = useSelector((state) => state.promotions.product_info)
    const item_info = useSelector((state) => state.promotions.item_info)
    const promoPer = useSelector((state) => state.promotions.promoPer)
    const [loadingItems, setLoadingItems] = useState({});
    const { setFoodPopup } = useContext(FeresContext)





    const handleAddItem = async (item) => {
        try {
            setLoadingItems((prev) => ({ ...prev, [item._id]: true }));
            const requestBody = {
                cart_unique_token: loginUser.cart_unique_token,
                user_id: loginUser.user_id,
                server_token: loginUser.token,
                device_type: loginUser.device_type,
                destination: {
                    address: "",
                    location: {
                        lat: 9.001826571711009,
                        lng: 38.76956474035978,
                    },
                },
                item: {
                    _id: item._id,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
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
                    total_item_price: item.price,
                    store_id: item.store_id,
                },
            };

            if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                const data = await post('/api/user/new_add_item_in_cart', requestBody)
                const userDetailsResponse = await post('/api/user/get_cart', {
                    cart_unique_token: loginUser.cart_unique_token,
                })
                dispatch(setCartItemData(userDetailsResponse.cart))
            } else {
                const data = await post('/api/user/new_add_item_in_cart', requestBody)
                const userDetailsResponse = await post('/api/user/get_cart', {
                    cart_unique_token: loginUser.cart_unique_token,
                })
                dispatch(setCartItemData(userDetailsResponse.cart))
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoadingItems((prev) => ({ ...prev, [item._id]: false }));
        }
    }

    const findCartItemQuantity = (item) => {
        const cartItem = cartItemData?.stores[0]?.items?.find(
            (cartItem) => cartItem._id === item._id
        );
        return cartItem ? cartItem.quantity : 0;
    };

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

    return products.map((item) => {
        const itemQuantity = findCartItemQuantity(item);
        const isLoading = loadingItems[item._id];

        return (
            <div className="flex" key={item?._id}>
                <div className="min-w-[170px]" onClick={() => {

                    if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                        setFoodPopup(true)
                    } else {
                        dispatch(setNewOrderPopup(true))
                    }
                }}>
                    <div
                        className="relative w-max"
                        onClick={() => {
                            if (support) {
                                dispatch(setSupportItem(item))
                                navigate('/restaurantsupport/ingredientinfo')
                            } else {
                                if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                                    dispatch(setShowModel(true));
                                    dispatch(setSelectedFood(item));
                                } else {
                                    dispatch(setNewOrderPopup(true))
                                }

                            }

                        }}
                    >
                        {product_info ? checkProductInfo(item) && <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div> : item_info ? checkItemInfo(item) && <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div> : store_info ? <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div> : <></>}



                        <img
                            src={item?.image_url[0]}
                            alt=""
                            className="rounded-[13px] w-[155px] h-[144px] object-cover"
                            width={'155px'}
                            height={'144px'}
                        />

                        <div className={`rounded-full bg-white ${itemQuantity > 0 ? 'py-[9px] px-[16.5px]' : 'p-[9px]'} absolute bottom-2 right-2`}>
                            {isLoading && <Spinner />}
                            {!isLoading && itemQuantity > 0 ? (
                                <span className="text-[#0AB247] font-bold">{itemQuantity}</span>
                            ) : !isLoading && (
                                <img
                                    src={assets.add_green}
                                    alt=""
                                    onClick={(e) => {
                                        if (support) {
                                            dispatch(setSupportItem(item))
                                            navigate('/restaurantsupport/ingredientinfo')
                                        } else {
                                            if (selectedResturant?.store?._id == cartItemData?.stores[0]?._id || !cartItemData) {
                                                dispatch(setSelectedFood(item));
                                                dispatch(setShowModel(true));

                                            } else {
                                                dispatch(setNewOrderPopup(true))
                                            }

                                        }

                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="my-1">
                        <h4 className="text-[#2F2F3F] text-sm mb-1 w-[165px]">{item?.name.split(/\s+/).slice(0, 3).join(' ')}</h4>
                        <p className="text-[#AEAEAE] font-normal text-sm w-[165px] mb-1 truncate">
                            {item?.details.slice(0, 40)}..
                        </p>
                        <div className='flex items-center gap-2'>

                            {store_info ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${item?.price}`}</p>
                                <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(item?.price, promoPer)}`}</p></>
                                : product_info ?
                                    checkProductInfo(item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${item?.price}`}</p>
                                        <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(item?.price, promoPer)}`}</p></> :
                                        <>
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </> :
                                    item_info ?
                                        checkItemInfo(item) ? <> <p className='text-[#9E9E9E] line-through text-base'>{`ETB ${item?.price}`}</p>
                                            <p className='text-[#0AB247] font-bold text-base'>{`ETB ${calculateDiscount(item?.price, promoPer)}`}</p></> :
                                            <>
                                                <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </> : <>
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p> </>}

                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

export default TableList;
