import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../../assets/assets'

const DeliveryFeePopup = () => {
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
            {isVisible && <div ref={divRef} className='fixed bottom-0 w-full z-30 pt-4 pb-5 bg-white rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640]'>
                <img src={assets.delivery_fee_img} alt="" className='mx-auto' />
                <div className='px-4 mt-4'>
                    <h3 className='text-[#2F2F3F] font-bold text-xl'>Delivery fee</h3>
                    <p className='text-sm text-[#2F2F3F] mt-2'>This depends on how far you are from the restaurant or store the closer you are, the less it will cost</p>
                </div>
            </div>}
        </>
    )
}

export default DeliveryFeePopup