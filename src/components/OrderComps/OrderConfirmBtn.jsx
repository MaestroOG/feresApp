import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../../assets/assets'

const OrderConfirmBtn = () => {
    const [value, setValue] = useState(0); // Initial slider value
    const rangeRef = useRef(null);
    const thumbRef = useRef(null);

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
        const thumbPosition = percent * (rangeWidth - thumbWidth) + thumbWidth / 2;

        // Update thumb tracker position
        thumb.style.left = `${thumbPosition + 7}px`;
    };

    useEffect(() => {
        updateThumbPosition();
    }, [value]);

    return (
        // <div className='fixed bottom-0 flex items-center justify-center bg-white w-full py-3'>
        //     <div className='w-[95%] mx-auto bg-[#0AB247] rounded-full p-[12px] py-[8px] flex items-center gap-24'>
        //         <div className='bg-white rounded-full w-12 h-12 flex item-center justify-center' onTouchStart={handleTouchStart}
        //             onTouchMove={handleTouchMove}
        //             onTouchEnd={handleTouchEnd}>
        //             <img src={assets.arrow_right_02} alt="" className='mx-auto w-6' />
        //         </div>
        //         
        //     </div>
        // </div>
        <div className='fixed bottom-0 flex items-center justify-center bg-white w-full py-10 h-[58px]'>
            <div className='relative w-full flex items-center justify-center'>
                <input type="range" name="" id="" className='mx-auto' ref={rangeRef} min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <div
                    ref={thumbRef}
                    className="absolute pointer-events-none"
                >
                    <img src={assets.arrow_right_02} alt="" />
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

