import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './FullCartCards.css';
import { FeresContext } from '../../context/FeresContext';

const FullCartCards = ({ img, name, itemCount, distance, price }) => {
    const [isSwiped, setIsSwiped] = useState(false);
    const [startX, setStartX] = useState(null);
    const { setDeleteGroupOrder } = useContext(FeresContext)
    // Handle swipe start
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    // Handle swipe move
    const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        if (startX && startX - currentX > 50) {
            setIsSwiped(true); // Swiped left
        } else if (startX && startX - currentX < -50) {
            setIsSwiped(false); // Swiped right (reset)
        }
    };

    // Handle swipe end
    const handleTouchEnd = () => {
        setStartX(null);
    };

    return (
        <div
            className={`swipe-container ${isSwiped ? 'swiped' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className='card-content'>
                <div className='flex items-center gap-4 w-full rounded-[20px] py-3 px-3'>
                    <div>
                        <img src={img} alt={name} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-[#2F2F3F] font-medium text-lg'>{name}</h2>
                        <div className='flex items-center gap-3'>
                            <p className='text-sm text-[#979797] whitespace-nowrap'>{itemCount} items</p>
                            <img src={assets.line} alt="" />
                            <p className='text-sm text-[#979797] whitespace-nowrap'>{distance} km</p>
                        </div>
                        <div className='text-[#0AB247] flex items-center gap-2'>
                            <p className='font-medium text-base'>ETB {price}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Icon */}
            <div onClick={() => setDeleteGroupOrder(true)} className={`delete-icon ${isSwiped ? 'visible' : ''} bg-[#E92D53] w-[128px] h-[152px] rounded-[20px] flex items-center justify-center`}>
                <img src={assets.delete_lg} alt="" />
            </div>
        </div>
    );
};

export default FullCartCards;
