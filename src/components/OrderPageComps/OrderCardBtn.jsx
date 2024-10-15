import React from 'react'

const OrderCardBtn = ({ text, onClick }) => {
    return (
        <button className='bg-[#0AB247] p-4 text-white w-full rounded-[30px]' onClick={onClick}>{text}</button>
    )
}

export default OrderCardBtn