import React, { useEffect, useState } from 'react'
import HelpSupportNav from '../components/HelpSupportComps/HelpSupportNav'
import HelpSupportMain from '../components/HelpSupportComps/HelpSupportMain'
import { usePost } from '../servies/usePost'

const Support = () => {
    const {post } = usePost()
    const [faqs, setFaqs] = useState([])

    useEffect(()=>{
        const fetchFaqs =async ()=>{
            const response =await post('/api/get_all_faqs', { type : 0 })
            setFaqs(response.faqs_list);
            
        }

        fetchFaqs()
    },[])


    return (
        <div>
            <HelpSupportNav />
            <HelpSupportMain faqs={faqs}/>
        </div>
    )
}

export default Support