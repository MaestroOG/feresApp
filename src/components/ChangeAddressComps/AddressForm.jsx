import React from 'react'
import Container from '../Container'

const AddressForm = ({ address, setTitle, title }) => {
    return (
        <Container>
            <form>
                <input type="text" className='bg-[#F8F8F8] text-[#2F2F3F] rounded-[13px] w-full p-5 placeholder:text-[#767578] mb-5' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className='flex items-center gap-[18px] mb-5'>
                    <input type="text" className='bg-[#F8F8F8] text-[#2F2F3F] rounded-[13px] w-full p-5 placeholder:text-[#767578] max-w-[190px]' placeholder='Home. no.' />
                    <input type="text" className='bg-[#F8F8F8] text-[#2F2F3F] rounded-[13px] w-full p-5 placeholder:text-[#767578] max-w-[190px]' placeholder='Floor' />
                </div>
                <input type="text" className='bg-[#F8F8F8] text-[#2F2F3F] rounded-[13px] w-full p-5 placeholder:text-[#767578] mb-5' placeholder='Building name' value={address} />
                <input type="text" className='bg-[#F8F8F8] text-[#2F2F3F] rounded-[13px] w-full p-5 placeholder:text-[#767578] mb-5' placeholder='Additional directions (optional)' />
            </form>
        </Container>
    )
}

export default AddressForm