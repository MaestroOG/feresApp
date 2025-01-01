import { assets } from "../../assets/assets"
import { useSelector } from "react-redux";


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

 const MartDeliveryLabel = ({ restaurantCordinates,delivery_time,wallet_currency_code })=>{
    const currentCoordinate = useSelector((state) => state.baseData.location);
    const baseData = useSelector((state) => state.baseData.baseData);




    const distance = calculateDistance(currentCoordinate?.lat, currentCoordinate?.lng, restaurantCordinates[0], restaurantCordinates[1] , baseData?.service_details?.base_price);
    const multipliedDistance = (distance * 2).toFixed(2);
    return (<>
    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <img src={assets.clock_01} alt="" />
                            <p className='text-[#2F2F3F] text-sm'>{delivery_time} mins</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={assets.scooter_02} alt="" />
                            <p className='text-[#2F2F3F] text-sm'>ETB {multipliedDistance}</p>
                        </div>
                    </div>
    </>)
}

export default MartDeliveryLabel;