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
                <Route path='/review' element={<Reviews />} />
                <Route path='/restaurantsupport' element={<RestaurantSupport />} />
                <Route path='/restaurantsupport/selectmenu' element={<SelectMenu />} />
                <Route path='/restaurantsupport/ingredientinfo' element={<IngredientInfo />} />
                <Route path='/restaurantsupport/describeissue' element={<DescribeIssue />} />
                <Route path='/restaurantsupport/aboutrestaurant' element={<AboutRestaurant />} />
                <Route path='/restaurantsupport/restaurantissue' element={<RestaurantIssue />} />
                <Route path='/chatsupport' element={<ChatSupport />} />
                <Route path='/food' element={<Food />} />
                <Route path='/cart/:id' element={<Order />} />
                <Route path='/selectlocation' element={<SelectLocation />} />
                <Route path='/selectlocation/locationsearch' element={<LocationSearch />} />
                <Route path='/selectpayment' element={<SelectPayment />} />
                <Route path='/selectpayment/deletecard' element={<DeleteCard />} />
                <Route path='/selectpayment/addcard' element={<AddCard />} />
                <Route path='/selectpayment/addcard/addnewcard' element={<AddNewCardForm />} />
                <Route path='/getdiscount' element={<GetDiscount />} />
                <Route path='/feressupport' element={<FeresSupport />} />
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
                <Route path='/support/selectorder/orderissues' element={<OrderIssues />} />
                <Route path='/support/selectorder/orderissues/orderdetails' element={<IssueDetails />} />
                <Route path='/support/selectorder/orderissues/orderdetails/sendmessage' element={<IssueDetailMessage />} />
                <Route path='/supportmessage' element={<SupportMessage />} />

                {/* Ecommerce Routes */}
                <Route path='/ecommerce' element={<Ecommerce />} />
                <Route path='/ecommercesearch' element={<EcommerceSearch />} />
            </Routes>
        </>
    )
}

export default Outlet