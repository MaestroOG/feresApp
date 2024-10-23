import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const SaveMoneyPopUp = () => {
    const { setSmValue, setSmPop } = useContext(FeresContext)
    return (
        <div className='fixed bottom-0 w-full rounded-3xl bg-white py-4 z-30'>
            <div className='w-full'>
                <img src={assets.save_money_img} alt="" className='mx-auto' />
            </div>
            <div className='px-4'>
                <h2 className='text-[#2F2F3F] text-xl font-bold mt-3'>Use feres keeper to save money</h2>
                <p className='text-[#767578] text-sm w-[90%] mt-1'>If I you are not rushing to get your item, take advantage of a discounted price.</p>
            </div>
            <div className='flex flex-col gap-4 mt-3 pb-3'>
                <button className='bg-[#0AB247] text-white w-[95%] mx-auto rounded-full py-[16px] text-lg font-medium' onClick={() => {
                    setSmPop(false)
                    setSmValue('90 mins')
                }}>Select feres keeper 90 min</button>
                <button className='text-[#0AB247] bg-[#F2FDF8] w-[95%] mx-auto rounded-full py-[16px] text-lg font-medium' onClick={() => {
                    setSmPop(false)
                    setSmValue('30 mins')
                }}>Stay with normal (30 min)</button>
            </div>
        </div>
    )
}

export default SaveMoneyPopUp