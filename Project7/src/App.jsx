import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useGSAP(() => {
    var tl = gsap.timeline()
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'#section2',
      scroller:'body',
      // markers:true,
      start:'top 50%',
      end:'top -50%',
      scrub:2,
    }
  })
  

    tl.from("#logo", {
      y: -10,
      opacity: 0,
      duration: 0.5,
      delay: 1
    })
    tl.from("#nav h4", {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.from("#section1 h2", {
      x: -200,
      opacity: 0,
      duration: 0.8
    })
    tl.from("#section1 p", {
      x: -200,
      opacity: 0,
      duration: 0.8
    })
    tl.from("#section1 button", {
      y: 5,
      opacity: 0,
      duration: 1
    })
    tl.from("#section1 img", {
      scale: 0,
      opacity: 0,
      duration: 1
    }, "-=1.5")
    tl.from("#company img", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl2.from("#service",{
      opacity:0,
      y:30
    })
    tl2.from(".line1.left",{
      opacity:0,
      x:-200,
      duration:0.8,
      scrub:1
    },"lineA")
    tl2.from(".line1.right",{
      opacity:0,
      x:200,
      duration:0.8,
      scrub:1
    },"lineA")

    tl2.from(".line2.left",{
      opacity:0,
      x:-200,
      duration:0.8,
      scrub:1
    },"lineB")
    tl2.from(".line2.right",{
      opacity:0,
      x:200,
      duration:0.8,
      scrub:1
    },"lineB")
    tl2.from(".line3.left",{
      opacity:0,
      x:-200,
      duration:0.8,
      scrub:1
    },"lineC")
    tl2.from(".line3.right",{
      opacity:0,
      x:200,
      duration:0.8,
      scrub:1
    },"lineC")

    gsap.from(".case",{
      opacity:0,
      x:400,
      duration:0.4,
      scrollTrigger:{
        trigger:".case",
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 60%',
        scrub:2
      }
    })



    gsap.from("#creativity",{
      opacity:0,
      scale:0,
      duration:0.5,
      scrollTrigger:{
        trigger:"#creativity",
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 60%',
        scrub:2
      }
    })
    gsap.from("#footer .foot",{
      opacity:0,
      scale:0,
      duration:0.5,
      scrollTrigger:{
        trigger:"#footer",
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 60%',
        scrub:2
      },
      stagger:0.3
    })
    

  })
  return (
    <div>
      <div className='flex justify-between px-20 pt-5 items-center'>
        <div id='logo'>
          <h1 className='text-2xl font-semibold flex items-center gap-1' style={{ fontFamily: "manrope" }} > <PiStarFourFill size={35} className='rotate-45' /> WizardZ</h1>
        </div>
        <div id='nav' className='flex justify-between items-center gap-5 text-md font-semibold'>
          <h4>About us</h4>
          <h4>Serbices</h4>
          <h4>Use Cases</h4>
          <h4>Prices</h4>
          <h4>Blog</h4>
          <h4 className='border px-4 py-2 rounded'>Request a quote</h4>
        </div>
      </div>
      <div id='section1' className='w-full px-20 pt-10 flex'>
        <div id='left' className='w-1/2'>
          <h2 className='text-6xl font-medium leading-17' style={{ fontFamily: "Machina" }}>Navigating the digital landscape for success</h2>
          <p className='pt-7 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dicta dolorum, quidem facere quos quasi optio debitis tenetur quisquam eius est minus. Mollitia sed placeat velit autem minima dolore facilis eos dolor omnis voluptatem,  id doloribus repellat?</p>
          <div className='pt-7'><button className='text-xl px-6 py-3 border rounded-xl items-center text-white bg-black font-semibold'>Book a Consultation</button></div>
        </div>
        <div id='right' className='w-1/2 relative'>
          <img className='w-9/10 absolute right-0' src='https://www.cappsinfosolutions.com/images/hero.svg' /></div>

      </div>
      <div id='company' className='flex gap-20 pt-5 items-center justify-center'>
        <img className='w-35 h-20' src='https://static.vecteezy.com/system/resources/previews/019/136/319/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg' />
        <img className='w-35 h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7wimLpRa8bOrabA-hwCNrU-RGasQpzelpA&s' />
        <img className='w-30 h-20' src='https://www.mac-group.com/wp-content/uploads/2018/02/Hubspot-370x254.png' />
        <img className='w-30 h-20' src='https://images.seeklogo.com/logo-png/42/1/notion-logo-png_seeklogo-425508.png' />
        <img className='w-30 h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30a_gyWmYujcqplcFO0k1Xl8AEnXJozjO4A&s' />
        <img className='w-30 h-20' src='https://images.icon-icons.com/2389/PNG/512/zoom_logo_icon_144706.png' />
      </div>

      <div id='section2' className='px-20 w-full h-full'>

        <div id='service' className='flex w-7/10 gap-5 mt-5 mb-10 border'>
          <h3 className='text-3xl font-semibold bg-[#B9FF66] px-4 py-2 rounded'>Services</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis ea beatae, vel consectetur est deleniti id! Expedita, dolorum neque alias dolore vitae .</p>
        </div>

        <div id='component' className='w-full  h-60 flex gap-10 flex-wrap justify-between'>

          <div className='left line1 w-48/100 h-55 rounded-xl shadow-[0px_5px_0px_rgba(1,1,1)] border-2 p-7 flex  items-center bg-[#C4FF66]'>
            <div className='flex flex-col  w-1/2 justify-between  gap-15'>
              <div><h3 className='text-2xl'>Search engine optimization</h3></div>
              <div><button className='flex gap-3 text-2xl '> <MdArrowOutward size={35} className='border rounded-full p-1' />learn more</button></div>
            </div>
            <div className='w-1/2 '><img className='' src='https://teckgeekz.com/services/seo.svg' /></div>
          </div>

          <div className='right line1 w-48/100 h-55 rounded-xl  shadow-[0px_5px_0px_rgba(1,1,1)] border-2 p-7 flex '>
            <div className='flex flex-col  w-1/2 justify-between  gap-15'>
              <div><h3 className='text-2xl'>Search engine optimization</h3></div>
              <div><button className='flex gap-3 text-2xl '> <MdArrowOutward size={35} className='border rounded-full p-1' />learn more</button></div>
            </div>
            <div className='w-1/2 bg-[#C4FF66]'><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhlJDGBW09W372dxn3RTbByQogHyTJybJqxRhxZgID8x98R0Uw' /></div>
          </div>

          <div className='left line2 w-48/100 h-55 rounded-xl shadow-[0px_5px_0px_rgba(1,1,1)] border-2 p-7 flex bg-[#191A23] text-white border-black'>
            <div className='flex flex-col  w-1/2 justify-between  gap-15'>
              <div><h3 className='text-2xl'>Search engine optimization</h3></div>
              <div><button className='flex gap-3 text-2xl '> <MdArrowOutward size={35} className='border rounded-full p-1' />learn more</button></div>
            </div>
            <div className='w-1/2'><img className='w-40' src='https://cdn.prod.website-files.com/635ffed1169faef704ed6139/6367cdea85ecb46752a0335c_ezgif.com-gif-maker%20(9).gif' /></div>
          </div>

          <div className='right line2 w-48/100 h-55 rounded-xl shadow-[0px_5px_0px_rgba(1,1,1)] border-2 p-7 flex bg-[#C4FF66]'>
            <div className='flex flex-col  w-1/2 justify-between  gap-15'>
              <div><h3 className='text-2xl'>Search engine optimization</h3></div>
              <div><button className='flex gap-3 text-2xl '> <MdArrowOutward size={35} className='border rounded-full p-1' />learn more</button></div>
            </div>
            <div className='w-1/2'><img className='w-40' src='https://cdn.prod.website-files.com/635ffed1169faef704ed6139/6367cdea85ecb46752a0335c_ezgif.com-gif-maker%20(9).gif' /></div>
          </div>

          <div className='left line3 w-48/100 h-55 rounded-xl  shadow-[0px_5px_0px_rgba(1,1,1)] border-2 p-7 flex '>
            <div className='flex flex-col  w-1/2 justify-between  gap-15'>
              <div><h3 className='text-2xl'>Search engine optimization</h3></div>
              <div><button className='flex gap-3 text-2xl '> <MdArrowOutward size={35} className='border rounded-full p-1' />learn more</button></div>
            </div>
            <div className='w-1/2'><img className='w-45' src='https://5.imimg.com/data5/SELLER/Default/2025/8/533045888/DR/KE/TE/38536831/proof-blazer-500x500.png' /></div>
          </div>


          <div className='right line3 w-48/100 h-55 rounded-xl  shadow-[0px_5px_0px_rgba(1,1,1)] border-2 p-7 flex bg-[#191A23] text-white border-black'>
            <div className='flex flex-col  w-1/2 justify-between  gap-15'>
              <div><h3 className='text-2xl'>Search engine optimization</h3></div>
              <div><button className='flex gap-3 text-2xl '> <MdArrowOutward size={35} className='border rounded-full p-1' />learn more</button></div>
            </div>
            <div className='w-1/2'><img className='' src='https://teckgeekz.com/services/analytics.svg' /></div>
          </div>

          <div id='creativity' className='p-10 border w-100% flex justify-between relative items-center bg-[#F3F3F3] rounded-xl'>
            <div className='w-1/2'>
              <h2 className='text-3xl font-medium pb-3'>Lets make things happen</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus quisquam porro vero temporibus minima, debitis fugiat sequi ratione. Error fuga asperiores deserunt dignissimos aliquam excepturi. Reiciendis nam sed tempore?</p>
              <div className='pt-7'><button className='text-xl px-6 py-3 border rounded-xl items-center text-white bg-black font-semibold'>Book a Consultation</button></div>
            </div>
            <div className='px-10 w-100 absolute right-0 bg-[#F3F3F3]'><img className='w-60 bg-[#F3F3F3]' src='https://trianglish.com/services/Illustration.svg' /></div>
          </div>

          <div  className='case flex w-6/10 gap-5 pt-5 pb-5'>
            <div><h3 className='text-3xl font-semibold bg-[#B9FF66] px-4 py-2 rounded'>CaseStudy</h3></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis ea beatae, vel consectetur est deleniti id! Expedita, dolorum.</p>
          </div>

          <div id='footer' className=' flex border bg-[#1F1F1F] text-white rounded-xl'>
            <div className='foot px-12 py-8 border flex flex-col justify-between h-60'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit architecto aut officia ipsa laboriosam sunt iure. Quaerat, Lorem, ipsum. Lorem, ipsum. magni. Lorem ipsum dolor sit amet.</p>
              <button className='flex gap-2 text-2xl text-[#B9FF66] '>learn more <MdArrowOutward size={30} className='text-[#B9FF66]' /></button>
            </div>

            <div className='foot px-12 py-8 border flex flex-col justify-between h-60'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit architecto aut officia ipsa laboriosam sunt iure. Quaerat, Lorem, ipsum. Lorem, ipsum. magni. Lorem ipsum dolor sit amet.</p>
              <button className='flex gap-2 text-2xl text-[#B9FF66] '>learn more <MdArrowOutward size={30} className='text-[#B9FF66]' /></button>
            </div>

            <div className='foot px-12 py-8 border flex flex-col justify-between h-60'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit architecto aut officia ipsa laboriosam sunt iure. Quaerat, Lorem, ipsum. Lorem, ipsum. magni. Lorem ipsum dolor sit amet.</p>
              <button className='flex gap-2 text-2xl items-center text-[#B9FF66] '>learn more <MdArrowOutward size={30} className='text-[#B9FF66]' /></button>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
// style={{ fontFamily: "manrope" }} 
export default App