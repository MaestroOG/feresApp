import React, { useState } from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const DeliveryLocationForm = () => {
    const [location, setLocation] = useState("")
    return (
        <Container className={'flex items-center justify-between pt-7 shadow pb-4'}>
            <div className='flex flex-col items-center gap-1'>
                <img src={assets.location_blue} alt="" />
                <hr className='bg-[#4867D780] h-[56px] w-[2px]' />
                <img src={assets.location_01} alt="" />
            </div>
            <div className='flex flex-col items-center gap-6'>
                <input type="text" placeholder='Elgin St. Celina, Delaware 10299' className='bg-[#F8F8F8] rounded-xl py-2 px-5 border-none outline-none w-[305px] h-[60px]' />
                <div className='w-[305px] h-[60px] focus-within:border focus-within:border-[#0AB247] focus-within:bg-white bg-[#F8F8F8] rounded-xl py-2 px-5 flex items-center justify-between'>
                    <input type="text" placeholder='Elgin St. Celina, Delaware 10299' className='w-full bg-transparent outline-none transition-all' value={location} onChange={(e) => setLocation(e.target.value)} />
                    {location.length > 0 && <img src={assets.close} alt="" onClick={() => setLocation("")} />}
                </div>
            </div>
            <img src={assets.add_button} alt="" />
        </Container>
    )
}

export default DeliveryLocationForm