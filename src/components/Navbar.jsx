import React,{useState} from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

    const handleClose = () => setNav(!nav)
    
  return (
    <div className='w-screen h-[80px] z-10 bg-violet-950 fixed drop-shadlow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex cursor-pointer items-center'>
                <h1 className='font-bold pr-4 text-white text-1xl sm:text-2xl'><a href="/"> RICHWAY GYM CENTER </a> </h1>
                <ul className='hidden md:flex text-white p-20 justify-between items-center '>
                  <li><a href="/">Home</a></li>
                  <li><Link to="about"  smooth={true} offset={-200} duration={500} >About</Link></li>
                  <li><Link to="support"  smooth={true} offset={-50} duration={500} >Support</Link></li>
                  <li><Link to="platforms"  smooth={true} offset={-100} duration={500} >Platforms</Link></li>
                  <li><Link to="membership"  smooth={true} offset={-50} duration={500} >Membership</Link></li>
                  <li> <a href="/login"> <button className='px-8 py-3 rounded-full text-white bg-violet-600'> LOGIN </button> </a> </li>
                </ul>
            </div>
            
            <div className='hidden md:flex pr-4 text-white bg-violet-600'>
                <button className='px-8 py-3 text-white bg-violet-600'>TRY US FOR FREE</button>
            </div>

            <div className='md:hidden mr-4 text-white' onClick={handleNav}>
                {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' /> }
              
            </div>
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute cursor-pointer bg-white w-full px-8 md:hidden'}>
            <li className='border-b-2 border-zinc-300 w-full'><a href="/">Home</a></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about"  smooth={true} offset={-200} duration={500} >About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support"  smooth={true} offset={-50} duration={500} >Support</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms"  smooth={true} offset={-100} duration={500} >Platforms</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="membership"  smooth={true} offset={-50} duration={500} >Membership</Link></li>
            <li> <a href="/login"> <button className=' border-b-2 border-zinc-300 w-full px-8 py-3 text-white bg-violet-600'> LOGIN </button> </a> </li>

          <div className='flex cursor-pointer flex-col my-4'>
             <button className='px-8 py-3 text-white bg-violet-600'>TRY US FOR FREE</button>
          </div>
        </ul>
    </div>
  )
}

export default Navbar