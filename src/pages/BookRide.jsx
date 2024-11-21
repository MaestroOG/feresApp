import React, { useContext, useEffect, useRef, useState } from 'react';
import BookRideNav from '../components/BookRideComps/BookRideNav';
import RideInfoPopUp from '../components/BookRideComps/RideInfoPopUp';
import { FeresContext } from '../context/FeresContext';
import { Loader } from "@googlemaps/js-api-loader";
import { assets } from '../assets/assets';
import RiderCard from '../components/RateRiderComps/RiderCard';
import { useSelector } from 'react-redux';
import Container from '../components/Container';

const BookRide = () => {
    const { rideInfoPop, setRideInfoPop } = useContext(FeresContext);
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [providerOverview, setProviderOverview] = useState(false)

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

    const providerInfo = useSelector((state) => state.cartDetails.providerInfo)
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);

console.log(selectedResturant.store.name,"selectedResturantselectedResturantselectedResturantselectedResturant");


    return (
        <div className='relative h-[100vh] overflow-hidden transition-all'>
            <BookRideNav storeName={selectedResturant.store.name}/>
            <p className='text-[#2F2F3F] text-lg text-center py-3 pb-8'>Waiting for restaurant to confirm your order...</p>

            {/* Map Container */}
            <div
                ref={mapRef}
                style={{ width: '100%', height: '100vh' }}
                className='w-screen'
            ></div>


            <button className='flex items-center gap-2 p-2 bg-white rounded-full fixed z-[100] bottom-96 right-16' style={{
                bottom: "158px",
                right: "16px"
            }} onClick={() => setProviderOverview(true)}>
                <img src={assets.information_circle} alt="" />
                <p className='text-[#2F2F3F] text-sm'>Rider</p>
            </button>

            {!providerOverview && <div className='w-full bg-white fixed bottom-0 left-0 px-3 py-2 rounded-t-[13px] z-[102]' onClick={() => setRideInfoPop(true)}>
                <div className='mb-4 pt-2'>
                    <img src={assets.popup_down_arrow} alt="" className='mx-auto' />
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#2F2F3F] text-4xl font-medium'>15:25</h1>
                    <p className='text-lg text-[#979797]'>Estimated time of delivery</p>
                </div>
                <p className='mt-5 text-[#2F2F3F] text-xl font-medium'>Order progress</p>
            </div>
            }
            {rideInfoPop && <RideInfoPopUp />}

            {providerOverview && <div className='bg-[#EFEFEF] rounded-t-[13px] min-h-[302px] fixed bottom-0 left-0 w-full z-[101]'>
                <div className='bg-white w-full py-2 mb-1'>
                    <img src={assets.popup_bar} alt="" className='mx-auto' />
                    <img src={assets.cancel_circle} alt="" className='float-right pr-4' onClick={() => setProviderOverview(false)} />
                    <div className='mt-5 pl-4'>
                        <h1 className='text-[#2F2F3F] font-medium text-xl'>Rider is heading to Eastlight...</h1>
                    </div>
                    <hr className='my-5 w-[90%] mx-auto' />
                    <RiderCard providerInfo={providerInfo} />
                </div>
                <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white flex items-center justify-between gap-5'}>
                    <button className='w-1/2 rounded-full bg-[#EBF9EE] p-4 flex items-center gap-4 justify-center'>
                        <img src={assets.call_green} alt="" />
                        <p className='text-[#0AB247] text-lg font-bold'>Call</p>
                    </button>
                    <button className='w-1/2 rounded-full bg-[#0AB247] p-4 flex items-center gap-4 justify-center'>
                        <img src={assets.message_white} alt="" />
                        <p className='text-white text-lg font-bold'>Chat</p>
                    </button>
                </Container>
            </div>}
        </div>
    );
};

export default BookRide;
