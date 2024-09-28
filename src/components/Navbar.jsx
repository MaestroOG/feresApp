import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex items-center justify-between pt-6 px-4'>
            {/* Top Bar */}

            <button>
                <img onClick={() => navigate(-1)} src={assets.arrow_left_02} className="border border-[#EEEEEE] p-2 rounded-lg" />
            </button>

            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-sm font-medium'>Delivery to</h3>
                <div className='flex gap-2 items-center'>
                    <h3 className='text-[#0AB247] text-sm font-medium'>Elgin St. Celina, Delaware 10299</h3>
                    <img src={assets.down_arrow} />
                </div>
            </div>

            <button className='relative'>
                <img src={assets.shopping_basket} className="border border-[#EEEEEE] p-2 rounded-lg" onClick={() => navigate('/order')} />
                <p className='absolute text-[10px] text-white bg-[#E92D53] font-bold px-1 rounded-full top-[18%] left-[54%]'>3</p>
            </button>
        </div>
    )
}

export default Navbar