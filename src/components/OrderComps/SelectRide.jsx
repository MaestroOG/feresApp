import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const SelectRide = () => {
    const { setSelectDel, delRadio } = useContext(FeresContext)
    return (
        <div className='px-4 mt-9 flex items-center justify-between' onClick={() => setSelectDel(true)}>
            <div>
                <div className='flex items-center gap-1 mb-[2px]'>
                    <img src={delRadio === 'bike' ? assets.scooter_02 : delRadio === 'truck' ? assets.delivery_truck_02 : delRadio === 'courier' ? assets.user_full_view : null} alt="" />
                    <p className='text-base text-[#2F2F3F]'>{delRadio === 'bike' ? "Motor bike" : delRadio === 'truck' ? "Delivery Truck" : delRadio === 'courier' ? "Courier" : null}</p>
                </div>
                <p className='text-[#767578CC] font-medium text-[13px]'>Deliver now</p>
            </div>
            <h4 className='font-medium text-base text-[#0AB247]'>Select options</h4>
        </div>
    )
}

export default SelectRide