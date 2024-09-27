import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const SelectRide = () => {
    const { setSelectDel } = useContext(FeresContext)
    return (
        <div className='px-4 mt-9 flex items-center justify-between'>
            <div>
                <div className='flex items-center gap-1 mb-[2px]'>
                    <img src={assets.scooter_02} alt="" />
                    <p className='text-base text-[#2F2F3F]'>Motor bike</p>
                </div>
                <p className='text-[#767578CC] font-medium text-[13px]'>Deliver now</p>
            </div>
            <h4 className='font-medium text-base text-[#0AB247]' onClick={() => setSelectDel(true)}>Select options</h4>
        </div>
    )
}

export default SelectRide