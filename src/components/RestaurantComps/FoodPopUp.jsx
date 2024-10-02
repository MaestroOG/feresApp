import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { FoodOptionCb } from '../FoodComps/FoodOptionCb'

const FoodPopUp = ({ img, text }) => {
    const [orderNum, setOrderNum] = useState(1)
    const { foodPopup, setFoodPopup } = useContext(FeresContext)
    return (
        <div className={`${foodPopup ? '' : 'hidden'} fixed bottom-0 left-0 right-0 z-50 bg-white`}>
            <div className='relative'>
                <img src={img} alt="" className='z-50 rounded-tr-3xl rounded-tl-3xl' />
                <img src={assets.cancel_icon} alt="" className='absolute right-[3%] top-[7%] bg-white rounded-full' onClick={() =>
                    setFoodPopup(false)
                } />
            </div>
            <div className='bg-white px-4 py-4 rounded-tr-[16px] rounded-tl-[16px]'>
                <h2 className='text-[#2F2F3F] text-xl font-bold mb-2'>{text}</h2>
                <p className='text-[#767578] text-base'>Lorem ipsum dolor sit amet consectetur. Bibendum est urna eget tortor id tincidunt. Euismod vel faucibus dolor ac mus vel tempus sit bibendum.</p>
                <div className='flex items-center gap-2 mt-3'>
                    <p className='text-[#9E9E9E] line-through text-base'>ETB 170</p>
                    <p className='text-[#0AB247] font-bold text-base'>ETB 140</p>
                </div>
                <p className='text-[#C4C4C4] mt-6 mb-5 text-base'>Add a note</p>
                <div className='flex items-center w-full justify-between'>
                    <button className='border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]'>
                        <img src={assets.minus_sign} alt="" onClick={() => {
                            if (orderNum > 0) setOrderNum(orderNum - 1)
                        }} />
                        <p>{orderNum}</p>
                        <img src={assets.plus_sign} alt="" onClick={() => setOrderNum(orderNum + 1)} />
                    </button>
                    <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]'>Add EBT 140</button>
                </div>
            </div>
            {/* <div className={`bg-white mb-4 rounded-3xl`}>
                <div className='flex items-center gap-2 px-4 py-2 mt-2 rounded-2xl'>
                    <h3 className='text-[#2F2F3F] font-bold text-lg'>Lorem ipsum dolor</h3>
                    <p className='text-white font-medium text-xs bg-[#E92D53] w-[69px] text-center rounded-md px-[10px] py-[5px]'>Required</p>
                </div>
                <p className='text-[#767578] text-sm px-4'>Choose up to 2 items</p>
                <div className='flex items-center gap-2 px-4 mt-2 mb-6'>
                    <img src={assets.alert_02} alt="" />
                    <p className='text-[#FAB11D]'>Choose 2</p>
                </div>
                <FoodOptionCb text={"Consectetur"} />
                <FoodOptionCb text={"Pellentesque"} />
                <FoodOptionCb text={"Pharetra"} />
                <FoodOptionCb text={"faucibus"} />
                <FoodOptionCb text={"Tempor"} />
                <FoodOptionCb text={"Convallis"} />
            </div> */}
        </div>
    )
}

export default FoodPopUp