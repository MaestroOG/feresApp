import React, { useContext, useEffect, useState } from 'react'
import DeliveryItemNav from '../../components/DeliveryItemDetailsComps/DeliveryItemNav'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import SelectWeightPopup from '../../components/DeliveryItemDetailsComps/SelectWeightPopup'
import { FeresContext } from '../../context/FeresContext'
import UploadPhotoPopup from '../../components/DeliveryItemDetailsComps/UploadPhotoPopup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSize, setWeigth } from '../../redux/slices/deliveryLocationSlice'

const DeliveryItemDetailsPage = () => {
    const { selectWeight, setSelectWeight, weightValue, picturePop, delItemPhoto, setDelItemPhoto, setPicturePop } = useContext(FeresContext)
    const [kilos, setKilos] = useState("")
    const currentLocation = useSelector((state) => state.deliveryLocation.current);
    const destination = useSelector((state) => state.deliveryLocation.destination);
  const userDetail = useSelector((state) => state.userAuth.user);
  const vehicleType = useSelector((state) => state.deliveryLocation.vehicleType);
  const dispatch = useDispatch()

    const [activeBtn, setActiveBtn] = useState(null)
    const navigate = useNavigate();
    const [categories, setCategories] = useState(null)
    const handleActiveClick = (id,category) => {
        setActiveBtn(id)
        dispatch(setCategory(category))
    }
    const getTypes = async () => {
    const types =await axios.post("https://suuq.feres.co/api/admin/get_category_and_deliveries_list",
        {
            sourceLocation:[currentLocation?.coordinates?.lat , currentLocation?.coordinates?.lng],
            destinationLocation:[destination?.coordinates?.lat , destination?.coordinates?.lng],
            user_id:userDetail.user_id,
            server_token:userDetail.token,
            vehicles_id: vehicleType.vehicle_id,
            source_address: currentLocation.address,
            destination_addresses: destination.description
    })
    setCategories(types?.data?.degdeg_category_and_deliveries[0]?.d_type);
    

}

    useEffect(()=>{
        getTypes()
    },[])

    return (
        <>
            <div className={`pb-28 ${selectWeight || picturePop && 'blur-sm'}`}>
                <DeliveryItemNav />

                {/* Info */}

                <Container className={'mt-7'}>
                    <h3 className='text-[#767578]'>This helps your driver to handle your parcel responsibly.</h3>
                    <img src={assets.package_lg} alt="" className='my-6 mx-auto' />
                </Container>

                {/* Detail Form Starts */}
                <Container>
                    <h3 className='text-lg font-medium text-[#2F2F3F]'>Size <span className='text-lg font-normal text-[#979797]'>(optional)</span></h3>
                    <div className='bg-[#F8F8F8] h-[58px] rounded-xl py-2 px-5 flex items-center justify-between my-3' onClick={() => {setSelectWeight(true)
                    }}>
                        <p className='text-[#2F2F3F] text-lg'>{weightValue}</p>
                        <img src={assets.arrow_down} alt="" />
                    </div>
                </Container>

                <Container className={'my-7'}>
                    <h3 className='text-lg font-medium text-[#2F2F3F]'>Weight <span className='text-lg font-normal text-[#979797]'>(kg)</span></h3>
                    <div className={`bg-[#F8F8F8] h-[58px] rounded-xl py-2 px-5 flex items-center justify-between my-3 focus-within:bg-white focus-within:border ${kilos.length === 0 ? 'focus-within:border-[#E92D53]' : 'focus-within:border-[#0AB247]'} ${Number(kilos) > 50 ? 'focus-within:border-[#E92D53]' : 'focus-within:border-[#0AB247]'} transition-all peer`}>
                        <input type="number" inputMode='numeric' value={kilos} onChange={(e) => {setKilos(e.target.value)
                            dispatch(setWeigth(e.target.value))
                        }} placeholder='Enter your item weight' className='placeholder:text-[#767578] text-lg bg-transparent outline-none' />
                        <p className='text-[#2F2F3F] font-medium'>KG</p>
                    </div>
                    <p className='text-sm text-[#E92D53] text-right mt-3 hidden peer-focus-within:block'>{Number(kilos) > 50 ? 'Max. 50kg' : 'Required'}</p>
                </Container>
                <Container>
                    <Container onClick={() => setPicturePop(true)} className={' h-[163px] rounded-xl border border-[#EEEEEE] flex items-center justify-center flex-col mx-auto gap-1'}>
                        <div className='p-3 rounded-full bg-[#F4FFF8] flex items-center justify-center'>
                            <img src={assets.image_add_01} alt="" />
                        </div>
                        <h4 className='text-[#2F2F3F] font-medium'>Upload photo</h4>
                        <p className='text-[#B1B1B1] text-sm'>(Optional)</p>
                    </Container>
                </Container>
                <Container className={'my-4'}>
                    {delItemPhoto && <Container className={'border border-[#EEEEEE] rounded-xl p-3 flex items-center justify-between'}>
                        <div className='flex items-center gap-2'>
                            <img src={delItemPhoto.preview} alt="" className='w-9 h-9 rounded' />
                            <div>
                                <h3 className='text-[#2F2F3F] text-sm font-medium'>{delItemPhoto?.name.slice(0, 21)}</h3>
                                <p className='text-[#B1B1B1] text-xs'>{delItemPhoto?.size}</p>
                            </div>
                        </div>
                        <div className='p-3 bg-[#E92D530D] rounded-full flex items-center justify-center'>
                            <img src={assets.delete_red} alt="" onClick={() => {setDelItemPhoto(null)}} />
                        </div>
                    </Container>}
                </Container>

                <Container className={'my-7'}>
                    <h3 className='text-lg font-medium text-[#2F2F3F] mb-5'>Item type <span className='text-lg font-normal text-[#979797]'>(optional)</span></h3>
                    <div className='grid grid-cols-3 gap-x-8 gap-y-5'>
                        {categories?.map((category, index) => (
                            <div key={index} onClick={() => handleActiveClick(index,category?.deliveries_name)} className={`${activeBtn === index ? 'bg-[#0AB247]' : 'bg-[#F4FFF8]'} max-w-[110px] h-[73px] rounded-xl p-[10px] flex items-center justify-center flex-col gap-1`}>
                                <img src={category?.featured_image} alt="" width={'30px'}/>
                                <p className={`${activeBtn === index ? 'text-white' : 'text-[#0AB247]'} font-medium`}>{category?.deliveries_name}</p>
                            </div>
                        ))}
                    </div>
                </Container>


                <Container className={'py-5 bg-white w-full fixed bottom-0 left-0'}>
                    <button className='text-lg text-white font-medium w-full rounded-full p-4 bg-[#0AB247]' onClick={() => navigate('/deliveryservice/deliverydetails')}>Confirm</button>
                </Container>
            </div>
            {selectWeight && <SelectWeightPopup />}
            {picturePop && <UploadPhotoPopup />}
        </>
    )
}

export default DeliveryItemDetailsPage