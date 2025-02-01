import React, { useContext, useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import PopularSearches from '../components/SearchComps/PopularSearches'
import FeaturedRests from '../components/SearchComps/FeaturedRests'
import RecentSearch from '../components/SearchComps/RecentSearch'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext'
import FilterPopUp from '../components/SearchComps/FilterPopUp'
import { usePost } from '../servies/usePost'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { setSearchData } from '../redux/slices/searchSlice'

const SearchPage = () => {
    const { setFilterPop, filterPop, searchTerm, setSearchTerm, searchValue } = useContext(FeresContext)
    const [recentSearch, setRecentSearch] = useState([])
    const [filteredStores, setFilteredStores] = useState(null)
    const options = useSelector(state => state.filter.options)
    console.log(options);
    const searchData = useSelector((state) => state.search.searchData);
    const dispatch = useDispatch()
    const { post, loading, error } = usePost()

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

    const filterStores = async () => {
        setFilterPop(false)
        try {
            const data = await post('/api/food/get_stores_nearest_city', {
                "city_id": "6220e8c72a4f11b34835b2ef",
                "city": "Kirkos",
                "country": "Ethiopia",
                "type": "1",
                "latitude": 9.002475317959558,
                "longitude": 38.76962408249495,
                ...options
            })

            setFilteredStores(data)
            console.log(filteredStores);

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        dispatch(setSearchData(""))
        filterStores();
    }, [options])

    return (
        <div className='bg-[#EEEEEE]'>
            {loading && <Loader />}
            <div className='w-full flex items-center px-2 bg-white'>
                {/* <img src={assets.arrow_left} alt="" className='invert' /> */}
                <SearchBar isFixed={false} onKeyDown={handleKeyDown} />
            </div>

            {searchData.length > 0 &&
                <div className='mt-4 px-4 py-4 bg-white rounded-[20px]'>
                    <>
                        <h2 className='text-base text-[#2F2F3F] font-medium'>Recent Search</h2>
                        <div className='grid grid-cols-4 gap-2'>
                            {recentSearch.map((search, index) => (
                                <RecentSearch text={search} key={index} />
                            ))}
                        </div>
                    </>
                </div>
            }

            <div className='mt-4 px-4 bg-white py-4 rounded-[20px]'>
                <PopularSearches />
            </div>

            <div className='bg-white rounded-t-[20px]'>
                <FeaturedRests stores={filteredStores} type={"restaurants"} />
            </div>
            <div>
                {filterPop ? <FilterPopUp onClick={filterStores} /> : null}
            </div>
        </div>
    )
}

export default SearchPage