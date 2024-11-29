import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import WaitWarn from '../components/AllRestaurantComps/WaitWarn'
import RecommendedRests from '../components/AllRestaurantComps/RecommendedRests'
import AllRestCard from '../components/AllRestaurantComps/AllRestCard'
import { FeresContext } from '../context/FeresContext'
import WaitPopUp from '../components/AllRestaurantComps/WaitPopUp'
import FilterPopUp from '../components/SearchComps/FilterPopUp'
import FilterResCard from '../components/AllRestaurantComps/FilterResCard'

const AllRestaurants = () => {

    const { visible, filterPop, restFilter, setRestFilter } = useContext(FeresContext)

    useEffect(() => {
        setRestFilter(null)
    }, [])

    return (
        <>
            <div className={`${visible ? 'blur-sm' : ''}`}>
                <Navbar />
                <SearchBar />
                <WaitWarn />
                {restFilter ? <FilterResCard /> :
                    <>
                        <RecommendedRests />
                        <AllRestCard />
                    </>
                }
            </div>
            {visible && <WaitPopUp />}
            {filterPop && <FilterPopUp />}
        </>
    )
}

export default AllRestaurants