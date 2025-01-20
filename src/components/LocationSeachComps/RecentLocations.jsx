import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDestination } from '../../redux/slices/deliveryLocationSlice'

export const RecentLocations = ({ item, onClick ,id}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <div className='px-4 mt-6 flex items-center gap-4' onClick={() => {
                localStorage.setItem("currentAddress", item?.description)
                dispatch(setDestination(item))
                id == 0 ? navigate('/deliveryservice') : navigate('/')
            }}>
                <div>
                    <img src={assets.location_black} alt="" />
                </div>
                <div>
                    <h3 className='text-[#2F2F3F] text-lg'>{item?.description}</h3>
                    <p className='text-[#75777C] text-sm mt-[2px]'>{item?.description}</p>
                </div>
            </div>
            <hr className='mt-3' />
        </>
    )
}
