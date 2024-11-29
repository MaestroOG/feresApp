import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { usePost } from '../../servies/usePost';
import { useDispatch, useSelector } from 'react-redux';
import { addCuisine, removeCuisine, toggleRating, toggleDeliveryTime } from '../../redux/slices/filterSlice';

const FilterPopUp = ({ onClick }) => {

    const filters = useSelector(state => state.filter.options)
    const dispatch = useDispatch();

    const { setFilterPop, setRestFilter, restFilter } = useContext(FeresContext);
    const [rating, setRating] = useState('4')
    const [delTime, setDelTime] = useState(false)
    const [distance, setDistance] = useState('1')

    const [cuisines, setCuisines] = useState(null)

    const { post, loading, error } = usePost();

    const getCusines = async () => {
        try {
            const data = await post('/get_all_cuisines', {})
            setCuisines(data)
            console.log(cuisines)
        } catch (error) {
            console.error(error.message)
        }
    }

    const handlePreventDefault = (e) => {
        e.preventDefault();
    }


    const getFilterResults = async () => {
        try {
            const data = await post('/api/food/get_stores_nearest_city', {

                "city_id": "6220e8c72a4f11b34835b2ef",
                "city": "Kirkos",
                "country": "Ethiopia",
                "type": "1",
                "latitude": 9.002475317959558,
                "longitude": 38.76962408249495,
                "rating": filters?.rating,
                "newMerchants": filters?.newMerchants,
                "delivery_time": filters?.delivery_time,
                "cuisines": filters?.cuisines

            })

            setRestFilter(data)
        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        getCusines();
    }, [])

    useEffect(() => {
        console.log(filters)
    }, [filters])
    return (
        <div className='h-[90vh] w-full bg-[#F8F8F8] fixed bottom-0 left-0 rounded-2xl overflow-y-scroll pb-20 z-50'>
            {/* Top Bar */}
            <form onSubmit={onClick}>
                <div className='flex items-center justify-between px-2 py-2 bg-white sticky top-0'>
                    <img src={assets.cancel_icon} alt="" onClick={() => setFilterPop(false)} />
                    <h2 className='text-[#2F2F3F] font-bold text-xl'>Filters</h2>
                    <input type="reset" value={"Clear"} className='font-normal text-[#2F2F3F] text-lg' />
                    {/* <p className='font-normal text-[#2F2F3F] text-lg'>Clear</p> */}
                </div>

                {/* Sort By */}
                <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                    <h2 className='text-lg font-bold text-[#2F2F3F]'>Sort By</h2>
                    {/* <div className='mt-6 flex items-center justify-between'>
                        <p className='font-normal text-base text-[#646464]'>Closest</p>
                        <input type="radio" name="closest" id="" />
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                        <p className='font-normal text-base text-[#646464]'>Cheapest Delivery</p>
                        <input type="radio" name="closest" id="" />
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                        <p className='font-normal text-base text-[#646464]'>Fastest Delivery</p>
                        <input type="radio" name="closest" id="" />
                    </div> */}
                    <div className='mt-6 flex items-center justify-between pb-6'>
                        <p className='font-normal text-base text-[#646464]'>Top rated</p>
                        <input type="checkbox" checked={filters?.rating} name="closest" id="" onClick={() => dispatch(toggleRating())} />
                    </div>
                </div>

                {/* Discount And Offers */}
                {/* <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                    <h2 className='text-lg font-bold text-[#2F2F3F]'>Discounts and offers</h2>
                    <div className='mt-6 flex items-center justify-between'>
                        <p className='font-normal text-base text-[#646464]'>Menu discount</p>
                        <input type="checkbox" name="offers" id="" />
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                        <p className='font-normal text-base text-[#646464]'>Special offers</p>
                        <input type="checkbox" name="offers" id="" />
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                        <p className='font-normal text-base text-[#646464]'>Delivery discount</p>
                        <input type="checkbox" name="offers" id="" />
                    </div>
                    <div className='mt-6 flex items-center justify-between pb-6'>
                        <p className='font-normal text-base text-[#646464]'>without minimum basket price for discounts</p>
                        <input type="checkbox" name="offers" id="" />
                    </div>
                </div> */}

                {/* Ratings Filter */}
                {/* <div className='px-4 py-2 mt-5 bg-white rounded-3xl'>
                    <h2 className='text-lg font-bold text-[#2F2F3F]'>Ratings</h2>
                    <div className='mt-3 flex items-center gap-2'>
                        <button className={`${rating === '4' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setRating('4')
                            handlePreventDefault(e)
                        }} onChange={handlePreventDefault}>From 4</button>
                        <button className={`${rating === '4.5' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setRating('4.5')
                            handlePreventDefault(e)
                        }}>From 4.5</button>
                        <button className={`${rating === '4.7' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs `} onClick={(e) => {
                            setRating('4.7')
                            handlePreventDefault(e)
                        }}>From 4.7</button>
                    </div>
                </div> */}

                {/* Delivery Time */}

                <div className='px-4 py-4 mt-5 bg-white rounded-3xl'>
                    <h2 className='text-lg font-bold text-[#2F2F3F]'>Delivery time</h2>
                    <div className='mt-3 flex items-center gap-2'>
                        {/* <button className={`${delTime === '15' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setDelTime('15')
                            handlePreventDefault(e)
                        }}>Up to 15 min</button>
                        <button className={`${delTime === '20' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setDelTime('20')
                            handlePreventDefault(e)
                        }}>Up to 20 min</button> */}
                        <button className={`${filters?.delivery_time ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setDelTime(prev => !prev)
                            handlePreventDefault(e)
                            dispatch(toggleDeliveryTime())
                        }}>Less than 30 min</button>
                    </div>
                </div>
                {/* Distance */}

                {/* <div className='px-4 py-4 mt-5 bg-white rounded-3xl'>
                    <h2 className='text-lg font-bold text-[#2F2F3F]'>Distance</h2>
                    <div className='mt-3 flex items-center gap-2'>
                        <button className={`${distance === '1' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setDistance('1')
                            handlePreventDefault(e)
                        }}>Up to 1 km</button>
                        <button className={`${distance === '2' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setDistance('2')
                            handlePreventDefault(e)
                        }}>Up to 2 km</button>
                        <button className={`${distance === '3' ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#2F2F3F]'} rounded-lg px-4 py-2 font-medium text-xs`} onClick={(e) => {
                            setDistance('3')
                            handlePreventDefault(e)
                        }}>Up to 3 km</button>
                    </div>
                </div> */}

                {/* Cuisines */}

                <div className='px-4 py-2 pb-11 mt-3 bg-white rounded-3xl'>
                    <h2 className='text-lg font-bold text-[#2F2F3F]'>Sort By</h2>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error Fetching Cusines</div>}
                    {cuisines && cuisines?.cuisines_list.map(cuisine => (
                        <div className='mt-6 flex items-center justify-between' key={cuisine?._id}>
                            <p className='font-normal text-base text-[#646464]'>{cuisine?.name}</p>
                            <input type="checkbox" name="cuisines" id="" onChange={(event) => {
                                if (event.target.checked) {
                                    dispatch(addCuisine(cuisine?._id)); // Add cuisine when checked
                                } else {
                                    dispatch(removeCuisine(cuisine?._id)); // Remove cuisine when unchecked
                                }
                            }} />
                        </div>
                    ))}
                </div>

                {/* Apply Button */}
                <div className='bg-white px-2 py-4 fixed bottom-0 w-full'>
                    <button onClick={(e) => {
                        setFilterPop(false)
                        handlePreventDefault(e)
                        getFilterResults()
                    }} type='submit' className='bg-[#0AB247] text-white flex items-center gap-2 w-full justify-center rounded-3xl p-4' >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FilterPopUp