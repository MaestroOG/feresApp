import React, { useContext } from 'react'
import Container from '../../Container'
import { assets } from '../../../assets/assets'
import { FeresContext } from '../../../context/FeresContext'
import { useSelector, useDispatch } from 'react-redux'
import { setVehicleSpeed } from '../../../redux/slices/deliveryLocationSlice' // Import your action

const DeliveryItemDetail = ({ isActive, services }) => {
    const { setDeliveryItemDetail } = useContext(FeresContext)
    const dispatch = useDispatch()
    const vehicleType = useSelector((state) => state.deliveryLocation.vehicleType)
    const vehicleSpeed = useSelector((state) => state.deliveryLocation.vehicleSpeed)

    const handleSelection = (item) => {
        dispatch(setVehicleSpeed(item)) // Dispatch selected item to Redux
    }

    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-[#06060626] z-30'>
            <Container className='bg-white w-full fixed bottom-0 left-0 rounded-t-2xl py-4 pb-32 transition-all'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='text-center py-4'>
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Vehicle Type</h1>
                </div>
                <hr />

                {vehicleType?.instant_delivery?.map((item) => (
                    <div
                        key={item._id}
                        onClick={() => handleSelection(item)}
                        className={`w-[398px] h-[87px] rounded-xl cursor-pointer 
                            ${vehicleSpeed?._id === item._id 
                                ? 'border border-[#0AB247] bg-[#EBF9EE]' 
                                : 'border border-[#EEEEEE]'} 
                            my-3 p-4`}
                    >
                        <div className='flex items-center gap-3'>
                            <div className='w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <h4 className='text-[#2F2F3F] text-lg font-medium'>{item?.name}</h4>
                                    <h3 className='font-bold text-[#2F2F3F]'>ETB{item?.price}</h3>
                                </div>
                                <p className='text-[#B1B1B1]'>Pickup within 30 mins, drop-off within 90 mins</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
            <Container className={'py-5 w-full fixed bottom-0 left-0 bg-white'}>
                <button
                    className='w-full p-4 rounded-full bg-[#0AB247] text-white font-medium text-lg'
                    onClick={() => setDeliveryItemDetail(false)}
                >
                    Done
                </button>
            </Container>
        </div>
    )
}

export default DeliveryItemDetail
