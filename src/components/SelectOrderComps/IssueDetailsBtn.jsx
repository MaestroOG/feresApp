import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const IssueDetailsBtn = () => {
    const [isHelpful, setIsHelpful] = useState(0)
    const navigate = useNavigate();
    return (
        <div className='fixed bottom-0 left-0 w-full p-3'>
            <h2 className='text-[#2F2F3F] text-lg font-bold text-center my-2'>Was this helpful?</h2>
            {isHelpful === 0 ? <><button className='bg-[#0AB247] rounded-full p-4 text-white text-lg font-medium w-full my-2' onClick={() => setIsHelpful(1)}>Yes, I got my answer</button>
                <button onClick={() => setIsHelpful(2)} className='bg-transparent border border-[#0AB247] rounded-full p-4 text-[#0AB247] text-lg font-medium w-full my-2'>No, add more information</button></> :
                isHelpful === 1 ? <div className='flex items-center justify-center gap-3'>
                    <img src={assets.thumbs_up_green} alt="" />
                    <p className='text-[#2F2F3F] text-lg font-bold'>Thank you for your feedback</p>
                </div> : isHelpful === 2 ? <div>
                    <p className='text-[#2F2F3F] text-center my-2'>We apologize for the inconvenience and would appreciate it if you could reach out to us.</p>
                    <button className='bg-[#0AB247] rounded-full p-4 text-white text-lg font-medium w-full my-2' onClick={() => navigate('/support/selectorder/orderissues/orderdetails/sendmessage')}>Chat with us</button>
                    <button onClick={() => setIsHelpful(0)} className='bg-transparent border border-[#0AB247] rounded-full p-4 text-[#0AB247] text-lg font-medium w-full my-2'>No thank you</button>
                </div> : null}


        </div>
    )
}

export default IssueDetailsBtn