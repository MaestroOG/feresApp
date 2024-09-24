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

const Outlet = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Services />} />
                <Route path='/spinwheel' element={<SpinWheel />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/allrestaurants' element={<AllRestaurants />} />
                <Route path='/restaurant' element={<Restaurant />} />
                <Route path='/review' element={<Reviews />} />
                <Route path='/restaurantsupport' element={<RestaurantSupport />} />
                <Route path='/restaurantsupport/selectmenu' element={<SelectMenu />} />
                <Route path='/restaurantsupport/ingredientinfo' element={<IngredientInfo />} />
                <Route path='/restaurantsupport/describeissue' element={<DescribeIssue />} />
                <Route path='/restaurantsupport/aboutrestaurant' element={<AboutRestaurant />} />
                <Route path='/restaurantsupport/restaurantissue' element={<RestaurantIssue />} />
                <Route path='/chatsupport' element={<ChatSupport />} />
                <Route path='/food' element={<Food />} />
            </Routes>
        </>
    )
}

export default Outlet