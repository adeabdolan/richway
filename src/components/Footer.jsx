import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='w-full mt-24 bg-violet-600 text-white py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 border-b-2 border-gray-600'>
          <div>
            <h6 className='font-bold uppercase pt-2'>Solutions</h6>
            <ul>
              <li className='py-1'>Marketing</li>
              <li className='py-1'>Analytics</li>
              <li className='py-1'>Commerce</li>
              <li className='py-1'>Data</li>
              <li className='py-1'>Cloud</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
              <li className='py-1'>Pricing</li>
              <li className='py-1'>Documentation</li>
              <li className='py-1'>Guides</li>
              <li className='py-1'>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
              <li className='py-1'>About</li>
              <li className='py-1'>Blog</li>
              <li className='py-1'>Jobs</li>
              <li className='py-1'>Press</li>
              <li className='py-1'>Partners</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
              <li className='py-1'>Claims</li>
              <li className='py-1'>Privacy</li>
              <li className='py-1'>Terms</li>
              <li className='py-1'>Policies</li>
              <li className='py-1'>Conditions</li>
            </ul>
          </div>
          <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to Our newsletter</p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'>
              <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" placeholder='Enter your Email' />
              <button className='p-2 bg-violet-900 rounded-full mb-4'>Subscribe</button>
            </form>
          </div>
        </div>
        <hr className='item-white'/>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row bg-violet-600 text-center text-white'>
          <p className='py-4'> 
            © {year} Abdulrasaq Adeogun
          </p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />

        </div>
        </div>
    </div>
  )
}

export default Footer