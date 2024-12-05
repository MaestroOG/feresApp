import React, { useEffect, useState } from 'react'
import SupportNav from '../components/SupportComps/SupportNav'
import BlockBtn from '../components/SupportComps/BlockBtn'
import SupportLinks from '../components/SupportComps/SupportLinks'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../servies/usePost'
import { useDispatch, useSelector } from 'react-redux'
import { setFaqData } from '../redux/slices/faqSlice'

const RestaurantSupport = () => {
    const navigate = useNavigate();
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const dispatch = useDispatch()
    const {post} = usePost()
    const [ faqs , setFaqs ] = useState([])

    useEffect(()=>{
        const fetchData = async (store_id)=>{
            const response = await post('/api/get_all_faqs', {
                store_id: "62778c74080197da749b5f1f",
                type: 0
            })


            setFaqs(response.faqs_list);   
        }
if(selectedResturant.store._id){
    fetchData(selectedResturant.store._id)
}
    },[selectedResturant])

const handleResturantFaq = (item)=>{
    dispatch(setFaqData(item))
    navigate('/restaurantsupport/aboutrestaurant')
}

    return (
        <div className='p-6 w-full'>
            <SupportNav />
            <div className='mt-10'>
                <h2 className='text-[#2F2F3F] font-medium text-xl mb-4'>Get help with the restaurant menu</h2>
                <BlockBtn />
            </div>
            <div className='mt-6'>
                <h4 className='text-[#2F2F3F] text-base font-extrabold'>How can we help you?</h4>
                {faqs.map((item)=> <SupportLinks text={item?.question} key={item?._id} onClick={()=>handleResturantFaq(item)} />)}
            </div>
        </div>
    )
}

export default RestaurantSupport