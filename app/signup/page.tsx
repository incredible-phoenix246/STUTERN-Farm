'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $http from '@/https/index';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { password, confirmPassword } = formData; // Destructure correctly here

    if (password !== confirmPassword) {
      toast.error('❌ Password does not match');
      return;
    }

    try {
      const response = await $http.post('/signup', formData);

      if (response.data.success) {
        toast.success('✅ Sign up successful!');
      } else {
        toast.error('❌ Sign up failed. Please try again.');
      }
    } catch (error) {
      toast.error('❌ An error occurred. Please try again later.');
      console.error('API Error:', error);
    }
  };

  return (
    <div className="bg-green-600 py-20 h-auto flex flex-col items-center justify-center">
      <div className="text-center text-white mb-4 md:mb-8">
        <h1 className="text-4xl font-bold mb-2">Sign Up for Your StuternFarm Account</h1>
        <p>
          Welcome to a smarter, more informed farming experience! Sign up now to unlock exclusive features and
          personalized support for your agricultural journey.
        </p>
      </div>
      <div className="bg-white p-8 rounded shadow-md mt-4 md:mt-8 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="mr-2 w-1/2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 border"
                onChange={handleInputChange}
                value={formData.firstName}
                required
              />
            </div>
            <div className="ml-2 w-1/2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 border"
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border"
              onChange={handleInputChange}
              value={formData.password}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border"
              onChange={handleInputChange}
              value={formData.confirmPassword}
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center mt-4">
          By clicking &quot;Sign Up,&quot; you agree to our <span className="text-[#2F80ED]"> Terms of Service </span>{' '}
          and <span className="text-[#2F80ED]"> Privacy </span>
          Policy.
        </p>
        <p className="mt-2 text-center ">
          Already have an account?{' '}
          <a href="#" className="text-[#2F80ED]">
            Log In Here
          </a>
        </p>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default SignUp;
