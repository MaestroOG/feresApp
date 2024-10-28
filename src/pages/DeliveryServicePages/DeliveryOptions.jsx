import React, { useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'

const DeliveryOptions = () => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <div className='px-3 mt-5'>
                <h3 className='text-[#2F2F3F] text-xl font-bold'>How will you use FeresExpresss?</h3>
                <p className='text-[#767578]'>Choose from one of the options below to help us personalise your experience.</p>
            </div>
            <div className='my-6'>
                <Container className={'border border-[#EAEAEA] w-[398px] h-[78px] rounded-2xl mx-auto flex items-center justify-between my-5'}>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8F8F8] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={assets.delivery_box_01} alt="" />
                        </div>
                        <div className='flex items-start gap-1 flex-col'>
                            <h3 className='text-[#2F2F3F] font-medium'>Personal</h3>
                            <p className='text-sm text-[#979797]'>With friends and family</p>
                        </div>
                    </div>
                    <input type="radio" name="delivery" id="" value="personal"
                        checked={selectedOption === 'personal'}
                        onChange={handleOptionChange} />
                </Container>
                <Container className={'border border-[#EAEAEA] w-[398px] h-[78px] rounded-2xl mx-auto flex items-center justify-between my-5'}>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8F8F8] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={assets.truck_delivery} alt="" />
                        </div>
                        <div className='flex items-start gap-1 flex-col'>
                            <h3 className='text-[#2F2F3F] font-medium'>Corporate</h3>
                            <p className='text-sm text-[#979797]'>For company related matters</p>
                        </div>
                    </div>
                    <input type="radio" name="delivery" id="" value="corporate"
                        checked={selectedOption === 'corporate'}
                        onChange={handleOptionChange} />
                </Container>
                <Container className={'border border-[#EAEAEA] w-[398px] h-[78px] rounded-2xl mx-auto flex items-center justify-between my-5'}>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8F8F8] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={assets.shipping_truck_02} alt="" />
                        </div>
                        <div className='flex items-start gap-1 flex-col'>
                            <h3 className='text-[#2F2F3F] font-medium'>Retail</h3>
                            <p className='text-sm text-[#979797]'>To sell products to consumers</p>
                        </div>
                    </div>
                    <input type="radio" name="delivery" id="" value="retail"
                        checked={selectedOption === 'retail'}
                        onChange={handleOptionChange} />
                </Container>
            </div>

            <div className='w-full fixed px-4 py-5 bottom-0 left-0 bg-white'>
                <button className={`${selectedOption.length > 0 ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#767578]'} rounded-full p-4 w-full font-medium text-lg`}>Confirm</button>
            </div>
        </div>
    )
}

export default DeliveryOptions