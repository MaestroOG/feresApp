import React from 'react'
import SupportNav from '../components/SupportComps/SupportNav'
import MenuCard from '../components/RestaurantComps/MenuCard'
import { assets } from '../assets/assets'

const SelectMenu = () => {
    return (
        <div className='p-6 w-full'>
            <SupportNav />
            <div className='mt-7'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#2F2F3F] text-lg'>Categories</h2>
                    <p className='text-[#979797] text-base'>View all</p>
                </div>


                {/* Category Buttons */}

                <div className='mt-6 flex gap-3'>
                    <button className='bg-[#0AB247] text-white rounded-xl py-[10px] px-5'>All</button>
                    <button className='border border-[#EEEEEE] text-[#AEAEAE] rounded-xl py-[10px] px-5'>Trending meals</button>
                    <button className='border border-[#EEEEEE] text-[#AEAEAE] rounded-xl py-[10px] px-5'>Sandwiches</button>
                </div>

                <div className='mt-7 mb-28'>
                    <h2 className='text-[#2F2F3F] font-medium text-lg mb-4'>All Menu</h2>
                    <MenuCard image={assets.burger_img} title={"Beef Burger"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} />
                    <MenuCard image={assets.orange_juice_img} title={"Fresh orange juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} />
                    <MenuCard image={assets.mango_juice_img} title={"Fresh mango juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} />
                    <MenuCard image={assets.ice_cream_img} title={"Ice cream"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} />
                    <MenuCard image={assets.orange_juice_img} title={"Fresh orange juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} />
                </div>

            </div>
        </div>
    )
}

export default SelectMenu