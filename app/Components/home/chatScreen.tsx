// ChatScreen.tsx

import Modal from '../UI/modal';
import React, { useState, useEffect, useRef } from 'react';
import $http from '@/https/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ChatScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

function ChatScreen({ isOpen, onClose }: ChatScreenProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);

  const authToken = localStorage.getItem('Auth_token') || '';

  const handleSendMessage = () => {
    $http
      .post(
        '/chat',
        { userInput: newMessage },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      .then((res) => {
        // Update the state with the response
        setResponse(res.data.response);
        // Update the state with the new message
        setMessages([...messages, newMessage]);
        // Clear the input field
        setNewMessage('');
        // Scroll to the bottom of the messages
        if (messageRef.current) {
          messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        toast.success('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        toast.error('Error sending message. Please try again.');
      });
  };

  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="lg"
      title="ChatBot"
    >
      <div className="max-h-80 overflow-y-scroll mb-4">
        {messages.map((message, index) => (
          <p key={index} className="mb-2">
            {message}
          </p>
        ))}
        {response && <p className="font-bold text-green-500">{response}</p>}
        <div ref={messageRef} />
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 mr-2 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleSendMessage} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
          Send
        </button>
      </div>
       
    </Modal>
  );
}

export default ChatScreen;
