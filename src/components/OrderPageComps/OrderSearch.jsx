import React from 'react'
import OrderSearchNav from './OrderSearchNav'
import { assets } from '../../assets/assets'
import PopSearchRec from '../SearchComps/PopSearchRec'

const OrderSearch = () => {
    return (
        <div>
            <OrderSearchNav />
            <div className='px-4 mt-5'>
                <div className='mb-5'>
                    <h2 className='text-base text-[#2F2F3F] font-medium'>Popular searches</h2>
                </div>
                <div className='grid grid-cols-4 gap-2'>

                    <PopSearchRec searchTerm={"Chicken"} image={assets.analysis_icon} />
                    <PopSearchRec searchTerm={"Cake"} image={assets.analysis_icon} />
                    <PopSearchRec searchTerm={"Burger"} image={assets.analysis_icon} />
                    <PopSearchRec searchTerm={"Pizza"} image={assets.analysis_icon} />
                    <PopSearchRec searchTerm={"Salad"} image={assets.analysis_icon} />
                    <PopSearchRec searchTerm={"Mcdonalds"} image={assets.analysis_icon} />

                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1 mt-32'>
                <img src={assets.search_01} alt="" />
                <h2 className='text-[#2F2F3FCC] font-bold text-xl'>Restaurant not available</h2>
                <p className='text-[#2F2F3FCC] text-base'>Search for other restaurants</p>
            </div>
        </div>
    )
}

export default OrderSearch