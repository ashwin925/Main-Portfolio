import React from 'react';
import './templates.css';

export default function Templates() {
  return (
    <div>
      <div className='templates-container h-[555px] w-[1210px] m-[5px]'>
        <div className="gradient-background"></div>
          <h1 className='heading text-5xl font-bold mb-6 z-20'>Components</h1>
        <div className='underline-bar'></div> 
           <p className='para text-white'>
            Looking for <span className='gradient-highlight font-bold'>Components</span>? Here you can find a collection of 
            <span className='elegant-highlight font-bold'> elegant </span> and 
            <span className='cool-highlight font-bold'> cool </span> looking Components that will blow your mind! Just copy and paste... 
            Easy as pie! Why waiting? Go grab the piece of code and use it in your projects. Worrying about 
            <span className='how-to-add-highlight font-bold'> how to add?</span> and 
            <span className='where-to-add-highlight font-bold'> where to add?</span> Below you are given answers for all your questions including 
            a <span className='preview-highlight font-bold'> Preview</span> of how the component looks. A comment was provided beside the line of code to let you change it the way you like!
          </p>
      </div>
    <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
      <div className="gradient-background-two"></div>  
    </div>
    <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
        <div className="gradient-background"></div>
      </div>
    <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
      <div className="gradient-background-two"></div>  
    </div>
  </div>
  );
}
