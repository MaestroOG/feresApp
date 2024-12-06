import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import MartProductCard from './MartProductCard'
import EcommerceAddBasket from './EcommerceAddBasket'
import { usePost } from '../../servies/usePost'
import { FeresContext } from '../../context/FeresContext'

const MartProduct = () => {
    const [products, setProducts] = useState(null)
    const navigate = useNavigate()
    const { loading, error, post } = usePost()
    const { id } = useParams()
    const { ecat } = useContext(FeresContext)

    const fetchProducts = async () => {
        const endpoint = '/api/e-commerce/get_products_in_category'
        try {
            const data = await post(endpoint, {
                category_id: id
            })

            if (data) {
                const newData = data.products.filter(product => product.name === ecat)
                setProducts(newData)
                console.log(products);
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='pb-24'>
            {loading && <div>Loading...</div>}
            {error && <div>An Error Occurred</div>}
            {products && products?.map(product => (
                <>
                    <Container className={'py-5 flex items-center gap-[26vw]'}>
                        <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                        <h1 className='text-[#2F2F3F] text-[23px] font-bold'>{product?.name}</h1>
                    </Container>
                    <Container className={'grid grid-cols-2 gap-4 mt-5'}>
                        {product?.no_items.map(item => (
                            <MartProductCard item={item} />
                        ))}
                    </Container>
                </>
            ))
            }
            <EcommerceAddBasket />
        </div>
    )
}

export default MartProduct