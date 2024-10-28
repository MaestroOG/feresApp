import React from 'react'
import DeliveryServiceNav from '../../components/DeliveryServiceComps/DeliveryServiceNav'
import DeliveryLocationForm from '../../components/DeliveryServiceComps/DeliveryLocationForm'
import DeliveryRecentLocations from '../../components/DeliveryServiceComps/DeliveryRecentLocations'

const DeliveryService = () => {
    return (
        <div>
            <DeliveryServiceNav />
            <DeliveryLocationForm />
            <div className='mt-8'>
                {Array(3).fill().map((_, index) => (
                    <DeliveryRecentLocations key={index} />
                ))}
            </div>
        </div>
    )
}

export default DeliveryService