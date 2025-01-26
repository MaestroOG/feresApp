import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { setDestination } from '../../redux/slices/deliveryLocationSlice'
import { useDispatch } from 'react-redux'


const DeliveryRecentLocations = ({place ,setDestinationPlace}) => {
    const dispatch = useDispatch()

    console.log(place,"placeplace");
    
    return (
        <>
            <Container className={'flex items-center gap-3'} onClick={()=>{
                dispatch(setDestination(place))
                setDestinationPlace(place)
            }}>
                <img src={assets?.location_black} alt="" />
                <div>
                    <h2 className='text-lg text-[#2F2F3F]'>{place?.description}</h2>
                    <p className='text-[#75777C] text-sm'>{place?.description}</p>
                </div>
            </Container>
            <hr className='my-4' />
        </>
    )
}

export default DeliveryRecentLocations