'use client';
// CreateProduceScreen.tsx

import React, { useState } from 'react';
import Loggedin from '../Layouts/Loggedin';
import withAuth from '@/helpers/withAuth';
import { ToastContainer, toast } from 'react-toastify';





const CreateProduceScreen: React.FC = () => {
  const [produceName, setProduceName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [produceList, setProduceList] = useState<{ produceName: string; quantity: number }[]>([]);
  const [responseMessage, setResponseMessage] = useState('');
  

  const authToken = typeof window !== 'undefined' ? localStorage.getItem('Auth_token') || '' : '';

  const handleCreateProduce = async () => {
    try {
      const response = await fetch('https://stutern-klusterthon.onrender.com/farmers/produce/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          produceName,
          quantity: parseInt(quantity, 10),
        }),
      });

      const data = await response.json();

     // setResponseMessage(data.message || 'Produce created successfully');
      toast.success(data.message || 'Produce created successfully');

      // Add the created produce to the list
      setProduceList([...produceList, { produceName, quantity: parseInt(quantity, 10) }]);
      setProduceName('');
      setQuantity('');
    } catch (error) {
      console.error('Error creating produce:', error);
     // setResponseMessage('An error occurred while creating produce');
      toast.error('An error occurred while creating produce');
    }
  };

  const handleClearProduceList = () => {
    setProduceList([]);
  };

  return (
    <Loggedin>
      <div className="create-produce-screen">
        <h2>Create Produce</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="produceName" className="block text-sm font-medium text-gray-600">
              Produce Name
            </label>
            <input
              type="text"
              id="produceName"
              name="produceName"
              value={produceName}
              onChange={(e) => setProduceName(e.target.value)}
              className="mt-1 p-2 border text-black rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 p-2 border text-black rounded-md w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleCreateProduce}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Add Produce
          </button>
          <button
            type="button"
            onClick={handleClearProduceList}
            className="ml-2 bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500"
          >
            Clear List
          </button>
        </form>

        {produceList.length > 0 && (
          <div className="mt-4">
            <h3>Produced Items</h3>
            <table className="table-auto w-full mt-2">
              <thead>
                <tr>
                  <th className="border p-2">Produce Name</th>
                  <th className="border p-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {produceList.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">{item.produceName}</td>
                    <td className="border p-2">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {responseMessage && <p className="mt-4">{responseMessage}</p>}
      </div>
    </Loggedin>
  );
};

export default withAuth(CreateProduceScreen);
