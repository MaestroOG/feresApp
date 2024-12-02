import React, { useEffect, useState } from 'react'
import OrderIssuesNav from './OrderIssuesNav'
import { assets } from '../../assets/assets'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { usePost } from '../../servies/usePost'
import { useDispatch } from 'react-redux'
import { setFaqData } from '../../redux/slices/faqSlice'



const OrderIssues = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()
    const {post} = usePost()
    const [ subFaqs , setSubFaqs ] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await post('/api/get_sub_faqs_by_question_id', {faq_id : id })
            setSubFaqs(response.subQuestions);   
        }
        if(id){
            fetchData()
        }
    },[id])

    const handleMoveToDetail = (item)=>{
        console.log(item,"faq response ");
        
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
                {subFaqs?.map((item)=> <><div className='flex items-center justify-between py-4' onClick={()=>handleMoveToDetail(item)}>
                        <p className='text-[#2F2F3F]'>{item?.question}</p>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                    <hr className='my-2' /></> )}
                </div>
            </div>
        </div>
    )
}

export default OrderIssues