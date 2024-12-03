import React, { useContext, useEffect, useState } from 'react'
import Menu from '../components/ServiceComps/Menu'
import OrderPageNav from '../components/OrderPageComps/OrderPageNav';
import OrderCategoryBtn from '../components/OrderPageComps/OrderCategoryBtn';
import NoOrderWarn from '../components/OrderPageComps/NoOrderWarn';
import { FeresContext } from '../context/FeresContext';
import OrderCards from '../components/OrderPageComps/OrderCards';
import { usePost } from '../servies/usePost';
import { useSelector } from 'react-redux';

const OrderPage = () => {
    const { orderCat } = useContext(FeresContext)
    const [history, setHistory] = useState(null)
    const { post, loading, error } = usePost();
    const user = useSelector(state => state.userAuth.user)

    const getOrderHistory = async () => {
        try {
            const data = await post('/api/user/order_history', {
                "start_date": "",
                "end_date": "",
                "user_id": "674194cbba82cd9b9b72d4ea",
                "server_token": user?.token,
                "type": 1
            })

            setHistory(data)
            console.log(history)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getOrderHistory()
    }, [])
    return (
        <div className='h-screen pb-24'>
            <OrderPageNav />
            <div className='px-2 mt-5'>
                <OrderCategoryBtn />
            </div>
            {/* <NoOrderWarn orderCat={orderCat} /> */}
            <div className='mt-12' style={{
                paddingBottom: '40px'
            }}>
                {
                    loading && <div>Loading...</div>
                }
                {
                    error && <div>An Error Occured</div>
                }
                {
                    history && history?.success && history?.order_list.map((order, index) => (
                        <OrderCards order={order} key={index} />
                    ))
                }
            </div>
            <Menu />
        </div>
    )
}

export default OrderPage