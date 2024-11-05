import React, { useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const EcommerceMartCategories = () => {
    const [activeId, setActiveId] = useState([])
    const navigate = useNavigate()

    const handleClick = (id) => {
        setActiveId(prevIds =>
            prevIds.includes(id)
                ? prevIds.filter(activeId => activeId !== id)
                : [...prevIds, id]
        );
    };

    const categories = [
        {
            id: 1,
            name: "Fruit & Veg",
            img: assets.fruit_veg
        },
        {
            id: 2,
            name: "Bakery",
            img: assets.bread
        },
        {
            id: 3,
            name: "Meat",
            img: assets.meat
        },
        {
            id: 4,
            name: "Deli",
            img: assets.deli
        },
        {
            id: 5,
            name: "Dairy & eggs",
            img: assets.dairy_eggs
        },
        {
            id: 6,
            name: "Beverages",
            img: assets.beverages
        },
    ]
    return (
        <div>
            {/* Nav Part */}
            <Container className={'py-5 flex items-center gap-[20vw]'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h2 className='text-[#2F2F3F] text-[23px] font-bold text-center'>Shop By Category</h2>
            </Container>

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
                <button onClick={() => navigate('/ecommerce/mart/martproduct')} className={`${activeId.length > 0 ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#767578]'} p-4 w-full rounded-full text-lg font-medium`}>Apply</button>
            </div>
        </div>
    )
}

export default EcommerceMartCategories