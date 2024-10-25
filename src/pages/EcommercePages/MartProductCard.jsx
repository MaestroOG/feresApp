import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const MartProductCard = ({ isDiscount }) => {
    return (
        <div>
            <Link to={'/ecommerce/mart/martproduct/item'} className='bg-[#F1F1F1] w-[189px] h-[159px] relative flex items-center justify-center rounded-2xl'>
                <img src={assets.egg_featured} alt="" />
                <div className='bg-white p-2 rounded-full w-[40px] absolute bottom-2 right-2'>
                    <img src={assets.add_green} alt="" />
                </div>
                {isDiscount && <div className='text-xs font-medium text-white bg-[#0AB247] rounded-md px-3 py-2 absolute top-3 left-2'>Save 20%</div>}
            </Link>
            <div className='w-[189px] my-1'>
                <p className='text-[#2F2F3F]'>Funtuna Eggs x6</p>
                <p className='text-[#2F2F3F] font-bold'>EBT 140</p>
            </div>
        </div>
    )
}

export default MartProductCard