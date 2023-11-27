'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loggedin from '../Layouts/Loggedin';
import withauth from '@/helpers/withAuth';
import $http from '@/https/index';

interface Message {
  _id: string;
  role: string;
  content: string;
  timestamp: string;
}

const AUTH_HTTP_URL = 'https://stutern-klusterthon.onrender.com/farmers';
const CHAT_HISTORY_ENDPOINT = '/chatHistory';

const ChatHistoryScreen = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('Auth_token') || '';

    axios
      .get(`${AUTH_HTTP_URL}${CHAT_HISTORY_ENDPOINT}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        // Update state with the chat history
        setChatHistory(res.data.chatHistory);
      })
      .catch((error) => {
        console.error('Error fetching chat history:', error);
      });
  }, []);

  return (
    <Loggedin>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Chat History</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chatHistory.map((message) => (
            <div key={message._id} className="bg-gray-100 p-4 rounded-lg">
              {message.role === 'user' ? (
                <div>
                  <strong className="text-blue-600">User:</strong> <span className="text-black">{message.content}</span>
                </div>
              ) : (
                <div>
                  <strong className="text-green-600">Assistant:</strong>
                  <span className="text-black">{message.content}</span>
                </div>
              )}
              <p className="text-gray-500 mt-2">Timestamp: {message.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </Loggedin>
  );
};

export default withauth(ChatHistoryScreen);
