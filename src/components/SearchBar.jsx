import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext';

const SearchBar = () => {

    const navigate = useNavigate();
    const { filterPop, setFilterPop } = useContext(FeresContext)

    return (
        <div className='w-full flex items-center justify-between pt-6 px-4'>

            <div className='flex gap-2 items-center bg-[#F8F8F8] rounded-lg px-4 w-4/5'>
                <img src={assets.search} alt="" />
                <input onClick={() => navigate('/search')} type="text" placeholder='Search for food, groceries...' className='bg-[#F8F8F8] px-2 py-5 rounded-lg placeholder:text-[#767578] placeholder:text-[16px]'>
                </input>
            </div>
            <button className='bg-[#F8F8F8] p-4 rounded-lg'>
                <img src={assets.filter_horizontal} alt="" onClick={() => setFilterPop(true)} />
            </button>

        </div>
    )
}

export default SearchBar