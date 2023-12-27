
import { useEffect, useState } from "react"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "../src/store/authSlice"
import { useDispatch } from "react-redux"
import { flushSync } from "react-dom"
import { Outlet } from "react-router-dom"

function App() {
  const[loading,SetLoading]=  useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
       if(userData){
          dispatch(login({userData}))
       }else{
        dispatch(logout())
       }
    })
    .finally(()=>SetLoading(false))
  },[])



 return !loading ?(
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header/>
      <main>
         <Outlet />
      </main>
      <Footer/>
    </div>
  </div>

 ):null;

}


export default App
