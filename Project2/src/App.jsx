import React from 'react'
import {ScrollTrigger } from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(()=>{
  gsap.to('#page1 #box1',{
    rotate:360,
    duration:2,
    delay:1
  })
  gsap.from('#page2 #box2',{
    rotate:360,
    duration:2,
    scale:0,
    scrollTrigger: {
      trigger: '#page2 #box2',
      scroller:'body',
      // markers:true,
      start: 'top 70%',
      end:'top 20%',
      scrub: 2,
    }
  })
  gsap.to('#page4 h1',{
    transform:'translateX(-95%)',
    scrollTrigger: {
      trigger: '#page4',
      scroller:'body',
      // markers:true,
      start: 'top 0%',
      end:'top -100%',
      scrub: 5,
      pin:true
    }
  })
  gsap.from('#page3 h1',{
    x:500,
    opacity:0,
    duration:1,
    scrollTrigger: {
      trigger: '#page3 h1',
      scroller:'body',
      // markers:true,
      start: 'top 50%',
    }
  })
  gsap.from('#page3 h2',{
    x:-500,
    opacity:0,
    duration:1,
    scrollTrigger: {
      trigger: '#page3 h2',
      scroller:'body',
      // markers:true,
      start: 'top 70%'
    }
  })
},[])
  return (
    <div>
      <div id='page1' className='w-100% h-screen bg-red-500'>
        <div id='box1' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-300'></div>
      </div>
      <div id='page2' className='relative w-100% h-screen bg-blue-500'>
        <div id='box2' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-300'></div>
      </div>
      <div id='page4' className='w-100% h-screen bg-yellow-500'>
        <h1 className='text-[500px] font-medium whitespace-nowrap  uppercase leading-none'>Sheriyans</h1>
      </div>
      <div id='page3' className='relative w-100% h-screen bg-pink-500'>
        
        <div id='box3' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl uppercase text-white font-bold pb-5'>Physics Wallah</h1>
        <h2 className='text-4xl text-black font-bold'>Hello Baccho Kya Hal Chal</h2>
        </div>
      </div>
    </div>
  )
}

export default App