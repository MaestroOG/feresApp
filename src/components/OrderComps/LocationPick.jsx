import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const LocationPick = () => {

    const { riderNote, setRiderNote } = useContext(FeresContext)

    return (
        <div className='px-4 rounded-[13px]'>
            <div className='relative'>
                <img src={assets.map_2} alt="" />
                <img src={assets.location_dot_2} alt="" className='absolute top-[20%] left-[30%]' />
            </div>
            <div className='w-full mt-4 flex flex-col gap-3 pb-5'>
                <input type="number" placeholder='Apt./office/floor/postal code' className='bg-[#F8F8F8] w-full py-[10px] px-[20px] rounded-[13px] placeholder:text-[#767578] border-none outline-none' />
                <input type="text" placeholder='Add a note for the rider' className='bg-[#F8F8F8] w-full py-[10px] px-[20px] rounded-[13px] placeholder:text-[#767578] border-none outline-none' onClick={() => setRiderNote(true)} />
            </div>
        </div>
    )
}

export default LocationPick