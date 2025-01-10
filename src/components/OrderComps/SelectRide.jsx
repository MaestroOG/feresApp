import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'

const SelectRide = () => {
    const selectedService = useSelector((state) => state.selectedService.selectedService)
    const { setSelectDel } = useContext(FeresContext)
    return (
        <div className='px-4 pt-9 flex items-center justify-between bg-white rounded-t-[20px]' onClick={() => setSelectDel(true)}>
            <div>
                <div className='flex items-center gap-1 mb-[2px]'>
                    <img src={selectedService?.image_url} alt="" width={'24px'} />
                    {!selectedService && <Spinner />}
                    <p className='text-base text-[#2F2F3F]'>{selectedService?.vehicle_name}</p>
                </div>
                <p className='text-[#767578CC] font-medium text-[13px]'>Deliver now</p>
            </div>
            <h4 className='font-medium text-base text-[#0AB247]'>Select options</h4>
        </div>
    )
}

export default SelectRide