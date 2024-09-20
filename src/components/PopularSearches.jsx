import React from 'react'
import { assets } from '../assets/assets'
import PopSearchRec from './PopSearchRec'

const PopularSearches = () => {
    return (
        <div>
            <div className='mb-3'>
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
    )
}

export default PopularSearches