import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import Container from '../../Container'
import { FeresContext } from '../../../context/FeresContext'
import { useSelector, useDispatch } from 'react-redux'
import { setVehicleType } from '../../../redux/slices/deliveryLocationSlice' // Import your action

const VehicleTypePopup = ({ services }) => {
    const { setVehicleTypePopup } = useContext(FeresContext)
    const dispatch = useDispatch()
    const vehicleType = useSelector((state) => state.deliveryLocation.vehicleType)

    const handleSelection = (item) => {
        dispatch(setVehicleType(item)) // Dispatch selected item to Redux
    }

    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-[#06060626] z-30'>
            <Container className='bg-white w-full fixed bottom-0 left-0 rounded-t-2xl py-4 pb-32 transition-all'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='text-center py-4'>
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Vehicle Type</h1>
                </div>
                <hr />
                {services.map((item) => (
                    <div
                        key={item.id} // Use a unique key (assuming item.id exists)
                        onClick={() => handleSelection(item)} // Handle selection
                        className={`w-[398px] h-[87px] rounded-xl cursor-pointer
                            ${vehicleType?.id === item.id 
                                ? 'border border-[#0AB247] bg-[#EBF9EE]' 
                                : 'border border-[#EEEEEE]'} 
                            my-7 p-4`}
                    >
                        <div className='flex items-center gap-3'>
                            <img src={item?.vehicle_detail?.image_url} alt="" width={"80px"} />
                            <div className='w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <h4 className='text-[#2F2F3F] text-lg font-medium'>{item?.vehicle_name}</h4>
                                    <h3 className='font-bold text-[#2F2F3F]'>ETB{90.00}</h3>
                                </div>
                                <p className='text-[#B1B1B1]'>For small items, max 20kg</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
            <Container className={'py-5 w-full fixed bottom-0 left-0 bg-white'}>
                <button
                    className='w-full p-4 rounded-full bg-[#0AB247] text-white font-medium text-lg'
                    onClick={() => setVehicleTypePopup(false)}
                >
                    Done
                </button>
            </Container>
        </div>
    )
}

export default VehicleTypePopup
