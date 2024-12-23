import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useJsApiLoader } from '@react-google-maps/api';

const LocationSearchNav = ({ getSearchedLoc }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
        libraries: ['places'], // Required for Places API
    });

    const handleInputChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (!isLoaded || query.trim() === '') {
            setSuggestions([]);
            return;
        }

        const service = new window.google.maps.places.AutocompleteService();

        service.getPlacePredictions(
            { input: query, types: ['geocode'] },
            (predictions, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                    const suggestionList = predictions.map((place) => ({
                        description: place.description,
                        placeId: place.place_id,
                    }));
                    setSuggestions(suggestionList);
                    getSearchedLoc(suggestionList); // Pass suggestions to parent
                } else {
                    setSuggestions([]);
                }
            }
        );
    };

    const handleSuggestionClick = (description) => {
        setSearchQuery(description);
        setSuggestions([]); // Clear suggestions on selection
    };

    return (
        <div>
            {/* Top */}
            <div className="shadow pb-6">
                <div className="flex items-center justify-between px-3 py-5">
                    <img src={assets.cancel_icon} alt="" onClick={() => navigate(-1)} />
                    <h1 className="text-[#2F2F3F] font-bold text-xl">Deliver to</h1>
                    <img
                        src={assets.maps_location_02}
                        alt=""
                        onClick={() => navigate('/selectlocation')}
                    />
                </div>

                {/* Bottom */}
                <div className="bg-[#F8F8F8] w-[90%] mx-auto flex items-center gap-3 py-[10px] px-[20px] rounded-[13px]">
                    <img src={assets.search} alt="" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search your delivery location"
                        className="bg-[#F8F8F8] w-full border-none outline-none"
                    />
                </div>
            </div>

            {/* Suggestions */}
            {/* {suggestions.length > 0 && (
                <ul className="bg-white shadow-lg w-[90%] mx-auto rounded mt-2">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSuggestionClick(suggestion.description)}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export default LocationSearchNav;
