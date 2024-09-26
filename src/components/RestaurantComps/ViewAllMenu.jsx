import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import MenuCard from './MenuCard'

const ViewAllMenu = () => {
    const [categoryBtn, setCategoryBtn] = useState('all')
    return (
        <>
            <div className='flex items-center justify-between px-3 py-4'>
                {/* Top Bar */}
                <div className='flex items-center gap-[10px]'>
                    <button className='mt-1 border border-[#EEEEEE] rounded-[13px] p-[10px]'>
                        <img src={assets.arrow_left} alt="" className='invert' />
                    </button>
                    <h2 className='text-[#2F2F3F] font-bold text-xl'>KFC Eastlight</h2>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <button className='border border-[#EEEEEE] rounded-[13px] p-[10px]'>
                        <img src={assets.add_team} alt="" className='invert' />
                    </button>
                    <button className='border border-[#EEEEEE] rounded-[13px] p-[10px]'>
                        <img src={assets.share} alt="" className='invert' />
                    </button>
                    <button className='border border-[#EEEEEE] rounded-[13px] p-[10px]'>
                        <img src={assets.search} alt="" />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className='px-5 mt-1 sticky top-0 bg-white py-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#2F2F3F] text-lg'>Categories</h2>
                    <p className='text-[#979797] text-base'>View all</p>
                </div>


                {/* Category Buttons */}

                <div className='mt-6 flex gap-3'>
                    <button className={`${categoryBtn == 'all' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('all')}>All</button>
                    <button className={`${categoryBtn == 'trending' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('trending')}>Trending meals</button>
                    <button className={`${categoryBtn == 'sandwiches' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('sandwiches')}>Sandwiches</button>
                </div>

            </div>

            {/* Menu */}

            <div className='px-4 mt-2 mb-28'>
                <h2 className='text-[#2F2F3F] font-medium text-lg mb-4'>{
                    categoryBtn == 'all' ? 'All Menu' : categoryBtn == 'trending' ? 'Trending Menu' : categoryBtn == 'sandwiches' ? 'Sandwiches' : null
                }</h2>
                <MenuCard image={assets.burger_img} title={"Beef Burger"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup(true)} />
                <MenuCard image={assets.orange_juice_img} title={"Fresh orange juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup(true)} />
                <MenuCard image={assets.mango_juice_img} title={"Fresh mango juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup(true)} />
                <MenuCard image={assets.ice_cream_img} title={"Ice cream"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup(true)} />
                <MenuCard image={assets.burger_img} title={"Beef Burger"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup(true)} />
            </div>
        </>
    )
}

export default ViewAllMenu