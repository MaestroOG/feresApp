import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceComps/ServiceCard'
import { assets } from '../assets/assets'
import ExploreCard from '../components/ServiceComps/ExploreCard'
import Container from '../components/Container'
import PopularStoreCard from '../components/EcommerceComps/MainPageComps/PopularStoreCard'

const Ecommerce = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const buttons = ["Popular stores", "Grocery stores", "Specialty stores"];
    return (
        <div>
            <Navbar />
            <SearchBar className="sticky top-0 left-0 bg-white" />
            <div className='text-[#2F2F3F] text-lg font-medium px-4'>
                Shop now
            </div>
            <ServiceCard />

            {/* Explore Section */}
            <div className='mt-8 w-full'>
                <div className='flex items-center justify-between px-4'>
                    <h3 className='text-[18px] font-medium'>Categories</h3>
                    <p className='text-[#0AB247] font-medium'>View all</p>
                </div>

                <div className='flex flex-row gap-5 overflow-y-scroll explore-card'>
                    {/* Card */}
                    <ExploreCard name={"Groceries"} img={assets.shopping_bag_01} />
                    <ExploreCard name={"Bakers"} img={assets.bakery_01} />
                    <ExploreCard name={"Mini market"} img={assets.store_01} />
                    <ExploreCard name={"Car"} img={assets.car} />
                    <ExploreCard name={"Food"} img={assets.food_img} />
                </div>
            </div>

            {/* Offers */}
            <div className='px-1 mt-10'>
                <div className='flex items-center justify-between mb-6 px-3'>
                    <h3 className='text-[#2F2F3F] text-lg font-medium'>Special offers</h3>
                </div>
                {/* Card */}
                <div className='flex items-center overflow-auto no-scrollbar'>
                    <Container>
                        <div className='w-36 h-44 rounded-xl bg-[#EFF7D7] p-2 px-3 relative'>
                            <h3 className='text-[#2F2F3F]'>New day <br /><span className='font-bold'>new deal</span></h3>
                            <img src={assets.coke} alt="" className='absolute bottom-0 right-0' />
                            <img src={assets.ecommerce_card_shape} alt="" className='absolute bottom-0 left-0' />
                            <p className='text-white text-[11px] z-50 absolute bottom-2 left-2'>up to <br /><span className='font-bold'>60%</span><br /> off</p>
                        </div>
                    </Container>
                    <Container>
                        <div className='w-36 h-44 rounded-xl bg-[#DBEDF3] p-2 px-3 relative'>
                            <h3 className='text-[#2F2F3F]'>New day <br /><span className='font-bold'>new deal</span></h3>
                            <img src={assets.healthy_fruits} alt="" className='absolute bottom-0 right-0' />
                            <img src={assets.ecommerce_card_shape} alt="" className='absolute bottom-0 left-0' />
                            <p className='text-white text-[11px] z-50 absolute bottom-2 left-2'>up to <br /><span className='font-bold'>60%</span><br /> off</p>
                        </div>
                    </Container>
                    <Container>
                        <div className='w-36 h-44 rounded-xl bg-[#EFF7D7] p-2 px-3 relative'>
                            <h3 className='text-[#2F2F3F]'>New day <br /><span className='font-bold'>new deal</span></h3>
                            <img src={assets.coke} alt="" className='absolute bottom-0 right-0' />
                            <img src={assets.ecommerce_card_shape} alt="" className='absolute bottom-0 left-0' />
                            <p className='text-white text-[11px] z-50 absolute bottom-2 left-2'>up to <br /><span className='font-bold'>60%</span><br /> off</p>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Shop By Store Type */}
            <Container className={'my-7'}>
                <h3 className='text-[#2F2F3F] text-lg font-medium my-3'>Shop by store type</h3>
                <div className='flex items-center gap-4 overflow-auto no-scrollbar sticky top-24 bg-white z-50 pb-3'>
                    <button className={`active rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[0]}</button>
                    <button className={`inactive rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[1]}</button>
                    <button className={`inactive rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[2]}</button>
                </div>
                <PopularStoreCard />
                <PopularStoreCard />
                <PopularStoreCard />
            </Container>
        </div>
    )
}

export default Ecommerce