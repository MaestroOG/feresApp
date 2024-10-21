import React from 'react'
import OrderIssuesNav from './OrderIssuesNav'
import IssueDetailsBtn from './IssueDetailsBtn'

const IssueDetails = () => {
    return (
        <div>
            <OrderIssuesNav />
            {/* Details */}
            <div>
                <h3 className='text-[#2F2F3F] text-2xl font-bold px-3 py-3 w-[85%] mt-3'>I was charged twice for the same trip</h3>
                <p className='text-[#646464] px-3 py-1 mt-3'>Lorem ipsum dolor sit amet consectetur. Id amet suspendisse etiam suscipit dui. Feugiat diam ut urna amet feugiat sem ultricies. A etiam ut lobortis tincidunt quis aliquet molestie sed lectus etiam suscipit dui. Feugiat diam ut urna amet feugiat</p>
                <p className='text-[#646464] px-3 py-1 mt-3'>Lorem ipsum dolor sit amet consectetur. Id amet suspendisse etiam suscipit dui. Feugiat diam ut urna amet feugiat sem ultricies. A etiam ut lobortis tincidunt quis aliquet molestie sed lectus etiam suscipit dui. Feugiat diam ut urna amet feugiat</p>
            </div>
            <IssueDetailsBtn />
        </div>
    )
}

export default IssueDetails