import React from 'react'
import DiscountNav from '../components/GetDiscountComps/DiscountNav'
import DiscountOptions from '../components/GetDiscountComps/DiscountOptions'
import DiscountApplyBtn from '../components/GetDiscountComps/DiscountApplyBtn'

const GetDiscount = () => {
    return (
        <div className='px-4'>
            <DiscountNav />
            <DiscountOptions />
            <DiscountApplyBtn />
        </div>
    )
}

export default GetDiscount