import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import PopSearchRec from './PopSearchRec'

const PopularSearches = () => {

    const popSearchArr = [
        { id: 1, name: "Avocado Toast" },
        { id: 2, name: "Bubble Tea" },
        { id: 3, name: "Plant-Based Burger" },
        { id: 4, name: "Keto Brownies" },
        { id: 5, name: "Matcha Latte" },
        { id: 6, name: "Sushi Burrito" },
        { id: 7, name: "Vegan Cheese" },
        { id: 8, name: "Charcoal Ice Cream" },
        { id: 9, name: "Spicy Ramen" },
        { id: 10, name: "Acai Bowl" },
        { id: 11, name: "Cloud Bread" },
        { id: 12, name: "Taco Pizza" },
        { id: 13, name: "Kombucha" },
        { id: 14, name: "Rainbow Bagel" },
    ]
    return (
        <div>
            <div className='mb-3'>
                <h2 className='text-base text-[#2F2F3F] font-medium'>Popular searches</h2>
            </div>
            <div className='grid grid-cols-2 gap-y-3'>
                {popSearchArr && popSearchArr?.slice(0, 3).map(meal => (
                    <PopSearchRec image={assets.analysis_icon} key={meal?.id} searchTerm={meal?.name.split(",").slice(0, 2).join()} />
                ))}
            </div>
        </div>
    )
}

export default PopularSearches