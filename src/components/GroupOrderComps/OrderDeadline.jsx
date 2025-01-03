import React, { useState } from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { useSelector } from 'react-redux'
import { usePost } from '../../servies/usePost'

const OrderDeadline = ({ onCancel, onConfirm, time, setTime, handleSetClick, selectedDate }) => {
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const userDetail = useSelector((state) => state.userAuth.user)
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const { post } = usePost()

    const handleShare = async (url) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check this out!',
                    text: 'Here is a link I want to share with you.',
                    url: url,
                });
                console.log('Successfully shared!');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Sharing not supported on this browser.');
        }
    };
    const handleCreateGroupOrder = async () => {
        const response = await post('/api/user/create_group_order', { cart_id: cartItemData?._id, user_id: userDetail.user_id, is_deadline: false, group_order_expire_at: "2024-09-11T01:50:08.641+00:00" })
        if (response.success) {
            const cartTokenUrl = response.url
            const cartToken = cartTokenUrl.split('?')
            // onConfirm()
            handleShare(`https://pwa.feres.co/restaurant/${selectedResturant?.store?._id}?${cartToken[1]}`)
        }
    }

    return (
        <div className='h-screen w-full bg-[#06060626] fixed top-0 z-[10000] left-0'>

            <Container className={'fixed top-[3%]'}>
                <div className='bg-[#F8F8F8] border border-[#DDDDDD26] flex items-center gap-2 rounded-2xl p-3'>
                    <img src={assets.alert_red} alt="" />
                    <p className='text-[#E92D53] text-sm'>Sorry the scheduled time has passed. kindly arrange another suitable time</p>
                </div>
            </Container>


            <Container className={'w-full bg-white min-h-[394px] rounded-t-2xl fixed bottom-0 left-0 pt-4'}>
                <img src={assets.cancel_icon} alt="" onClick={onCancel} />

                <div className='mt-[10px] mb-6'>
                    <h3 className='text-[#2F2F3F] text-xl font-bold'>Order deadline</h3>
                    <p className='text-[#979797] w-[90%] mt-2'>
                        Give everyone a deadline to add their items. Don’t worry, you can edit this later.
                    </p>
                </div>

                <div className='flex items-center gap-6 w-full justify-around mb-7'>
                    <div className={`${time === 'any' ? 'bg-[#EBF9EE] border border-[#0AB247]' : 'bg-white border border-[#EEEEEE]'} text-[#2F2F3F] flex items-center justify-center w-1/2 py-6 rounded-2xl text-xl`} onClick={() => setTime('any')}>Anytime</div>
                    <div className={`${time === 'set' ? 'bg-[#EBF9EE] border border-[#0AB247]' : 'bg-white border border-[#EEEEEE]'} text-[#2F2F3F] flex items-center justify-center w-1/2 py-6 rounded-2xl text-xl`} onClick={() => setTime('set')}>

                        <label onClick={handleSetClick}>{selectedDate ? selectedDate.toDateString() : "Set Deadline"}</label>
                    </div>
                </div>

                <button className='w-full bg-[#0AB247] rounded-full p-4 text-white text-lg font-medium mb-5' onClick={handleCreateGroupOrder}>Confirm</button>
            </Container>
        </div>
    )
}

export default OrderDeadline