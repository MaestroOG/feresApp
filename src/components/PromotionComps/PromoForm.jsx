import React, { useContext, useState } from 'react'
import PromotionNav from './PromotionNav'
import { FeresContext } from '../../context/FeresContext'
import SuccessPopup from '../SuccessPopup'
import { assets } from '../../assets/assets'
import SelectViewPopUp from './SelectViewPopUp'

const PromoForm = () => {
    const { selectView } = useContext(FeresContext)
    const [successPop, setSuccessPop] = useState(false)
    return (
        <div>
            <PromotionNav header={"Promotions"} />
            <div className='mt-9 px-4'>
                <input type="text" className='w-full border-none outline-none bg-[#F8F8F8] py-[16px] px-[20px] rounded-[13px] placeholder:text-base placeholder:text-[#767578]' placeholder='Enter promo code' />
                <p className='text-[#767578] text-sm mt-4'>The promo will be applied to your next trip.</p>
                <button className='bg-[#0AB247] p-4 rounded-full text-lg font-medium text-white w-full mt-5' onClick={() => setSuccessPop(true)}>Apply</button>
            </div>
            {successPop ? <SuccessPopup image={assets.success_img} title={"Enjoy 20% off your next 10 Feres rides!"} desc={"To appreciate you as one of our loyal customers, enjoy 20% discount on your next 3 Feres rides."} /> : null}
            {selectView ? <SelectViewPopUp /> : null}
        </div>
    )
}

export default PromoForm