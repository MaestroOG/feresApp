import React, { useEffect, useState } from 'react'
import OrderIssuesNav from '../components/SelectOrderComps/OrderIssuesNav'
import { assets } from '../assets/assets'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { usePost } from '../servies/usePost'
import { useDispatch } from 'react-redux'
import { setFaqData } from '../redux/slices/faqSlice'



const OrderIssuesData = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {post} = usePost()
    const [ faqs , setFaqs ] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await post('/api/get_all_faqs', {
                type: 1,
                store_id:""
            })
console.log(response,"responseresponseresponse");

            setFaqs(response.faqs_list);   
        }

        fetchData()
    },[])

    const handleMoveToDetail = (item)=>{

        dispatch(setFaqData(item))
        navigate('/support/selectorder/orderissues/orderdetails')
    
    }

    return (
        <div>
            <OrderIssuesNav />
            {/* Details Options */}
            <div className='px-3'>
                <div className='py-6'>
                    <p className='text-[#9D9D9D]'>Browse usual trip-related issues and reach out to our help team below.</p>
                </div>

                {/* Options */}
                <div>
                {faqs?.map((item)=> <><div className='flex items-center justify-between py-4' onClick={()=>handleMoveToDetail(item)}>
                        <p className='text-[#2F2F3F]'>{item?.question}</p>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                    <hr className='my-2' /></> )}
                </div>
            </div>
        </div>
    )
}

export default OrderIssuesData