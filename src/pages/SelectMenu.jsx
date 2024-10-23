import React, { useState } from 'react'
import SupportNav from '../components/SupportComps/SupportNav'
import MenuCard from '../components/RestaurantComps/MenuCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MealsCategoriesAndItems from '../components/RestaurantComps/MealsCategoriesAndItems'

const SelectMenu = () => {
    const [categoryBtn, setCategoryBtn] = useState('all')
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <SupportNav />
            <MealsCategoriesAndItems />
        </div>
    )
}

export default SelectMenu