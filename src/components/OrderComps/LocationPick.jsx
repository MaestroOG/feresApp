import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { FeresContext } from '../../context/FeresContext';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationPick = () => {
    const { setRiderNote } = useContext(FeresContext);
    const [selectedLocation, setSelectedLocation] = useState({ lat: 40.712776, lng: -74.005974 });
    const [currentLocation, setCurrentLocation] = useState(null);
    const [address, setAddress] = useState(''); // Store the address in state
    const [isApiLoaded, setIsApiLoaded] = useState(false); // Track API load status
    const [mapKey, setMapKey] = useState(0); // Key to force re-render map when necessary

    // Function to handle marker position change
    const handleLocationChange = (event) => {
        const newLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        setSelectedLocation(newLocation);
        if (isApiLoaded) {
            getAddress(newLocation.lat, newLocation.lng); // Get the address when the marker is moved
        }
    };

    // Get the user's current location when the component mounts
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setSelectedLocation({ lat: latitude, lng: longitude });
                    setCurrentLocation({ lat: latitude, lng: longitude });
                    if (isApiLoaded) {
                        getAddress(latitude, longitude); // Get the address from the coordinates
                    }
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        }
        setMapKey((prevKey) => prevKey + 1); // Force re-render of map when component mounts
    }, [isApiLoaded]); // Re-run when the API is loaded

    // Function to get the address using reverse geocoding
    const getAddress = (lat, lng) => {
        const geocoder = new window.google.maps.Geocoder();
        const location = { lat: lat, lng: lng };

        geocoder.geocode({ location: location }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    setAddress(results[0].formatted_address); // Set the formatted address
                } else {
                    console.error("No results found");
                }
            } else {
                console.error("Geocoder failed due to: " + status);
            }
        });
    };

    return (
        <div className='px-4 rounded-[13px]'>
            <div className='relative'>
                {/* Load Google Maps */}
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}
                    onLoad={() => setIsApiLoaded(true)}
                >
                    {isApiLoaded && (
                        <GoogleMap
                            key={mapKey}
                            mapContainerStyle={{ width: '100%', height: '200px' }}
                            center={selectedLocation}
                            zoom={15}
                        >
                            {selectedLocation && (
                                <Marker
                                    position={selectedLocation}
                                    draggable={true}
                                    onDragEnd={handleLocationChange}
                                />
                            )}
                        </GoogleMap>
                    )}
                </LoadScript>
            </div>
            <div className='w-full mt-4 flex flex-col gap-3 pb-5'>
                <input
                    type="text"
                    value={address} // Bind the input to the address state
                    onChange={(e) => setAddress(e.target.value)} // Allow users to change the address
                    placeholder='Apt./office/floor/postal code'
                    className='bg-[#F8F8F8] w-full py-[10px] px-[20px] rounded-[13px] placeholder:text-[#767578] outline-none transition-all ease-linear focus:bg-white focus:border focus:border-[#0AB247]'
                />
                <input
                    type="text"
                    placeholder='Add a note for the rider'
                    className='bg-[#F8F8F8] w-full py-[10px] px-[20px] rounded-[13px] placeholder:text-[#767578] border-none outline-none'
                    onClick={() => setRiderNote(true)}
                />
            </div>
        </div>
    );
}

export default LocationPick;
