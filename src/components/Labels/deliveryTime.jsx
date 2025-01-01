import { assets } from "../../assets/assets";
import { useSelector } from "react-redux";

// Function to calculate the distance between two coordinates using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2,basePrice) => {
    const R = 6371; // Radius of the Earth in kilometers
    const toRad = (deg) => (deg * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = basePrice * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
};

const DeliveryTimeLabel = ({ restaurantCordinates,delivery_time,wallet_currency_code }) => {
    const currentCoordinate = useSelector((state) => state.baseData.location);
    const baseData = useSelector((state) => state.baseData.baseData);




    const distance = calculateDistance(currentCoordinate?.lat, currentCoordinate?.lng, restaurantCordinates[0], restaurantCordinates[1] , baseData?.service_details?.base_price);
    const multipliedDistance = (distance * 2).toFixed(2);

    return (
        <>
            <div className="flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-28">
                <img src={assets.clock_01} alt="" className="w-5" />
                <p className="text-xs font-medium text-[#1E1E1E] whitespace-nowrap">
                    {delivery_time || 'N/A'} mins
                </p>
            </div>
            <div className="flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-3">
                <img src={assets.scooter_02} alt="" className="w-5" />
                <p className="text-xs font-medium text-[#1E1E1E] whitespace-nowrap">
                    {wallet_currency_code} {multipliedDistance}
                </p>
            </div>
        </>
    );
};

export default DeliveryTimeLabel;
