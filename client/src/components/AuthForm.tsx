import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate=useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        console.log('Logged in:', response.data);
        localStorage.setItem('authToken', response.data.token);
        navigate("/main")
        // Handle successful login, e.g., store token, redirect, etc.
      } else {
        const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
        console.log('Signed up:', response.data);
        localStorage.setItem('authToken', response.data.token);
        // Handle successful signup, e.g., store token, redirect, etc.
        navigate("/main")
      }
    } catch (err: any) {
      console.error('Authentication error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="text-center mt-4">
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
