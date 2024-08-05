import React, { createRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useStateContext } from '../../Context/ContextProvider';
import axiosClient from '../../auth/axios';
function LoginPage() {
  const emailRef = createRef();
  const passwordRef = createRef();
  const {setUser,setToken} = useStateContext();
  const [message,setMessage] = useState();

  const onSubmit = ev =>{
    ev.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password:passwordRef.current.value
    }
    axiosClient.post('/login', payload)
    .then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    })
    .catch((err)=>{
      const response = err.response;
      if(response && response.status === 422){
        setMessage(response.data.message);
      }

    })
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
  
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      
      {message &&
            <div className=" text-red-500">
              <p>{message}</p>
            </div>
          }
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login to Your Account</h2>
        <form className="space-y-6" onSubmit={onSubmit} method="POST" >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
            <input 
              ref={emailRef}
              type="email" 
              id="email" 
              name="email" 
              required 
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="you@example.com" 
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
            <input 
              ref={passwordRef}
              type="password" 
              id="password" 
              name="password" 
              required 
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="••••••••" 
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember" 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" 
              />
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Don't have an account? </span>
          <p href="#" className="ml-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"><Link to='/register'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
