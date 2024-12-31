import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'
import DelOrPickBtn from '../../components/OrderComps/DelOrPickBtn'
import SelectRide from '../../components/OrderComps/SelectRide'
import { usePost } from '../../servies/usePost'
import { useDispatch, useSelector } from 'react-redux'
import OrderedFoodCard from '../../components/OrderComps/OrderedFoodCard'
import { setCartDetails, setCartItemData } from '../../redux/slices/cartDetail'
import AddItemBtn from '../../components/OrderComps/AddItemBtn'
import AddNoteBtn from '../../components/OrderComps/AddNoteBtn'
import SpecialReq from '../../components/OrderComps/SpecialReq'
import OrderSchedule from '../../components/OrderComps/OrderSchedule'
import LocationPick from '../../components/OrderComps/LocationPick'
import TipRider from '../../components/OrderComps/TipRider'
import PaymentMethods from '../../components/OrderComps/PaymentMethods'
import RiderNote from '../../components/OrderComps/RiderNote'
import TIpRiderPopUp from '../../components/OrderComps/TIpRiderPopUp'
import SaveMoneyPopUp from '../../components/OrderComps/SaveMoneyPopUp'
import DeliveryFeePopup from '../../components/OrderComps/DeliveryFeePopup'
import ServiceFeePopup from '../../components/OrderComps/ServiceFeePopup'
import DelOrderPopUp from '../../components/OrderComps/DelOrderPopUp'
import SelectDeliveryPopup from '../../components/OrderComps/SelectDeliveryPopup'
import ExtraNotePopUp from '../../components/FoodComps/ExtraNotePopUp'
import OrderConfirmBtn from '../../components/OrderComps/OrderConfirmBtn'
import ReviewPayPopup from '../DeliveryServicePages/ReviewPayPopup'
import TotalBill from '../../components/OrderComps/TotalBill'

const EcommerceCart = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate();
    const { setDelOrderVisible, deliveryPickup, setSelectDel, smPop, setSmPop, riderNote, tipRidePop, delPop, servicePop, orderNote, review, setReview, setDelPop, setServicePop } = useContext(FeresContext)
    const [cartData, setCartData] = useState(null)
    const [cartInvoice, setCartInvoice] = useState(null)
    const { post, loading, error } = usePost();
    const loginUser = useSelector((state) => state.userAuth.user)
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const promo_id = useSelector((state) => state.promotions.promo_id);


    const getCart = async () => {
        const endpoint = '/api/user/get_cart';
        try {
            const cartData = await post(endpoint, {
                cart_unique_token: loginUser.cart_unique_token
            })
            setCartData(cartData)
            dispatch(setCartItemData(cartData.cart))

            if (cartData) {
                try {
                    const cartDetail = await post('/api/user/get_order_cart_invoice', {
                        is_user_pick_up_order: false,
                        // server_token: "0Iqb69j2rP7x4yY7ZGeRst5pfnyp8vfZ",
                        server_token: loginUser?.token,
                        order_type: 7,
                        total_distance: 2.096696376800537,
                        total_time: 5.0,
                        cart_id: cartData?.cart?._id,
                        // cart_id: "67404d2b48f5037e9a037be0",
                        cart_unique_token: loginUser.cart_unique_token,
                        // user_id: "674194c6b50f6aecb5b65526",
                        user_id: loginUser.user_id,
                        // user_id: "674194cbba82cd9b9b72d4ea",
                        vehicle_id: "",
                        tip_payment_id: "",
                        tipPaymeny_other_amount: "0",
                        is_delivery_keeper: true,
                        isPromotion: true,
                        promotion_id:promo_id
                    });

                    setCartInvoice(cartDetail)
                    dispatch(setCartDetails(cartDetail))
                } catch (error) {
                    console.log(error.message)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCart()
        console.log(selectedResturant);

    }, [])


    console.log(cartInvoice,"setCartInvoicesetCartInvoice");
    
    return (
        <div className='pb-24'>
            <div className='flex items-center justify-between px-4 py-7'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h2 className='text-[#2F2F3F] text-2xl font-bold'>{selectedResturant?.store?.name}</h2>
                <img src={assets.delete_02} alt="" onClick={() => setDelOrderVisible(true)} />
            </div>
            <DelOrPickBtn />
            {!deliveryPickup && <SelectRide />}
            {loading && <div>Loading...</div>}
            {error && <div>An Error Occurred</div>}
            {cartData && cartData?.success && cartData?.cart?.stores?.map(store => (
                <div key={store._id}>
                    {store?.items?.map(item => (
                        <OrderedFoodCard
                            key={item?.unique_id}
                            title={item?.name}
                            price={item?.total_item_price}
                            desc={item?.order_item_description}
                            img={item?.image_url}
                            quantity={item?.quantity}
                            item={item}
                            quaUpdate={item?.quantity}
                        />
                    ))}
                </div>
            ))}

            <AddItemBtn isHr={true} />
            <SpecialReq />
            <AddNoteBtn />
            <hr className='my-3' />
            <OrderSchedule onThirtyClick={() => setSmPop(true)} />

            {!deliveryPickup && <LocationPick />}
            {!deliveryPickup && <TipRider tips_list={cartInvoice?.tips_list} />}

            <PaymentMethods img={assets.wallet_01} text={"Payment Methods"} isCard={true} onClick={() => navigate('/selectpayment')} />
            <PaymentMethods img={assets.discount} text={"Get Discounts"} onClick={() => navigate('/getdiscount')} />

            <TotalBill onDelClick={() => setDelPop(true)} onServiceClick={() => setServicePop(true)} selectedResturant={selectedResturant} order_payment={cartInvoice?.order_payment} />

            {riderNote && <RiderNote />}
            {tipRidePop && <TIpRiderPopUp />}
            {smPop && <SaveMoneyPopUp />}
            {delPop && <DeliveryFeePopup />}
            {servicePop && <ServiceFeePopup />}
            <DelOrderPopUp />

            <SelectDeliveryPopup service={cartInvoice?.service} />


            {/* <SelectDeliveryPopup /> */}

            {orderNote ? <ExtraNotePopUp placeholder={"Write anything else we need to know"} /> : null}

            <OrderConfirmBtn setReview={setReview} />
            {/* <SwipeToConfirm /> */}

            {review && <ReviewPayPopup selectedResturant={selectedResturant?.store} order_payment={cartInvoice?.order_payment} isDelivery={false} onCancelClick={() => setReview(false)} onPayClick={() => navigate('/bookride')} onNotNowClick={() => setReview(false)} />}
        </div>
    )
}

export default EcommerceCart