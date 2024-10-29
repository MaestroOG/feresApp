import React, { useContext, useEffect, useState } from 'react';
import OrderNav from '../components/OrderComps/OrderNav';
import DelOrPickBtn from '../components/OrderComps/DelOrPickBtn';
import SelectRide from '../components/OrderComps/SelectRide';
import OrderedFoodCard from '../components/OrderComps/OrderedFoodCard';
import AddItemBtn from '../components/OrderComps/AddItemBtn';
import SpecialReq from '../components/OrderComps/SpecialReq';
import AddNoteBtn from '../components/OrderComps/AddNoteBtn';
import DelOrderPopUp from '../components/OrderComps/DelOrderPopUp';
import OrderConfirmBtn from '../components/OrderComps/OrderConfirmBtn';
import SelectDeliveryPopup from '../components/OrderComps/SelectDeliveryPopup';
import ExtraNotePopUp from '../components/FoodComps/ExtraNotePopUp';
import { FeresContext } from '../context/FeresContext';
import ExtraOrder from '../components/OrderComps/ExtraOrder';
import OrderSchedule from '../components/OrderComps/OrderSchedule';
import SaveMoneyPopUp from '../components/OrderComps/SaveMoneyPopUp';
import LocationPick from '../components/OrderComps/LocationPick';
import TipRider from '../components/OrderComps/TipRider';
import TIpRiderPopUp from '../components/OrderComps/TIpRiderPopUp';
import PaymentMethods from '../components/OrderComps/PaymentMethods';
import OtherTip from '../components/OrderComps/OtherTip';
import { assets } from '../assets/assets';
import TotalBill from '../components/OrderComps/TotalBill';
import RiderNote from '../components/OrderComps/RiderNote';
import DeliveryFeePopup from '../components/OrderComps/DeliveryFeePopup';
import ServiceFeePopup from '../components/OrderComps/ServiceFeePopup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePostRequest } from '../servies/usePostRequest';

const Order = () => {
    const navigate = useNavigate();
    const { orderNote, riderNote, tipBtn, tipRidePop } = useContext(FeresContext);
    const { deliveryPickup } = useContext(FeresContext);
    const [delPop, setDelPop] = useState(false);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [servicePop, setServicePop] = useState(false);
    const { smPop, setSmPop } = useContext(FeresContext);
    const cartData = useSelector((state) => state.cart.items);
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const { loading, error, response, postRequest } = usePostRequest();
    const [dataFetched, setDataFetched] = useState(false); // Track if data is fetched

    useEffect(() => {
        if (!loading && !dataFetched && !response) {
            postRequest('/api/user/get_cart', { cart_unique_token: "i5H3Gacl5CPbcOSY4Wip" });
            setDataFetched(true); // Mark data as fetched
        }

        if (response && response.cart) {
            setCartItemsData(response.cart);
        }
    }, [loading, response, dataFetched]);


    return (
        <div className='pb-24'>
            <OrderNav />
            <DelOrPickBtn />
            {!deliveryPickup && <SelectRide />}

            {/* Nested mapping to show each store and their items */}
            {cartItemsData?.stores?.map((store) => (
                <div key={store._id}>
                    {store.items?.map((item) => (
                        <OrderedFoodCard
                            key={item.unique_id}
                            title={item.name}
                            price={item.total_item_price}
                            desc={item.order_item_description}
                            img={item.image_url}
                            quantity={item.quantity}
                            item={item}
                        />
                    ))}
                </div>
            ))}

            <AddItemBtn />
            <SpecialReq />
            <AddNoteBtn />
            <hr className='my-3' />
            <ExtraOrder />
            <OrderSchedule onThirtyClick={() => setSmPop(true)} />

            {!deliveryPickup && <LocationPick />}
            {!deliveryPickup && <TipRider />}

            {tipBtn === 'other' && <OtherTip />}
            <PaymentMethods img={assets.wallet_01} text={"Payment Methods"} isCard={true} onClick={() => navigate('/selectpayment')} />
            <PaymentMethods img={assets.discount} text={"Get Discounts"} isDiscount={true} onClick={() => navigate('/getdiscount')} />
            <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} selectedResturant={selectedResturant} cartData={cartData} />

            {riderNote && <RiderNote />}
            {tipRidePop && <TIpRiderPopUp />}
            {smPop && <SaveMoneyPopUp />}
            {delPop && <DeliveryFeePopup />}
            {servicePop && <ServiceFeePopup />}
            <DelOrderPopUp />
            <SelectDeliveryPopup />
            {orderNote && <ExtraNotePopUp placeholder={"Write anything else we need to know"} />}
            <OrderConfirmBtn orderData={response} />
        </div>
    );
};

export default Order;
