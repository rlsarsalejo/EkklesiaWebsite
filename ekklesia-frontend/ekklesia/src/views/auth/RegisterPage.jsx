import React, { useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context/ContextProvider.jsx';
import axiosClient  from '../../auth/axios.js'
function RegisterPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const {setUser,setToken} = useStateContext();
  const [errors, setErrors] = useState(null)

  const onSubmit = (ev) =>{
    ev.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmpasswordRef.current.value

    } 
    axiosClient.post('/signup', payload)
      .then(({data}) =>{
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err =>{
        const response = err.response;
        if(response && response.status === 422){
          setErrors(response.data.errors)
        }
      })
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {errors &&
            <div className=" text-red-500">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create Your Account</h2>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="username">Username</label>
            <input 
              ref={nameRef}
              type="text" 
              id="username" 
              name="username" 
              required 
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="Your username" 
            />
          </div>
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm_password">Confirm Password</label>
            <input 
             ref={confirmpasswordRef}
              type="password" 
              id="password_confirmation" 
              name="password_confirmation" 
              required 
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="••••••••" 
            />
          </div>
          <button 
          type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Already have an account? </span>
          <p href="#" className="ml-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"><Link to='/login'>Sign In </Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
