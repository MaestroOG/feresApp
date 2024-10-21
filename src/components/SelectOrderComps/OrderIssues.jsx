import React from 'react'
import OrderIssuesNav from './OrderIssuesNav'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const OrderIssues = () => {
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
                    <Link to={'/support/selectorder/orderissues/orderdetails'} className='flex items-center justify-between py-4'>
                        <p className='text-[#2F2F3F]'>I was charged twice for the same trip</p>
                        <img src={assets.arrow_right} alt="" />
                    </Link>
                    <hr className='my-2' />
                    <Link to={'/support/selectorder/orderissues/orderdetails'} className='flex items-center justify-between py-4'>
                        <p className='text-[#2F2F3F]'>Issue with a cancellation fee</p>
                        <img src={assets.arrow_right} alt="" />
                    </Link>
                    <hr className='my-2' />
                    <Link to={'/support/selectorder/orderissues/orderdetails'} className='flex items-center justify-between py-4'>
                        <p className='text-[#2F2F3F]'>My driver was rude</p>
                        <img src={assets.arrow_right} alt="" />
                    </Link>
                    <hr className='my-2' />
                    <Link to={'/support/selectorder/orderissues/orderdetails'} className='flex items-center justify-between py-4'>
                        <p className='text-[#2F2F3F]'>Trip did not happen</p>
                        <img src={assets.arrow_right} alt="" />
                    </Link>
                    <hr className='my-2' />
                    <Link to={'/support/selectorder/orderissues/orderdetails'} className='flex items-center justify-between py-4'>
                        <p className='text-[#2F2F3F]'>Other</p>
                        <img src={assets.arrow_right} alt="" />
                    </Link>
                    <hr className='my-2' />
                </div>
            </div>
        </div>
    )
}

export default OrderIssues