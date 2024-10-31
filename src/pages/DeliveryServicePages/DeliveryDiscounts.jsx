import React, { useContext, useEffect } from 'react'
import Container from '../../components/Container'
import DiscountNav from '../../components/GetDiscountComps/DiscountNav'
import { FeresContext } from '../../context/FeresContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const DeliveryDiscounts = () => {
    const { discountOpt, handleDiscountChange } = useContext(FeresContext)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(discountOpt)
    }, [discountOpt])
    return (
        <Container>
            <DiscountNav />
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

            <Container className={'py-5 fixed bottom-0 left-0 w-full bg-white'} onClick={() => navigate('/deliveryservice/deliverydetails')}>
                <button className='p-4 w-full text-white text-lg font-medium rounded-full bg-[#0AB247]'>Apply</button>
            </Container>
        </Container>
    )
}

export default DeliveryDiscounts