import React, { useContext, useState } from 'react'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUserChat } from '../../redux/slices/chatSlice'

const IsHelpfulBtn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const { helpfulBtn, setHelpfulBtn } = useContext(FeresContext)
    const btnText = ['Chat with us', 'Yes, I got my answer'];
    const faqData = useSelector((state) => state.faq.faqData);
    const userDetail = useSelector((state) => state.userAuth.user)
    const [loading ,setLoading] = useState(false)

    const handleStoreChat =async (storeId) => {
            setLoading(true) 
console.log(faqData,"faqDatafaqDatafaqData");

  try {
            const response = await axios.post('https://farasanya.feres.co/get_user_chat_with_store', {
                user_id: userDetail?.user_id,
                chat_type: "store_user",
                store_id : storeId
            });
            let roomId;
            console.log('response',response.data);
            if ( response.data.chat ){
                    roomId = response.data.chat._id
                    dispatch(setUserChat(response.data.chat.message))
            }else{
                roomId = response.data.room_id
            }
            navigate(`/feressupport/${roomId}`); 
        } catch (error) {
            console.error('Error fetching chat room:', error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <button className='w-[90%] border border-[#0AB247] bg-[#0AB247] p-[10px] py-[15px] text-white mb-3 rounded-[30px]' onClick={() => faqData?.store_id ? handleStoreChat(faqData.store_id) :  handleStoreChat(selectedResturant?.store?._id) }>
            {
                helpfulBtn === 'light' ? btnText[0] : btnText[1]
            }
        </button>
    )
}

export default IsHelpfulBtn