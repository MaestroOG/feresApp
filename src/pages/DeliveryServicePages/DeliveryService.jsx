import React, { useCallback, useEffect, useState } from 'react'
import DeliveryServiceNav from '../../components/DeliveryServiceComps/DeliveryServiceNav'
import DeliveryLocationForm from '../../components/DeliveryServiceComps/DeliveryLocationForm'
import DeliveryRecentLocations from '../../components/DeliveryServiceComps/DeliveryRecentLocations'
import { useNavigate } from 'react-router-dom'


const DeliveryService = () => {
    const [searchedLocation,setSearchedLocation] = useState([])
    const [destination,setDestination] = useState(null)
    const navigate = useNavigate()

    const getSearchedLoc = useCallback((data) => {
        setSearchedLocation(data)
    }, [])



const setDestinationPlace = useCallback((data)=>{
    setDestination(data)
},[])

useEffect(()=>{
    if(destination){
        const timer = setTimeout(() => {
                   navigate("/deliveryservice/deliveryoptions");
                 }, 1000); // 5000ms = 5 seconds
            
                  // Cleanup function to clear timeout if the component unmounts
                   return () => clearTimeout(timer);
                 
    }
},[destination])
    return (
        <div>
            <DeliveryServiceNav />
            <DeliveryLocationForm getSearchedLoc={getSearchedLoc}/>
            <div className='mt-8'>
                {searchedLocation.map(( place , index) => (
                    <DeliveryRecentLocations key={index} place={place} setDestinationPlace={setDestinationPlace}/>
                ))}
            </div>
        </div>
    )
}

export default DeliveryService