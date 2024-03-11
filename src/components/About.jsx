import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-violet-600 text-5xl'>WELCOME TO OUR GYM</h1>
                <p className='text-3xl m-3 py-6 text-gray-600'>
                Welcome to <span className='text-violet-600'>Richway Gym Center</span>,  where fitness meets inspiration! We are not just a gym; we are a community committed to helping you achieve your health and wellness goals. At <span className='text-violet-600'>Richway Gym Center</span>, we believe that fitness is not just about lifting weights or running on a treadmill; it's a journey towards a healthier, happier, and more confident you.
                <br />
                Our state-of-the-art facilities provide the perfect environment for your fitness journey, whether you're a seasoned athlete or just starting your fitness adventure. We offer a wide range of equipment, expert trainers, and a variety of classes to keep your workouts engaging and effective.
                <br />
                What sets us apart is our dedication to creating a supportive and encouraging community. We understand that everyone's fitness journey is unique, and our team is here to guide and motivate you every step of the way. Whether you're looking to lose weight, build muscle, improve flexibility, or simply maintain a healthy lifestyle, we have the resources and expertise to help you reach your goals.
                <br />
                Join <span className='text-violet-600'>Richway Gym Center</span> and become a part of a fitness family that celebrates every achievement, no matter how big or small. Your journey to a healthier and stronger you starts here. Let's make every workout count!
                </p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-5xl font-bold text-violet-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-5xl font-bold text-violet-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Open Work</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-5xl font-bold text-violet-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Membership</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About