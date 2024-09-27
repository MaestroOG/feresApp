import React from 'react'
import ExtraOrderCard from './ExtraOrderCard'
import { assets } from '../../assets/assets'

const ExtraOrder = () => {
    return (
        <div className='px-4 mt-5'>
            <h3 className='text-[#2F2F3F] font-bold text-lg mt-4 mb-5'>Are you thirsty?</h3>
            <div className='flex items-center gap-6'>
                <ExtraOrderCard img={assets.extra_order_img_1} name={"Fresh orange juice"} />
                <ExtraOrderCard img={assets.extra_order_img_2} name={"Coke"} />
            </div>
        </div>
    )
}

export default ExtraOrder