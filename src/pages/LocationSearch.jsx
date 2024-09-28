import React from 'react'
import LocationSearchNav from '../components/LocationSeachComps/LocationSearchNav'
import { RecentLocations } from '../components/LocationSeachComps/RecentLocations'
import LocationConfirmBtn from '../components/LocationSeachComps/LocationConfirmBtn'

const LocationSearch = () => {
    return (
        <div>
            <LocationSearchNav />
            <RecentLocations />
            <RecentLocations />
            <RecentLocations />
            <LocationConfirmBtn />
        </div>
    )
}

export default LocationSearch