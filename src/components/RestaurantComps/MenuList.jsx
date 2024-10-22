import React from 'react'
import { assets } from '../../assets/assets'

const MenuList = ({ img, name, desc }) => {
    return (
        <>
            <div className='my-5'>
                <div className='bg-[#FFD335] p-2 rounded-lg text-[#2F2F3F] text-xs font-medium w-max mb-1'>Trending</div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-[#2F2F3F] text-sm font-medium'>{name}</h2>
                        <p className='text-[#AEAEAE] font-normal text-sm w-[90%]'>{desc}</p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#AEAEAE] text-sm'>ETB 170</p>
                            <p className='text-[#0AB247] text-sm font-bold'>ETB 140</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={img} alt="" />
                        <button className='border border-[#0AB247] bg-white p-2 rounded-full text-[#0AB247] text-sm font-medium absolute bottom-1 left-9'>Add</button>
                    </div>
                </div>
            </div>
            <hr className='my-3' />
        </>
    )
}

export default MenuList