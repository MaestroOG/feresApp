import React, { useContext, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import DeliveryDetailsCard from '../../components/DeliveryServiceComps/DeliveryDetailsCard'
import { FeresContext } from '../../context/FeresContext'
import ReviewPayPopup from './ReviewPayPopup'

const ReviewDeliveryOrder = () => {
    const { deliveryPayment, discountOpt } = useContext(FeresContext)
    const navigate = useNavigate()
    const [reviewPay, setReviewPay] = useState(false)
    return (
        <>
            <div className={`bg-[#F8F8F8] pb-[158px]`}>
                <Container className={'py-5 flex items-center justify-between bg-white sticky top-0 left-0 z-30'}>
                    <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Review order</h1>
                    <img src={assets.share} alt="" className='invert' />
                </Container>
                <Container className={'flex items-center justify-between pt-7 bg-white'}>
                    <h1 className='text-[#2F2F3F] font-medium text-lg'>Delivery Details</h1>
                    <img src={assets.add_green} alt="" />
                </Container>

                {/* Addresses */}
                <Container className={'pt-9 pb-6 rounded-xl bg-white'}>
                    <div className='flex items-start justify-between'>
                        <div className='flex items-start gap-3'>
                            <img src={assets.location_blue} alt="" />
                            <div>
                                <h3 className='text-[#2F2F3F] font-medium mb-2'>Sender</h3>
                                <p className='text-[#979797] text-sm'>Abraham John • +44 9024677034</p>
                                <p className='text-[#979797] text-sm'>Elgin St. Celina, Delaware 10299</p>
                            </div>
                        </div>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                    <hr className='my-4' />
                    <div className='flex items-start justify-between'>
                        <div className='flex items-start gap-3'>
                            <img src={assets.location_green} alt="" />
                            <div>
                                <h3 className='text-[#2F2F3F] font-medium mb-2'>Recipient 1</h3>
                                <p className='text-[#979797] text-sm'>Dianne Russell • +44 9024674567</p>
                                <p className='text-[#979797] text-sm'>Royal Ln. Mesa, New Jersey 45463</p>
                            </div>
                        </div>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                </Container>

                {/* Options */}
                <Container className={'bg-white mt-5 py-1 pb-6 rounded-lg'}>
                    <h3 className='text-[#2F2F3F] text-lg font-medium my-5'>Options</h3>
                    <DeliveryDetailsCard isPriority={true} img={assets.bike_character} name={"Instant"} desc={"Pickup within 30mins, drop-off within 90..."} />
                    <DeliveryDetailsCard img={assets.motor_bike} name={"Motor bike"} desc={"Recommended based on your iteam"} />
                    <DeliveryDetailsCard img={assets.package_01} name={"Item details"} desc={"Add your item details"} isLast={true} />
                </Container>

                {/* Info */}
                <Container className={'bg-white mt-5 py-5 rounded-lg'}>
                    <div className='flex items-center justify-between'>
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
                    </div>
                    <hr className='my-4' />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img src={assets.discount} alt="" />
                            <p className='font-medium text-[#2F2F3F]'>Get discounts</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            {discountOpt && <div className='text-white p-[10px] flex items-center justify-center bg-[#0AB247] rounded-full text-xs font-medium'>Discounts 30%</div>}
                            <img src={assets.arrow_right} alt="" />
                        </div>
                    </div>
                </Container>

                {/* Confirm Sections */}
                <Container className={'bg-white mt-5 py-5 rounded-lg w-full fixed bottom-0 left-0 rounded-t-lg'}>
                    <div className='flex items-center justify-between my-4'>
                        <h3 className='text-[#2F2F3F] text-lg'>Total</h3>
                        <p className='text-[#2F2F3F] text-xl font-bold'>ETB90.00</p>
                    </div>
                    <button className='w-full rounded-full bg-[#0AB247] p-4 text-white text-lg font-medium' onClick={() => {
                        deliveryPayment === 'ebirr' ? setReviewPay(true) : navigate('/deliveryservice/ridemap')
                    }}>Book delivery</button>
                </Container>
            </div>

            {reviewPay && <ReviewPayPopup onPayClick={() => {
                setReviewPay(false)
                navigate('/deliveryservice/ridemap')
            }} onCancelClick={() => setReviewPay(false)} onNotNowClick={() => setReviewPay(false)} />}
        </>
    )
}

export default ReviewDeliveryOrder