import React, { useState } from 'react'
import image from './assets/mountain.jpg'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import sheriyans from './assets/sheryians.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {
  var  tl = gsap.timeline()
  useGSAP(()=>{
    tl.from("#full",{
      x:420,
      opacity:0.5,
      duration:0.8
    })
    tl.from("#full h3",{
      opacity:0,
      y:30,
      duration:0.4,
      stagger:0.3
    })
    tl.from("#full .close",{
      opacity:0
    })

  })

  tl.pause()
  const clickHandle = () =>{
     tl.play()
  }
  const closeHandler = () =>{
    tl.reverse()
  }
  return (
    <div className=' w-full h-screen overflow-x-hidden relative'>
      <div className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}>
        <div id='full' className='w-[25%] h-screen bg-[#b9d3e777] absolute backdrop-blur-3xl flex flex-col gap-5  items-center justify-center font-semibold right-0 font-serif text-3xl text-white z-10'>
        <IoClose onClick={closeHandler} size={35} className='close absolute top-5 right-5' />
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Course</h3>
        <h3>Service</h3>
        <h3>Contact</h3>
         </div>
         <IoMenu onClick={clickHandle} size={35} className='text-white absolute top-5 right-5'/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><h1 className='text-6xl font-medium text-[#dbd3ba]'>Welcome to Sheriyans.. Coding School Bachooo!</h1></div>
        <div className='text-4xl font-bold text-white pt-5 pl-10 flex '>
          <img className='w-12' src={sheriyans} />
          <h1>Sheriyans</h1>
        </div>
        
      </div>
    </div>
  )
}

export default App