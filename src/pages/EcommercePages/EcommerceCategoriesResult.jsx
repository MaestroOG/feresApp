import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import PopularStoreCard from '../../components/EcommerceComps/MainPageComps/PopularStoreCard'
import Container from '../../components/Container'
import { FeresContext } from '../../context/FeresContext'
import FilterPopUp from '../../components/SearchComps/FilterPopUp'
import { usePost } from '../../servies/usePost'

const EcommerceCategoriesResult = () => {
    const { name } = useParams()
    const [list, setList] = useState(null)

    const navigate = useNavigate()
    const { post, loading, error } = usePost();
    const { filterPop, setFilterPop } = useContext(FeresContext)

    const fetchCategories = async () => {
        const endpoint = '/api/e-commerce/get_category_list'
        try {
            const data = await post(endpoint, {})
            setList(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCategories()
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
                            <h3 className='text-[#0AB247] text-sm font-medium'>Elgin St. Celina, Delaware 10299</h3>
                        </div>
                    </div>
                </div>

                <button className='relative'>
                    <img src={assets.shopping_basket} className="border border-[#EEEEEE] p-2 rounded-lg" onClick={() => navigate('/cart')} />
                    <p className='absolute text-[10px] text-white bg-[#E92D53] font-bold px-1 rounded-full top-[18%] left-[54%]'>3</p>
                </button>
            </div>

            <SearchBar placeholder='Search for items' />

            {filterPop ? <FilterPopUp /> : null}

            <Container className={'my-7'}>

                {loading && <div>Loading...</div>}
                {error && <div>An Error Occurred</div>}

                {list && list?.success && <>
                    <h3 className='text-[#2F2F3F] text-lg font-medium my-3 pt-16'>{name} Stores</h3>
                    {list?.categories.map(category => (
                        <div key={category?._id} className='border border-[#F4F4F4] py-3 mt-5 flex rounded-xl' onClick={() => navigate(`/ecommerce/mart/${category?._id}`)}>
                            {/* Card Left */}
                            <div className='px-2'>
                                <img src={category?.featured_image} alt="" className='w-[85px] h-[84px] object-cover rounded-xl' />
                            </div>
                            {/* Card Right */}
                            <div>
                                <h3 className='text-[14px] font-medium'>{category?.category_name}</h3>
                            </div>
                        </div>
                    ))}
                </>
                }

            </Container>

        </div>
    )
}

export default EcommerceCategoriesResult