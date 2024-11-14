import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const TotalBill = ({ onDelClick, onServiceClick, selectedResturant, order_payment }) => {
    const { tipBtn, setTipBtn, discount, customTip, deliveryPickup, smValue } = useContext(FeresContext)



    return (
        <div className='px-4 mt-7 pb-4'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[#767578]'>Subtotal</h3>
                <p className='text-[#2F2F3F] font-medium text-base'>{`ETB${order_payment && order_payment[0]?.total_store_income}`}</p>
            </div>
            {!deliveryPickup && <div className='flex items-center justify-between mt-2'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-[#767578]'>Delivery Fee</h3>
                    <img src={assets.information_circle} alt="" onClick={onDelClick} />
                </div>
                <p className='text-[#2F2F3F] font-medium text-base'>{`ETB ${smValue?.split(' ')[0]}`}</p>
            </div>}

            <div className='flex items-center justify-between mt-2'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-[#767578]'>Service Fee</h3>
                    <img src={assets.information_circle} alt="" onClick={onServiceClick} />
                </div>
                <p className='text-[#2F2F3F] font-medium text-base'>{`ETB${order_payment && order_payment[0]?.total_service_price}`}</p>
            </div>
            {
                tipBtn === '50' || tipBtn === '80' || tipBtn === 'other' ? <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#767578]'>Rider Tip</h3>
                        <img src={assets.information_circle} alt="" />
                    </div>
                    <p className='text-[#0AB247] font-medium text-base'>ETB{tipBtn === '50' || tipBtn === '80' ? tipBtn : customTip}</p>
                </div> : null
            }
            {selectedResturant?.discount &&
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#767578]'>Discount</h3>
                        <img src={assets.information_circle} alt="" />
                    </div>
                    <p className='text-[#0AB247] font-medium text-base'>{`-ETB${selectedResturant?.discount}`}</p>
                </div>
            }
            <div className='flex items-center justify-between mt-2'>
                <h3 className='text-[#767578]'>Subtotal</h3>
                <p className='text-[#2F2F3F] font-medium text-base'>{`ETB${order_payment && order_payment[0]?.total_order_price}`}</p>
            </div>
        </div>
    )
}

export default TotalBill