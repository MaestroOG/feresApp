import React, { useState } from 'react'
import SenderDetailNav from '../../components/DeliveryServiceComps/SenderDetailComps/SenderDetailNav'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SenderDetails = () => {
    const navigate = useNavigate()
    const [notePopup, setNotePopup] = useState("")
    return (
        <>
            <div className={`bg-[#F8F8F8] h-screen overflow-auto ${notePopup && 'blur-sm'}`}>
                <SenderDetailNav status={'Sender'} />

                {/* Map Section */}
                <Container className='bg-white py-6 pb-2 relative rounded-b-lg' onClick={() => navigate('/deliveryservice/deliverydetails/senderdetails/senderlocation')}>
                    <img src={assets.map_placeholder} alt="" className='w-[398px] h-[160px]' onClick={() => navigate('/deliveryservice/deliverydetails/senderdetails/senderlocation')} />
                    <img src={assets.pointer_placeholder} alt="" className='absolute top-12 left-32' />
                    <div className='mt-5'>
                        <input type="text" value={'Elgin St. Celina, Delaware 10299'} className='w-[398px] h-[58px] rounded-xl py-2 px-5 bg-[#F8F8F8] my-2 focus:bg-white focus:border focus:border-[#0AB247] transition-all outline-none' />
                        <input type="number" className='w-[398px] h-[58px] rounded-xl py-2 px-5 bg-[#F8F8F8] my-3 outline-none placeholder:text-[#767578] focus:bg-white focus:border focus:border-[#0AB247] transition-all' placeholder='Add a floor or unit no.' value={""} />
                    </div>
                </Container>

                {/* Name And Phone Number Section */}
                <Container className={'bg-white py-6 pb-2 rounded-lg mt-5'}>
                    <input type="text" value={"Abraham John"} className='w-[398px] h-[58px] rounded-xl py-2 px-5 outline-none bg-[#F8F8F8] focus:bg-white focus:border focus:border-[#0AB247] transition-all my-1' />
                    <input type="text" inputMode='numeric' className='w-[398px] h-[58px] rounded-xl py-2 px-5 bg-[#F8F8F8] my-2 outline-none placeholder:text-[#767578] focus:bg-white focus:border focus:border-[#0AB247] transition-all' placeholder='Add a floor or unit no.' value={"+44 9024677034"} onClick={() => navigate('/deliveryservice/deliverydetails/senderdetails/updatephone')} />
                    <textarea onClick={() => setNotePopup(true)} className='w-[398px] h-[110px] rounded-xl py-2 px-5 bg-[#F8F8F8] my-2 outline-none placeholder:text-[#767578] focus:bg-white focus:border focus:border-[#0AB247] transition-all' placeholder='Add a note to rider'></textarea>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" />
                        <div>
                            <p className='text-[#2F2F3F] font-medium'>Save this place</p>
                            <p className='text-[#B1B1B1] text-sm'>Save this details for future orders.</p>
                        </div>
                    </div>
                </Container>

                <Container className={'py-5 w-full fixed bottom-0 left-0'} onClick={() => navigate('/deliveryservice/deliverydetails')}>
                    <button className='p-4 rounded-full w-full bg-[#0AB247] text-white font-medium text-lg'>
                        Confirm
                    </button>
                </Container>
            </div>
            {notePopup && <div className={` h-[94vh] w-full bg-white fixed bottom-0 left-0 rounded-xl px-3 z-30`}>
                <div className='flex items-center justify-between px-3 pt-6 pb-4'>
                    <button className='text-lg text-[#1E1E1E]' onClick={() => {
                        setNotePopup(false)
                    }}>Cancel</button>
                    <h3 className='text-lg text-[#1E1E1E] font-bold'>Add a Note</h3>
                    <button className='text-lg text-[#0AB247] font-bold'>Done</button>
                </div>

                <hr />
                <div className='flex flex-col h-full items-center py-6 rounded-lg my-2'>
                    <textarea name="" id="" placeholder='Write note to the rider' className='placeholder:text-[#C4C4C4] placeholder:text-base mt-1 w-full px-1 h-full border-none outline-none'></textarea>
                </div>
            </div>}
        </>
    )
}

export default SenderDetails