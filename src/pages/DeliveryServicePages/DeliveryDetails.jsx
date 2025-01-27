import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Container from '../../components/Container';
import DeliveryDetailsCard from '../../components/DeliveryServiceComps/DeliveryDetailsCard';
import VehicleTypePopup from '../../components/DeliveryServiceComps/DeliveryDetailsComps/VehicleTypePopup';
import { FeresContext } from '../../context/FeresContext';
import DeliveryItemDetail from '../../components/DeliveryServiceComps/DeliveryDetailsComps/DeliveryItemDetail';
import axios from 'axios';
import { setCost, setDestinationPersonName, setDestinationPersonPhone, setVehicleSpeed, setVehicleType } from '../../redux/slices/deliveryLocationSlice';

const DeliveryDetails = () => {
  const navigate = useNavigate();
  const currentLocation = useSelector((state) => state.deliveryLocation.current);
  const destination = useSelector((state) => state.deliveryLocation.destination);
  const baseData = useSelector((state) => state.baseData.baseData);
  const { vehicleTypePopup, setVehicleTypePopup, deliveryPayment, discountOpt } = useContext(FeresContext);
  const { deliveryItemDetail, setDeliveryItemDetail } = useContext(FeresContext);
  const userDetail = useSelector((state) => state.userAuth.user);
  const vehicleType = useSelector((state) => state.deliveryLocation.vehicleType);
  const vehicleSpeed = useSelector((state) => state.deliveryLocation.vehicleSpeed);
  const destinationPersonName = useSelector((state) => state.deliveryLocation.destinationPersonName);
const destinationPersonPhone = useSelector((state) => state.deliveryLocation.destinationPersonPhone);
  const driverNote = useSelector((state) => state.deliveryLocation.driverNote);
  const [totalDistance, setTotalDistance] = useState(null);
  const [services, setServices] = useState([]);
  const [location, setLocation] = useState(destination?.description);
  const dispatch = useDispatch();
  let cost;
  useEffect(() => {
    const sourceLocation = [currentLocation?.coordinates?.lat, currentLocation?.coordinates?.lng];
    const destinationLocation = [destination?.coordinates?.lat, destination?.coordinates?.lng];

    if (sourceLocation && destinationLocation && baseData?.service_details && userDetail) {
      const calculateDistance = (coords1, coords2) => {
        const toRadians = (degrees) => degrees * (Math.PI / 180);

        const { lat: lat1, lng: lng1 } = coords1;
        const { lat: lat2, lng: lng2 } = coords2;

        const R = 6371; // Radius of Earth in kilometers
        const dLat = toRadians(lat2 - lat1);
        const dLng = toRadians(lng2 - lng1);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Distance in kilometers
      };

      const fetchServiceList = async () => {
        const apiUrl = "https://suuq.feres.co/service_list";
        const requestBody = {
          sourceLocation,
          destinationLocation,
          user_id: userDetail.user_id,
          server_token: userDetail.token,
          vehicles_id: "",
        };

        try {
          const response = await axios.post(apiUrl, requestBody);
          setServices(response.data.services);
          response.data.services.forEach((element) => {
            if (element.vehicle_name.toLowerCase().includes("bike")) {
              dispatch(setVehicleType(element));
              const deliveryType = element?.instant_delivery;
              deliveryType.forEach((type) => {
                if (type.name.toLowerCase().includes("instant")) {
                  dispatch(setVehicleSpeed(type));
                }
              });
              return element;
            }
          });
        } catch (error) {
          console.error("Error fetching service list:", error.message);
        }
      };

      fetchServiceList();

      const distance = calculateDistance(
        { lat: sourceLocation[0], lng: sourceLocation[1] },
        { lat: destinationLocation[0], lng: destinationLocation[1] }
      );

      setTotalDistance(distance);
    }
  }, [currentLocation, destination, baseData, userDetail]);



  const calculateTotalCost = () => {
    if (!vehicleType || totalDistance === null) return "Calculating...";

    const { base_price, base_price_distance, min_fare, price_per_unit_distance } = vehicleType;
    

    if (totalDistance <= base_price_distance) {
      cost = min_fare;
    } else {
      cost = (totalDistance - base_price_distance) * price_per_unit_distance + base_price;
    }

    if (vehicleSpeed?.price) {
      cost += vehicleSpeed.price;
    }
    dispatch(setCost(cost.toFixed(2)))
    return `ETB${cost.toFixed(2)}`;
  };

  const handelReview = () =>{
   
    navigate('/deliveryservice/reviewdeliveryorder')
  }

  return (
    <>
      <div className={`bg-[#F8F8F8] pb-[158px] sticky top-0 left-0 z-30 ${vehicleTypePopup || deliveryItemDetail && 'blur-sm'}`}>
        <Container className={'py-5 flex items-center justify-between bg-white'}>
          <img src={assets.arrow_left} alt="" className="invert" onClick={() => navigate(-1)} />
          <h1 className="text-[#2F2F3F] text-xl font-bold">Enter destination</h1>
          <img src={assets.share} alt="" className="invert" />
        </Container>
        <Container className={'flex items-center justify-between pt-7 shadow pb-4 bg-white rounded-b-2xl'}>
          <div className="flex flex-col items-center gap-1">
            <img src={assets.location_blue} alt="" />
            <hr className="bg-[#4867D780] h-[56px] w-[2px]" />
            <img src={assets.location_01} alt="" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <Link to={'/deliveryservice/deliverydetails/senderdetails'} className="w-[305px] h-[60px] bg-[#F8F8F8] py-2 px-5">
              <input
                type="text"
                placeholder={currentLocation?.address}
                className="w-full rounded-xl border-none outline-none bg-transparent"
              />
              <p className="text-sm text-[#B1B1B1]">
                {`${userDetail?.first_name} ${userDetail?.last_name} • ${userDetail?.country_detail?.countryphonecode} ${userDetail?.phone}`}
              </p>
            </Link>
            <Link
              to={'/deliveryservice/deliverydetails/recepientdetails'}
              className="h-[60px] w-[305px] focus-within:border focus-within:border-[#0AB247] focus-within:bg-white bg-[#F8F8F8] rounded-xl py-2 px-5 flex items-center justify-between"
            >
              <div className="w-full">
                <input
                  type="text"
                  placeholder={destination?.description}
                  className="w-full bg-transparent outline-none transition-all"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <p className="text-sm text-[#0AB247]">Add recipient details</p>
              </div>
            </Link>
          </div>
          <img src={assets.add_button} alt="" />
        </Container>
        <Container className={'bg-white mt-5 py-5 rounded-lg'}>
          <DeliveryDetailsCard
            isPriority={true}
            img={assets.bike_character}
            name={vehicleSpeed?.name}
            desc={'Pickup within 30mins, drop-off within 90...'}
            onClick={() => setDeliveryItemDetail(true)}
          />
          <DeliveryDetailsCard
            img={assets.motor_bike}
            name={vehicleType?.vehicle_name}
            desc={'Recommended based on your item'}
            onClick={() => setVehicleTypePopup(true)}
          />
          <Link to={'/deliveryservice/deliveryitemdetails'}>
            <DeliveryDetailsCard img={assets.package_01} name={'Item details'} desc={'Add your item details'} isLast={true} />
          </Link>
        </Container>

        {/* Info */}
        <Container className={'bg-white mt-5 py-5 rounded-lg'}>
          <Link to={'/deliveryservice/deliverydetails/selectpayment'} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={assets.wallet_01} alt="" />
              <p className="font-medium text-[#2F2F3F]">Payment methods</p>
            </div>
            <div className="flex items-center gap-1">
              {deliveryPayment === 'ebirr' && (
                <div className="flex items-center gap-2">
                  <img src={assets.ebirr_sticker} alt="" className="w-8 h-6 object-contain" />
                  <p className="text-[#2F2F3F] text-sm font-medium">E-birr</p>
                </div>
              )}
              {deliveryPayment === 'cash' && (
                <div className="flex items-center gap-2">
                  <img src={assets.cash_sticker} alt="" className="w-8 h-6 object-contain" />
                  <p className="text-[#2F2F3F] text-sm font-medium">Cash</p>
                </div>
              )}
              {deliveryPayment === 'kaafi' && (
                <div className="flex items-center gap-2">
                  <img src={assets.kaafi} alt="" className="w-8 h-6 object-contain" />
                  <p className="text-[#2F2F3F] text-sm font-medium">Kaafi</p>
                </div>
              )}
              {deliveryPayment === 'visa' && (
                <div className="flex items-center gap-2">
                  <img src={assets.visa_sticker} alt="" className="w-8 h-6 object-contain" />
                  <p className="text-[#2F2F3F] text-sm font-medium">Visa</p>
                </div>
              )}
              {deliveryPayment === 'master' && (
                <div className="flex items-center gap-2">
                  <img src={assets.mastercard} alt="" className="w-8 h-6 object-contain" />
                  <p className="text-[#2F2F3F] text-sm font-medium">MasterCard</p>
                </div>
              )}
              <img src={assets.arrow_right} alt="" />
            </div>
          </Link>
          <hr className="my-4" />
          <Link to={'/deliveryservice/deliverydetails/deliverydiscounts'} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={assets.discount} alt="" />
              <p className="font-medium text-[#2F2F3F]">Get discounts</p>
            </div>
            <div className="flex items-center gap-2">
              {discountOpt && (
                <div className="text-white p-[10px] flex items-center justify-center bg-[#0AB247] rounded-full text-xs font-medium">
                  Discounts 30%
                </div>
              )}
              <img src={assets.arrow_right} alt="" />
            </div>
          </Link>
        </Container>

        {/* Confirm Sections */}
        <Container className={'bg-white mt-5 py-5 rounded-lg w-full fixed bottom-0 left-0 rounded-t-lg'}>
          <div className="flex items-center justify-between my-4">
            <h3 className="text-[#2F2F3F] text-lg">Total</h3>
            <p className="text-[#2F2F3F] text-xl font-bold">{calculateTotalCost()}</p>
          </div>
          <button
            className="w-full rounded-full bg-[#0AB247] p-4 text-white text-lg font-medium"
            onClick={handelReview}
          >
            Review order
          </button>
        </Container>
      </div>
      {vehicleTypePopup && <VehicleTypePopup isActive={true} services={services} totalDistance={totalDistance}/>}
      {deliveryItemDetail && <DeliveryItemDetail isActive={true} services={services}/>}
    </>
  );
};

export default DeliveryDetails;
