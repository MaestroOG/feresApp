import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import ExtraOrder from '../components/OrderComps/ExtraOrder';
import OrderSchedule from '../components/OrderComps/OrderSchedule';
import SaveMoneyPopUp from '../components/OrderComps/SaveMoneyPopUp';
import LocationPick from '../components/OrderComps/LocationPick';
import TipRider from '../components/OrderComps/TipRider';
import TIpRiderPopUp from '../components/OrderComps/TIpRiderPopUp';
import PaymentMethods from '../components/OrderComps/PaymentMethods';
import OtherTip from '../components/OrderComps/OtherTip';
import TotalBill from '../components/OrderComps/TotalBill';
import RiderNote from '../components/OrderComps/RiderNote';
import DeliveryFeePopup from '../components/OrderComps/DeliveryFeePopup';
import ServiceFeePopup from '../components/OrderComps/ServiceFeePopup';
import ReviewPayPopup from './DeliveryServicePages/ReviewPayPopup';
import { assets } from '../assets/assets';
import { FeresContext } from '../context/FeresContext';
import { usePostRequest } from '../servies/usePostRequest';
import { usePost } from '../servies/usePost';
import { setCartDetails, setCartItemData } from '../redux/slices/cartDetail';
import Loader from '../components/Loader';





const Order = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { orderNote, riderNote, tipBtn, tipRidePop } = useContext(FeresContext);
    const { deliveryPickup } = useContext(FeresContext);
    const [delPop, setDelPop] = useState(false);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [servicePop, setServicePop] = useState(false);
    const { smPop, setSmPop } = useContext(FeresContext);
    const cartData = useSelector((state) => state.cart.items);
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const promo_id = useSelector((state) => state.promotions.promo_id);
    const { loading, response, postRequest } = usePostRequest();
    const { post } = usePost()
    const [dataFetched, setDataFetched] = useState(false); // Track if data is fetched
    const [quantityUpdate, setQuantityUpdate] = useState()
    const [cartDetail, setCartDetail] = useState(null)
    const userDetail = useSelector((state) => state.userAuth.user)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const [review, setReview] = useState(false)

    useEffect(() => {
        const fetchCart = async () => {

            const cartItemData = await post('/api/user/get_cart', { cart_unique_token: userDetail.cart_unique_token });
            dispatch(setCartItemData(cartItemData.cart))
            setCartItemsData(cartItemData.cart)

            const cartDetail = await post('/api/user/get_order_cart_invoice', {
                is_user_pick_up_order: false,
                server_token: userDetail?.token,
                order_type: 7,
                total_distance: 2.096696376800537,
                total_time: 5.0,
                cart_id: cartItemData?.cart?._id,
                cart_unique_token: userDetail?.cart_unique_token,
                user_id: userDetail?.user_id,
                vehicle_id: "",
                tip_payment_id: "",
                tipPaymeny_other_amount: "0",
                is_delivery_keeper: true,
                isPromotion: true,
                promotion_id: promo_id
            });
            if (!cartDetail || cartDetail && cartDetail?.success === false) {
                setError(true);
                return;
            }

            setCartDetail(cartDetail)
            dispatch(setCartDetails(cartDetail))


        }

        fetchCart()

        setLoading(false)
    }, [quantityUpdate]);


    const quaUpdate = useCallback((data) => {
        setQuantityUpdate(data)

    }, [])

    if (error) {
        return <h1>Session Expired Please Log In Again</h1>
    }
    console.log(cartDetail, "cartDetailcartDetailcartDetail");

    return (
        <div className='pb-24 bg-[#EAEAEA]'>
            <OrderNav />
            <DelOrPickBtn />
            {!deliveryPickup && <SelectRide />}

            {isLoading && <Loader />}
            {/* Nested mapping to show each store and their items */}
            {cartItemData && cartItemData?.stores?.map((store) => (
                <div key={store._id} className='bg-white'>
                    {store?.items?.map((item) => (
                        item.quantity > 0 && <OrderedFoodCard
                            key={item.unique_id}
                            title={item.name}
                            price={item.total_item_price}
                            desc={item.order_item_description}
                            img={item.image_url}
                            quantity={item.quantity}
                            item={item}
                            quaUpdate={quaUpdate}
                        />
                    ))}
                </div>
            ))}



            {/* <OrderedFoodCard title={item.name} price={item.price} desc={item.details} quantity={item.quantity} /> */}
            <AddItemBtn isHr={true} />
            <SpecialReq />
            <AddNoteBtn />
            <hr />
            <ExtraOrder />
            <OrderSchedule onThirtyClick={() => setSmPop(true)} />

            {!deliveryPickup && <LocationPick />}
            {!deliveryPickup && <TipRider tips_list={cartDetail?.tips_list} />}

            {tipBtn === 'other' && <OtherTip />}
            <PaymentMethods className={'mt-[10px] rounded-t-[13px]'} img={assets.wallet_01} text={"Payment Methods"} isCard={true} onClick={() => navigate('/selectpayment')} />
            <PaymentMethods className={'rounded-b-[13px]'} img={assets.discount} text={"Get Discounts"} onClick={() => navigate('/getdiscount')} />
            <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} selectedResturant={selectedResturant} order_payment={cartDetail?.order_payment} />

            {riderNote && <RiderNote />}
            {tipRidePop && <TIpRiderPopUp />}
            {smPop && <SaveMoneyPopUp />}
            {delPop && <DeliveryFeePopup />}
            {servicePop && <ServiceFeePopup />}
            <DelOrderPopUp />

            <SelectDeliveryPopup service={cartDetail?.service} />


            {/* <SelectDeliveryPopup /> */}

            {orderNote ? <ExtraNotePopUp placeholder={"Write anything else we need to know"} /> : null}

            <OrderConfirmBtn setReview={setReview} orderData={response} />
            {/* <SwipeToConfirm /> */}

            {review && <ReviewPayPopup selectedResturant={selectedResturant?.store} order_payment={cartDetail?.order_payment} isDelivery={false} onCancelClick={() => setReview(false)} onPayClick={() => navigate('/bookride')} onNotNowClick={() => setReview(false)} />}
        </div>
    );
};

export default Order;
