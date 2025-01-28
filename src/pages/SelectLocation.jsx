import React, { useCallback, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader";
import Container from "../components/Container";
import "./map.css";
import { useDispatch, useSelector } from "react-redux";
import { setFormatedAddress, setLocation } from "../redux/slices/basePriceSlice";
import ChooseAddressPopup from "../components/ServiceComps/ChooseAddressPopup";
import { usePost } from "../servies/usePost";
import { setSavedLocation } from "../redux/slices/locations";

const SelectLocation = () => {
  const { post } = usePost();
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null); // To store the map instance
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [address, setAddress] = useState("");
  const loginUser = useSelector((state) => state.userAuth.user);
  const [savedLocationPopup, setSavedLocationPopup] = useState(null);
  const [selctedAddress, setSelctedAddress] = useState(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_MAP_API_KEY, // Replace with your API key
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            const location = { lat: latitude, lng: longitude };
            setCurrentLocation(location);

            // Initialize map
            const mapInstance = new google.maps.Map(mapRef.current, {
              center: location,
              zoom: 16,
              mapTypeControl: false,
            });

            mapInstanceRef.current = mapInstance; // Store map instance

            // Reverse geocoding to get the address
            const geocoder = new google.maps.Geocoder();

            const getAddress = (location) => {
              geocoder.geocode({ location }, (results, status) => {
                if (status === "OK" && results[0]) {
                  const formattedAddress = results[0].formatted_address;
                  setAddress(formattedAddress);

                  dispatch(setLocation(location));
                  dispatch(setFormatedAddress(formattedAddress));
                  localStorage.setItem("currentAddress", formattedAddress);
                } else {
                  console.error("Geocoder failed due to: " + status);
                }
              });
            };

            getAddress(location);

            mapInstance.addListener("idle", () => {
              const center = mapInstance.getCenter();
              const newLocation = {
                lat: center.lat(),
                lng: center.lng(),
              };

              setCurrentLocation(newLocation);
              getAddress(newLocation);
            });
          },
          (error) => {
            console.error("Error getting location: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    });
  }, []);

  useEffect(() => {
    if (selctedAddress && mapInstanceRef.current) {
      const { location } = selctedAddress;
      const [lng, lat] = location; // Assuming location is [longitude, latitude]
      const newLocation = { lat, lng };

      mapInstanceRef.current.setCenter(newLocation);
    } else if (currentLocation && mapInstanceRef.current) {
      mapInstanceRef.current.setCenter(currentLocation);
    }
  }, [selctedAddress, currentLocation]);

  const savedLocation = async () => {
    // Replace with API call
    const endpoint = '/api/user/get_address'

    try {
      const data = await post(endpoint, {
        user_id: loginUser?.user_id
      })
      if (data?.success) {
        setSavedLocationPopup(data.data)
        dispatch(setSavedLocation(data.data))
      }
      setPopup(true)
    } catch (error) {
      console.log(error.message)
    }
    // setSavedLocationPopup([
    //   {
    //     title: "Home",
    //     address: "456 Elm St, Springfield, IL",
    //     location: [-89.6501, 39.7832],
    //   },
    //   {
    //     title: "Office",
    //     address: "123 Main St, Springfield, IL",
    //     location: [-89.6510, 39.7840],
    //   },
    // ]);
    // dispatch(
    //   setSavedLocation([
    //     {
    //       title: "Home",
    //       address: "456 Elm St, Springfield, IL",
    //       location: [-89.6501, 39.7832],
    //     },
    //     {
    //       title: "Office",
    //       address: "123 Main St, Springfield, IL",
    //       location: [-89.6510, 39.7840],
    //     },
    //   ])
    // );
  };

  useEffect(() => {
    savedLocation();
  }, []);

  const selectedSavedAddress = useCallback((data) => {
    setSelctedAddress(data);
    setTimeout(() => {
      setPopup(false);
      navigate('/')
    }, 1000);

  }, []);

  const closePopup = useCallback((data) => {
    setSelctedAddress(null);
    setPopup(false)
  }, []);

  return (
    <>
      {popup && savedLocationPopup && (
        <ChooseAddressPopup
          savedLocationPopup={savedLocationPopup}
          selectedSavedAddress={selectedSavedAddress}
          closePopup={closePopup}

        />
      )}

      <div className="relative">
        <style>
          {`
            .map-pin {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -100%);
              z-index: 1;
              pointer-events: none;
            }
          `}
        </style>

        <div className="p-3 rounded-full bg-white w-max absolute top-5 left-3 z-[10001]">
          <img
            src={assets.arrow_left}
            alt=""
            className="invert"
            onClick={() => navigate(-1)}
          />
        </div>

        {/* Map Container */}
        <div
          ref={mapRef}
          style={{ width: "100%", height: "100vh" }}
          className="w-screen"
        ></div>

        {/* Pin Icon */}
        <img src={assets.map_pointer} alt="Map Pin" className="map-pin" />

        <Container className="fixed bottom-0 left-0 w-full bg-white py-5">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[#767578] text-lg">Deliver to</h4>
              <h3 className="text-[#2F2F3F] font-medium text-lg">
                {address || "Fetching address..."}
              </h3>
            </div>
            <img
              src={assets.search}
              alt=""
              onClick={() => navigate("/selectlocation/locationsearch/1")}
            />
          </div>
          <button
            className="p-4 rounded-full w-full bg-[#0AB247] text-white text-xl font-medium mt-5"
            onClick={() => navigate("/")}
          >
            Confirm location
          </button>
        </Container>
      </div>
    </>
  );
};

export default SelectLocation;
