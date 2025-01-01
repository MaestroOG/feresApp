import React, { useRef, useState } from 'react';
import OrderIssuesNav from './OrderIssuesNav';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserChat } from '../../redux/slices/chatSlice';


const IssueDetailMessage = () => {
    const dispatch = useDispatch()
    const faqData = useSelector((state) => state.faq.faqData);
    const userDetail = useSelector((state) => state.userAuth.user);
    const orderDetail = useSelector((state) => state.orders.reportOrder)
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputMsg, setInputMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    function formatDate(dateString) {
        const date = new Date(dateString);

        // Format options
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };

        // Convert the date to a readable string
        const formattedDate = date.toLocaleString('en-US', options);

        // Rearrange the parts to match the desired format
        const [month, day, year, time] = formattedDate?.match(/(\w+)\s(\d+),\s(\d+),\s(.+)/).slice(1);
        return `${day} ${month} ${year}, ${time}`;
    }

    const handleSendMessage = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://farasanya.feres.co/get_user_help_chat', {
                user_id: userDetail?.user_id,
                faq_id: faqData?.faq_id, // Use appropriate key for FAQ ID
            });
            let roomId;
            console.log('response', response.data);
            if (response.data.chat) {
                roomId = response.data.chat._id
                dispatch(setUserChat(response.data.chat.message))
            } else {
                roomId = response.data.room_id
            }
            navigate(`/feressupport/${roomId}`); // Navigate to chat room
        } catch (error) {
            console.error('Error fetching chat room:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <OrderIssuesNav />
            <h3 className='text-[#2F2F3F] text-2xl font-bold px-4 py-3 w-[85%] mt-3'>I was charged twice for the same trip</h3>

            <form className='px-4 mt-5'>
                <div className='bg-[#F8F8F8] rounded-xl px-4 py-3 h-60 relative focus-within:border focus-within:border-[#0AB247] focus-within:bg-white transition-all'>
                    <textarea
                        placeholder='Describe your issue'
                        className='w-full h-full overflow-auto text-[#767578] text-lg bg-transparent border-none outline-none'
                        onChange={(e) => setInputMsg(e.target.value)}
                    ></textarea>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <img
                        src={assets.document_attachment}
                        alt="Attach"
                        className='absolute bottom-4 right-5'
                        onClick={handleImageClick}
                    />
                </div>
            </form>

            {selectedFile && (
                <div className='my-7 px-4 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img src={assets.image_01} alt="Preview" />
                        <p className='text-[#2F2F3F] font-medium'>{selectedFile.name}</p>
                    </div>
                    <img
                        src={assets.cancel_icon}
                        alt="Cancel"
                        onClick={() => setSelectedFile(null)}
                    />
                </div>
            )}

            <div className='px-4 mt-6'>
                <p className='text-[#2F2F3F] text-lg font-bold'>Order</p>
                <div className='flex items-center justify-between my-4'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8F8F8] rounded-full p-[1.5rem]' style={{ backgroundImage: `url(${orderDetail?.store_detail?.image_url})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            {/* <img src={orderDetail?.store_detail?.image_url} alt="Order" className='w-6' /> */}
                        </div>
                        <div>
                            <h3 className='text-[#2F2F3F] text-base font-medium'>{orderDetail?.store_detail?.name}</h3>
                            <p className='text-[#ACACAC] text-base'>{formatDate(orderDetail?.created_at)}</p>
                        </div>
                    </div>
                    <img src={assets.arrow_right} alt="Arrow" />
                </div>
            </div>

            <button
                onClick={handleSendMessage}
                disabled={loading}
                className={`fixed bottom-3 left-2 w-[97%] mx-auto px-3 py-5 ${loading ? 'bg-gray-400' : 'bg-[#0AB247]'
                    } text-white text-lg font-medium rounded-full`}
            >
                {loading ? 'Loading...' : 'Send message'}
            </button>
        </div>
    );
};

export default IssueDetailMessage;
