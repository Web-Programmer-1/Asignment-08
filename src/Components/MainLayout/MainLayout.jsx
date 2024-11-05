import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import CatagorisBtn from '../CatagorisBtn'

export default function MainLayout() {
  return (
        <div>
        <Navbar></Navbar> 
        <div className='min-h-[calc(100vh-232px)] container mx-auto'>


    <Outlet></Outlet>
    </div>
     
    
      
    </div>
  )
}
