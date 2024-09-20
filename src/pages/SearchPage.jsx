import React from 'react'
import { assets } from '../assets/assets'
import SearchBar from '../components/SearchBar'
import PopularSearches from '../components/PopularSearches'
import FeaturedRests from '../components/FeaturedRests'
import RecentSearch from '../components/RecentSearch'
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full flex items-center px-4 bg-white'>
                <button className='mt-5'>
                    <img onClick={() => navigate(-1)} src={assets.arrow_left_02} className="border border-[#EEEEEE] p-2 rounded-lg" />
                </button>
                <SearchBar />
            </div>

            <div className='mt-9 px-4'>
                <RecentSearch />
            </div>

            <div className='mt-9 px-4'>
                <PopularSearches />
            </div>

            <div>
                <FeaturedRests />
            </div>
        </div>
    )
}

export default SearchPage