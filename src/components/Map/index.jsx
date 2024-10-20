import React, { useEffect } from 'react';
import { assets } from '../../assets/assets';

const MapScreen = () => {

    useEffect(() => {

        const initMap = (position) => {
            const { latitude, longitude } = position.coords;

            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 16,
            });


            new window.google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
                icon: '/pointer-icon.svg',
            });

            // Example vehicle markers (You can update these positions based on dynamic data)
            const vehicleLocations = [
                { lat: latitude + 0.003, lng: longitude - 0.003 },
                { lat: latitude - 0.002, lng: longitude + 0.005 }
            ];

            vehicleLocations.forEach(location => {
                new window.google.maps.Marker({
                    position: location,
                    map: map,
                    icon: '/car-icon.svg',
                });
            });
        };

        // Handle errors in case geolocation fails
        const handleLocationError = (error) => {
            console.error("Error fetching location: ", error);
            // Fallback to default location (New York, in this case)
            initMap({ coords: { latitude: 40.7128, longitude: -74.0060 } });
        };

        // Load Google Maps script dynamically
        const loadScript = (url) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(initMap, handleLocationError);
        } else {

            handleLocationError(new Error("Geolocation not supported"));
        }

        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyAr0kFbnDJCPoqHYxQufCEj11KoS01Zh_s&callback=initMap`
        );
    }, []);

    return (
        <div className="relative h-screen flex flex-col ">
            {/* Map Section imbbend in it */}
            <div id="map" className="h-3/4 w-full" />

            {/* Bottom Section */}
            <div className="fixed bottom-0 w-full p-4 pt-3 bg-white shadow-lg rounded-t-2xl">
                <img src={assets.popup_bar} alt="" className='mx-auto mb-3' />
                {/* Search Bar */}
                <div className="search-bar flex items-center gap-3 bg-[#F4F4F6] px-2 p-4 rounded-xl mb-3">
                    <button className="ml-3">
                        <img src={assets.search} alt="" />
                    </button>
                    <input
                        type="text"
                        placeholder="Where to?"
                        className="flex-grow bg-transparent focus:outline-none placeholder:text-[#2F2F3F] placeholder:text-lg placeholder:font-medium"
                    />
                </div>

                {/* Categories */}
                <div className="categories flex items-center gap-2">
                    <div className="text-center bg-[#F4F4F6] rounded-xl p-3 w-[100px] flex items-center flex-col">
                        <img src={assets.steaming_bowl} alt="" />
                        <p className='text-[#2F2F3F] text-base'>Food</p>
                    </div>
                    <div className="text-center bg-[#F4F4F6] rounded-xl p-3 w-[100px] flex items-center flex-col">
                        <img src={assets.store_02} alt="" />
                        <p>Mart</p>
                    </div>
                    <div className="text-center bg-[#F4F4F6] rounded-xl p-3 w-[100px] flex items-center flex-col">
                        <img src={assets.delivery_truck_01} alt="" />
                        <p>Delivery</p>
                    </div>
                    <div className="text-center bg-[#F4F4F6] rounded-xl p-3 w-[100px] flex items-center flex-col">
                        <img src={assets.oncoming_bus_01} alt="" />
                        <p>Bus</p>
                    </div>
                </div>

                {/* Recent Locations */}
                <div className="mt-3 pb-2">
                    <ul className='flex flex-col gap-3 mt-2'>
                        <li className="location-item flex items-center gap-2">
                            <img src={assets.location_02} alt="" />
                            <div>
                                <span className='text-[#2F2F3F] text-lg'>Elgin St. Celina, Delaware</span>
                                <p className='text-[#75777C] text-sm'>Melli-Beese-Ring1, Schoenfeld</p>
                            </div>
                        </li>
                        <li className="location-item flex items-center gap-2">
                            <img src={assets.location_02} alt="" />
                            <div>
                                <span className='text-[#2F2F3F] text-lg'>W. Gray St. Utica, Pennsylvania</span>
                                <p className='text-[#75777C] text-sm'>Melli-Beese-Ring1, Schoenfeld</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MapScreen;
