import React from 'react'
import gsap from 'gsap'
import { useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
const App = () => {
  const [text, settext] = useState("")
  const handleMove = (dets) => {
    gsap.to("#cursor", {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.5,
      ease: "power1.out",
    })

  }
  const handlemove = () => {
    settext("View more")
    gsap.to('#cursor',{
      scale:2.5,
      
    })
  }
  const handleleave = () =>{
    settext("")
    gsap.to('#cursor',{
      scale:1
    })
  }
  return (
    <div>
      <div onMouseMove={handleMove} className='w-full h-screen text-md bg-black'>
        <div id='cursor' className='h-10 w-10 bg-white rounded-full fixed top-0 left-0 pointer-events-none text-md leading-0'>
        <MdOutlineArrowOutward className='text-xl p-1 w-full h-full'></MdOutlineArrowOutward>
        </div>
        {/* <div className='w-150 h-80 bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div> */}
        <img onMouseMove={handlemove} onMouseLeave={handleleave} className='' src='https://images.unsplash.com/photo-1778930363350-86f7ea92aed0?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className='w-full h-screen bg-red-500'>page1</div>
        <div className='w-full h-screen bg-sky-500'>page1</div>
        <div className='w-full h-screen bg-blue-500'>page1</div>
      </div>
    </div>
  )
}

export default App