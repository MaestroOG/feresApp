import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext';

const SearchBar = ({ onKeyDown }) => {

    const navigate = useNavigate();
    const { setFilterPop, setSearchTerm, searchValue, setSearchValue } = useContext(FeresContext);

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }


    return (
        <div className='w-full flex items-center gap-3 pt-6 px-2'>

            <div className='flex gap-2 items-center bg-[#F8F8F8] rounded-lg px-4 w-4/5'>
                <img src={assets.search} alt="" />
                <input onKeyDown={onKeyDown} onChange={handleChange} onClick={() => navigate('/search')} type="text" value={searchValue} placeholder='Search for food, groceries...' className='w-full bg-[#F8F8F8] px-2 py-5 rounded-lg outline-none placeholder:text-[#767578] placeholder:text-[16px] border-none'>
                </input>
            </div>
            <button className='bg-[#F8F8F8] p-4 rounded-lg h-[61px]'>
                <img src={assets.filter_horizontal} className='w-[24px]' alt="" onClick={() => setFilterPop(true)} />
            </button>

        </div>
    )
}

export default SearchBar