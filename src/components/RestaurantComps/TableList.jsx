import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModel } from '../../redux/slices/modelToggleSlice';
import { setSelectedFood } from '../../redux/slices/selectedFoodSlice';
import { usePost } from '../../servies/usePost';
import { setCartItemData } from '../../redux/slices/cartDetail';
import { assets } from '../../assets/assets';

const TableList = ({ products }) => {
    const dispatch = useDispatch();
    const { post } = usePost();

    // Redux Selectors
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData);
    const loginUser = useSelector((state) => state.userAuth.user);

    const handleAddItem = async (item) => {
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

        const data = await post('/api/user/new_add_item_in_cart', requestBody);
        const userDetailsResponse = await post('/api/user/get_cart', {
            cart_unique_token: loginUser.cart_unique_token,
        });
        dispatch(setCartItemData(userDetailsResponse.cart));
    };

    const findCartItemQuantity = (item) => {
        const cartItem = cartItemData?.stores[0]?.items?.find(
            (cartItem) => cartItem._id === item._id
        );
        return cartItem ? cartItem.quantity : 0;
    };

    return products.map((item) => {
        const itemQuantity = findCartItemQuantity(item);

        return (
            <div className="flex overflow-auto" key={item?._id}>
                <div className="min-w-[170px]">
                    <div
                        className="relative w-max"
                        onClick={() => {
                            dispatch(setShowModel(true));
                            dispatch(setSelectedFood(item));
                        }}
                    >
                        <img
                            src={item?.image_url[0]}
                            alt=""
                            className="rounded-[13px] w-[155px] h-[144px] object-cover"
                            width={'155px'}
                            height={'144px'}
                        />

                        <div className={`rounded-full bg-white ${itemQuantity > 0 ? 'py-[9px] px-[16.5px]' : 'p-[9px]'} absolute bottom-2 right-2`}>
                            {itemQuantity > 0 ? (
                                <span className="text-[#0AB247] font-bold">{itemQuantity}</span>
                            ) : (
                                <img
                                    src={assets.add_green}
                                    alt=""
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent parent div click
                                        handleAddItem(item);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="my-1">
                        <h4 className="text-[#2F2F3F] text-sm mb-1 w-[165px]">{item?.name}</h4>
                        <p className="text-[#AEAEAE] font-normal text-sm w-[165px] mb-1">
                            {item?.details.slice(0, 40)}..
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-[#0AB247] text-sm font-bold">ETB {item?.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

export default TableList;
