import React from 'react'
import SideBar from './../SideBar/SideBar';
import Navbar from './../Navbar/Navbar';
import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';


export default function MasterLayOut({loginData,logout}) {
  return (
    <>
    <div className="container-fluid p-0">
      <div className="d-flex">
        <div className="sideebar"> <div><SideBar loginData={loginData} logout={logout}/> </div> </div>
        <div className="w-100"><div><Navbar loginData={loginData}/><Header/><Outlet/></div> </div>
       
      </div>
    </div>
    </>
  )
}
