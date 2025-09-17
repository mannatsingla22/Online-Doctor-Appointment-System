import React from 'react';
import { assets } from '../assets/assets';


const jobList = [
  {
    title: 'General Physician (MBBS)',
    department: 'Medical',
    type: 'Full-Time',
    location: 'HealthSync Hospital, Dehradun',
    description:
      'Responsible for outpatient consultation and inpatient care. Must have valid registration and experience in general medicine.',
  },
  {
    title: 'Staff Nurse',
    department: 'Nursing',
    type: 'Rotational Shifts',
    location: 'HealthSync Hospital, Dehradun',
    description:
      'Assist doctors in patient management, administer medications, and monitor vital signs.',
  },
  {
    title: 'Ambulance Driver',
    department: 'Emergency Response',
    type: 'Full-Time',
    location: 'HealthSync Emergency Unit, Dehradun',
    description:
      'Operate ambulance vehicles, assist paramedics in emergencies, and ensure timely patient transport.',
  },
  {
    title: 'Lab Technician',
    department: 'Diagnostics',
    type: 'Full-Time',
    location: 'HealthSync Lab Facility, Dehradun',
    description:
      'Handle lab equipment, conduct routine tests, and maintain reports for diagnosis support.',
  },
];

const ExploreJobs = () => {
  return (
    <div className='px-6 sm:px-10 md:px-20 py-12 bg-[#f9f9f9] text-gray-700'>
      <div className='text-center text-2xl mb-10 text-[#707070]'>
        <p>
          EXPLORE <span className='text-gray-700 font-semibold'>JOBS</span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-12 mb-16'>
        <img
          src={assets.contact_image}
          alt='hospital staff'
          className='w-full md:max-w-[380px] rounded-md shadow-md'
        />
        <div className='flex flex-col justify-center gap-5 text-sm text-gray-600'>
          <p>
            At <strong>HealthSync</strong>, we believe in building a better healthcare future with dedicated professionals like you. Explore roles across medical, nursing, emergency, and diagnostic services.
          </p>
          <p>
            Whether you're an experienced doctor or just starting your career as a caregiver, our dynamic team values passion, empathy, and innovation. Join us in transforming the way hospitals work!
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-20'>
        {jobList.map((job, index) => (
          <div
            key={index}
            className='border border-gray-200 p-6 rounded-md shadow-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer flex flex-col gap-3'
          >
            <h2 className='text-lg font-semibold'>{job.title}</h2>
            <p className='text-[14px]'>
              <b>Department:</b> {job.department}
            </p>
            <p className='text-[14px]'>
              <b>Type:</b> {job.type}
            </p>
            <p className='text-[14px]'>
              <b>Location:</b> {job.location}
            </p>
            <p className='text-[14px]'>{job.description}</p>
            <button className='mt-2 w-max border border-white bg-white text-black px-4 py-2 text-sm rounded hover:bg-black hover:text-white transition-all duration-300'>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreJobs;
