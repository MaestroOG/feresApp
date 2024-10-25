import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import MartCategoryCard from './MartCategoryCard';
import MartItemCard from './MartItemCard';
import MartTrendingCard from './MartTrendingCard';

const EcommerceMart = () => {

    const [scrolled, setScrolled] = useState(false)

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
            name: "Fruit & Veg",
            img: assets.fruit_veg
        },
        {
            id: 2,
            name: "Bakery",
            img: assets.bread
        },
        {
            id: 3,
            name: "Meat",
            img: assets.meat
        },
        {
            id: 4,
            name: "Fruit & Veg",
            img: assets.fruit_veg
        },

    ]

    const items = [
        {
            id: 1,
            name: "Morning Fresh Dish Washing Li...",
            price: 140,
            img: assets.dishwasher
        },
        {
            id: 2,
            name: "Hypo Toilet Cleaner 725 ml",
            price: 140,
            img: assets.toilet_cleaner
        },
        {
            id: 3,
            name: "Dettol Antiseptic Disinfectant 250 ml",
            price: 140,
            img: assets.antiseptic
        },
    ]

    const trendingItems = [
        {
            id: 1,
            name: "Chicken",
            price: 140,
            oldPrice: 1240,
            img: assets.chicken_card
        },
        {
            id: 2,
            name: "Chicken",
            price: 140,
            oldPrice: 1240,
            img: assets.chicken_card
        },
        {
            id: 3,
            name: "Chicken",
            price: 140,
            oldPrice: 1240,
            img: assets.chicken_card
        },
    ]

    const weeklyItems = [
        {
            id: 1,
            name: "Funtuna Eggs x15",
            price: 140,
            img: assets.funtuna_eggs
        },
        {
            id: 2,
            name: "Funtuna Eggs x15",
            price: 140,
            img: assets.funtuna_eggs
        },
        {
            id: 3,
            name: "Funtuna Eggs x15",
            price: 140,
            img: assets.funtuna_eggs
        },
    ]
    return (
        <div className='pb-28'>
            <div className='relative'>
                <img src={assets.mart_featured} alt="" />
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
                        <img src={assets.costco} alt="" />
                        <h2 className={`transition-all text-xl font-bold text-[#2F2F3F] ${scrolled ? 'fixed left-20 top-9 z-50' : ''}`}>Costco wholesale</h2>
                    </div>
                    <div className='flex items-center gap-1' onClick={() => navigate('/review')}>
                        <img src={assets.star} alt="" />
                        <Link to={'/review'} className='text-base font-normal whitespace-nowrap'>4.5 (50 reviews)</Link>
                    </div>
                </div>

                <Container className='mt-3'>
                    <p className='text-[#979797]'>Grocery, convenience store, supermarket</p>
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
                    <h3 className='text-[18px] font-medium'>Household items</h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {items?.map(item => (
                        <MartItemCard key={item.id} img={item.img} name={item.name} price={item.price} />
                    ))}
                </Container>



                <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Trending items </h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {trendingItems?.map(item => (
                        <MartTrendingCard key={item.id} img={item.img} name={item.name} oldPrice={item.oldPrice} price={item.price} />
                    ))}
                </Container>


                <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Top weekly items</h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {weeklyItems?.map(item => (
                        <MartItemCard key={item.id} img={item.img} name={item.name} price={item.price} />
                    ))}
                </Container>
            </div>


            {/* Add To Basket */}

            {/* <div className='p-4 px-3 w-full bg-white fixed bottom-0 left-0'>
                <button className='text-white font-medium text-lg flex items-center justify-center gap-2 bg-[#0AB247] w-full p-4 rounded-full'>
                    <img src={assets.shopping_basket} alt="" className='invert' />
                    <p>Add To Basket</p>
                </button>
            </div> */}
        </div>
    )
}

export default EcommerceMart