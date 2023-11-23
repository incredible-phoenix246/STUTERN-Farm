'use client';

import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeSlash } from 'iconsax-react';

const PasswordInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        className="w-full p-2 border pr-10" // Add padding for the eye ic
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <div className="absolute top-1 right-2" onClick={handleTogglePassword}>
        {showPassword ? <Eye size="20" color="#8c8ca1" /> : <EyeSlash size="20" color="#8c8ca1" />}
      </div>
    </div>
  );
};

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://stutern-klusterthon.onrender.com/farmers/signin', formData);
      // Assuming your API returns a success message
      if (response.data.success) {
        toast.success('Sign in successful!');
        // You can redirect the user or perform other actions here
      } else {
        toast.error('Sign in failed. Please check your email and password.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('API Error:', error);
    }
  };

  return (
    <div className="bg-green-600 h-screen flex flex-col items-center justify-center">
      <div className="text-center text-white mb-4 md:mb-8">
        <h1 className="text-4xl font-bold mb-2">Sign In to Your StuternFarm Account</h1>
      </div>
      <div className="bg-white p-8 rounded shadow-md mt-4 md:mt-8 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border"
              onChange={(e) => handleInputChange('email', e.target.value)}
              value={formData.email}
              required
            />
          </div>
          <PasswordInput value={formData.password} onChange={(value) => handleInputChange('password', value)} />
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full mt-4">
            Sign In
          </button>
        </form>
        <p className="text-xs text-[#2F80ED] mt-4">
          <a href="">Forgot your password?</a>
        </p>
        <p className="mt-4 text-center">
          If you need support, please visit our{' '}
          <a href="" className="text-[#2F80ED]">
            support site,
          </a>{' '}
          or contact us at{' '}
          <a href="mailto:support@stuternfarm.com" className="text-[#2F80ED]">
            support@stuternfarm.com
          </a>
          .
        </p>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default SignIn;
