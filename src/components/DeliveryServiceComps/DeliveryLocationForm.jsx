import React, { useState, useEffect } from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DeliveryLocationForm = () => {
    const [location, setLocation] = useState("")
    const navigate = useNavigate()
    const [currentLocation, setCurrentLocation] = useState({
        address: "Fetching location...",
        coordinates: { lat: null, lng: null },
    })

    const GOOGLE_API_KEY = import.meta.env.VITE_MAP_API_KEY // Replace with your Google API key

    useEffect(() => {
        // Fetch user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    setCurrentLocation((prev) => ({
                        ...prev,
                        coordinates: { lat: latitude, lng: longitude },
                    }))
                    fetchAddressFromCoordinates(latitude, longitude) // Fetch address
                },
                (error) => {
                    console.error("Error fetching location:", error)
                    setCurrentLocation((prev) => ({
                        ...prev,
                        address: "Unable to fetch location",
                    }))
                }
            )
        } else {
            setCurrentLocation((prev) => ({
                ...prev,
                address: "Geolocation not supported",
            }))
        }
    }, [])

    // Function to fetch address using Google Maps Geocoding API
    const fetchAddressFromCoordinates = async (lat, lng) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
            )
            const data = await response.json()
            if (data.status === "OK" && data.results.length > 0) {
                const address = data.results[0].formatted_address
                setCurrentLocation((prev) => ({
                    ...prev,
                    address,
                }))
            } else {
                console.error("Error fetching address:", data.status)
                setCurrentLocation((prev) => ({
                    ...prev,
                    address: "Unable to fetch address",
                }))
            }
        } catch (error) {
            console.error("Error fetching address:", error)
            setCurrentLocation((prev) => ({
                ...prev,
                address: "Error fetching address",
            }))
        }
    }

    const clearLocation = () => setLocation("")

    return (
        <Container className={'flex items-center justify-between pt-7 shadow pb-4'}>
            <div className='flex flex-col items-center gap-1'>
                <img src={assets.location_blue} alt="Current Location Icon" />
                <hr className='bg-[#4867D780] h-[56px] w-[2px]' />
                <img src={assets.location_01} alt="Destination Location Icon" />
            </div>
            <div className='flex flex-col items-center gap-6'>
                {/* Input for current location (read-only) */}
                <input
                    type="text"
                    value={currentLocation.address}
                    readOnly
                    className='bg-[#F8F8F8] rounded-xl py-2 px-5 border-none outline-none w-[305px] h-[60px]'
                />
                {/* Editable location input */}
                <div className='w-[305px] h-[60px] focus-within:border focus-within:border-[#0AB247] focus-within:bg-white bg-[#F8F8F8] rounded-xl py-2 px-5 flex items-center justify-between'>
                    <input
                        type="text"
                        placeholder='Enter a new location'
                        className='w-full bg-transparent outline-none transition-all'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onClick={()=> navigate('/selectlocation/locationsearch') }
                    />
                    {location.length > 0 && (
                        <img src={assets.close} alt="Clear Icon" onClick={clearLocation} />
                    )}
                </div>
            </div>
            <Link to={'/selectlocation'}>
                <img src={assets.add_button} alt="Add Location Button" />
            </Link>
        </Container>
    )
}

export default DeliveryLocationForm
