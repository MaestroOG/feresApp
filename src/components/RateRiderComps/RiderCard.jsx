import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../../servies/usePost'
import { useSelector } from 'react-redux'


const RiderCard = ({ providerInfo }) => {
    const userDetail = useSelector((state) => state.userAuth.user)
    const [provider, setProvider] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { post, error } = usePost()
    console.log("userDetailuserDetailuserDetailuserDetail", userDetail);

    const fetchProvider = async () => {
        try {
            const porviderDetail = await post('/api/get_order_detail',
                {
                    // TODO: Make it dynamic
                    order_id: "6746c3ad0e3e69d36d540ed7",
                    // id: "674194cbba82cd9b9b72d4ea",
                    // server_token: "Qcy3jLI3DLqRl4esMs98p0YjxVXx8TRU",
                    type: 7,
                    // order_id: userDetail?.order_id,
                    // type: 7,
                    id: userDetail?.user_id,
                    server_token: userDetail?.token
                }
            )
            //    console.log(porviderDetail,"userDetail?.userDetail?.userDetail?.userDetail?.")
            setProvider(porviderDetail)
            setLoading(false)
            console.log(provider);


        } catch (error) {
            setError(true)
            console.error(error.message)
        }
    }

    useEffect(() => {
        fetchProvider()

        const intervalId = setInterval(fetchProvider, 5000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='border border-[#EEEEEE] rounded-[16px] flex items-center justify-between p-5 mt-5' onClick={() => navigate('/riderinfo')}>
            {loading && <div>Loading....</div>}
            {error && <div>Error fetching details</div>}
            {provider && provider?.provider_detail.length === 0 && <div>Waiting for acceptance</div>}
            {provider && provider?.provider_detail.length > 0 && <>
                <div className='flex items-center gap-2'>
                    <img src={provider?.provider_detail.image_url} alt="" width={'50px'} height={'30px'} style={{ borderRadius: '50px' }} />
                    <div>
                        <h4 className='text-[#2F2F3F] font-medium text-base mb-1'>{`${provider?.provider_detail.first_name} ${provider?.provider_detail.last_name}`}</h4>
                        {/* <p className='text-[#767578] text-sm'>Yamaha MX King</p> */}
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 justify-end mb-1'>
                        <img src={assets.star} alt="" />
                        <p>{provider?.provider_detail.user_rate}</p>
                    </div>
                    {/* <p className='text-[#2F2F3F] text-sm font-medium'>HSW 4736 XK</p> */}
                </div>
            </>}
        </div>
    )
}

export default RiderCard