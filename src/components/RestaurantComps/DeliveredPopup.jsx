import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const DeliveredPopup = () => {

    const { deliverPopup, setDeliverPopup } = useContext(FeresContext)
    const [visible, setVisible] = useState(true)

    return (
        <div className={`fixed bottom-0 left-0 rounded-2xl z-50 bg-white ${visible ? '' : 'hidden'}`}>
            <img src={assets.delivered_popup_img} alt="" onClick={() => setVisible(false)} />
            <div className='p-4'>
                <h2 className='font-black text-xl'>Delivered by <span className='text-[#0AB247]'>Feres</span></h2>
                <p className='text-sm text-[#72737B] leading-6 my-2'>We strive to provide the best possible experience for you. This restaurant use our feres riders to bring your food by using one of these services: motorbike, car, cycle, or walking person</p>
                <div className='flex items-start gap-3 mt-4 mb-2'>
                    <div>
                        <img src={assets.location_03} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[#2F2F3F] font-medium text-sm leading-4 mb-1'>Track your order with frequent live updates</h4>
                        <h4 className='text-[#767578] font-medium text-sm'>Once you place an order, we can show you where it is in real time.</h4>
                    </div>
                </div>
                <div className='flex items-start gap-3 mt-4 mb-2'>
                    <div>
                        <img src={assets.clock_01} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[#2F2F3F] font-medium text-sm leading-4 mb-1'>Ontime delivery</h4>
                        <h4 className='text-[#767578] font-medium text-sm'>Once you place an order, we can show you the time it will arrive.</h4>
                    </div>
                </div>
                <div className='flex items-start gap-3 mt-4 mb-2'>
                    <div>
                        <img src={assets.customer_support} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[#2F2F3F] font-medium text-sm leading-4 mb-1'>Our feres live agents are ready to assist you</h4>
                        <h4 className='text-[#767578] font-medium text-sm'>If something goes wrong with your order, we will support immediately.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveredPopup