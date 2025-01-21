import React, { useCallback, useState } from 'react'
import LocationSearchNav from '../components/LocationSeachComps/LocationSearchNav'
import { RecentLocations } from '../components/LocationSeachComps/RecentLocations'
import LocationConfirmBtn from '../components/LocationSeachComps/LocationConfirmBtn'
import { useNavigate,useParams } from 'react-router-dom'


const LocationSearch = () => {
    const { id } = useParams();
    const [searchedLocation, setSearchedLocation] = useState([])
    const navigate = useNavigate()

    const getSearchedLoc = useCallback((data) => {
        setSearchedLocation(data)
    }, [])

console.log(id,"idid");



    return (
        <div>
            <LocationSearchNav getSearchedLoc={getSearchedLoc} />
            {searchedLocation.map((item) => <RecentLocations item={item} key={item.placeId} id={id}/>)}
            <LocationConfirmBtn />
        </div>
    )
}

export default LocationSearch