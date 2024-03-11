import React from 'react'
import {CheckIcon} from '@heroicons/react/solid'
import { Link } from 'react-scroll'

const Membership = () => {
  return (
    <div name='membership' className='w-full text-white my-24 '>
        <div className='w-full h-[800px] bg-violet-600 absolute mix-blend-overlay '></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl text-white'>PRICING</h2>
                <h3 className='text-5xl py-8 text-white font-bold'>The right price for your research.</h3>
                <p className='text-3xl text-white'>
                For detailed information about membership pricing and exclusive offers at Richway Gym Center, please visit our official website or contact our membership services at <Link>contact@richwaygym.com</Link>. We offer a range of flexible plans to cater to your fitness goals, ensuring an affordable and tailored experience for every member of our thriving fitness community. Your journey to a healthier lifestyle begins with Richway Gym Center - where fitness meets affordability.
                </p>
            </div>

            <div className='grid md:grid-cols-3'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase py-1 px-3 rounded-2xl bg-violet-600 text-white text-small'>Beginner</span>
                    <div>
                        <p className='text-6xl text-center font-bold py-4 flex'>$90<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl text-center text-slate-500'>RECURS FOR 3 MONTHS</p>
                    <p className='text-xl text-center font-bold text-black py-8'>Perfect for beginners!</p>
                    <button className='w-full py-4 round-lg bg-violet-600 text-white my-4'>SELECT</button>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />24/7 Gym Access</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Trainers</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Unlimited access to yoga classes</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Use of Lockers and Showers</p>
                        
                    </div>
                </div>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase py-1 px-3 rounded-2xl bg-violet-600 text-white text-small'>PRO</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$100<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl text-center text-slate-500'>RECURS FOR 12 MONTHS</p>
                    <p className='text-xl text-center font-bold text-black py-5'>Great for those who take wellness seriously</p>
                    <button className='w-full py-4 ounded-2xl bg-violet-600 text-white my-4'>SELECT</button>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />24/7 Gym Access</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Trainers</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Unlimited access to yoga classes</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Use of Lockers and Showers</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Weekday pool access</p>
                    </div>
                </div>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase py-1 px-3 rounded-2xl bg-violet-600 text-white text-small'>VIP</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$125<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl text-center text-slate-500'>RECURS FOR 1 MONTH</p>
                    <p className='text-xl text-center font-bold text-black py-5'>Unlimited access to services</p>
                    <button className='w-full py-4 ounded-2xl bg-violet-600 text-white my-10'>SELECT</button>
                    <div className='text-2xl'>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />24/7 Gym Access</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Personal Trainer</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Unlimited access to yoga classes</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Use of Lockers and Showers</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Access to pool 7 days a week</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />12% off on all store products</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Free gym T-shirt</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Membership