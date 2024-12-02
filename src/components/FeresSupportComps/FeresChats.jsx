import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeresChatTabs from './FeresChatTabs';
import FeresChatRec from './FeresChatRec';
import socket from '../../utilities/socket';

const FeresChats = () => {
    const { roomId } = useParams(); // Get roomId from route
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [reciveMsg, setReciveMsg] = useState([])

    useEffect(() => {
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
                setMessages((prevMessages) => [...prevMessages, message]);
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
            console.log(message,"new message");
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
            setMessages((prevMessages) => [...prevMessages, message]);
            setNewMessage(''); // Clear the input field
        }
    };

    // useEffect(() => {
    //     socket.on("receiveMessage", (chatMessage) => {
    //         console.log(chatMessage,"dcdsf");
            
    //         setReciveMsg([...reciveMsg, chatMessage]);
    //     });
    //   }, [messages]);

    //   console.log(reciveMsg,'here is revice msgs ');
      

    return (
        <div className='bg-[#F8F8F8] w-screen h-[90vh] flex flex-col justify-between py-5'>
            {/* Chat Messages */}
            <div className='flex-1 overflow-auto px-4'>
            {/* <FeresChatRec text={'hello'}/> */}
            {messages.map((msg, index) => (
            <FeresChatTabs text={msg.text} key={index}/>
        ))}
               
            </div>

            {/* Message Input */}
            <div className='w-full bg-white p-4 flex items-center gap-3'>
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
            </div>
        </div>
    );
};

export default FeresChats;
