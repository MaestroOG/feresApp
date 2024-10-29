import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
import { usePostRequest } from '../../servies/usePostRequest';


const OrderConfirmBtn = ({ orderData }) => {
    const navigate = useNavigate()
    const { loading, error, response, postRequest } = usePostRequest();
    const [value, setValue] = useState(0); // Initial slider value
    const rangeRef = useRef(null);
    const thumbRef = useRef(null);

    console.log(orderData, 'here is a data for place oreder ');
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
                    cart_unique_token: orderData?.cart?.cart_unique_token,
                    cart_id: orderData?.cart?._id,
                    phone: "+49 1789372836",
                    country_code: "Kenya",
                    server_token: "HODx2SfZOxpAicYxEpWQb1MzFLOwddeh",
                    user_id: "665ff60f83157cfd6e1b0b48",
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

