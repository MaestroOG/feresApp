import React from 'react'

const AppliedPromoCard = () => {
    return (
        <div className='bg-[#0AB247] rounded-[13px] p-4'>
            <h3 className='font-bold text-white text-lg'>25% promo for 3 rides</h3>
            <p className='text-[#FFFFFFCC] text-base'>Maximum promo ETB300</p>
            <hr className='bg-[#FFFFFF80] my-4' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <input type="checkbox" name="" id="" checked={true} />
                    <p className='text-[#FFFFFFCC] text-base'>Applied</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-white text-base font-medium'>Expiry date</h4>
                    <p className='text-sm text-[#FFFFFFCC]'>24 January 2024</p>
                </div>
            </div>
        </div>
    )
}

export default AppliedPromoCard