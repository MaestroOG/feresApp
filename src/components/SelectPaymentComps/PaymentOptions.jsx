import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPaymentMethod } from '../../redux/slices/modelToggleSlice'
import { assets } from '../../assets/assets'

const PaymentOptions = ({ payments }) => {
    const dispatch = useDispatch()
    const paymentMethod = useSelector((state) => state.modelToggle.paymentMethod)

    // Normalize the name to lowercase and trimmed
    const normalizeName = (name) => name.toLowerCase().trim()

    // Handler function to set payment method in Redux
    const handlePaymentSelection = (method) => {
        dispatch(setPaymentMethod(normalizeName(method)))
    }

    return (
        <div className='mt-20'>
            <label htmlFor='cash' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.wavy_money_bill} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>Cash</p>
                </div>
                <input
                    type="radio"
                    id='cash'
                    name="payment"
                    checked={paymentMethod === normalizeName('Cash')}
                    onChange={() => handlePaymentSelection('Cash')}
                    value={"cash"}
                />
            </label>

            {payments?.map((item) => (
                <label key={item._id} htmlFor={item._id} className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2'>
                        <img src={item?.image_url} alt="" width="40px" />
                        <p className='text-[#2F2F3F] text-lg'>{item?.name}</p>
                    </div>
                    <input
                        type="radio"
                        id={item._id}
                        name="payment"
                        checked={paymentMethod === normalizeName(item.name)}
                        onChange={() => handlePaymentSelection(item.name)}
                        value={item.name}
                    />
                </label>
            ))}
        </div>
    )
}

export default PaymentOptions
