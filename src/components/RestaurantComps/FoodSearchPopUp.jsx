import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import AnalysisCards from './AnalysisCards'
import { foodItems } from '../../tempDB/FoodItem';
import MenuCard from './MenuCard';
import { FeresContext } from '../../context/FeresContext';
import { useParams } from 'react-router-dom';
import { usePost } from '../../servies/usePost';
import Spinner from '../Spinner';

const FoodSearchPopUp = () => {
    const { id } = useParams()
    const { post, loading, error } = usePost()
    const [filterLoad, setFilterLoad] = useState(false)

    const { foodSearch, setFoodSearch } = useContext(FeresContext)
    const [items, setItems] = useState(null)
    const [filteredData, setFilteredData] = useState([])

    const [search, setSearch] = useState("");

    const fetchStoreItems = async () => {
        const endpoint = '/api/food/get_items_by_store_id'
        try {
            const data = await post(endpoint, {
                store_id: id
            })
            if (data && data.success) {
                const newData = data?.store?.products.flatMap(product => product.items);
                setItems(newData)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const filterSearch = () => {
        try {
            if (items) {
                setFilterLoad(true)
                console.log('fired')
                const result = items?.filter(item => item.name.toLowerCase().includes(search.trim()))
                console.log(result)
                setFilteredData(result)
            } else {
                setFilteredData([])
            }
        } catch (error) {
            console.log(error.message);
            setFilterLoad(false)
        } finally {
            setFilterLoad(false)
        }
    }

    useEffect(() => {
        fetchStoreItems()
    }, [])

    if (error) {
        return <h1 className='text-center'>Something went wrong</h1>
    }
    return (
        <div className={`${foodSearch ? '' : 'hidden'} h-[94vh] w-full bg-white fixed bottom-0 left-0 rounded-xl px-3 py-3 z-50`}>
            <div className='w-full'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
            </div>
            <div className='flex items-center gap-4 w-full'>
                <img src={assets.arrow_left} alt="" className='invert mt-6' onClick={() => setFoodSearch(false)} />
                <div className='w-full border border-[#EEEEEE] rounded-[30px] flex items-center justify-between gap-4 mt-6 py-[15px] px-[20px]'>
                    <div className='flex items-center gap-4'>
                        <img src={assets.search} alt="" onClick={filterSearch} />
                        <input type="text" placeholder='Search for meals' className='border-none outline-none focus:border focus:border-[#0AB247] focus' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    {search.length > 0 ? <div>
                        <img src={assets.close} alt="" />
                    </div> : null}
                </div>
            </div>

            {search.length > 0 && filteredData.length === 0 ? (
                <div className='w-max mx-auto flex flex-col justify-center items-center gap-1 h-[35vh]'>
                    <img src={assets.search_01} alt="" />
                    <h2 className='text-xl text-[#2F2F3F] font-bold'>Meal not available</h2>
                    <p className='text-[#2F2F3FCC] text-sm'>Search for other meals</p>
                </div>
            ) : (
                <>
                    <div className='mt-9'>
                        {filterLoad && <Spinner />}
                        {filteredData && (
                            filteredData.map((item, index) => (
                                <MenuCard key={index} price={item?.price} image={item?.image_url[0]} title={item.name} desc={item.desc} className={"mt-4"} />
                            ))
                        )}
                        <h3 className='text-[#2F2F3F] font-medium'>Popular searches</h3>
                        <div className='flex items-center gap-4 mt-4'>
                            <AnalysisCards name={"Chicken"} />
                            <AnalysisCards name={"Cake"} />
                            <AnalysisCards name={"Pizza"} />
                            <AnalysisCards name={"Burger"} />
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <AnalysisCards name={"Chicken"} />
                            <AnalysisCards name={"Cake"} />
                            <AnalysisCards name={"Pizza"} />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default FoodSearchPopUp

/* 
filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <MenuCard key={index} image={item.img} title={item.name} desc={item.desc} className={"mt-4"} />
                    ))
                ) : null
*/