import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const FilterPopUp = () => {

    const { filterPop, setFilterPop } = useContext(FeresContext);

    return (
        <div className='h-[90vh] w-full bg-[#F8F8F8] fixed bottom-0 left-0 rounded-2xl'>
            {/* Top Bar */}
            <div className='flex items-center justify-between px-2 py-2 bg-white'>
                <img src={assets.cancel_icon} alt="" onClick={() => setFilterPop(false)} />
                <h2 className='text-[#2F2F3F] font-bold text-xl'>Filters</h2>
                <p className='font-normal text-[#2F2F3F] text-lg'>Clear</p>
            </div>

            {/* Sort By */}
            <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Sort By</h2>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Closest</p>
                    <input type="radio" name="closest" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Cheapest Delivery</p>
                    <input type="radio" name="closest" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Fastest Delivery</p>
                    <input type="radio" name="closest" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between pb-6'>
                    <p className='font-normal text-base text-[#646464]'>Top rated</p>
                    <input type="radio" name="closest" id="" />
                </div>
            </div>

            {/* Discount And Offers */}
            <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Discounts and offers</h2>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Menu discount</p>
                    <input type="checkbox" name="offers" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Special offers</p>
                    <input type="checkbox" name="offers" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Delivery discount</p>
                    <input type="checkbox" name="offers" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between pb-6'>
                    <p className='font-normal text-base text-[#646464]'>without minimum basket price for discounts</p>
                    <input type="checkbox" name="offers" id="" />
                </div>
            </div>

            {/* Ratings Filter */}
            <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Ratings</h2>
                <div className='mt-3 flex items-center gap-2'>
                    <button className='bg-[#F8F8F8] rounded-lg px-4 py-2 font-medium text-xs text-[#2F2F3F]'>From 4</button>
                    <button className='bg-[#0AB247] rounded-lg px-4 py-2 font-medium text-xs text-white'>From 4.5</button>
                    <button className='bg-[#F8F8F8] rounded-lg px-4 py-2 font-medium text-xs text-[#2F2F3F]'>From 4.7</button>
                </div>
            </div>

            {/* Delivery Time */}

            <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Delivery time</h2>
                <div className='mt-3 flex items-center gap-2'>
                    <button className='bg-[#F8F8F8] rounded-lg px-4 py-2 font-medium text-xs text-[#2F2F3F]'>Up to 15 min</button>
                    <button className='bg-[#F8F8F8] rounded-lg px-4 py-2 font-medium text-xs text-[#2F2F3F]'>Up to 20 min</button>
                    <button className='bg-[#0AB247] rounded-lg px-4 py-2 font-medium text-xs text-white'>Up to 30 min</button>
                </div>
            </div>

            {/* Apply Button */}
            <div className='bg-white px-2 py-4 fixed bottom-0 w-full'>
                <button className='bg-[#0AB247] text-white flex items-center gap-2 w-full justify-center rounded-3xl p-4'>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default FilterPopUp