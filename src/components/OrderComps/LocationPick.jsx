import React, { useContext, useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
import { FeresContext } from '../../context/FeresContext';
import { Loader } from "@googlemaps/js-api-loader";

const LocationPick = () => {
    const { setRiderNote } = useContext(FeresContext);
    const [address, setAddress] = useState(''); // Store the address in state
    const mapRef = useRef(null); // Reference to the map container

    useEffect(() => {
        // Load the Google Maps API
        const loader = new Loader({
            apiKey: import.meta.env.VITE_MAP_API_KEY, // Replace with your API key
            version: "weekly",
            libraries: ["places"] // Load the places library for Geocoding
        });

        loader.load().then(() => {
            // Check for user's location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;

                        // Initialize map centered at the user's location
                        const map = new google.maps.Map(mapRef.current, {
                            center: { lat: latitude, lng: longitude },
                            zoom: 15,
                        });

                        // Add a green marker for the user's current location
                        new google.maps.Marker({
                            position: { lat: latitude, lng: longitude },
                            map,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 10,
                                fillColor: "green",
                                fillOpacity: 1,
                                strokeWeight: 2,
                                strokeColor: "#FFFFFF",
                            },
                        });

                        // Convert coordinates to a human-readable address
                        const geocoder = new google.maps.Geocoder();
                        geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
                            if (status === "OK" && results[0]) {
                                setAddress(results[0].formatted_address); // Set the address in the input
                            } else {
                                console.error("Geocode was not successful for the following reason: " + status);
                            }
                        });
                    },
                    () => {
                        alert("Unable to retrieve your location");
                    }
                );
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        });
    }, []);

    return (
        <div className='px-4 rounded-[13px] bg-white mb-[10px]'>
            <div className='relative'>
                {/* Map Container */}
                <div
                    ref={mapRef}
                    style={{ width: '100%', height: '200px' }}
                    className='rounded-[13px] border border-gray-200'
                />
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
