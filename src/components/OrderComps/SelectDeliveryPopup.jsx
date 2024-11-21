import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useDispatch } from 'react-redux'
import { setSelectedService } from '../../redux/slices/deliveryServiceSlice'
import { useSelector } from 'react-redux'

const SelectDeliveryPopup = ({ service }) => {
    const dispatch = useDispatch()
    const selectedService = useSelector((state) => state.selectedService.selectedService)
    const { selectDel, setSelectDel } = useContext(FeresContext)

    useEffect(() => {
        if (service) {
            const firstMotorbike = service.find(item => item.vehicle_name === 'Motor Bike');
            if (firstMotorbike) {
                dispatch(setSelectedService(firstMotorbike));
            }
        }
    }, [service, dispatch]);
    const handleDelRadioChange = (item) => {
        dispatch(setSelectedService(item));
    };
    return (
        <div className={`${!selectDel ? 'hidden' : ''} fixed bottom-0 w-full z-30 pt-4 pb-2 bg-white rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640]`}>
            <div className='w-full mb-3'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
            </div>
            <div className='w-max ml-auto'>
                <div className='flex items-center gap-[70px]'>
                    <h2 className='text-xl font-bold text-[#2F2F3F] text-center'>Select delivery option</h2>
                    <img src={assets.close} alt="" className='mr-3' onClick={() => setSelectDel(false)} />
                </div>
            </div>
            <hr className='my-4' />
            <div>
                {service?.map((item) => <div className='px-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={item?.image_url} alt="" className='w-6' />
                        <p className='text-[#2F2F3F] text-xl'>{item?.vehicle_name}</p>
                    </div>
                    <input type="radio" name="delivery" id="" onChange={() => handleDelRadioChange(item)} checked={selectedService?.vehicle_name.toLowerCase().replace(/\s+/g, '') === item?.vehicle_name.toLowerCase().replace(/\s+/g, '')} value={item?.vehicle_id} />
                </div>)}
            </div>
        </div>
    )
}

export default SelectDeliveryPopup