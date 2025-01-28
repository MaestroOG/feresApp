import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { Loader } from '@googlemaps/js-api-loader';

const AddressMap = ({ setAddress, address, setFullAdd, fullAdd }) => {
    // Store the address in state
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
                                setFullAdd(results[0])
                                console.log(fullAdd);
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
        <div className='bg-white min-h-[244px] mt-[47px] mb-5 w-[92%] rounded-[20px] mx-auto' style={{
            boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
        }}>
            <div className='relative'>
                {/* Map Container */}
                <div
                    ref={mapRef}
                    style={{ width: '99%', height: '200px' }}
                    className='rounded-[13px] border mx-auto border-gray-200 pt-[10px] px-[10px]'
                />
                <button onClick={() => navigate('/changeaddress')} className='bg-white rounded-[20px] font-bold text-sm text-[#2F2F3F] px-[12.5px] absolute left-[8.2rem] top-28 py-[11.5px]'>Change address</button>
            </div>
            <div className='py-[17px] px-4 flex items-center gap-3'>
                <img src={assets.location_black} alt="" />
                <p className='text-[#2F2F3F] text-lg'>{address}</p>
            </div>
        </div>
    )
}

export default AddressMap