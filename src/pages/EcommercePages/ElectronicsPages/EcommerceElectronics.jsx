import React, { useState, useEffect } from 'react'
import { assets } from '../../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../../../components/Container'
import MartCategoryCard from '../MartCategoryCard'
import MartItemCard from '../MartItemCard'
import EcommerceAddBasket from '../EcommerceAddBasket'

const EcommerceElectronics = () => {
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page has been scrolled 50px or more
            if (window.scrollY > 207) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const categories_1 = [
        {
            id: 1,
            name: "Mobile phone",
            img: assets.mobile_phone_01
        },
        {
            id: 2,
            name: "Laptops",
            img: assets.laptop_01
        },
        {
            id: 3,
            name: "Televisions",
            img: assets.television_01
        },
        {
            id: 4,
            name: "Mobile phone",
            img: assets.mobile_phone_01
        },

    ]

    const items = [
        {
            id: 1,
            name: "XIAOMI redmi 13C",
            price: 140,
            oldPrice: 120,
            img: assets.redmi_phone
        },
        {
            id: 2,
            name: "Infinix Smart 8",
            price: 140,
            oldPrice: 1240,
            img: assets.infinix_phone
        },
        {
            id: 3,
            name: "itel S23",
            price: 140,
            oldPrice: 1240,
            img: assets.itel_phone
        },
    ]
    return (
        <div className='pb-28'>
            <div className='relative'>
                <img src={assets.electronic_featured} alt="" />
            </div>
            <div className={`flex items-center justify-between px-4 py-6 fixed top-0 w-full transition-all z-40 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                <button onClick={() => navigate(-1)} className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                    <img src={assets.arrow_left} alt="" className={`${scrolled ? 'invert' : ''}`} />
                </button>
                <div className='flex items-center gap-2'>
                    <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                        <img src={assets.share} alt="" className={`${scrolled ? 'invert' : ''}`} />
                    </button>
                    <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                        <img src={assets.search} alt="" className={`${!scrolled ? 'invert' : ''}`} />
                    </button>
                </div>
            </div>


            {/* Title */}
            <div className='bg-white'>
                <div className="flex items-center justify-between pt-5 px-4">
                    <div className='flex items-center gap-2'>
                        <img src={assets.wap_logo} alt="" />
                        <h2 className={`transition-all text-xl font-bold text-[#2F2F3F] ${scrolled ? 'fixed left-20 top-9 z-50' : ''}`}>Wap computer shop</h2>
                    </div>
                    <div className='flex items-center gap-1' onClick={() => navigate('/review')}>
                        <img src={assets.star} alt="" />
                        <Link to={'/review'} className='text-base font-normal whitespace-nowrap'>4.5 (50 reviews)</Link>
                    </div>
                </div>

                <Container className='mt-3'>
                    <p className='text-[#979797]'>Electronics, convenience store, supermarket</p>
                </Container>

                {/* Delivery Details */}
                <div className='mt-7 px-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={assets.clock_green} alt="" />
                        <label className='text-base text-[#1E1E1E]'>31 minutes</label>

                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_green} alt="" />
                        <p className='text-base text-[#1E1E1E]'>Royal Ln. Mesa, New Jersey 45463</p>
                    </div>
                </div>

                <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Categories</h3>
                    <Link to={'/ecommerce/mart/categories'} className='text-[#999999] font-medium'>View all</Link>
                </div>
                <MartCategoryCard categories={categories_1} />

                <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Recommended items</h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {items?.map(item => (
                        <MartItemCard key={item.id} img={item.img} name={item.name} price={item.price} />
                    ))}
                </Container>

                <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Top weekly items</h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {items?.map(item => (
                        <MartItemCard key={item.id} img={item.img} name={item.name} price={item.price} />
                    ))}
                </Container>
            </div>

            <EcommerceAddBasket />
        </div>
    )
}

export default EcommerceElectronics