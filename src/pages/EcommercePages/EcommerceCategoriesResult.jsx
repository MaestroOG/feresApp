import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import PopularStoreCard from '../../components/EcommerceComps/MainPageComps/PopularStoreCard'
import Container from '../../components/Container'
import { FeresContext } from '../../context/FeresContext'
import FilterPopUp from '../../components/SearchComps/FilterPopUp'
import { usePost } from '../../servies/usePost'
import Loader from '../../components/Loader'
import { useDispatch,useSelector } from 'react-redux'
import { setCategory_info, setItem_info, setProduct_info, setPromoPer, setStore_info } from '../../redux/slices/promotion'
import MartDeliveryLabel from '../../components/Labels/martDeliveryTime'

const EcommerceCategoriesResult = () => {
    const { name } = useParams()
    const [list, setList] = useState(null)
    const dispatch = useDispatch()
    const last_location = localStorage.getItem("currentAddress")
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const cartCount = useSelector((state) => state.cartDetails.cartCount)
    const store_id = cartItemData?.stores[0]?._id;

    const navigate = useNavigate()
    const { post, loading, error } = usePost();
    const { filterPop, setFilterPop } = useContext(FeresContext)

    const fetchCategories = async () => {
        const endpoint = '/api/e-commerce/get_ecommerce_stores_list'
        try {
            const data = await post(endpoint, {})
            if (data) {
                const newData = data.stores.filter(store => store.category_name === name)
                setList(newData)
                console.log(list)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCategories()
        dispatch(setStore_info(null))
        dispatch(setItem_info(null))
        dispatch(setCategory_info(null))
        dispatch(setProduct_info(null))
        dispatch(setPromoPer(null))

    }, [])
    return (
        <div>
            <div className='w-full flex items-center justify-between pt-6 px-2 sticky top-0 bg-white z-50 '>
                {/* Top Bar */}
                <div className='flex items-center gap-5'>
                    <button>
                        <img onClick={() => navigate(-1)} src={assets.arrow_left_02} className="border border-[#EEEEEE] p-2 rounded-lg" />
                    </button>

                    <div className='flex flex-col'>
                        <h3 className='text-sm font-medium'>Delivery to</h3>
                        <div className='flex gap-2 items-center'>
                            <h3 className='text-[#0AB247] text-sm font-medium'>{last_location?.split(" ")?.slice(0, 4)?.join(" ") || "select location"}</h3>
                        </div>
                    </div>
                </div>

                <button className='relative'>
                    <img src={assets.shopping_basket} className="border border-[#EEEEEE] p-2 rounded-lg" onClick={() => navigate(`/cart/${store_id}`)} />
                    <p className='absolute text-[10px] text-white bg-[#E92D53] font-bold px-1 rounded-full top-[18%] left-[54%]'>{cartCount}</p>
                </button>
            </div>

            <SearchBar placeholder='Search for items' />

            {filterPop ? <FilterPopUp /> : null}

            <Container className={'my-10'}>

                {loading && <Loader />}
                {error && <div>An Error Occurred</div>}

                {list && <>
                    <h3 className='text-[#2F2F3F] text-lg font-medium my-3 pt-16'>{name} Stores</h3>
                    {list.length === 0 && <h1 className='text-center my-5'>No Stores Found...</h1>}
                    {list?.map(category => (
                        <>
                            <Link to={`/ecommerce/mart/${category?.category_id}`} className='my-4 flex items-center gap-5'>
                                <img src={category?.image_url} alt="" width={"85px"} height={"85px"} className='rounded-lg' />
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-4'>
                                        <h3 className='text-[#2F2F3F] font-medium'>{category?.name}</h3>
                                        <div className='flex items-center gap-1'>
                                            <img src={assets.star} alt="" />
                                            <p className='text-[#2F2F3F] text-sm'>{category?.user_rate}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-sm text-[#979797]'>{category?.Description}</p>
                                    </div>
                                    <MartDeliveryLabel  restaurantCordinates={category?.location} delivery_time={category?.delivery_time + category?.kitchen_time} wallet_currency_code={"ETB"}/>
                                    {/* {isDiscount && <div className='text-[#0AB247] text-[9px] font-medium bg-[#0AB2471A] p-1 rounded w-[88px]'>
                                        Up to ETB 120 OFF
                                    </div>} */}
                                </div>
                            </Link>
                            <hr className='my-5' />
                        </>
                    ))}
                </>
                }
                {/* {list && JSON.stringify(list, null, 2)} */}

            </Container>

        </div>
    )
}

export default EcommerceCategoriesResult