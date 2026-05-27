import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App = () => {
  var clutter = ""

  useGSAP(() => {
    gsap.from('#text h1 span', {
      y: 50,
      opacity:0,
      duration: 0.7,
      delay: 0.5,
      stagger:{
        amount:1.5,
        grid:[2,1],
        axis:'y',
        from:'random',
        ease: "power1.out",
      }
    })
  })
  return (
    <div className='w-full h-screen relative bg-black'>
      <div id='text' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
        <h1 className='text-8xl font-semibold '>
          {"sandeep".split("").map((char, index) => (
            <span key={index} className='inline-block'>
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default App