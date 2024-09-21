import React from 'react'
import SpinWheel from './SpinWheel'
import Services from './Services'
import SearchPage from './SearchPage'
import { Route, Routes } from 'react-router-dom'
import AllRestaurants from './AllRestaurants'
import Restaurant from './Restaurant'
import Reviews from './Reviews'

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
            </Routes>
        </>
    )
}

export default Outlet