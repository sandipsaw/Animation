import React from 'react'
import gsap from 'gsap'
import { useState } from 'react'
const App = () => {
  const [path, setpath] = useState("M 50 200 Q 650 0 1300 200")
  const finalPath = "M 50 100 Q 650 100 1300 100"
  const handleEnter = (dets)=>{
    const newPath = `M 50 100 Q ${dets.clientX} ${dets.clientY} 1300 100`
    setpath(newPath);
    gsap.to("svg path",{
      attr:{d:path}
    })
  }
  
  const handleLeave = ()=>{
    gsap.to("svg path",{
      attr:{d:finalPath},
      ease: "elastic.out(1,0.1)",
      duration:2
    })
  }

  return (
    <div className='bg-black h-screen w-full'>
      <div onMouseMove={handleEnter} onMouseLeave={handleLeave} className='h-60 w-full  font-extrabold'>
        <svg width="1300" height="200" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 100 Q 650 0 1300 100" stroke="white" fill="transparent" />
        </svg>
      </div>

    </div>
  )
}

export default App