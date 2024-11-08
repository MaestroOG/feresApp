import React, { useState, useEffect, useRef, useContext } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
import { FeresContext } from '../../context/FeresContext';
import { useSelector } from 'react-redux';
import { usePostRequest } from '../../servies/usePostRequest';



const OrderConfirmBtn = ({ orderData, setReview }) => {
    const userDetail = useSelector((state) => state.userAuth.user)
    const navigate = useNavigate()
    const { loading, error, response, postRequest } = usePostRequest();
    const [value, setValue] = useState(0); // Initial slider value
    const rangeRef = useRef(null);
    const thumbRef = useRef(null);


    console.log(orderData, 'here is a data for place oreder ');
    const { paymentMethod } = useContext(FeresContext)

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

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        // console.log(newValue);


        if (newValue === "100") {

            postRequest('/api/user/pay_order_payment',
                {
                    // cart_unique_token: orderData?.cart?.cart_unique_token,
                    // cart_id: orderData?.cart?._id,
                    phone: "+49 1789372836",
                    country_code: "Kenya",
                    server_token: "0Iqb69j2rP7x4yY7ZGeRst5pfnyp8vfZ",
                    user_id: "621fc0e0c2545594abfd644e",
                    cart_id: "672d9cd1c09486bac995d6f4",
                    cart_unique_token: "3383a19a5d5ae8274894eca48e3510c4056605c125e0cd130c32055af0a2cb4a",
                    is_payment_mode_waafi: false,
                    is_payment_mode_cash: true,
                    is_brafo_payment_mode: false,
                    payment_id: 0,
                    order_payment_id: "147743944dc478124d753bcf",
                    country_id: orderData?.cart?.stores[0]?.country_id,
                    order_Kitchen_detail: "",
                    last_address: "",
                    normal_address: "",
                    schedule_order_start_at: ""
                })
            navigate('/bookride');
            if (paymentMethod === 'ebirr') {
                setReview(true)
            }
            else {
                navigate('/bookride');
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