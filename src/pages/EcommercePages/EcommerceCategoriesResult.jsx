import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import PopularStoreCard from '../../components/EcommerceComps/MainPageComps/PopularStoreCard'
import Container from '../../components/Container'
import { FeresContext } from '../../context/FeresContext'
import FilterPopUp from '../../components/SearchComps/FilterPopUp'

const EcommerceCategoriesResult = () => {
    const navigate = useNavigate()
    const { filterPop, setFilterPop } = useContext(FeresContext)
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
                <h3 className='text-[#2F2F3F] text-lg font-medium my-3'>Bakers store</h3>

                <PopularStoreCard isDiscount={true} />
                <PopularStoreCard isDiscount={true} />
                <PopularStoreCard />
            </Container>

        </div>
    )
}

export default EcommerceCategoriesResult