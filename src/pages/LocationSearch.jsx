import React, { useCallback, useState } from 'react'
import LocationSearchNav from '../components/LocationSeachComps/LocationSearchNav'
import { RecentLocations } from '../components/LocationSeachComps/RecentLocations'
import LocationConfirmBtn from '../components/LocationSeachComps/LocationConfirmBtn'
import { useNavigate } from 'react-router-dom'

const LocationSearch = () => {
    const [searchedLocation, setSearchedLocation] = useState([])
    const navigate = useNavigate()

    const getSearchedLoc = useCallback((data) => {
        setSearchedLocation(data)
    }, [])




    return (
        <div>
            <LocationSearchNav getSearchedLoc={getSearchedLoc} />
            {searchedLocation.map((item) => <RecentLocations item={item} key={item.placeId} />)}
            <LocationConfirmBtn />
        </div>
    )
}

export default LocationSearch