import React from 'react';
import { useState } from 'react';

const Formsignin = () => {
    const [formData, setformData] = useState({
        email: '',
        password: '',
    });
    

    const Submitform = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" w-full max-w-md rounded-lg p-8 space-y-6">
        
        {/* Logo & Heading */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <img src="./src/public/logo.png" alt="logo" className="w-18 h-18" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
          <p className="text-sm text-gray-500">
            Or <a href="#" className="text-blue-600 hover:underline">create a new account</a>
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-2 bg-white shadow-md p-3 rounded-lg">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input type="text" placeholder="you@example.com" name='email' value={formData.email} onChange={Submitform} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"/>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Password</label>
                <input type="password" placeholder="********" name='password' value={formData.password} onChange={Submitform} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"/>
              </div>
          

          <div className="text-right text-sm py-3">
            <a href="#" className="text-blue-600 hover:underline">Forgot Your Password?</a>
          </div>

          <button type='submit' className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer">
            Sign In
          </button>
        </form>
          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <button className="w-full flex items-center justify-center py-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <img src="./src/public/google.png" alt="google-logo" className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium text-gray-700">Sign In With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formsignin;


