import React, { useState } from 'react'
import SupportNav from '../components/SupportComps/SupportNav'
import MenuCard from '../components/RestaurantComps/MenuCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SelectMenu = () => {
    const [categoryBtn, setCategoryBtn] = useState('all')
    const navigate = useNavigate();

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
                    <button className={`${categoryBtn == 'all' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('all')}>All</button>
                    <button className={`${categoryBtn == 'trending' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('trending')}>Trending meals</button>
                    <button className={`${categoryBtn == 'sandwiches' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('sandwiches')}>Sandwiches</button>
                </div>

                <div className='mt-7 mb-28'>
                    <h2 className='text-[#2F2F3F] font-medium text-lg mb-4'>{
                        categoryBtn == 'all' ? 'All Menu' : categoryBtn == 'trending' ? 'Trending Menu' : categoryBtn == 'sandwiches' ? 'Sandwiches' : null
                    }</h2>
                    <MenuCard image={assets.burger_img} title={"Beef Burger"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => navigate('/restaurantsupport/ingredientinfo')} />
                    <MenuCard image={assets.orange_juice_img} title={"Fresh orange juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => navigate('/restaurantsupport/ingredientinfo')} />
                    <MenuCard image={assets.mango_juice_img} title={"Fresh mango juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => navigate('/restaurantsupport/ingredientinfo')} />
                    <MenuCard image={assets.ice_cream_img} title={"Ice cream"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => navigate('/restaurantsupport/ingredientinfo')} />
                    <MenuCard image={assets.orange_juice_img} title={"Fresh orange juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => navigate('/restaurantsupport/ingredientinfo')} />
                </div>

            </div>
        </div>
    )
}

export default SelectMenu