import React, { useEffect, useState } from 'react'
import ExtraOrderCard from './ExtraOrderCard'
import { assets } from '../../assets/assets'
import { useSelector } from 'react-redux'
import { usePost } from '../../servies/usePost'
import Spinner from '../Spinner'
import { useParams } from 'react-router-dom'


const ExtraOrder = () => {
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const { post, loading } = usePost()
    const [trendingItems, setTrendingItems] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const getTrendingItems = async () => {
            const data = await post('/api/food/get_items_by_store_id', {
                store_id: id
            })

            const newData = data?.store?.products.filter(product => product.name === 'Beverage')
            console.log(newData)
            setTrendingItems(newData)
        }

        if (selectedResturant.store._id) {
            getTrendingItems()
        }

    }, [selectedResturant])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='px-4 mt-5'>
            <h3 className='text-[#2F2F3F] font-bold text-lg mt-4 mb-5'>Are you thirsty?</h3>
            <div className='flex items-center gap-6 overflow-x-auto no-scrollbar'>
                {trendingItems?.map(trend => (
                    trend?.items.map(item => (
                        <ExtraOrderCard key={item?.product_id} img={item?.image_url[0]} name={item?.name} price={item?.price} details={item?.details} />
                    ))
                ))}

            </div>
        </div>
    )
}

export default ExtraOrder