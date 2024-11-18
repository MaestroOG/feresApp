import React, { useContext, useEffect, useRef, useState } from 'react';
import BookRideNav from '../components/BookRideComps/BookRideNav';
import RideInfoPopUp from '../components/BookRideComps/RideInfoPopUp';
import { FeresContext } from '../context/FeresContext';
import { Loader } from "@googlemaps/js-api-loader";
import { assets } from '../assets/assets';

const BookRide = () => {
    const { rideInfoPop, setRideInfoPop } = useContext(FeresContext);
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_MAP_API_KEY, // Replace with your API key
            version: "weekly",
            libraries: ["places"]
        });

        loader.load().then(() => {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer({
                suppressMarkers: true, // Disable default markers
            });

            // Set up map
            const mapInstance = new google.maps.Map(mapRef.current, {
                center: { lat: 37.7749, lng: -122.4194 }, // Default center
                zoom: 14,
            });
            directionsRenderer.setMap(mapInstance);
            setMap(mapInstance);

            // Define start (bike location) and destination (store location)
            const start = { lat: 37.7749, lng: -122.4194 }; // Replace with dynamic coordinates
            const destination = { lat: 37.7849, lng: -122.4094 }; // Replace with dynamic coordinates

            // Add custom markers
            new google.maps.Marker({
                position: start,
                map: mapInstance,
                icon: {
                    url: assets.bike_icon, // Replace with bike logo URL
                    scaledSize: new google.maps.Size(50, 50), // Adjust size as needed
                },
            });

            new google.maps.Marker({
                position: destination,
                map: mapInstance,
                icon: {
                    url: assets.store_loco, // Replace with store logo URL
                    scaledSize: new google.maps.Size(50, 50), // Adjust size as needed
                },
            });

            // Calculate and display route
            directionsService.route(
                {
                    origin: start,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === "OK") {
                        directionsRenderer.setDirections(result);
                    } else {
                        console.error("Directions request failed due to " + status);
                    }
                }
            );
        });
    }, []);

    return (
        <div className='relative h-[100vh] overflow-hidden transition-all'>
            <BookRideNav />
            <p className='text-[#2F2F3F] text-lg text-center py-3 pb-8'>Waiting for restaurant to confirm your order...</p>

            {/* Map Container */}
            <div
                ref={mapRef}
                style={{ width: '100%', height: '100vh' }}
                className='w-screen'
            ></div>


            <div className='w-full bg-white fixed bottom-0 left-0 px-3 py-2 rounded-tr-[13px] rounded-tl-[13px]' onClick={() => setRideInfoPop(true)}>
                <div className='mb-4 pt-2'>
                    <img src={assets.popup_down_arrow} alt="" className='mx-auto' />
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#2F2F3F] text-4xl font-medium'>15:25</h1>
                    <p className='text-lg text-[#979797]'>Estimated time of delivery</p>
                </div>
                <p className='mt-5 text-[#2F2F3F] text-xl font-medium'>Order progress</p>
            </div>

            {rideInfoPop ? <RideInfoPopUp /> : null}
        </div>
    );
};

export default BookRide;
