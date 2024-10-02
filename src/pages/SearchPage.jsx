import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import SearchBar from '../components/SearchBar'
import PopularSearches from '../components/SearchComps/PopularSearches'
import FeaturedRests from '../components/SearchComps/FeaturedRests'
import RecentSearch from '../components/SearchComps/RecentSearch'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext'
import FilterPopUp from '../components/SearchComps/FilterPopUp'

const SearchPage = () => {
    const { filterPop, setFilterPop } = useContext(FeresContext)
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full flex items-center px-2 bg-white'>
                <img src={assets.arrow_left} alt="" className='invert' />
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
            <div>
                {filterPop ? <FilterPopUp /> : null}
            </div>
        </div>
    )
}

export default SearchPage