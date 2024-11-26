import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Toprated from './components/Toprated'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Store from './components/Store'
import Order from './components/Order'

const App = () => {
  const [order,setorder]=useState(true);
  const handleorder=()=>{
      setorder(!order)
  }
  return (
    <>
    <Navbar handleorder={handleorder}></Navbar>
    <Hero handleorder={handleorder}></Hero>
    <Trending handleorder={handleorder}></Trending>
    <Store></Store>
   {/* <Banner></Banner> */}
    <Toprated></Toprated>
    <Footer></Footer>
    <Order handleorder={handleorder}></Order>
    

    </>
    
  )
}

export default App