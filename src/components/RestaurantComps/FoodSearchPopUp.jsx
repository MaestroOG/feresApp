import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import AnalysisCards from './AnalysisCards'

const FoodSearchPopUp = () => {

    const [search, setSearch] = useState("");

    return (
        <div className='h-[94vh] w-full bg-white fixed bottom-0 left-0 rounded-xl px-3 py-3 z-50'>
            <div className='w-full'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
            </div>
            <div className='border border-[#EEEEEE] rounded-[30px] flex items-center justify-between gap-4 mt-6 py-[15px] px-[20px]'>
                <div className='flex items-center gap-4'>
                    <img src={assets.search} alt="" />
                    <input type="text" placeholder='Search for meals' className='border-none outline-none focus:border focus:border-[#0AB247] focus' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {search.length > 0 ? <div>
                    <img src={assets.close} alt="" />
                </div> : null}

            </div>
            <div className='mt-9'>
                <h3 className='text-[#2F2F3F] font-medium'>Popular searches</h3>
                <div className='flex items-center gap-4 mt-4'>
                    <AnalysisCards name={"Chicken"} />
                    <AnalysisCards name={"Cake"} />
                    <AnalysisCards name={"Pizza"} />
                    <AnalysisCards name={"Burger"} />
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <AnalysisCards name={"Chicken"} />
                    <AnalysisCards name={"Cake"} />
                    <AnalysisCards name={"Pizza"} />
                </div>
            </div>
        </div>
    )
}

export default FoodSearchPopUp