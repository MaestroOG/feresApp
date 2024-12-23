import React, { useCallback, useState } from 'react'
import LocationSearchNav from '../components/LocationSeachComps/LocationSearchNav'
import { RecentLocations } from '../components/LocationSeachComps/RecentLocations'
import LocationConfirmBtn from '../components/LocationSeachComps/LocationConfirmBtn'

const LocationSearch = () => {
        const [searchedLocation, setSearchedLocation] = useState([])
        
        const getSearchedLoc = useCallback((data)=>{
                setSearchedLocation(data)
        },[])


        console.log(searchedLocation,"searchedLocationsearchedLocation");
        
    return (
        <div>
            <LocationSearchNav getSearchedLoc={getSearchedLoc} />
           {searchedLocation.map ((item)=> <RecentLocations item={item} key={item.placeId}/> )}
            <LocationConfirmBtn />
        </div>
    )
}

export default LocationSearch