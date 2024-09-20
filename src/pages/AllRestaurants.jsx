import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import WaitWarn from '../components/WaitWarn'
import RecommendedRests from '../components/RecommendedRests'
import AllRestCard from '../components/AllRestCard'
import { FeresContext } from '../context/FeresContext'
import WaitPopUp from '../components/WaitPopUp'

const AllRestaurants = () => {

    const { visible } = useContext(FeresContext)

    return (
        <>
            <div className={`${visible ? 'blur-sm' : ''}`}>
                <Navbar />
                <SearchBar />
                <WaitWarn />
                <RecommendedRests />
                <AllRestCard />
            </div>
            {visible ? <WaitPopUp /> : null}
        </>
    )
}

export default AllRestaurants