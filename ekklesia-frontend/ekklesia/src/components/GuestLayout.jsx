import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavbarGuest from './NavbarGuest';
import { useStateContext } from '../Context/ContextProvider'
export default function GuestLayout() {
 const {token} = useStateContext();
 if(token){
    return  <Navigate to="/dashboard" />
 }
  return (
    <div>   
    <NavbarGuest />

    <Outlet />
    </div>
   
  )
}
