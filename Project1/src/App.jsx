import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const App = () => {
  const t1 = gsap.timeline()
  useGSAP(()=>{
    t1.from('#nav',{
      y:-20,
      opacity:0,
      duration:1,
      delay:0.5
    })
    t1.from('#nav h3',{
      y:-20,
      opacity:0,
      duration:0.5,
      stagger:0.3
    })
    t1.from('#name',{
      y:-4,
      opacity:0,
      scale:0.2,
      duration:1,
      stagger:1
    })
    
    
  },[])
  return (
    <div className='bg-black w-100% h-158'>
      <nav id='nav' className='text-white flex justify-between items-center p-5 bg-black'>
        <h2 className='text-xl'>Workplace</h2>
        <div className='flex gap-10 text-lg '>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Service</h3>
          <h3>Contact</h3>
        </div>
      </nav>

      <h1 id='name' className='text-7xl opacity-50 uppercase text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Sandip saw</h1>
      
    </div>
  )
}

export default App