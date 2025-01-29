import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'
import TotalBill from '../../components/OrderComps/TotalBill'
import { useSelector, useDispatch } from 'react-redux'
import { usePost } from '../../servies/usePost'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/slices/userAuthSlice'
import { FeresContext } from '../../context/FeresContext'
import axios from 'axios'



const ReviewPayPopup = ({ onCancelClick, onNotNowClick, selectedResturant, onPayClick, isDelivery = true ,destination,vehicleType,currentLocation,destinationPersonName,cost,driverNote,destinationPersonPhone }) => {
    const { post, loading, error } = usePost()
    const dispatch = useDispatch()
    const cartDetail = useSelector((state) => state.cartDetails.cartDetails)
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
  const totalDistance = useSelector((state) => state.deliveryLocation.totalDistance);
    const loginUserData = useSelector((state) => state.userAuth.user)
    const { tipBtn, setTipBtn, discount, customTip, deliveryPickup } = useContext(FeresContext)
    const userDetail = useSelector((state) => state.userAuth.user)
    const navigate = useNavigate()
    const [number, setNumber] = useState(loginUserData?.phone || "")
    const [paymentName, setPaymentName] = useState('')
    const [paymentId, setPaymentId] = useState(null)
    const [otp, setOtp] = useState('')
    const [showPayment, setShowPayment] = useState(false)
    const [accountName, setAccountName] = useState("Select ebirr account")
    const [paymentOptions, setPaymentOptions] = useState([])

    useEffect(()=>{
       const handlePaymentoption = async ()=>{
        const paymentoptions = await post('/api/admin/getPaymentOptions',{})
        setPaymentOptions(paymentoptions.payment_options)    

       }

        handlePaymentoption()
    },[])

console.log(number,"EBirr");


    const handlePayPayment = async () => {
        if(cost > 0){
            const createDeg =await axios.post('https://suuq.feres.co/api/admin/Create_Express_order',{
                sender_phone: number ,
                delivery_id: '63d614b4d7215c6c87f66885',
                description: '',
                sender_name: `${userDetail?.first_name} ${userDetail?.last_name}`,
                Destination_longitude: destination?.coordinates?.lng,
                type: '2',
                service_type_name: vehicleType?.vehicle_name ,
                pin: otp,
                destination_addresses: destination?.description,
                source_address: currentLocation?.address,
                sender_floor: '0',
                receiver_name: destinationPersonName,
                amount: cost,
                Source_longitude: currentLocation?.coordinates?.lng,
                server_token: userDetail?.token,
                receiver_floor: '0',
                sender_note_driver: driverNote,
                user_id: userDetail?.user_id,
                phone: number,
                vehicles_id: vehicleType?.vehicle_id,
                Source_latitude: currentLocation?.coordinates?.lat,
                payment_name: accountName,
                receiver_phone: destinationPersonPhone,
                receiver_note_driver: '',
                Destination_latitude: destination?.coordinates?.lat,
                city_id: vehicleType?.city_id,
                payment_mode_Cash:false,
                TotalDistance:totalDistance,
                payment_id:paymentId
                })
                navigate('/deliveryservice/ridemap')
        }else{
            const payOrder = await post('/api/user/pay_order_payment_waafi', {
                cart_unique_token: cartItemData?.cart_unique_token,
                cart_id: cartItemData?._id,
                phone: number,
                country_code: '+251',
                server_token: userDetail?.token,
                user_id: userDetail?.user_id,
                is_payment_mode_cash: false,
                is_brafo_payment_mode: true,
                payment_id: 1,
                payment_name: paymentName,
                order_payment_id: "547743944dc478124d753b54",
                pin: otp,
                country_id: cartDetail?.order_payment[0]?.country_id,
                order_type: 7,
                order_Kitchen_detail: '',
                last_address: '',
                normal_address: '',
                schedule_order_start_at: '',
                type: 0
            })
    
    
            const createOrder = await post('/api/user/create_order', {
                server_token: userDetail.token,
                user_id: cartItemData.user._id,
                cart_id: cartItemData._id,
                cart_unique_token: cartItemData.cart_unique_token,
                delivery_user_name: "",
                delivery_user_phone: "",
                is_user_pick_up_order: "",
                order_start_at: 0,
                schedule_order_start_at: ""
            })
    
            const updatedUserDetail = {
                ...userDetail,
                order_id: createOrder?.order_id,
            };
            localStorage.setItem("userData", JSON.stringify(updatedUserDetail))
            dispatch(loginUser(updatedUserDetail))
            navigate('/bookride');
            onPayClick
        }
        
    }

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
                    {cost > 0 ?
                    
                    <Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8] relative'>
                        <div className='text-[#767578] w-full bg-transparent' onClick={() => setShowPayment(prev => !prev)} onChange={(e) => { setPaymentName(e.target.value) }}>
                            <div>{accountName}</div>
                        </div>

                        {showPayment && <div className='bg-white min-h-[140px] w-[398px] rounded-[13px] border border-[#F2F4F7] absolute top-16 left-0'>
                            {paymentOptions?.map((item) => <div className='py-[10px] px-[14px] text-[#101828]' onClick={() => {
                                setAccountName(item?.name)
                                setPaymentId(item?._id)
                                setShowPayment(false)
                            }} key={item?._id}>{item?.name}</div>)}
                        </div>}
                        {/* <img src={assets.arrow_down} alt="" /> */}
                    </Container>
                    
                    :<Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8] relative'>
                        <div className='text-[#767578] w-full bg-transparent' onClick={() => setShowPayment(prev => !prev)} onChange={(e) => { setPaymentName(e.target.value) }}>
                            <div>{accountName}</div>
                        </div>

                        {showPayment && <div className='bg-white min-h-[140px] w-[398px] rounded-[13px] border border-[#F2F4F7] absolute top-16 left-0'>
                            {cartDetail?.payment_options?.map((item) => <div className='py-[10px] px-[14px] text-[#101828]' onClick={() => {
                                setAccountName(item?.name)
                                setShowPayment(false)
                            }} key={item?.merchantUid}>{item?.name}</div>)}
                        </div>}
                        {/* <img src={assets.arrow_down} alt="" /> */}
                    </Container>}
                </Container>

                <Container>
                    <Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all rounded-xl'>
                        <input type="password" value={otp} placeholder='Enter your pin' className='bg-transparent outline-none w-full' onChange={(e) => { setOtp(e.target.value) }} />
                    </Container>
                </Container>


                {!cost > 0 && <Container>
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
                                        <img src={selectedResturant?.image_url} alt="" width={'40px'} />
                                        <h2>{selectedResturant?.name}</h2>
                                    </div>
                                    <div>
                                        <p className='text-[#767578] text-sm mb-2'>Amount</p>
                                        <h3 className='text-[#2F2F3F] font-medium'>{`ETB${cartDetail && cartDetail?.order_payment[0]?.total_order_price}`}</h3>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-[#767578]'>Subtotal</h3>
                                    <p className='text-[#2F2F3F] font-medium text-base'>{`ETB ${cartDetail && cartDetail?.order_payment[0]?.total_store_income}`}</p>
                                </div>
                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-[#767578]'>Delivery Fee</h3>
                                        <img src={assets.information_circle} alt="" />
                                    </div>
                                    <p className='text-[#2F2F3F] font-medium text-base'>ETB 30</p>
                                </div>

                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-[#767578]'>Service Fee</h3>
                                        <img src={assets.information_circle} alt="" />
                                    </div>
                                    <p className='text-[#2F2F3F] font-medium text-base'>{`ETB ${cartDetail && cartDetail?.order_payment[0]?.total_service_price}`}</p>
                                </div>

                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='text-[#767578]'>Rider Tip</h3>
                                        <img src={assets.information_circle} alt="" />
                                    </div>
                                    <p className='text-[#2F2F3F] font-medium text-base'>ETB{tipBtn === '50' || tipBtn === '80' ? tipBtn : customTip}</p>
                                </div>
                            </div>
                        </>}
                    </Container>
                </Container>}

                <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white flex items-center justify-between gap-5'}>
                    <button className='w-1/2 rounded-full bg-[#EBF9EE] p-4 flex items-center gap-4 justify-center' onClick={onNotNowClick}>
                        <p className='text-[#0AB247] text-lg font-bold'>Not now</p>
                    </button>
                    <button className='w-1/2 rounded-full bg-[#0AB247] p-4 flex items-center gap-4 justify-center' onClick={handlePayPayment}>
                        <p className='text-white text-lg font-bold'>Pay now</p>
                    </button>
                </Container>
            </div>
        </div>
    )
}

export default ReviewPayPopup