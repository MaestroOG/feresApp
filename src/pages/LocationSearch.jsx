import React, { useCallback, useState } from 'react'
import LocationSearchNav from '../components/LocationSeachComps/LocationSearchNav'
import { RecentLocations } from '../components/LocationSeachComps/RecentLocations'
import LocationConfirmBtn from '../components/LocationSeachComps/LocationConfirmBtn'

const LocationSearch = () => {
        const [searchedLocation, setSearchedLocation] = useState()
        
        const getSearchedLoc = useCallback((data)=>{
                setSearchedLocation(data)
        },[])

    return (
        <div>
            <LocationSearchNav getSearchedLoc={getSearchedLoc} />
            <RecentLocations />
            <LocationConfirmBtn />
        </div>
    )
}

export default LocationSearch