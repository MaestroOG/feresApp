import React, { useState, useEffect, useRef, useContext } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
import { FeresContext } from '../../context/FeresContext';
import { useDispatch, useSelector } from 'react-redux';
import { usePostRequest } from '../../servies/usePostRequest';
import { usePost } from '../../servies/usePost';
import { loginUser } from '../../redux/slices/userAuthSlice';




const OrderConfirmBtn = ({ orderData, setReview }) => {
    const paymentMethod = useSelector((state) => state.modelToggle.paymentMethod)
    const userDetail = useSelector((state) => state.userAuth.user)
    const cartDetail = useSelector((state) => state.cartDetails.cartDetails)
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { response, postRequest } = usePostRequest();
    const { post, error } = usePost()
    const [value, setValue] = useState(0); // Initial slider value
    const rangeRef = useRef(null);
    const thumbRef = useRef(null);

    console.log(paymentMethod);
    // console.log(cartItemData._id);
    // const { paymentMethod } = useContext(FeresContext)

    // Update thumb tracker position
    const updateThumbPosition = () => {
        const range = rangeRef.current;
        const thumb = thumbRef.current;

        const rangeWidth = range.offsetWidth;
        const thumbWidth = thumb.offsetWidth;
        const max = range.max;
        const min = range.min;

        // Calculate percentage and thumb position
        const percent = (value - min) / (max - min);
        const thumbPosition = percent * (rangeWidth - thumbWidth - 10) + thumbWidth / 2;

        // Update thumb tracker position
        thumb.style.left = `${thumbPosition + 7}px`;
    };

    const handleChange = async (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        // console.log(newValue);


        if (newValue === "100") {

            if (paymentMethod === 'ebirr') {
                setReview(true)
            }
            else {

                const payOrderResponse = postRequest('/api/user/pay_order_payment',
                    {
                        // cart_unique_token: orderData?.cart?.cart_unique_token,
                        // cart_id: orderData?.cart?._id,
                        phone: cartItemData?.user?.phone,
                        country_code: "+251",
                        server_token: userDetail?.token,
                        user_id: cartItemData?.user?._id,
                        cart_id: cartItemData?._id,
                        cart_unique_token: cartItemData?.cart_unique_token,
                        is_payment_mode_waafi: false,
                        is_payment_mode_cash: true,
                        is_brafo_payment_mode: false,
                        payment_id: 0,
                        order_payment_id: cartDetail?.order_payment[0]?._id,
                        // country_id: "6220aa1857e734afb72baf38",
                        country_id: cartDetail?.order_payment[0]?.country_id,
                        order_Kitchen_detail: "",
                        last_address: "",
                        normal_address: "",
                        schedule_order_start_at: ""
                    })

                if (payOrderResponse) {
                    const createOrder = await post('/api/user/create_order', {
                        server_token: userDetail?.token,
                        user_id: cartItemData?.user._id,
                        cart_id: cartItemData?._id,
                        cart_unique_token: cartItemData?.cart_unique_token,
                        delivery_user_name: "",
                        delivery_user_phone: "",
                        is_user_pick_up_order: "",
                        order_start_at: 0,
                        schedule_order_start_at: "",
                        is_schedule_order:false
                    })


                    const updatedUserDetail = {
                        ...userDetail,
                        order_id: createOrder?.order_id,
                    };
                    localStorage.setItem("userData", JSON.stringify(updatedUserDetail))
                    dispatch(loginUser(updatedUserDetail))


                }

                const payOrderResponse2 = postRequest('/api/user/pay_order_payment',
                    {
                        // cart_unique_token: orderData?.cart?.cart_unique_token,
                        // cart_id: orderData?.cart?._id,
                        phone: cartItemData?.user?.phone,
                        country_code: "+251",
                        server_token: userDetail?.token,
                        user_id: cartItemData?.user?._id,
                        cart_id: cartItemData?._id,
                        cart_unique_token: cartItemData?.cart_unique_token,
                        is_payment_mode_waafi: false,
                        is_payment_mode_cash: true,
                        is_brafo_payment_mode: false,
                        payment_id: 0,
                        order_payment_id: cartDetail?.order_payment[0]?._id,
                        // country_id: "6220aa1857e734afb72baf38",
                        country_id: cartDetail?.order_payment[0]?.country_id,
                        order_Kitchen_detail: "",
                        last_address: "",
                        normal_address: "",
                        schedule_order_start_at: ""
                    })
                    if (payOrderResponse2) {
                        const createOrder = await post('/api/user/create_order', {
                            server_token: userDetail?.token,
                            user_id: cartItemData?.user._id,
                            cart_id: cartItemData?._id,
                            cart_unique_token: cartItemData?.cart_unique_token,
                            delivery_user_name: "",
                            delivery_user_phone: "",
                            is_user_pick_up_order: "",
                            order_start_at: 0,
                            schedule_order_start_at: "",
                        is_schedule_order:false

                        })
    
    
                        const updatedUserDetail = {
                            ...userDetail,
                            order_id: createOrder?.order_id,
                        };
                        localStorage.setItem("userData", JSON.stringify(updatedUserDetail))
                        dispatch(loginUser(updatedUserDetail))
    
                        navigate('/bookride');
                    }
            }
        }
    }

    useEffect(() => {
        updateThumbPosition();
    }, [value]);

    return (
        <div className='fixed bottom-0 flex items-center justify-center bg-white w-full py-10 h-[58px]'>
            <div className='relative w-full flex items-center justify-center'>
                <input type="range" name="" id="" className='mx-auto' ref={rangeRef} min="0"
                    max="100"
                    value={value}
                    onChange={handleChange} />
                <div
                    ref={thumbRef}
                    className=" absolute pointer-events-none"
                >
                    <img src={assets.arrow_right_02} alt="" className="w-[20px] h-[20px]" />
                </div>
                <div className='absolute left-[40%]'>
                    <h4 className='text-lg font-medium text-white text-center'>Place order</h4>
                    <h4 className='text-sm font-medium text-white text-center'>Slide to confirm</h4>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmBtn