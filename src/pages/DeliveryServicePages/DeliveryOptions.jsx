import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../../servies/usePost'

const DeliveryOptions = () => {
    const [selectedOption, setSelectedOption] = useState("")
    const navigate = useNavigate();
    const {post} = usePost()
    const [services, setServices] = useState([])

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleGetSevices =async ()=>{
        const sevices = await post("/api/admin/getExpressServiceType")
            if(sevices.success){
                setServices(sevices.service_types) 
            }
    }

    useEffect(()=>{
        handleGetSevices()
},[])

    return (
        <div>
            <div className='px-3 mt-5'>
                <h3 className='text-[#2F2F3F] text-xl font-bold'>How will you use FeresExpresss?</h3>
                <p className='text-[#767578]'>Choose from one of the options below to help us personalise your experience.</p>
            </div>
            <div className='my-6'>

                {services?.map((service)=> <><Container className={'border border-[#EAEAEA] w-[398px] h-[78px] rounded-2xl mx-auto flex items-center justify-between my-5'}>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8F8F8] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={service?.ExpressImage} alt="" width={"30px"}/>
                        </div>
                        <div className='flex items-start gap-1 flex-col'>
                            <h3 className='text-[#2F2F3F] font-medium'>{service?.ExpressServiceName}</h3>
                            <p className='text-sm text-[#979797]'>{service?.ExpressDescription}</p>
                        </div>
                    </div>
                    <input type="radio" name="delivery" id="" value="personal"
                        checked={selectedOption === 'personal'}
                        onChange={handleOptionChange} />
                </Container></>)}
            </div>

            <div className='w-full fixed px-4 py-5 bottom-0 left-0 bg-white' onClick={() => selectedOption.length > 0 && navigate('/deliveryservice/deliverydetails')}>
                <button className={`${selectedOption.length > 0 ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#767578]'} rounded-full p-4 w-full font-medium text-lg`}>Confirm</button>
            </div>
        </div>
    )
}

export default DeliveryOptions