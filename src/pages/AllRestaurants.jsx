import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import WaitWarn from '../components/AllRestaurantComps/WaitWarn'
import RecommendedRests from '../components/AllRestaurantComps/RecommendedRests'
import AllRestCard from '../components/AllRestaurantComps/AllRestCard'
import { FeresContext } from '../context/FeresContext'
import WaitPopUp from '../components/AllRestaurantComps/WaitPopUp'
import FilterPopUp from '../components/SearchComps/FilterPopUp'

const AllRestaurants = () => {

    const { visible, filterPop } = useContext(FeresContext)

    return (
        <>
            <div className={`${visible ? 'blur-sm' : ''}`}>
                <Navbar />
                <SearchBar />
                <WaitWarn />
                <RecommendedRests />
                <AllRestCard />
            </div>
            {visible && <WaitPopUp />}
            {filterPop && <FilterPopUp />}
        </>
    )
}

export default AllRestaurants