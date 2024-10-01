import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const DiscountOptions = () => {
    const { discountOpt, handleDiscountChange } = useContext(FeresContext)
    return (
        <div>
            <div className='border border-[#EAEAEA] rounded-[16px] flex items-center justify-between px-4 py-4 mt-7 mb-3'>
                <div className='flex items-center gap-3'>
                    <img src={assets.user_promo} alt="" />
                    <div>
                        <h3 className='text-[#2F2F3F] font-bold text-lg'>New User Promo</h3>
                        <p className='text-[#767578] text-sm'>Only valid for new users</p>
                    </div>
                </div>
                <input type="radio" value={'newUser'} checked={discountOpt === 'newUser'} onChange={handleDiscountChange} />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] flex items-center justify-between px-4 py-4 mt-7 mb-3'>
                <div className='flex items-center gap-3'>
                    <img src={assets.discount_promo} alt="" />
                    <div>
                        <h3 className='text-[#2F2F3F] font-bold text-lg'>Discount 30% OFF</h3>
                        <p className='text-[#767578] text-sm'>30% discount on all menus</p>
                    </div>
                </div>
                <input type="radio" value={'30%'} checked={discountOpt === '30%'} onChange={handleDiscountChange} />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] flex items-center justify-between px-4 py-4 mt-7 mb-3'>
                <div className='flex items-center gap-3'>
                    <img src={assets.scooter_promo} alt="" />
                    <div>
                        <h3 className='text-[#2F2F3F] font-bold text-lg'>Free Delivery Fee</h3>
                        <p className='text-[#767578] text-sm'>Free delivery max ETB5.00</p>
                    </div>
                </div>
                <input type="radio" value={'free'} checked={discountOpt === 'free'} onChange={handleDiscountChange} />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] flex items-center justify-between px-4 py-4 mt-7 mb-3'>
                <div className='flex items-center gap-3'>
                    <img src={assets.discount_promo} alt="" />
                    <div>
                        <h3 className='text-[#2F2F3F] font-bold text-lg'>Weekend Special</h3>
                        <p className='text-[#767578] text-sm'>Valid on Saturday & Sunday</p>
                    </div>
                </div>
                <input type="radio" value={'weekend'} checked={discountOpt === 'weekend'} onChange={handleDiscountChange} />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] flex items-center justify-between px-4 py-4 mt-7 mb-3'>
                <div className='flex items-center gap-3'>
                    <img src={assets.discount_promo} alt="" />
                    <div>
                        <h3 className='text-[#2F2F3F] font-bold text-lg'>Feres Miles</h3>
                        <p className='text-[#767578] text-sm'>Redeem it and use it</p>
                    </div>
                </div>
                <input type="radio" value={'miles'} checked={discountOpt === 'miles'} onChange={handleDiscountChange} />
            </div>
        </div>
    )
}

export default DiscountOptions