import React from 'react';
import './projects.css';

export default function Projects() {
  return (
    <div className='projects-container flex flex-col items-center justify-center h-[800px] w-full'>
      <div className='gradient-background inset-0 z-0'></div>
      <p className='heading h-[55px] text-5xl mb-[15px] font-extrabold z-20'>
        My Projects
      </p>
      <div className='w-[320px] h-1 bg-white mb-[25px]'></div>
      <div className='projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-20'>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 1</h2>
          <p className='text-white'>Short description of Project 1.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 2</h2>
          <p className='text-white'>Short description of Project 2.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 3</h2>
          <p className='text-white'>Short description of Project 3.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 4</h2>
          <p className='text-white'>Short description of Project 4.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 5</h2>
          <p className='text-white'>Short description of Project 5.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 6</h2>
          <p className='text-white'>Short description of Project 6.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 7</h2>
          <p className='text-white'>Short description of Project 7.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 8</h2>
          <p className='text-white'>Short description of Project 8.</p>
        </div>
        <div className='project-card'>
          <h2 className='text-xl font-bold text-white mb-2'>Project 9</h2>
          <p className='text-white'>Short description of Project 9.</p>
        </div>
      </div>
    </div>
  );
}
