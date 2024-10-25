import React, { useState } from 'react'
import CategoryTop from '../../components/FoodCategoriesComps/CategoryTop'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const EcommerceCategories = () => {
    const [activeId, setActiveId] = useState([]);
    const navigate = useNavigate();
    const categories = [
        {
            id: 1,
            name: "Groceries",
            img: assets.shopping_bag_01
        },
        {
            id: 2,
            name: "Bakers",
            img: assets.bakery_01
        },
        {
            id: 3,
            name: "Mini market",
            img: assets.store_01
        },
        {
            id: 4,
            name: "Electronics",
            img: assets.shopping_bag_01
        },
        {
            id: 5,
            name: "Gift shops",
            img: assets.shopping_bag_01
        },
        {
            id: 6,
            name: "Households",
            img: assets.shopping_bag_01
        },
        {
            id: 7,
            name: "Fashion",
            img: assets.shopping_bag_01
        },
        {
            id: 8,
            name: "Cosmetics",
            img: assets.shopping_bag_01
        },

    ]

    const handleClick = (id) => {
        setActiveId(prevIds =>
            prevIds.includes(id)
                ? prevIds.filter(activeId => activeId !== id)
                : [...prevIds, id]
        );
    };
    console.log(activeId)
    return (
        <div>
            <CategoryTop />
            {/* Container */}
            <h3 className='text-[#767578] text-lg px-4 my-5'>Choose one out of these categories and apply</h3>
            {activeId?.length === 0 && <div className='flex items-center gap-2 bg-[#E6352B0F] p-4 w-[398px] mx-auto my-5 rounded-2xl'>
                <img src={assets.alert_02} alt="" />
                <p className='text-[#E6352B] font-medium'>Choose one out those categories and apply</p>
            </div>}
            <Container className='grid grid-cols-3 gap-y-5 gap-x-3'>
                {categories?.map(category => (
                    <div key={category.id} onClick={() => handleClick(category.id)}>
                        <div className={`w-28 h-24 px-4 py-8 rounded-2xl flex items-center justify-center ${activeId.includes(category.id) ? 'border border-[#0AB247] bg-[#EBF9EE]' : 'bg-[#F8F8F8]'}`}>
                            <img src={category.img} alt="" />
                        </div>
                        <h1 className='text-[#2F2F3F] text-center mt-1'>{category.name}</h1>
                    </div>
                ))}

            </Container>

            <div className='fixed bottom-0 left-0 w-full p-4 bg-white'>
                <button onClick={() => navigate('/ecommerce/categories/results')} className={`${activeId.length > 0 ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#767578]'} p-4 w-full rounded-full text-lg font-medium`}>Apply</button>
            </div>
        </div>
    )
}

export default EcommerceCategories