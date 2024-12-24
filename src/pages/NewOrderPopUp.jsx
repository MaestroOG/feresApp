import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { setNewOrderPopup } from '../redux/slices/modelToggleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'  // Import uuid for unique token generation
import { loginUser } from '../redux/slices/userAuthSlice';
import { setCartDetails, setCartItemData } from '../redux/slices/cartDetail';



const NewOrderPopUpModel = ({handleOK}) => {
    const [visible, setVisible] = useState(true);
    const userDetail = useSelector((state) => state.userAuth.user)
    const dispatch = useDispatch()
    const handleEmptyCart = ()=>{
       const cartUniqueToken = uuidv4()
        const newObj = {...userDetail , cart_unique_token: cartUniqueToken }
        dispatch(loginUser(newObj))
        dispatch(setCartItemData(null))
        dispatch(setCartDetails(null))
        localStorage.setItem("userData", JSON.stringify(newObj))
        handleOK && handleOK(cartUniqueToken)
        dispatch(setNewOrderPopup(false))
    }

    return (
        <div
            className={`fixed inset-0 z-50 ${visible ? '' : 'hidden'}`}
            style={{ zIndex: 99999 }}
        >
            {/* Background Overlay */}
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setVisible(false)} // Close the popup when clicking on the overlay
            ></div>

            {/* Popup Content */}
            <div className="rounded-tr-2xl rounded-tl-2xl w-full mx-auto fixed bottom-0 z-60 bg-white pt-4">
                <div className="bg-[#ECFFF3] w-11/12 mx-auto rounded-lg">
                    <img src={assets.newOrder_img} alt="" />
                </div>
                <div className="w-11/12 mx-auto mb-5">
                    <h2 className="text-xl font-bold mt-5">Make a new order</h2>
                    <p className="font-medium text-sm text-[#72737B] my-3">
                        A new order will remove the items from your cart.
                    </p>
                    <div className="mt-4 w-full flex items-center justify-between">
                        <button
                            className="bg-[#F6F6F6] rounded-[30px] px-[16px] py-[16px] text-[#2F2F3F] font-medium text-lg w-[49%]"
                            onClick={ ()=>dispatch(setNewOrderPopup(false))
                            }
                        >
                            Cancel
                        </button>
                        <button className="bg-[#0AB247] rounded-[30px] px-[16px] py-[16px] text-white font-medium text-lg w-[49%]" onClick={handleEmptyCart}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewOrderPopUpModel;
