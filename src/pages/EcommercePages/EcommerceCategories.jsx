import React, { useEffect, useState } from 'react'
import CategoryTop from '../../components/FoodCategoriesComps/CategoryTop'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../../servies/usePost'

const EcommerceCategories = () => {
    const [activeId, setActiveId] = useState("");
    const navigate = useNavigate();
    const [categories, setCategories] = useState(null)

    const { post, loading, error } = usePost()
    const handleClick = (id) => {
        setActiveId(id);
    };

    const fetchAllCats = async () => {
        const endpoint = "/api/e-commerce/get_main_category_list"
        try {
            const data = await post(endpoint, {})
            setCategories(data)
            console.log(categories)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchAllCats()
    }, [])
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
                {loading && <div>Loading...</div>}
                {error && <div>An Error Occurred</div>}
                {categories && categories?.success && categories?.categories.map(category => (
                    <div key={category?._id} onClick={() => handleClick(category?._id)}>
                        <div className={`w-28 h-24 px-4 py-8 rounded-2xl flex items-center justify-center ${activeId === category?._id ? 'border border-[#0AB247] bg-[#EBF9EE]' : 'bg-[#F8F8F8]'}`}>
                            <img src={category?.featured_image} className="object-cover rounded-lg" width={"60px"} height={"60px"} />
                        </div>
                        <h1 className='text-[#2F2F3F] text-center mt-1'>{category?.category_name}</h1>
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