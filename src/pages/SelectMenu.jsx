import React, { useState } from 'react'
import SupportNav from '../components/SupportComps/SupportNav'
import MenuCard from '../components/RestaurantComps/MenuCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MealsCategoriesAndItems from '../components/RestaurantComps/MealsCategoriesAndItems'
import { useSelector } from 'react-redux'

const SelectMenu = () => {
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const [categoryBtn, setCategoryBtn] = useState('all')
    const navigate = useNavigate();
    const loginUser = useSelector((state) => state.userAuth.user)




    return (
        <div className='w-full'>
            <SupportNav isGap={true} />
            <MealsCategoriesAndItems categoryItems={selectedResturant?.store?.products} store_id={selectedResturant?.store?._id} cartUniqueToken={loginUser?.cart_unique_token} support={true} notSticky={true} />
        </div>
    )
}

export default SelectMenu