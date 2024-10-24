import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { trendingItems } from './trendingItems';
import MenuList from './MenuList';
import { menuListItems } from './menuListItems';
import { FeresContext } from '../../context/FeresContext';
import TableList from './TableList';

const MealsCategoriesAndItems = () => {
    const { tableList, setTableList } = useContext(FeresContext)
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const buttons = ['Most Trending', 'Chicken Shawarma', 'Lamb Shawarma', 'Beef Shawarma'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= 597) {
                setScrollActive(true);
                const activeIndex = Math.floor((scrollY - 597) / 335);
                if (activeIndex >= 0 && activeIndex < buttons.length) {
                    setActiveButtonIndex(activeIndex);
                }
            } else {
                setScrollActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [buttons.length]);
    return (
        <div className='h-[125vh]'>
            {/* Table Or List Row */}
            <div className='px-4 pt-9 pb-4 flex items-center justify-between'>
                <h2 className='text-[#2F2F3F] text-xl font-medium'>Meals Categories</h2>
                <div className='border border-[#EEEEEE] flex items-center rounded-2xl'>
                    <div className={`${tableList ? 'bg-[#EBF9EE]' : ''} p-3 rounded-tl-2xl rounded-bl-2xl transition-all`} onClick={() => setTableList(true)}>
                        <img src={tableList ? assets.table_green : assets.table} alt="" className='w-full transition-all' />
                    </div>
                    <div className={`${!tableList ? 'bg-[#EBF9EE]' : ''} p-3 rounded-tr-2xl rounded-br-2xl transition-all`} onClick={() => setTableList(false)}>
                        <img src={!tableList ? assets.list : assets.list_black} alt="" className='w-full transition-all' />
                    </div>
                </div>
            </div>

            {/* Category Buttons */}
            <div className='px-3 flex items-center gap-4 overflow-auto no-scrollbar sticky top-24 bg-white z-30 pb-3'>
                {buttons.map((button, index) => (
                    <button key={index} className={`${activeButtonIndex === index ? 'active' : 'inactive'} rounded-full p-3 whitespace-nowrap text-lg`}>
                        {button}
                    </button>
                ))}
            </div>

            {/* Trending Items Row */}
            <div className='px-4 mt-9 flex items-center justify-between'>
                <h2 className='text-[#2F2F3F] text-xl font-bold'>Most Trending</h2>
                <div className='flex items-center gap-1'>
                    <p className='text-[#979797] font-medium'>View all</p>
                    <img src={assets.arrow_right} alt="" className='w-6' />
                </div>
            </div>

            {/* Trending Items Slider Row */}

            <div className='px-4 my-7 flex items-center overflow-auto no-scrollbar flex-shrink-0'>
                <div className='flex'>
                    {/* Example for one card, repeat or dynamically render */}
                    {trendingItems.map(item => (
                        <div key={item.id} className='min-w-[170px]'>
                            <div className='relative w-max'>
                                <img src={item.img} alt="" />
                                <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-35%</div>
                                <div className='rounded-full bg-white p-2 absolute bottom-2 right-2'>
                                    <img src={assets.add_green} alt="" />
                                </div>
                            </div>
                            <div className='my-1'>
                                <h4 className='text-[#2F2F3F] text-sm w-40 mb-1'>{item.name}</h4>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#AEAEAE] text-sm'>ETB 170</p>
                                    <p className='text-[#0AB247] text-sm font-bold'>ETB 140</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Items Menu Table Or List */}

            <div className='px-4 mt-4'>
                <h3 className='text-xl font-bold text-[#2F2F3F]'>Chicken Shawarma</h3>
                {!tableList ? menuListItems.map(item => (
                    <MenuList key={item.id} img={item.img} name={item.name} desc={item.desc} />
                )) : <div className='my-5 flex items-center gap-2 overflow-auto no-scrollbar flex-shrink-0'>
                    {menuListItems.map(item => (
                        <TableList key={item.id} img={item.img} name={item.name} desc={item.desc} />
                    ))}
                </div>}
            </div>

        </div>
    )
}

export default MealsCategoriesAndItems