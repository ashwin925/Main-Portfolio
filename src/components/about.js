import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className='about-container flex flex-col items-center justify-center h-screen w-full relative overflow-hidden'>
      <div className='gradient-background absolute inset-0 z-0'></div>

      <p className='heading text-6xl font-extrabold mb-6 z-20'>
        About Me
      </p>

      <div className='w-[320px] h-1 bg-white mb-5'></div> 

      <p className='para text-lg leading-relaxed tracking-wide max-w-4xl text-center z-20'>
        I’m <span className='highlight'>Ashwin Sundar</span>, a dedicated <span className='highlight'>full stack developer</span> on a mission to transform ideas into reality. 
        With a passion for <span className='highlight'>web technologies</span>, I thrive on creating elegant solutions that inspire and engage. 
        Every line of code I write brings me closer to my dream of making a positive impact through technology. 
        <br /><br />
        I believe in the power of <span className='highlight'>collaboration</span> and the importance of <span className='highlight'>continuous learning</span>. 
        My journey is fueled by curiosity and creativity, guiding me to build applications that resonate with users. 
        Join me as I explore new horizons and strive for excellence in every project!
      </p>
    </div>
  );
}
