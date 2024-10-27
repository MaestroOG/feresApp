import React, { useContext, useState } from 'react'
import { assets } from '../../../assets/assets'
import { FeresContext } from '../../../context/FeresContext'

const ElectronicFilterPopup = () => {
    const colors = ["#7B7B8B", "#E92D53", "#FAB11D", "#0AB247"]
    const [activeButton, setActiveButton] = useState(0)
    const { setFilterPop } = useContext(FeresContext)

    const handleColorClick = (id) => {
        setActiveButton(id)
    }
    return (
        <div className='z-30 bg-[#F8F8F8] h-[94vh] fixed bottom-0 left-0 w-full rounded-t-[13px] overflow-auto pb-24'>
            {/* Top Bar */}
            <div className='bg-white flex items-center justify-between py-4 px-3 sticky top-0 z-[99]'>
                <img src={assets.cancel_icon} alt="" onClick={() => setFilterPop(false)} />
                <h1 className='text-[#2F2F3F] font-bold text-xl'>Filters</h1>
                <h1 className='text-[#2F2F3F] text-lg'>Clear</h1>
            </div>

            {/* Sort By */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Sort by</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Alphabetically, A-Z</p>
                    <input type="radio" name="sort" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Alphabetically, Z-A</p>
                    <input type="radio" name="sort" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Best selling</p>
                    <input type="radio" name="sort" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Price, low to high</p>
                    <input type="radio" name="sort" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Price, high to low</p>
                    <input type="radio" name="sort" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Top rated</p>
                    <input type="radio" name="sort" id="" />
                </div>
            </div>


            {/* Sort By */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Brand</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Apple (12)</p>
                    <input type="radio" name="brand" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Xiaomi (16)</p>
                    <input type="radio" name="brand" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Infinix (20)</p>
                    <input type="radio" name="brand" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>Samsung (24)</p>
                    <input type="radio" name="brand" id="" />
                </div>
            </div>

            {/* Colors */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Colour</h3>
                <div className='my-3 flex items-center gap-3'>
                    {colors?.map((color, index) => (
                        <div className={`w-8 h-8 rounded-lg bg-[${color}] ${activeButton === index && 'border border-[#060606]'}`} key={index} onClick={() => handleColorClick(index)}></div>
                    ))}
                </div>
            </div>

            {/* Screen Sizes */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Screen size</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>38mm (13)</p>
                    <input type="checkbox" name="brand" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>12-Inch (11)</p>
                    <input type="checkbox" name="brand" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>13.3-Inch (8)</p>
                    <input type="checkbox" name="brand" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>15.6-Inch (10)</p>
                    <input type="checkbox" name="brand" id="" />
                </div>
            </div>

            {/* Storage size */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Storage size</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>64GB (13)</p>
                    <input type="checkbox" name="storage" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>128GB (11)</p>
                    <input type="checkbox" name="storage" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>256GB (8)</p>
                    <input type="checkbox" name="storage" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>512GB (10)</p>
                    <input type="checkbox" name="storage" id="" />
                </div>
            </div>

            {/* RAM */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>RAM</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>4GB (13)</p>
                    <input type="checkbox" name="ram" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>8GB (11)</p>
                    <input type="checkbox" name="ram" id="" />
                </div>
            </div>

            {/* Release Year */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Release Year</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>2015 (13)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>2016 (9)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>2017 (19)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>2018 (14)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>2019 (18)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>2020 (13)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
            </div>

            {/* Model */}
            <div className='bg-white rounded-[13px] mt-4 p-3 pb-5'>
                <h3 className='text-[#2F2F3F] text-lg font-bold'>Release Year</h3>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>iPhone 6 (13)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>iPhone 7 (9)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>iPhone 8 (19)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>iPhone 11 (14)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>iPhone 11 pro (18)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
                <hr className='my-4' />
                <div className='flex items-center justify-between'>
                    <p className='text-[#646464]'>iPhone 11 pro max (13)</p>
                    <input type="checkbox" name="release" id="" />
                </div>
            </div>

            {/* Apply Button */}
            <div className='bg-white p-4 w-full fixed bottom-0'>
                <button className='rounded-full w-full p-4 text-white font-bold text-lg bg-[#0AB247]'>Apply</button>
            </div>
        </div>
    )
}

export default ElectronicFilterPopup