import React, { useRef, useEffect } from 'react'
import { assets } from '../../assets/assets'
import Container from '../Container'

const GroupOrder1 = ({ setIsOpen, onEdit, onQr, onInvite }) => {
    const divRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsOpen(false); // Close the div
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [divRef]);
    return (
        <div className='h-screen w-full bg-[#06060626] fixed top-0 z-[100] left-0'>
            <Container className='fixed bottom-0 left-0 bg-white rounded-t-2xl min-h-[662px] w-full'>
                <div ref={divRef}>
                    <img src={assets.group_order_img} alt="" className='rounded-xl pt-4' />
                    <div className='mt-5 mb-6'>
                        <h3 className='text-[#2F2F3F] text-xl font-bold'>Your group order</h3>
                        <p className='text-[#979797] mt-2'>KFC Eastlight</p>
                    </div>
                    <div className='border border-[#EEEEEE] rounded-2xl px-5 py-6 flex items-center justify-between' onClick={onEdit}>
                        <div className='flex items-center gap-5'>
                            <img src={assets.clock_blue} alt="" />
                            <div>
                                <h4 className='text-[#2F2F3F] text-lg font-medium'>No deadline</h4>
                                <p className='text-[#979797]'>Add or edit items by this deadline </p>
                            </div>
                        </div>
                        <img src={assets.edit_blue} alt="" />
                    </div>
                    <div className='mt-6'>
                        <button className='w-full bg-[#0AB247] rounded-full p-4 text-white text-lg font-medium mb-5' onClick={onInvite}>Invite people</button>
                        <button className='w-full bg-[#EBF9EE] rounded-full p-4 flex items-center justify-center gap-2' onClick={onQr}>
                            <img src={assets.qr_code_green} alt="" />
                            <p className='text-[#0AB247] text-lg font-medium'>Show QR Code</p>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GroupOrder1