import React from 'react'

const MenuCard = ({ image, title, desc, onClick, className, price, oldPrice }) => {
    return (
        <>
            <div className={`flex items-center gap-3 rounded-2xl px-2 ${className ? className : ""}`} onClick={onClick}>
                <img src={image} alt="" className='w-28 mb-auto py-[6px] rounded-2xl' />
                <div className='pr-1'>
                    <h4 className='text-[#2F2F3F] font-medium text-base '>{title}</h4>
                    <p className='text-[#2F2F3F66] text-xs'>{desc}</p>
                    <div className={`flex items-center ${oldPrice ? 'gap-2' : ''} mt-[5px]`}>
                        <p className='text-[#9E9E9E] line-through text-base'>{oldPrice}</p>
                        <p className='text-[#0AB247] font-bold text-base'>ETB {price}</p>
                    </div>
                </div>
            </div>
            <hr className='my-3' />
        </>
    )
}

export default MenuCard