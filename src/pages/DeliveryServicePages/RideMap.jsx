import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import { usePost } from '../../servies/usePost'
import { useSelector } from 'react-redux'

const RideMap = () => {
    const navigate = useNavigate()
    const userDetail = useSelector((state) => state.userAuth.user)
    const [statusData, setStatusData] = useState({})
    const { post } = usePost()

    const getExpresOrderHistory = async () => {
        try {
            const response = await post('/api/admin/deg_deg_history', {
                server_token: userDetail.token,
                user_id: userDetail.user_id
            })
            setStatusData(response.orderHistory[0])
        } catch (error) {
            console.error("Error fetching order history:", error)
        }
    }

    useEffect(() => {
        // Initial API call
        getExpresOrderHistory()

        // Set interval to call API every 5 seconds
        const interval = setInterval(() => {
            getExpresOrderHistory()
        }, 5000)

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(interval)
    }, [])

console.log(statusData,"statusDatastatusData");


    return (
        <div className='relative overflow-hidden'>
            <div className='flex items-center justify-center p-[14.5px] w-max rounded-full absolute bg-white top-6 left-4' onClick={() => navigate(-1)}>
                <img src={assets.arrow_left} alt="" className='invert' />
            </div>
            <img src={assets.map_full} alt="" onClick={() => navigate('/deliveryservice/raterider')} />
            <img src={assets.waypoint} alt="" className='absolute left-14 top-[20%]' />
            <div className='w-full bg-[#F8F8F8] min-h-[328px] rounded-t-2xl fixed bottom-0 left-0'>
                <div className='rounded-2xl bg-white min-h-[170px] w-full'>
                    <img src={assets.popup_bar} alt="" className='pt-[10px] mx-auto' />
                    <Container className={'mt-5'}>
                        {statusData.status == 1 && <h3 className='text-[#2F2F3F] text-xl font-medium'>Searching for Rider...</h3>}
                        {statusData.status == 2 && <h3 className='text-[#2F2F3F] text-xl font-medium'>Order is accepted by Rider...</h3>}
                        {statusData.status == 3 && <h3 className='text-[#2F2F3F] text-xl font-medium'>Order is picked up...</h3>}
                        {statusData.status == 4 && <h3 className='text-[#2F2F3F] text-xl font-medium'>Order is delivered...</h3>}


                        <hr className='my-5' />
                    </Container>
                    <Container className='mt-6 p-5 flex items-center justify-between' onClick={() => navigate('/riderinfo')}>
                        <div className='flex items-center gap-3'>
                            <img src={assets.jacob_jones} alt="" />
                            <div>
                                <h3 className='text-[#2F2F3F] font-medium mb-2'>{statusData.provider}</h3>
                                <p className='text-[#767578] text-sm'>Yamaha MX King</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-[10px]'>
                                <img src={assets.star} alt="" />
                                <p className='text-sm text-[#2F2F3F]'>4.5</p>
                            </div>
                            <h3 className='text-[#2F2F3F] font-medium'>HSW 4736 XK</h3>
                        </div>
                    </Container>
                </div>

                <div className='mt-[10px] bg-white rounded-t-2xl w-full px-12 py-5 flex items-center gap-[60px]'>
                    <Link to={'/cancelorder'} className='p-[18px] w-max rounded-full flex items-center justify-center bg-[#E92D53]'>
                        <img src={assets.cancel_icon} alt="" className='invert w-8 h-8 object-contain' />
                    </Link>

                    <Link to={'/messages/riderchat'} className='p-[18px] w-max rounded-full flex items-center justify-center bg-[#0AB247]'>
                        <img src={assets.message_white} alt="" className='w-8 h-8 object-contain' />
                    </Link>

                    <Link to={'/messages'} className='p-[18px] w-max rounded-full flex items-center justify-center bg-[#0AB247]'>
                        <img src={assets.call} alt="" className='invert w-8 h-8 object-contain' />
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default RideMap