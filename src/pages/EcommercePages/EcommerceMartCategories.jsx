import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { usePost } from '../../servies/usePost'
import { FeresContext } from '../../context/FeresContext'

const EcommerceMartCategories = () => {
    const [activeId, setActiveId] = useState('')
    const navigate = useNavigate()
    const [cat, setCat] = useState(null)
    const { post, loading, error } = usePost()
    const { id } = useParams()
    const { setEcat } = useContext(FeresContext)

    const handleClick = (name) => {
        setEcat(name)
        setActiveId(name);
    };

    const fetchCat = async () => {
        const endpoint = '/api/e-commerce/get_products_in_category'
        try {
            const data = await post(endpoint, {
                category_id: id
            })
            setCat(data)
            console.log(cat)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCat()
    }, [])
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

                {loading && <div>Loading...</div>}
                {error && <div>An Error Occurred</div>}
                {cat && cat?.success && cat?.products.map(product => (
                    <div key={product?.name} onClick={() => handleClick(product?.name)}>
                        <div className={`w-28 h-24 px-4 py-8 rounded-2xl flex items-center justify-center ${activeId === product?.name ? 'border border-[#0AB247] bg-[#EBF9EE]' : 'bg-[#F8F8F8]'}`}>
                            <img src={product?.featured_image} alt="" />
                        </div>
                        <h1 className='text-[#2F2F3F] text-center mt-1'>{product?.name}</h1>
                    </div>

                ))}
            </Container>

            <div className='fixed bottom-0 left-0 w-full p-4 bg-white'>
                <button onClick={() => navigate(`/ecommerce/mart/martproduct/${id}`)} className={`${activeId.length > 0 ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#767578]'} p-4 w-full rounded-full text-lg font-medium`}>Apply</button>
            </div>
        </div>
    )
}

export default EcommerceMartCategories