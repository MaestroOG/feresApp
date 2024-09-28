import React from 'react'
import { assets } from '../../assets/assets'

export const RecentLocations = () => {
    return (
        <>
            <div className='px-4 mt-6 flex items-center gap-4'>
                <div>
                    <img src={assets.location_black} alt="" />
                </div>
                <div>
                    <h3 className='text-[#2F2F3F] text-lg'>Elgin St. Celina, Delaware 10299</h3>
                    <p className='text-[#75777C] text-sm mt-[2px]'>Melli-Beese-Ring1, Schoenfeld</p>
                </div>
            </div>
            <hr className='mt-3' />
        </>
    )
}
