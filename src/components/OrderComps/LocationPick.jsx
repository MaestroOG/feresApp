import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import { FeresContext } from "../../context/FeresContext";
import { Loader } from "@googlemaps/js-api-loader";
import { useNavigate } from "react-router-dom";

const LocationPick = ({ destination }) => {
  const { setRiderNote } = useContext(FeresContext);
  const [address, setAddress] = useState(""); // Store the address in state
  const [coordinates, setCoordinates] = useState(null); // Store the updated coordinates
  const mapRef = useRef(null); // Reference to the map container
  const navigate = useNavigate();

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_MAP_API_KEY, // Replace with your API key
      version: "weekly",
      libraries: ["places"], // Load the places library for Geocoding
    });

    loader.load().then(() => {
      const initializeMap = (latitude, longitude) => {
        // Initialize the map
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });

        // Add a draggable marker at the specified location
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
          draggable: true, // Enable dragging
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
        const updateAddressFromCoords = (lat, lng) => {
          geocoder.geocode(
            { location: { lat, lng } },
            (results, status) => {
              if (status === "OK" && results[0]) {
                setAddress(results[0].formatted_address); // Set the updated address
                setCoordinates({ lat, lng }); // Update coordinates
              } else {
                console.error(
                  "Geocode was not successful for the following reason: " +
                    status
                );
              }
            }
          );
        };

        // Initial address fetch
        updateAddressFromCoords(latitude, longitude);

        // Add a listener to update address and coordinates when the marker is dragged
        marker.addListener("dragend", () => {
          const position = marker.getPosition();
          const lat = position.lat();
          const lng = position.lng();
          updateAddressFromCoords(lat, lng);
        });
      };

      // Check if destination is provided
      if (destination && destination.lat && destination.lng) {
        initializeMap(destination.lat, destination.lng);
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            initializeMap(latitude, longitude);
          },
          () => {
            alert("Unable to retrieve your location");
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }, [destination]);

  return (
    <div className="px-4 rounded-[13px] bg-white mb-[10px]">
      <div className="relative">
        {/* Map Container */}
        <div
          ref={mapRef}
          style={{ width: "100%", height: "200px" }}
          className="rounded-[13px] border border-gray-200"
        />
        <button
          onClick={() => navigate("/changeaddress")}
          className="bg-white rounded-[20px] font-bold text-sm text-[#2F2F3F] px-[12.5px] absolute left-32 top-28 py-[11.5px]"
        >
          Change address
        </button>
      </div>
      <div className="w-full mt-4 flex flex-col gap-3 pb-5">
        <input
          type="text"
          value={address} // Bind the input to the address state
          onChange={(e) => setAddress(e.target.value)} // Allow users to change the address
          placeholder="Apt./office/floor/postal code"
          className="bg-[#F8F8F8] w-full py-[10px] px-[20px] rounded-[13px] placeholder:text-[#767578] outline-none transition-all ease-linear focus:bg-white focus:border focus:border-[#0AB247]"
        />
        <input
          type="text"
          placeholder="Add a note for the rider"
          className="bg-[#F8F8F8] w-full py-[10px] px-[20px] rounded-[13px] placeholder:text-[#767578] border-none outline-none"
          onClick={() => setRiderNote(true)}
        />
      </div>
    </div>
  );
};

export default LocationPick;
