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
    const thristyItemId = useSelector((state) => state.selectedResturant.thristyItem);

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

    const findTristyProducts = (id) => {
        let dataGetted = []
        selectedResturant?.store?.products?.map((product) => {
            product?.items?.map((item) => {
                if (item?.product_id == id) {
                    // console.log(item,"productdataID");
                    dataGetted.push(item)
                }
            })
        })
        return dataGetted
    }

    return (
        <div className='px-4 pt-5 bg-white rounded-b-[20px]'>
            <h3 className='text-[#2F2F3F] font-bold text-lg mb-5'>Are you thirsty?</h3>
            <div className='flex items-center gap-6 overflow-x-auto no-scrollbar'>
                {thristyItemId?.map((item) =>
                    findTristyProducts(item.related_product_id)?.map((item) => <ExtraOrderCard key={item?.product_id} img={item?.image_url[0]} name={item?.name} price={item?.price} details={item?.details} />)
                )}
            </div>
        </div>
    )
}


export default ExtraOrder