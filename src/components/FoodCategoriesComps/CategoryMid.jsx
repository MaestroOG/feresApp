import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const CategoryMid = () => {
    const buttons = ["Trending meals", "Sandwiches"];
    const buttons_2 = ["Lunch and dinners", "Burgers", "Beef"];

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div className='px-4 mt-6'>
            <h3 className='text-[#767578] text-lg'>Choose one out of these categories and apply</h3>
            <div className='bg-[#E92D530F] my-4 flex items-center gap-2 rounded-[13px] p-[16px]'>
                <img src={assets.alert_red} alt="" />
                <p className='text-[#E92D53] font-medium'>Choose one out those categories and apply</p>
            </div>
            <div className='flex items-center gap-[10px] mt-3 w-max'>
                {buttons.map((button, index) => (
                    <button key={index} className={`${activeButton === index ? 'bg-[#0AB247] text-white' : ''} font-medium text-base border border-[#EEEEEE] rounded-[30px] px-[15px] py-[10px] w-max`} onClick={() => handleClick(index)}>{button}</button>
                ))}
            </div>
            <div className='flex items-center gap-[10px] mt-3 w-max'>
                {buttons_2.map((button, index) => (
                    <button key={index} className={`font-medium text-base border border-[#EEEEEE] rounded-[30px] px-[15px] py-[10px] w-max`}>{button}</button>
                ))}
            </div>
        </div>
    )
}

export default CategoryMid