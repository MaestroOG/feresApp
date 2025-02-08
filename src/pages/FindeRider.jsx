import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useSelector } from "react-redux";
import { Loader } from "@googlemaps/js-api-loader";
import "./map.css";
import SlideToCancel from "./SlideToCancel";
import { usePost } from "../servies/usePost";
import { useNavigate } from "react-router-dom";

const FindeRider = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
    const navigate = useNavigate()
  const currentCordinates = useSelector((state) => state.baseData.location);
//   const [isSliding, setIsSliding] = useState(false);
  const userDetail = useSelector((state) => state.userAuth.user)
  const [statusData, setStatusData] = useState({})
  const { post } = usePost()

  const getExpresOrderHistory = async () => {
      try {
          const response = await post('/api/admin/deg_deg_history', {
              server_token: userDetail.token,
              user_id: userDetail.user_id
          })

          if(response.orderHistory[0].status > 2){
            console.log(response.orderHistory[0],"move to next");
                if(response.orderHistory[0].status == 5){
                    setStatusData(response.orderHistory[0]) 
                }else{
                    navigate('/deliveryservice/ridemap')
                }
            
          }else{
          setStatusData(response.orderHistory[0])
        }
      } catch (error) {
          console.error("Error fetching order history:", error)
      }
  }

  useEffect(() => {
      // Initial API call
      getExpresOrderHistory()

      // Set interval to call API every 5 seconds
      const interval = setInterval(() => {
          getExpresOrderHistory()
      }, 10000)

      // Cleanup function to clear interval when component unmounts
      return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_MAP_API_KEY, 
      version: "weekly",
      libraries: ["places"],
    },[currentCordinates]);

    loader.load().then(() => {
      const staticLocation = currentCordinates; 
    //   const staticLocation = {
    //     lat: 40.7128, 
    //     lng: -74.006,
    //   };
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: staticLocation,
        zoom: 16,
        mapTypeControl: false,
        draggable: false, // Disable dragging
        scrollwheel: false, // Disable scroll zooming
        disableDoubleClickZoom: true, // Disable double-click zooming
        gestureHandling: "none", // Disable all gestures
      });

      mapInstanceRef.current = mapInstance;
    });
  }, []);

  return (
    <div className="relative">
      <style>
        {`
          @keyframes jump {
            0%, 100% {
              transform: translate(-50%, -100%);
            }
            50% {
              transform: translate(-50%, -110%);
            }
          }

          .map-pin {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -100%);
            z-index: 1;
            pointer-events: none;
            animation: jump 1s infinite ease-in-out;
          }

          .slide-container {
            position: absolute;
            bottom: 50px;
            left: 50%;

            cursor: pointer;
        
          }
        `}
      </style>
     <div className="shadow-md pt-6" style={{backgroundColor:"white", height:'110px', zIndex:'1000',position:'absolute',width:'100%'}}>
    <div className="flex justify-end"> <button style={{flex:1}} onClick={() => window.history.back()} className="text-lg"><img src={assets.arrow_left_02} alt="" /></button> <h2 style={{flex:4, textAlign:"center",marginRight:'18%'}} className="text-lg font-semibold">Searching riders</h2> </div>
        <div style={{textAlign:'center'}}>
        {(statusData.status == 1 || statusData.status == 5) && <p className="text-green-500 text-sm">Finding you a nearby rider...</p>}
          <p className="text-gray-400 text-xs">This may take a few seconds...</p>
        </div>
     </div>
      {/* Map Container */}
      <div ref={mapRef} style={{ width: "100%", height: "100vh" }} className="w-screen"></div>

      {/* Pin Icon */}
      <img src={assets.map_pointer} alt="Map Pin" className="map-pin" />

      {/* Slide to Cancel Button */}
      <div style={{position: 'absolute', bottom:"8%" , left: '50%', 
  transform: 'translateX(-50%)'  }}>
      <SlideToCancel />
      </div>
    </div>
  );
};

export default FindeRider;
