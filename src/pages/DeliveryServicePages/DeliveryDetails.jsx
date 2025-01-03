import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Container from '../../components/Container'
import DeliveryDetailsCard from '../../components/DeliveryServiceComps/DeliveryDetailsCard'
import VehicleTypePopup from '../../components/DeliveryServiceComps/DeliveryDetailsComps/VehicleTypePopup'
import { FeresContext } from '../../context/FeresContext'
import DeliveryItemDetail from '../../components/DeliveryServiceComps/DeliveryDetailsComps/DeliveryItemDetail'

const DeliveryDetails = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState("Royal Ln. Mesa, New Jersey 45463")
    const { vehicleTypePopup, setVehicleTypePopup, deliveryPayment, discountOpt } = useContext(FeresContext)
    const { deliveryItemDetail, setDeliveryItemDetail } = useContext(FeresContext)
    // console.log(deliveryPayment)
    return (
        <>
            <div className={`bg-[#F8F8F8] pb-[158px] sticky top-0 left-0 z-30 ${vehicleTypePopup || deliveryItemDetail && 'blur-sm'}`}>
                <Container className={'py-5 flex items-center justify-between bg-white'}>
                    <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Enter destination</h1>
                    <img src={assets.share} alt="" className='invert' />
                </Container>
                <Container className={'flex items-center justify-between pt-7 shadow pb-4 bg-white rounded-b-2xl'}>
                    <div className='flex flex-col items-center gap-1'>
                        <img src={assets.location_blue} alt="" />
                        <hr className='bg-[#4867D780] h-[56px] w-[2px]' />
                        <img src={assets.location_01} alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <Link to={'/deliveryservice/deliverydetails/senderdetails'} className='w-[305px] h-[60px] bg-[#F8F8F8] py-2 px-5'>
                            <input type="text" placeholder='Elgin St. Celina, Delaware 10299' className='w-full rounded-xl border-none outline-none bg-transparent' />
                            <p className='text-sm text-[#B1B1B1]'>Abraham John • +44 9024677034</p>
                        </Link>
                        <Link to={'/deliveryservice/deliverydetails/recepientdetails'} className='h-[60px] w-[305px] focus-within:border focus-within:border-[#0AB247] focus-within:bg-white bg-[#F8F8F8] rounded-xl py-2 px-5 flex items-center justify-between'>
                            <div className='w-full'>
                                <input type="text" placeholder='Elgin St. Celina, Delaware 10299' className='w-full bg-transparent outline-none transition-all' value={location} onChange={(e) => setLocation(e.target.value)} />
                                <p className='text-sm text-[#0AB247]'>Add recipient details</p>
                            </div>
                        </Link>
                    </div>
                    <img src={assets.add_button} alt="" />
                </Container>
                <Container className={'bg-white mt-5 py-5 rounded-lg'}>
                    <DeliveryDetailsCard isPriority={true} img={assets.bike_character} name={"Instant"} desc={"Pickup within 30mins, drop-off within 90..."} onClick={() => setDeliveryItemDetail(true)} />
                    <DeliveryDetailsCard img={assets.motor_bike} name={"Motor bike"} desc={"Recommended based on your iteam"} onClick={() => setVehicleTypePopup(true)} />
                    <Link to={'/deliveryservice/deliveryitemdetails'}>
                        <DeliveryDetailsCard img={assets.package_01} name={"Item details"} desc={"Add your item details"} isLast={true} />
                    </Link>
                </Container>

                {/* Info */}
                <Container className={'bg-white mt-5 py-5 rounded-lg'}>
                    <Link to={'/deliveryservice/deliverydetails/selectpayment'} className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img src={assets.wallet_01} alt="" />
                            <p className='font-medium text-[#2F2F3F]'>Payment methods</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            {deliveryPayment === 'ebirr' && <div className='flex items-center gap-2'>
                                <img src={assets.ebirr_sticker} alt="" className='w-8 h-6 object-contain' />
                                <p className='text-[#2F2F3F] text-sm font-medium'>E-birr</p>
                            </div>}

                            {deliveryPayment === 'cash' && <div className='flex items-center gap-2'>
                                <img src={assets.cash_sticker} alt="" className='w-8 h-6 object-contain' />
                                <p className='text-[#2F2F3F] text-sm font-medium'>Cash</p>
                            </div>}

                            {deliveryPayment === 'kaafi' && <div className='flex items-center gap-2'>
                                <img src={assets.kaafi} alt="" className='w-8 h-6 object-contain' />
                                <p className='text-[#2F2F3F] text-sm font-medium'>Kaafi</p>
                            </div>}

                            {deliveryPayment === 'visa' && <div className='flex items-center gap-2'>
                                <img src={assets.visa_sticker} alt="" className='w-8 h-6 object-contain' />
                                <p className='text-[#2F2F3F] text-sm font-medium'>Visa</p>
                            </div>}

                            {deliveryPayment === 'master' && <div className='flex items-center gap-2'>
                                <img src={assets.mastercard} alt="" className='w-8 h-6 object-contain' />
                                <p className='text-[#2F2F3F] text-sm font-medium'>MasterCard</p>
                            </div>}
                            <img src={assets.arrow_right} alt="" />
                        </div>
                    </Link>
                    <hr className='my-4' />
                    <Link to={'/deliveryservice/deliverydetails/deliverydiscounts'} className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img src={assets.discount} alt="" />
                            <p className='font-medium text-[#2F2F3F]'>Get discounts</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            {discountOpt && <div className='text-white p-[10px] flex items-center justify-center bg-[#0AB247] rounded-full text-xs font-medium'>Discounts 30%</div>}
                            <img src={assets.arrow_right} alt="" />
                        </div>
                    </Link>
                </Container>

                {/* Confirm Sections */}
                <Container className={'bg-white mt-5 py-5 rounded-lg w-full fixed bottom-0 left-0 rounded-t-lg'}>
                    <div className='flex items-center justify-between my-4'>
                        <h3 className='text-[#2F2F3F] text-lg'>Total</h3>
                        <p className='text-[#2F2F3F] text-xl font-bold'>ETB90.00</p>
                    </div>
                    <button className='w-full rounded-full bg-[#0AB247] p-4 text-white text-lg font-medium' onClick={() => navigate('/deliveryservice/reviewdeliveryorder')}>Review order</button>
                </Container>
            </div>
            {vehicleTypePopup && <VehicleTypePopup isActive={true} />}
            {deliveryItemDetail && <DeliveryItemDetail isActive={true} />}
        </>
    )
}

export default DeliveryDetails