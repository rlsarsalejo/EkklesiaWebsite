import {React, useEffect} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../Context/ContextProvider';
import Navbar from './DefaultNavbar'
import axiosClient from '../auth/axios';
export default function DefaultLayout() {
    const {user,token,setUser,setToken,} = useStateContext();

    useEffect(() => {
      if (token && !user.name) {
          // Fetch user data if we have a token but no user info
          axiosClient.get('/user')
              .then(({data}) => {
                  setUser(data);
              })
              .catch(() => {
                  setToken(null);
              });
      }
  }, [token, user, setUser, setToken]);
    if(!token){
        return <Navigate to="/" />
    }
    const logout = ev =>{
      ev.preventDefault()
      axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
        localStorage.removeItem('USER')
      })
    }


  return (
    <div>
        <Navbar username={user.name} onLogout={logout} />
        <Outlet />  
    </div>  
  )
}
