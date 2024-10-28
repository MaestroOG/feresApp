import React, { useState } from 'react'
import MartAllNav from '../../components/MartAllProductsComps/MartAllNav'
import { assets } from '../../assets/assets'
import Container from '../../components/Container'
import MartItemCard from './MartItemCard'
import { Link } from 'react-router-dom'

const MartAllProducts = () => {

    const [tableList, setTableList] = useState(true)
    const buttons = ["All", "Toiletries", "Kitchen Cleaners"];


    return (
        <div className='h-screen bg-[#F8F8F8]'>
            <MartAllNav />
            <div className='p-4 flex items-center justify-between bg-white mt-5 rounded-t-[20px]'>
                <h2 className='text-[#2F2F3F] text-xl font-medium'>Meals Categories</h2>
                <div className='border border-[#EEEEEE] flex items-center rounded-2xl'>
                    <div className={`${tableList ? 'bg-[#EBF9EE]' : ''} p-3 rounded-tl-2xl rounded-bl-2xl transition-all`} onClick={() => setTableList(true)}>
                        <img src={tableList ? assets.dashboard_square_green : assets.dashboard_square_black} alt="" className='w-full transition-all' />
                    </div>
                    <div className={`${!tableList ? 'bg-[#EBF9EE]' : ''} p-3 rounded-tr-2xl rounded-br-2xl transition-all`} onClick={() => setTableList(false)}>
                        <img src={!tableList ? assets.list : assets.list_black} alt="" className='w-full transition-all' />
                    </div>
                </div>
            </div>
            <Container className='flex items-center gap-4 overflow-auto no-scrollbar bg-white z-50 pb-3'>
                <button className={`active rounded-full p-3 whitespace-nowrap text-lg px-6`}>{buttons[0]}</button>
                <button className={`inactive rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[1]}</button>
                <button className={`inactive rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[2]}</button>
            </Container>

            {/* Grid Products */}
            <div className='bg-white py-5'>
                <h2 className='text-xl font-medium text-[#2F2F3F] px-4'>All</h2>
                <Container className={`${tableList ? 'grid grid-cols-2' : null} my-5 gap-4`}>
                    {tableList ? Array(5).fill().map((_, index) => (
                        <div key={index}>
                            <div className='w-[189px] h-[159px] rounded-2xl flex items-center justify-center bg-[#F1F1F1] relative'>
                                <img src={assets.dishwasher} alt="" />
                                <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center absolute bottom-2 right-2'>
                                    <img src={assets.add_green} alt="" />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[#2F2F3F] w-[189px]'>Morning Fresh Dish Washing Liqui...</h1>
                                <p className='text-[#2F2F3F] font-bold'>ETB 140</p>
                            </div>
                        </div>
                    )) : Array(4).fill().map((_, index) => (
                        <div className='flex items-center gap-4 my-6' key={index}>
                            <div className='bg-[#F1F1F1] px-4 w-[120px] h-[127px] flex items-center justify-center rounded-lg'>
                                <img src={assets.dishwasher} alt="" className='w-[88px] h-[87pxs] object-contain' />
                            </div>
                            <div className=''>
                                <p className='text-[#2F2F3F]'>Morning Fresh Dish Washing Liquid Assorted 1 L</p>
                                <p className='text-[#2F2F3F] font-bold my-1'>EBT 140</p>
                                <button className='text-sm text-white bg-[#0AB247] rounded-lg p-2'>Add to basket</button>
                            </div>
                        </div>
                    ))}

                </Container>
            </div>
        </div>
    )
}

export default MartAllProducts