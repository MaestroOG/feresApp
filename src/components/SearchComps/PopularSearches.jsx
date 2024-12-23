import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import PopSearchRec from './PopSearchRec'
import Spinner from '../Spinner'
import { popSearchArr } from './popsearcharr'

const PopularSearches = () => {
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