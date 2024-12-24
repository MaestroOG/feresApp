import React, { useEffect, useState } from 'react'
import SelectOrderNav from '../components/SelectOrderComps/SelectOrderNav'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import SelectOrderCards from '../components/SelectOrderComps/SelectOrderCards'
import { useSelector } from 'react-redux'
import { usePost } from '../servies/usePost'
import Spinner from '../components/Spinner'

const SelectOrder = () => {
    const navigate = useNavigate();
    const userDetail = useSelector((state) => state.userAuth.user)
    const [history, setHistory] = useState([])
    const { post, loading } = usePost()

    function formatDate(isoString) {
        const date = new Date(isoString);
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    useEffect(() => {

        const fetchHistory = async (id, token) => {
            const response = await post('/api/user/order_history', {
                start_date: "",
                end_date: "",
                user_id: id,
                server_token: token,
                type: 1
            }
            )

            setHistory(response.order_list);

        }

        if (userDetail.user_id && userDetail.token) {
            fetchHistory(userDetail.user_id, userDetail.token)
        }
    }, [])

    return (
        <div>
            <SelectOrderNav />
            {/* Timeline */}
            <div>
                <h1 className='text-[#2F2F3F] text-lg font-medium px-3 my-7'>{`${new Date().getDate()}-${new Date().getUTCMonth()}-${new Date().getFullYear()}`}</h1>
                {loading && <Spinner />}
                {history?.map((item) => <SelectOrderCards img={assets.pie} name={item?.store_detail?.name} desc={formatDate(item?.created_at)} successStat={true} key={item._id} />)}
            </div>
        </div>
    )
}

export default SelectOrder