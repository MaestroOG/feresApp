import React, { useContext, useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import PopularSearches from '../components/SearchComps/PopularSearches'
import FeaturedRests from '../components/SearchComps/FeaturedRests'
import RecentSearch from '../components/SearchComps/RecentSearch'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext'
import FilterPopUp from '../components/SearchComps/FilterPopUp'

const SearchPage = () => {
    const { filterPop, searchTerm, setSearchTerm, searchValue } = useContext(FeresContext)
    const [recentSearch, setRecentSearch] = useState([])
    const navigate = useNavigate();
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setSearchTerm(searchValue)
            if (searchTerm.trim() === "") return;
            setRecentSearch([
                ...recentSearch,
                searchValue
            ])
        }
    }
    return (
        <div>
            <div className='w-full flex items-center px-2 bg-white'>
                {/* <img src={assets.arrow_left} alt="" className='invert' /> */}
                <SearchBar isFixed={false} onKeyDown={handleKeyDown} />
            </div>

            <div className='mt-9 px-4'>
                {recentSearch.length > 0 &&
                    <>
                        <h2 className='text-base text-[#2F2F3F] font-medium'>Recent Search</h2>
                        <div className='grid grid-cols-4 gap-2'>
                            {recentSearch.map((search, index) => (
                                <RecentSearch text={search} key={index} />
                            ))}
                        </div>
                    </>
                }
            </div>

            <div className='mt-9 px-4'>
                <PopularSearches />
            </div>

            <div>
                <FeaturedRests type={"restaurants"} />
            </div>
            <div>
                {filterPop ? <FilterPopUp /> : null}
            </div>
        </div>
    )
}

export default SearchPage