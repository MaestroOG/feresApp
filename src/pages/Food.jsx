import React from 'react'
import { assets } from '../assets/assets'
import FoodTopBar from '../components/FoodComps/FoodTopBar'
import FoodIntroBox from '../components/FoodComps/FoodIntroBox'
import FoodOptions from '../components/FoodComps/FoodOptions'

const Food = () => {
    return (
        <div className='bg-[#E7E7E7] h-screen'>
            <FoodTopBar />
            <FoodIntroBox />
            <FoodOptions />

            <div className='flex items-center w-full gap-3 fixed bottom-0 bg-white py-6'>
                <button className='border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]'>
                    <img src={assets.minus_sign} alt="" />
                    <p>1</p>
                    <img src={assets.plus_sign} alt="" />
                </button>
                <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]'>Add EBT 140</button>
            </div>
        </div>
    )
}

export default Food