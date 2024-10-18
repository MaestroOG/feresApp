import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'

const SelectViewPopUp = () => {
    const { setSelectView } = useContext(FeresContext)
    return (
        <div className='fixed top-0 left-0 bg-[#06060626] h-screen w-full'>
            <div className='fixed bottom-0 left-0 w-full bg-white rounded-tr-[13px] rounded-tl-[13px] py-5'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                {/* Top */}
                <div className='flex items-center gap-[27vw] justify-end pr-4 mt-3'>
                    <h3 className='text-[#2F2F3F] text-xl font-bold'>Select view</h3>
                    <img src={assets.close} alt="" onClick={() => setSelectView(false)} />
                </div>
                <hr className='my-4' />
                <Link to={'/profile/promotions'} className='flex items-center gap-3 mb-5 px-3 mt-3' onClick={() => setSelectView(false)}>
                    <img src={assets.promotion_sticker} alt="" />
                    <h3 className='text-[#2F2F3F] text-xl'>Promotions</h3>
                </Link>
                <Link to={'/profile/promotions/applied'} className='flex items-center gap-3 mb-5 px-3' onClick={() => setSelectView(false)}>
                    <img src={assets.discount_tag_02} alt="" />
                    <h3 className='text-[#2F2F3F] text-xl'>Applied promotion</h3>
                </Link>
            </div>
        </div>
    )
}

export default SelectViewPopUp