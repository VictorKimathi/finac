import React, { useState } from 'react';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import Box from '@mui/material/Box';
import ChatMessages from '../../components/ChatMessage';
import ChatInput from '../../components/ChatInput';
import axios from 'axios';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to submit a new message to the API
  async function submitNewMessage() {
    console.log("hello")
    if (!newMessage.trim()) return; // Don't send if message is empty
    setIsLoading(true);

    // Add user message to messages state immediately
    setMessages(prevMessages => [...prevMessages, { role: 'user', content: newMessage }]);
console.log(messages)
    try {
      // Send the message to the API
        const response = await axios.post(
            "http://localhost:8000/api/chat/send_chat/",
            { message: newMessage },
            {
            headers: {
                Authorization: `Token a01f62ad50e3b6396af09169b66ec073162a8bb6`, // Add your token here
                'Content-Type': 'application/json',
            },
            }
        );
console.log(response)
      // Assuming the response contains the assistant's reply
      const assistantReply = response.data.response;
      console.log("assistantReply",assistantReply)
      // Add assistant's reply to messages state
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: assistantReply }]);
      
      // Clear input field after sending
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Handle error by adding an error message
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: "Error: Unable to get a response from the server." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='h-screen'>
      <div className='align-center'>
        <AssistantOutlinedIcon />
        <Box component="section" sx={{ p: 2 }}>
          <h1> Welcome to Finac.AI</h1>
        </Box>
        <h2>Your AI Chat Assistant</h2>
        <div>
          {messages.length === 0 && (
            <div>{/* Chatbot welcome message */}</div>
          )}
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput
            newMessage={newMessage}
            isLoading={isLoading}
            setNewMessage={setNewMessage}
            submitNewMessage={submitNewMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
