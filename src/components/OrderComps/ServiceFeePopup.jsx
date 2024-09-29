import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../../assets/assets'

const ServiceFeePopup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const divRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click target is not within the div
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        // Attach the event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            {isVisible && (
                <div ref={divRef} className='fixed bottom-0 w-full z-30 pt-4 pb-5 bg-white rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640]'>
                    <img src={assets.service_fee_img} alt="" className='mx-auto' />
                    <div className='px-4 mt-4'>
                        <h3 className='text-[#2F2F3F] font-bold text-xl'>Service fee</h3>
                        <p className='text-sm text-[#2F2F3F] mt-2'>The fee, which is 3% of the total order amount before discounts, is used to maintain the platform and ensure an excellent user experience.</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default ServiceFeePopup