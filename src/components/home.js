import React from 'react';
import './home.css';


export default function Homepage(){
  return(
    <div className="home flex h-[545px] w-[1200px] rounded-xl">
      <div className='profile_desc flex h-[290px] w-[600px] rounded-xl overflow-hidden transparent'>
        <div className="container mx-auto py-4 px-4">
        <p className=" gold-gradient text-5xl sm:text-4xl font-bold leading-tight mb-2" style={{ color: '#8fbc8f' }}>
          Yo! Howdy! I'm
        </p>
          <p className='name'>Ashwin</p>
          <p className="text-base sm:text-lg font-medium text-white leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Crafting code from front to back,<br />
            A full stack on the perfect track.<br />
            Turning ideas into seamless flow,<br />
            I build the web and watch it grow!
          </p>
        </div>
      </div>
  <div className='image flex h-[250px] w-[230px] rounded-xl bg-transparent'>
    <h3>image</h3>
  </div>
  <div className='button flex h-[45px] w-[150px] rounded-xl bg-transparent'>
    <p>Let's Rock </p>
  </div>
</div>
  );
}