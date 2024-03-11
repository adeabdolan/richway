import React from 'react'
import {UserIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import {DesktopComputerIcon, SupportIcon} from '@heroicons/react/solid'
import supportimg from '../images/supportimg.jpg'

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={supportimg} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-white text-slate-300 text-center '>SUPPORT</h2>
                <h3 className='text-4xl text-center text-violet-600 font-bold py-6 '>FINDING THE RIGHT TEAM</h3>
                <p className='text-2xl font-medium text-white'>Need Assistance?

                    Our dedicated support team is here to help you with any questions or concerns you may have. Whether it's about membership, class schedules, or anything else related to your fitness journey, we're just a message away.

                    Feel free to reach out to us using the contact form below or give us a call at [Phone Number]. Your satisfaction is our priority, and we're committed to providing you with the best support possible.

                    Join us on the path to a healthier lifestyle, and let us assist you every step of the way!
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <UserIcon className='w-16 p-4 bg-violet-600 text-white rounded-lg mt-[-4rem] ' />
                        <h3 className='font-bold text-2xl my-6 '>Membership</h3>
                        <p className='text-gray-600'>
                        Embark on a journey to a healthier and stronger you with a Richway Gym Center membership, offering exclusive access to cutting-edge facilities, expert trainers, and a supportive community dedicated to helping you achieve your fitness goals.
                        </p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-violet-600 cursor-pointer'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-violet-600 text-white rounded-lg mt-[-4rem] ' />
                        <h3 className='font-bold text-2xl my-6 '>Technical Support</h3>
                        <p className='text-gray-600'>
                            For technical support related to Richway Gym Center, kindly reach out to our dedicated support team at techsupport@richwaygym.com for prompt assistance with any equipment or online platform issues.
                        </p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-violet-600 cursor-pointer'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <DesktopComputerIcon className='w-16 p-4 bg-violet-600 text-white rounded-lg mt-[-4rem] ' />
                        <h3 className='font-bold text-2xl my-6 '>Media Inquiries</h3>
                        <p className='text-gray-600'>
                        For media inquiries regarding Richway Gym Center, please contact our press relations team at media@richwaygym.com for comprehensive information on our fitness programs, success stories, and upcoming events."
                        </p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-violet-600 cursor-pointer'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support