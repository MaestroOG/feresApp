import React, { useContext } from 'react'
import SearchBar from '../../components/SearchBar'
import PopularSearches from '../../components/SearchComps/PopularSearches'
import FeaturedRests from '../../components/SearchComps/FeaturedRests'
import { FeresContext } from '../../context/FeresContext'
import FilterPopUp from '../../components/SearchComps/FilterPopUp'

const EcommerceSearch = () => {
    const { filterPop } = useContext(FeresContext)
    return (
        <div>
            <div className='w-full flex items-center px-2 bg-white'>
                {/* <img src={assets.arrow_left} alt="" className='invert' /> */}
                <SearchBar />
            </div>

            <div className='mt-9 px-4'>
                <PopularSearches />
            </div>

            <div>
                <FeaturedRests type={"mart"} />
            </div>
            <div>
                {filterPop ? <FilterPopUp /> : null}
            </div>
        </div>
    )
}

export default EcommerceSearch