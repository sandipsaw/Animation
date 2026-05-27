import React from 'react'
import gsap from 'gsap';
import { FaLongArrowAltRight } from "react-icons/fa";

const App = () => {
  const handleWheel = (dets) =>{
    if(dets.deltaY>0){
      gsap.to('#marque',{
        transform:'translateX(-100%)',
        duration:4,
        repeat:-1,
        ease:'none'
      })
      gsap.to('#marque #img',{
        rotate:180
      })
    }else{
      gsap.to('#marque',{
        transform:'translateX(100%)',
        duration:4,
        repeat:-1,
        ease:'none'
      })
      gsap.to('#marque #img',{
        rotate:0
      })
    }
  }

  return (
    <div onWheel={handleWheel}>
      <div className='w-full h-screen bg-blue-300'>page1</div>
      <div className='w-full h-screen bg-black relative overflow-x-hidden'>
        <div className='bg-yellow-200  uppercase absolute top-1/2 -translate-y-1/2 flex items-center text-center justify-center overflow-x-hidden'>
          <div id='marque' className='shrink-0 px-3 items-center'>
            <h1 className='text-black text-4xl font-semibold font-sans flex items-center'>Follow sheriyans coding school < FaLongArrowAltRight size={60} id='img' className='px-4' /> 🫶 </h1>
          </div>
          <div id='marque' className='shrink-0 px-3 items-center'>
            <h1 className='text-black text-4xl font-semibold font-sans flex items-center'>Follow sheriyans coding school < FaLongArrowAltRight size={60} id='img' className='px-4' /> 🫶 </h1>
          </div>
          <div id='marque' className='shrink-0 px-3 items-center'>
            <h1 className='text-black text-4xl font-semibold font-sans flex items-center'>Follow sheriyans coding school < FaLongArrowAltRight size={60} id='img' className='px-4' /> 🫶 </h1>
          </div>
          <div id='marque' className='shrink-0 px-3 items-center'>
            <h1 className='text-black text-4xl font-semibold font-sans flex items-center'>Follow sheriyans coding school < FaLongArrowAltRight size={60} id='img' className='px-4' /> 🫶 </h1>
          </div>
        </div>
      </div>
      <div className='w-full h-screen bg-red-300'>page1</div>
    </div>
  )
}

export default App