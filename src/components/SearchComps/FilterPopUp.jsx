import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const FilterPopUp = () => {

    const { setFilterPop } = useContext(FeresContext);
    const [rating, setRating] = useState('4')
    const [delTime, setDelTime] = useState('15')
    const [distance, setDistance] = useState('1')


    return (
        <div className='h-[90vh] w-full bg-[#F8F8F8] fixed bottom-0 left-0 rounded-2xl overflow-y-scroll pb-20'>
            {/* Top Bar */}
            <div className='flex items-center justify-between px-2 py-2 bg-white sticky top-0'>
                <img src={assets.cancel_icon} alt="" onClick={() => setFilterPop(false)} />
                <h2 className='text-[#2F2F3F] font-bold text-xl'>Filters</h2>
                <p className='font-normal text-[#2F2F3F] text-lg' onClick={() => window.location.reload()}>Clear</p>
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
                    <button className={`${rating === '4' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setRating('4')}>From 4</button>
                    <button className={`${rating === '4.5' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setRating('4.5')}>From 4.5</button>
                    <button className={`${rating === '4.7' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs `} onClick={() => setRating('4.7')}>From 4.7</button>
                </div>
            </div>

            {/* Delivery Time */}

            <div className='px-4 py-4 mt-5 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Delivery time</h2>
                <div className='mt-3 flex items-center gap-2'>
                    <button className={`${delTime === '15' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setDelTime('15')}>Up to 15 min</button>
                    <button className={`${delTime === '20' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setDelTime('20')}>Up to 20 min</button>
                    <button className={`${delTime === '30' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setDelTime('30')}>Up to 30 min</button>
                </div>
            </div>
            {/* Distance */}

            <div className='px-4 py-4 mt-5 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Distance</h2>
                <div className='mt-3 flex items-center gap-2'>
                    <button className={`${distance === '1' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setDistance('1')}>Up to 1 km</button>
                    <button className={`${distance === '2' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setDistance('2')}>Up to 2 km</button>
                    <button className={`${distance === '3' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={() => setDistance('3')}>Up to 3 km</button>
                </div>
            </div>

            {/* Cuisines */}

            <div className='px-4 py-2 pb-11 mt-3 bg-white rounded-3xl'>
                <h2 className='text-lg font-bold text-[#2F2F3F]'>Sort By</h2>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Desserts</p>
                    <input type="radio" name="cuisines" id="" />
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <p className='font-normal text-base text-[#646464]'>Beverages</p>
                    <input type="radio" name="cuisines" id="" />
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