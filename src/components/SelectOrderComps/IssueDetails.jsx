import React from 'react'
import OrderIssuesNav from './OrderIssuesNav'
import IssueDetailsBtn from './IssueDetailsBtn'
import { useSelector } from 'react-redux'

const IssueDetails = () => {
    const faqData = useSelector((state)=> state.faq.faqData)

    
    return (
        <div>
            <OrderIssuesNav />
            {/* Details */}
            <div>
                <h3 className='text-[#2F2F3F] text-2xl font-bold px-3 py-3 w-[85%] mt-3'>{faqData?.question}</h3>
                <p className='text-[#646464] px-3 py-1 mt-3'>{faqData?.answer}</p>
            </div>
            <IssueDetailsBtn />
        </div>
    )
}

export default IssueDetails