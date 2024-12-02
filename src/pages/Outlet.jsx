import React from 'react'
import SpinWheel from './SpinWheel'
import Services from './Services'
import SearchPage from './SearchPage'
import { Route, Routes } from 'react-router-dom'
import AllRestaurants from './AllRestaurants'
import Restaurant from './Restaurant'
import Reviews from './Reviews'
import RestaurantSupport from './RestaurantSupport'
import SelectMenu from './SelectMenu'
import IngredientInfo from '../components/SupportComps/IngredientInfo'
import DescribeIssue from '../components/SupportComps/DescribeIssue'
import AboutRestaurant from '../components/SupportComps/AboutRestaurant'
import RestaurantIssue from '../components/SupportComps/RestaurantIssue'
import ChatSupport from './ChatSupport'
import Food from './Food'
import ViewAllMenu from '../components/RestaurantComps/ViewAllMenu'
import FoodCategories from './FoodCategories'
import Order from './Order'
import SelectLocation from './SelectLocation'
import LocationSearch from './LocationSearch'
import SelectPayment from './SelectPayment'
import DeleteCard from '../components/SelectPaymentComps/DeleteCard'
import AddCard from '../components/AddCard/AddCard'
import AddNewCardForm from '../components/AddCard/AddNewCardForm'
import GetDiscount from './GetDiscount'
import FeresSupport from './FeresSupport'
import BookRide from './BookRide'
import RateRider from './RateRider'
import RateFood from './RateFood'
import CancelOrder from './CancelOrder'
import OrderPage from './OrderPage'
import OrderSearch from '../components/OrderPageComps/OrderSearch'
import Messages from './Messages'
import RiderChat from './RiderChat'
import FullCart from './FullCart'
import Profile from './Profile'
import Favorite from './Favorite'
import PaymentMethods from './PaymentMethods'
import Promotions from './Promotions'
import PromoForm from '../components/PromotionComps/PromoForm'
import PromoApplied from '../components/PromotionComps/PromoApplied'
import Notifications from './Notifications'
import MapScreen from '../components/Map'
import FoodOrderDetails from './FoodOrderDetails'
import DetailNotif from '../components/NotificationComps/DetailNotif'
import Support from './Support'
import SelectOrder from './SelectOrder'
import OrderIssues from '../components/SelectOrderComps/OrderIssues'
import IssueDetails from '../components/SelectOrderComps/IssueDetails'
import IssueDetailMessage from '../components/SelectOrderComps/IssueDetailMessage'
import SupportMessage from './SupportMessage'
import Ecommerce from './Ecommerce'
import EcommerceSearch from './EcommercePages/EcommerceSearch'
import EcommerceCategories from './EcommercePages/EcommerceCategories'
import EcommerceCategoriesResult from './EcommercePages/EcommerceCategoriesResult'
import EcommerceMart from './EcommercePages/EcommerceMart'
import EcommerceMartCategories from './EcommercePages/EcommerceMartCategories'
import MartProduct from './EcommercePages/MartProduct'
import MartItemDetail from './EcommercePages/MartItemDetail'
import MartAllProducts from './EcommercePages/MartAllProducts'
import EcommerceElectronics from './EcommercePages/ElectronicsPages/EcommerceElectronics'
import ElectronicsAllProducts from './EcommercePages/ElectronicsPages/ElectronicsAllProducts'
import ElectronicItemDetail from './EcommercePages/ElectronicsPages/ElectronicItemDetail'
import ItemZoom from './EcommercePages/ElectronicsPages/ItemZoom'
import DeliveryService from './DeliveryServicePages/DeliveryService'
import DeliveryOptions from './DeliveryServicePages/DeliveryOptions'
import DeliveryDetails from './DeliveryServicePages/DeliveryDetails'
import SenderDetails from './DeliveryServicePages/SenderDetails'
import SenderLocation from './DeliveryServicePages/SenderLocation'
import SenderLocationSearch from './DeliveryServicePages/SenderLocationSearch'
import UpdatePhone from './DeliveryServicePages/UpdatePhone'
import SelectPhoneCountry from './DeliveryServicePages/SelectPhoneCountry'
import VerifyPhone from './DeliveryServicePages/VerifyPhone'
import DeliveryItemDetailsPage from './DeliveryServicePages/DeliveryItemDetailsPage'
import ReviewDeliveryOrder from './DeliveryServicePages/ReviewDeliveryOrder'
import RiderInfo from './RiderInfo'
import DeliveryTipRider from './DeliveryServicePages/DeliveryTipRider'
import DeliveryTipRiderPayment from './DeliveryServicePages/DeliveryTipRiderPayment'
import RecipientDetails from './DeliveryServicePages/RecipientDetails'
import RecipientLocation from './DeliveryServicePages/RecipientLocation'
import RecipientLocationSearch from './DeliveryServicePages/RecipientLocationSearch'
import RecipientUpdatePhone from './DeliveryServicePages/RecipientUpdatePhone'
import RecipientSelectPhoneCountry from './DeliveryServicePages/RecipientSelectPhoneCountry'
import RecipientVerifyPhone from './DeliveryServicePages/RecipientVerifyPhone'
import DeliverySelectPayment from './DeliveryServicePages/DeliverySelectPayment'
import DeliveryDiscounts from './DeliveryServicePages/DeliveryDiscounts'
import RideMap from './DeliveryServicePages/RideMap'
import GroupOrderReview from '../components/GroupOrderComps/GroupOrderReview'
import GroupOrderCart from '../components/GroupOrderComps/GroupOrderCart'
import DeliveryRateRider from './DeliveryServicePages/DeliveryRateRider'
import Login from './Login'
import OrderIssuesData from '../pages/orderIssuesData'

const Outlet = () => {
    return (
        <>
            <Routes>
                {/* <Route path='/' element={<MapScreen />} /> */}
                <Route path='/' element={<Services />} />
                {/* <Route path='/services' element={<Services />} /> */}
                <Route path='/spinwheel' element={<SpinWheel />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/allrestaurants' element={<AllRestaurants />} />
                <Route path='/restaurant/:id' element={<Restaurant />} />
                <Route path='/restaurant/viewmenu' element={<ViewAllMenu />} />
                <Route path='/restaurant/:id/categories' element={<FoodCategories />} />
                <Route path='/review/:id' element={<Reviews />} />
                <Route path='/restaurantsupport' element={<RestaurantSupport />} />
                <Route path='/restaurantsupport/selectmenu' element={<SelectMenu />} />
                <Route path='/restaurantsupport/ingredientinfo' element={<IngredientInfo />} />
                <Route path='/restaurantsupport/describeissue' element={<DescribeIssue />} />
                <Route path='/restaurantsupport/aboutrestaurant' element={<AboutRestaurant />} />
                <Route path='/restaurantsupport/restaurantissue' element={<RestaurantIssue />} />
                <Route path='/chatsupport' element={<ChatSupport />} />
                <Route path='/food' element={<Food />} />
                <Route path='/cart/:id' element={<Order />} />
                <Route path='/selectpayment' element={<SelectPayment />} />
                <Route path='/selectpayment/deletecard' element={<DeleteCard />} />
                <Route path='/selectpayment/addcard' element={<AddCard />} />
                <Route path='/selectpayment/addcard/addnewcard' element={<AddNewCardForm />} />
                <Route path='/getdiscount' element={<GetDiscount />} />
                <Route path='/feressupport/:roomId' element={<FeresSupport />} />
                <Route path='/bookride' element={<BookRide />} />
                <Route path='/raterider' element={<RateRider />} />
                <Route path='/ratefood' element={<RateFood />} />
                <Route path='/cancelorder' element={<CancelOrder />} />
                <Route path='/order' element={<OrderPage />} />
                <Route path='/ordersearch' element={<OrderSearch />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/messages/riderchat' element={<RiderChat />} />
                <Route path='/grouporder' element={<FullCart />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/favorite' element={<Favorite />} />
                <Route path='/profile/paymentmethods' element={<PaymentMethods />} />
                <Route path='/profile/promotions' element={<Promotions />} />
                <Route path='/profile/promotions/promoform' element={<PromoForm />} />
                <Route path='/profile/promotions/applied' element={<PromoApplied />} />
                <Route path='/profile/notifications' element={<Notifications />} />
                <Route path='/foodorderdetails' element={<FoodOrderDetails />} />
                <Route path='/detailnotification' element={<DetailNotif />} />
                <Route path='/support' element={<Support />} />
                <Route path='/support/selectorder' element={<SelectOrder />} />
                <Route path='/support/selectorder/orderissues/:id' element={<OrderIssues />} />
                <Route path='/support/selectorder/orderissues' element={<OrderIssuesData />} />
                <Route path='/support/selectorder/orderissues/orderdetails' element={<IssueDetails />} />
                <Route path='/support/selectorder/orderissues/orderdetails/sendmessage' element={<IssueDetailMessage />} />
                <Route path='/supportmessage' element={<SupportMessage />} />

                {/* Ecommerce Routes */}
                <Route path='/ecommerce' element={<Ecommerce />} />
                <Route path='/ecommercesearch' element={<EcommerceSearch />} />
                <Route path='/ecommerce/categories' element={<EcommerceCategories />} />
                <Route path='/ecommerce/categories/results' element={<EcommerceCategoriesResult />} />
                <Route path='/ecommerce/mart' element={<EcommerceMart />} />
                <Route path='/ecommerce/mart/categories' element={<EcommerceMartCategories />} />
                <Route path='/ecommerce/mart/martproduct' element={<MartProduct />} />
                <Route path='/ecommerce/mart/martproduct/item' element={<MartItemDetail />} />
                <Route path='/ecommerce/mart/martallproducts' element={<MartAllProducts />} />

                {/* Ecommerce Electronic Store Routes */}
                <Route path='/ecommerce/electronic' element={<EcommerceElectronics />} />
                <Route path='/ecommerce/electronic/allproducts' element={<ElectronicsAllProducts />} />
                <Route path='/ecommerce/electronic/allproducts/item' element={<ElectronicItemDetail />} />
                <Route path='/ecommerce/electronic/allproducts/item/itemzoom' element={<ItemZoom />} />

                {/* Delivery Service Routes */}
                <Route path='/deliveryservice' element={<DeliveryService />} />
                <Route path='/selectlocation' element={<SelectLocation />} />
                <Route path='/selectlocation/locationsearch' element={<LocationSearch />} />
                <Route path='/deliveryservice/deliveryoptions' element={<DeliveryOptions />} />
                <Route path='/deliveryservice/deliverydetails' element={<DeliveryDetails />} />
                <Route path='/deliveryservice/deliverydetails/senderdetails' element={<SenderDetails />} />
                <Route path='/deliveryservice/deliverydetails/senderdetails/senderlocation' element={<SenderLocation />} />
                <Route path='/deliveryservice/deliverydetails/senderdetails/senderlocation/search' element={<SenderLocationSearch />} />
                <Route path='/deliveryservice/deliverydetails/senderdetails/updatephone' element={<UpdatePhone />} />
                <Route path='/deliveryservice/deliverydetails/senderdetails/updatephone/selectphonecountry' element={<SelectPhoneCountry />} />
                <Route path='/deliveryservice/deliverydetails/senderdetails/updatephone/verifyphone' element={<VerifyPhone />} />
                <Route path='/deliveryservice/deliveryitemdetails' element={<DeliveryItemDetailsPage />} />
                <Route path='/deliveryservice/reviewdeliveryorder' element={<ReviewDeliveryOrder />} />
                <Route path='/deliveryservice/deliverytiprider' element={<DeliveryTipRider />} />
                <Route path='/deliveryservice/deliverytiprider/payment' element={<DeliveryTipRiderPayment />} />
                <Route path='/deliveryservice/deliverydetails/deliverydiscounts' element={<DeliveryDiscounts />} />
                <Route path='/deliveryservice/deliverydetails/selectpayment' element={<DeliverySelectPayment />} />
                <Route path='/deliveryservice/ridemap' element={<RideMap />} />
                <Route path='/deliveryservice/raterider' element={<DeliveryRateRider />} />

                {/* Recipient Routes */}
                <Route path='/deliveryservice/deliverydetails/recepientdetails' element={<RecipientDetails />} />
                <Route path='/deliveryservice/deliverydetails/recipientdetails/recipientlocation' element={<RecipientLocation />} />
                <Route path='/deliveryservice/deliverydetails/recipientdetails/recipientlocation/search' element={<RecipientLocationSearch />} />
                <Route path='/deliveryservice/deliverydetails/recipientdetails/updatephone' element={<RecipientUpdatePhone />} />
                <Route path='/deliveryservice/deliverydetails/recipientdetails/updatephone/selectphonecountry' element={<RecipientSelectPhoneCountry />} />
                <Route path='/deliveryservice/deliverydetails/recipientdetails/updatephone/verifyphone' element={<RecipientVerifyPhone />} />

                <Route path='/riderinfo' element={<RiderInfo />} />


                {/* Group Order Routes */}
                <Route path='/grouporder/review' element={<GroupOrderReview />} />
                <Route path='/grouporder/cart' element={<GroupOrderCart />} />


                {/* Auth Routes */}
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Outlet