import React from 'react'
import { assets } from '../../assets/assets'
import FoodOrderPayment from './FoodOrderPayment'
import FoodOrderButtons from './FoodOrderButtons'

const FoodOrderHero = () => {
    return (
        <div className='h-[95vh] bg-gray-50'>
            {/* Top Image */}
            <div className='relative'>
                <img src={assets.food_order_featured} alt="" />
                <button className='text-sm font-medium text-[#060606] bg-white rounded-3xl p-3 absolute bottom-3 right-4'>View store</button>
            </div>
            {/* Title Sections */}
            <div className='px-4 mt-5 bg-white pb-6'>
                <h1 className='text-[#0AB247] text-3xl font-bold w-[80%]'>McDonald’s (1528 Broadway)</h1>
                <h3 className='text-[#060606] font-medium text-2xl mt-4'>Your order</h3>

                {/* Order Details */}

                <div className='mt-4 px-2 flex items-center gap-3'>
                    <img src={assets.invoice_black} alt="" />
                    <p className='text-base text-[#060606]'>1x Regular Oreo McFlurry</p>
                </div>
                <div className='mt-6 flex items-center justify-between w-full'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.jacob_jones} alt="" />
                        <div>
                            <h3 className='text-[#2F2F3F] text-lg font-medium whitespace-nowrap'>Jacob Jones</h3>
                            <p className='text-[#959595] text-base whitespace-nowrap'>Jan 24, 2024 at 2:08</p>
                        </div>
                    </div>
                    <div className='text-sm text-white font-medium bg-[#0AB247] rounded-lg p-2 whitespace-nowrap'>Order successful</div>
                </div>
            </div>
            <FoodOrderPayment />
            <FoodOrderButtons />
        </div>
    )
}

export default FoodOrderHero