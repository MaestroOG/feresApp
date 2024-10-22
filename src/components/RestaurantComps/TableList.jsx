import React from 'react'
import { assets } from '../../assets/assets'

const TableList = ({ img, name, desc }) => {
    return (
        <div className='flex'>
            {/* Example for one card, repeat or dynamically render */}
            <div className='min-w-[170px]'>
                <div className='relative w-max'>
                    <img src={img} alt="" />
                    <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-35%</div>
                    <div className='rounded-full bg-white p-2 absolute bottom-2 right-2'>
                        <img src={assets.add_green} alt="" />
                    </div>
                </div>
                <div className='my-1'>
                    <h4 className='text-[#2F2F3F] text-sm mb-1 w-[165px]'>{name}</h4>
                    <p className='text-[#AEAEAE] font-normal text-sm w-[165px] mb-1'>{desc}</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#AEAEAE] text-sm'>ETB 170</p>
                        <p className='text-[#0AB247] text-sm font-bold'>ETB 140</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableList