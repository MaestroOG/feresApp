import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'
import TotalBill from '../../components/OrderComps/TotalBill'

const ReviewPayPopup = ({ onCancelClick, onNotNowClick, onPayClick, isDelivery = true }) => {
    const [number, setNumber] = useState("")
    return (
        <div className='bg-[#06060626] h-screen fixed top-0 left-0 w-full z-50'>
            <div className='fixed bottom-0 left-0 w-full bg-white rounded-t-xl overflow-y-auto pb-28 min-h-[584px]'>
                <div className='flex items-center gap-[25vw] mt-5'>
                    <img src={assets.cancel_icon} alt="" className='pl-[10px]' onClick={onCancelClick} />
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Review and pay</h1>
                </div>
                <Container className={'mt-6'}>
                    <div className='flex items-center gap-3 mt-4'>
                        <Link to={'/deliveryservice/deliverydetails/senderdetails/updatephone/selectphonecountry'} className='w-[129px] h-[58px] p-2 rounded-xl bg-[#F8F8F8] flex items-center justify-between'>
                            <img src={assets.country_flag} alt="" />
                            <p className='font-medium text-[#2F2F3F]'>+44</p>
                            <img src={assets.arrow_down} alt="" />
                        </Link>
                        <div className='h-[58px] rounded-xl py-2 px-5 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] flex items-center justify-between transition-all'>
                            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className='w-full bg-transparent outline-none h-full' />
                            {number.length > 0 && <img src={assets.close} alt="" onClick={() => setNumber("")} />}
                        </div>
                    </div>
                </Container>

                <Container>
                    <Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8]'>
                        <select className='text-[#767578] w-full bg-transparent'>
                            <option value="Select ebirr account">Select ebirr account</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        {/* <img src={assets.arrow_down} alt="" /> */}
                    </Container>
                </Container>

                <Container>
                    <Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all rounded-xl'>
                        <input type="password" placeholder='Enter your pin' className='bg-transparent outline-none w-full' />
                    </Container>
                </Container>


                <Container>
                    <Container className={`mt-6 border border-[#EEEEEE] rounded-xl p-5 flex items-center ${isDelivery && 'justify-between'}`}>
                        {isDelivery ? <>
                            <div className='flex items-center gap-3'>
                                <img src={assets.jacob_jones} alt="" />
                                <div>
                                    <h3 className='text-[#2F2F3F] font-medium mb-2'>Jacob Jones</h3>
                                    <p className='text-[#767578] text-sm'>22 Feb, 2024 15:50 PM</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#767578] text-sm mb-2'>Amount</p>
                                <h3 className='text-[#2F2F3F] font-medium'>ETB 40</h3>
                            </div>
                        </> : <>
                            <div className='w-full'>
                                <div className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <img src={assets.kfc_logo} alt="" />
                                        <h2>KFC Eastlight</h2>
                                    </div>
                                    <div>
                                        <p className='text-[#767578] text-sm mb-2'>Amount</p>
                                        <h3 className='text-[#2F2F3F] font-medium'>ETB 40</h3>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-[#767578]'>Subtotal</h3>
                                    <p className='text-[#2F2F3F] font-medium text-base'>ETB280</p>
                                </div>
                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-[#767578]'>Delivery Fee</h3>
                                        <img src={assets.information_circle} alt="" />
                                    </div>
                                    <p className='text-[#2F2F3F] font-medium text-base'>ETB20</p>
                                </div>

                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-[#767578]'>Service Fee</h3>
                                        <img src={assets.information_circle} alt="" />
                                    </div>
                                    <p className='text-[#2F2F3F] font-medium text-base'>ETB10</p>
                                </div>

                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-[#767578]'>Rider Tip</h3>
                                        <img src={assets.information_circle} alt="" />
                                    </div>
                                    <p className='text-[#2F2F3F] font-medium text-base'>ETB 50</p>
                                </div>
                            </div>
                        </>}
                    </Container>
                </Container>

                <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white flex items-center justify-between gap-5'}>
                    <button className='w-1/2 rounded-full bg-[#EBF9EE] p-4 flex items-center gap-4 justify-center' onClick={onNotNowClick}>
                        <p className='text-[#0AB247] text-lg font-bold'>Not now</p>
                    </button>
                    <button className='w-1/2 rounded-full bg-[#0AB247] p-4 flex items-center gap-4 justify-center' onClick={onPayClick}>
                        <p className='text-white text-lg font-bold'>Pay now</p>
                    </button>
                </Container>
            </div>
        </div>
    )
}

export default ReviewPayPopup