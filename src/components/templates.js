//import React from 'react';
import React, { useState } from 'react'; // Import useState to manage state
import './templates.css';

export default function Templates() {
  const [activeTab, setActiveTab] = useState('preview'); // Add state for active tab

  return (
    <div>
      <div className='templates-container h-[555px] w-[1210px] m-[5px]'>
        <div className="gradient-background"></div>
          <h1 className='heading text-5xl font-bold mb-6 z-20'>Components</h1>
        <div className='underline-bar'></div> 
          <p className='para text-white w-[900px]'>
            Looking for <span className='gradient-highlight font-bold'>Components</span>? Here you can find a collection of 
            <span className='elegant-highlight font-bold'> elegant </span> and 
            <span className='cool-highlight font-bold'> cool </span> looking Components that will blow your mind! Just copy and paste... 
            Easy as pie! Why waiting? Go grab the piece of code and use it in your projects. Worrying about 
            <span className='how-to-add-highlight font-bold'> how to add?</span> and 
            <span className='where-to-add-highlight font-bold'> where to add?</span> Below, you are given answers for all your questions including 
            a <span className='preview-highlight font-bold'> Preview</span> of how the component looks like. A comment was provided beside the line of code to let you change it the way you like!
          </p>
          <p className='heading text-3xl font-bold mb-6 z-20 mt-[30px] mr-[800px]'>CSS</p>
        <div className=' bg-white w-[80px] h-[4px] mt-[-8px] mb-[20px] mr-[795px] z-20'></div>
          <p className='text-white w-[800px] '>
            In this section we would see Advanced CSS 
            Components which you can use in your projects. A 
            <span className='gradient-preview font-bold'> preview with code </span> 
            is provided for you to specifically select whatever you like, and  
            <span className='gradient-comments font-bold'> comments </span> 
            are also provided for you to easily identify what line of code does what, cool right? Take a look at the awesome
            components given below!
          </p>
          <div class="warning-box flex h-[48px] w-[302px] mt-7 pl-[13px] pb-[3px] rounded-lg">
            <p> You need to know CSS for this</p>
          </div>
      </div>
      
      <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
        <div className="gradient-background-two">
          <p className='text-white justify-center text-center w-[900px]'>
            If you are <span className='how-to-add-highlight font-bold'>New to CSS</span>, it is recommended to have a look on <u><span className='preview-highlight font-bold'>CSS</span></u>, where you can learn basics of how CSS works with HTML to display a wonderful look. If you have enough knowledge about CSS lets move on!. Below the components are provided for each section where you can copy and modify as you want!.
          </p>

          {/* Tab Component */}
          <div className="content-container h-[415px] w-[830px] rounded-lg">
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
            id="preview-btn"
          >
            Preview
          </button>
          <button
            className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
            id="code-btn"
          >
            Code
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'preview' ? (
          <div className="tab-content" id="preview-content">
            <p>Image goes here</p>
            <p>This is the preview section. Add your image here later!</p>
          </div>
        ) : (
          <div className="tab-content" id="code-content">
            <p>Code goes here</p>
            <p>This is the code section. Add your code here later!</p>
          </div>
        )}
      </div>

        </div>
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
