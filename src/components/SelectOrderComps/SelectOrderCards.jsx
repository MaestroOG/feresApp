import React from 'react'
import { Link } from 'react-router-dom'

const SelectOrderCards = ({ img, name, desc, successStat, isDetail }) => {
    return (
        <Link to={`/support/selectorder/orderissues`} className='flex items-center justify-between px-4 mb-4'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#F8F8F8]'>
                    <img src={img} alt="" className='w-14' />
                </div>
                <div>
                    <h3 className='text-[#2F2F3F] text-base font-medium'>{name}</h3>
                    <p className='text-[#ACACAC] text-base'>{desc}</p>
                </div>
            </div>
            {isDetail ? <img src={assets.arrow_right} /> : successStat ? <p className='text-[#0AB247] text-sm'>Successful</p> : <p className='text-[#E92D53] text-sm'>Cancelled</p>}
        </Link>
    )
}

export default SelectOrderCards