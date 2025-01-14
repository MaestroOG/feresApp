import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeresChatTabs from './FeresChatTabs';
import FeresChatRec from './FeresChatRec';
import socket from '../../utilities/socket';
import { useSelector } from 'react-redux';
import { assets } from '../../assets/assets';

const FeresChats = () => {
    const { roomId } = useParams(); // Get roomId from route
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [reciveMsg, setReciveMsg] = useState([])

    const previousChats = useSelector((state) => state.chat.userChat)

    useEffect(() => {
        setMessages(previousChats || [])
        if (roomId) {

            console.log('Attempting to connect to socket...');
            socket.connect();

            // Join the room
            socket.emit('joinRoom', { room_id: roomId }, (ack) => {
                console.log('Room joined successfully:', ack);
            });

            // Listen for messages from the server
            socket.on('sendMessage', (message) => {
                console.log('Message received:', message);
                let newObj = { ...message, timestamp: new Date().toISOString() };
                setMessages((prevMessages) => [...prevMessages, newObj]);
            });

            // Log connection status
            socket.on('connect', () => {
                console.log('Socket connected with ID:', socket.id);
            });

            // Handle disconnection
            socket.on('disconnect', () => {
                console.log('Socket disconnected');
            });

            // Cleanup on component unmount
            return () => {
                socket.off('sendMessage');
                socket.disconnect();
            };
        }
    }, [roomId]);

    const handleSendMessage = () => {

        if (newMessage.trim()) {
            const message = { text: newMessage, sender: 'user' };
            const payload = {
                room_id: roomId, // Use the roomId from the route params
                message: [{ text: newMessage, sender: 'user' }], // Wrap the message in an array
            };
            // Send the message to the server




            socket.emit('sendMessage', payload, (ack) => {

                if (ack) {
                    console.log('Message sent successfully:', ack);
                } else {
                    console.log('Message send failed:', payload);
                }
            });

            // Add the message locally to the chat
            let newObj = { ...message, timestamp: new Date().toISOString() };
            setMessages((prevMessages) => [...prevMessages, newObj]);
            setNewMessage(''); // Clear the input field
        }
    };

    socket.on('message', (msg) => {
        let message = msg[0]
        let newObj = { ...message, timestamp: new Date().toISOString() };

        setMessages([...messages, newObj])
    })

    function formatTime(dateString) {
        // Create a Date object from the input string
        const date = new Date(dateString);

        // Get hours and minutes
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Format hours and minutes to always have 2 digits
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');

        // Return the time in the format "HH:MM"
        return `${formattedHours}:${formattedMinutes}`;
    }


    return (
        <div className='bg-[#F8F8F8] w-screen h-[90vh] flex flex-col justify-between py-5'>
            <div className='flex-1 overflow-auto px-4'>


                {messages.map((msg, index) => (
                    msg.sender == "user" ? <FeresChatRec text={msg?.text} key={index} /> : <div key={index}><FeresChatTabs text={msg.text} /></div>
                ))}
            </div>


            {/* Message Input */}
            {/* <div className='w-full bg-white p-4 flex items-center gap-3'>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 border border-[#ACACAC] rounded-full px-4 py-2 text-lg outline-none focus:border-[#0AB247]"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-[#0AB247] text-white rounded-full px-4 py-2 text-lg"
                >
                    Send
                </button>
            </div> */}

            <div className='flex items-center justify-center gap-[10px] fixed bottom-[2%] left-[0%] w-full bg-white' style={{
                paddingTop: '20px'
            }}>
                <div className='flex items-center lg:justify-between gap-2 bg-[#F8F8F8] rounded-[13px] px-4 py-[20px] w-[318px] lg:w-full lg:px-8'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.neutral_emoji} alt="" />
                        <input type="text" value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)} placeholder='Type a message ...' className='border-none outline-none bg-[#F8F8F8]' />
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={assets.attachment_02} alt="" />
                        <img src={assets.camera_02} alt="" />
                    </div>
                </div>
                <button className='bg-[#0AB247] rounded-full p-3' onClick={handleSendMessage}>
                    <img src={assets.sent_icon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default FeresChats;
