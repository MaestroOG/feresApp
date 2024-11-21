import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Loader } from "@googlemaps/js-api-loader";
import Container from '../components/Container'

const SelectLocation = () => {
    const navigate = useNavigate()

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
        <div className='relative'>
            <div className='p-3 rounded-full bg-white w-max absolute top-5 left-3'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            </div>
            {/* <img src={assets.map_full} alt="" />
            <img src={assets.map_pointer} alt="" className='absolute top-[40%] left-52' /> */}
            {/* Map Container */}
            <div
                ref={mapRef}
                style={{ width: '100%', height: '100vh' }}
                className='w-screen'
            ></div>
            <div className='p-3 rounded-full bg-white w-max absolute bottom-48 right-5'>
                <img src={assets.gps_01} alt="" className='' />
            </div>
            <Container className='fixed bottom-0 left-0 w-full bg-white py-5'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='text-[#767578] text-lg'>Deliver to</h4>
                        <h3 className='text-[#2F2F3F] font-medium text-lg'>Elgin St. Celina, Delaware 10299</h3>
                    </div>
                    <img src={assets.search} alt="" onClick={() => navigate('/selectlocation/locationsearch')} />
                </div>
                <button className='p-4 rounded-full w-full bg-[#0AB247] text-white text-xl font-medium mt-5' onClick={() => navigate('/')}>Confirm location</button>
            </Container>
        </div>
    )
}

export default SelectLocation