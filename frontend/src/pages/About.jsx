import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to <strong>HealthSync</strong>, your reliable partner in simplifying hospital operations and patient care. At HealthSync, we recognize the challenges healthcare providers face — from managing appointments and patient records to streamlining communication across departments.</p>
          <p>    We are dedicated to delivering excellence in healthcare management solutions. Our platform integrates the latest technologies to improve efficiency, enhance patient experience, and ensure data security. Whether it's handling daily tasks or long-term records, HealthSync is here to support hospitals and patients every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p> Our vision is to revolutionize the healthcare ecosystem by creating a smart, connected platform that bridges the gap between patients and healthcare providers. We aim to ensure that everyone receives timely, quality care with minimal hassle — anytime, anywhere.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
