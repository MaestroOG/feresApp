import React from 'react'
import { assets } from '../../assets/assets'
import { FoodOptionCb } from './FoodOptionCb'

const FoodOptions = ({ options }) => {
    return (
        <div className={`bg-white mb-4 rounded-3xl`}>
            {/* <div className='flex items-center gap-2 px-4 py-2 mt-2 rounded-2xl'>
                <h3 className='text-[#2F2F3F] font-bold text-lg'>Lorem ipsum dolor</h3>
                <p className='text-white font-medium text-xs bg-[#E92D53] w-[69px] text-center rounded-md px-[10px] py-[5px]'>Required</p>
            </div>
            <p className='text-[#767578] text-sm px-4'>Choose up to 2 items</p>
            <div className='flex items-center gap-2 px-4 mt-2 mb-6'>
                <img src={assets.alert_02} alt="" />
                <p className='text-[#FAB11D]'>Choose 2</p>
            </div> */}
            {options && options?.length > 0 && options?.map(option => (
                <FoodOptionCb text={option} />
            ))}
        </div>
    )
}

export default FoodOptions