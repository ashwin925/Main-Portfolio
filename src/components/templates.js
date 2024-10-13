import React, { useState } from 'react';
import './templates.css';

export default function Templates() {
  const [activeTab, setActiveTab] = useState('preview');

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
      
      <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px] relative'>
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
            <p>Preview Section</p>
            <p>In the following Preview section you will see how the component looks like in action!</p>
          </div>
        ) : (
          <div className="tab-content" id="code-content">
            <p>Code Section</p>
            <p>In the following Code section you will see how the codwe of the component is with comments!</p>
          </div>
        )}
      </div>
      <button className='but mr-[-15px]'>
        <span className="more-text">More</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
      </button>

      </div>
      </div>
      
      <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
        <div className="gradient-background"></div>
        <p className='text-white justify-center text-center w-[900px] mr-[100px]'>
          In this section you can find multiple components for the <span className='how-to-add-highlight font-bold'>Div</span> container :-
        </p>

          {/* preview Component for div */}
        <div className="content-container h-[485px] w-[830px] mr-[70px] rounded-lg">
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

        {/* code Content for div */}
        {activeTab === 'preview' ? (
          <div className="tab-content" id="preview-content">
            <p>Preview Section</p>
            <p>In the following Preview section you will see how the component looks like in action!</p>
          </div>
        ) : (
          <div className="tab-content" id="code-content">
            <p>Code Section</p>
            <p>In the following Code section you will see how the codwe of the component is with comments!</p>
          </div>
        )}
      </div>
      <button className='but mr-[-15px]'>
        <span className="more-text">More</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
      </button>
      </div>
      
      <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
        <div className="gradient-background-two"></div> 
        <p className='text-white justify-center text-center w-[900px] mr-[100px]'>
          In this section you can find multiple components for the <span className='preview-highlight font-bold'>Heading</span> container :-
        </p>

          {/* preview content for Heading*/}
        <div className="content-container h-[485px] w-[830px] mr-[70px] rounded-lg">
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

        {/* code Content for Heading*/}
        {activeTab === 'preview' ? (
          <div className="tab-content" id="preview-content">
            <p>Preview Section</p>
            <p>In the following Preview section you will see how the component looks like in action!</p>
          </div>
        ) : (
          <div className="tab-content" id="code-content">
            <p>Code Section</p>
            <p>In the following Code section you will see how the codwe of the component is with comments!</p>
          </div>
        )}
      </div>
      <button className='but mr-[-15px]'>
        <span className="more-text">More</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
      </button> 
      </div>
      <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
        <div className="gradient-background"></div>
        <p className='text-white justify-center text-center w-[900px] mr-[100px]'>
        In this section you can find multiple components for the <span className='cool-highlight font-bold'>Para</span> container :-
        </p>

          {/* preview Component for Para */}
        <div className="content-container h-[485px] w-[830px] mr-[70px] rounded-lg">
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

        {/* code Content for Para */}
        {activeTab === 'preview' ? (
          <div className="tab-content" id="preview-content">
            <p>Preview Section</p>
            <p>In the following Preview section you will see how the component looks like in action!</p>
          </div>
        ) : (
          <div className="tab-content" id="code-content">
            <p>Code Section</p>
            <p>In the following Code section you will see how the codwe of the component is with comments!</p>
          </div>
        )}
      </div>
      <button className='but mr-[-15px]'>
        <span className="more-text">More</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
      </button>
      </div>
      
      <div className='templates-container h-[555px] w-[1210px] m-[5px] mt-[-5px]'>
        <div className="gradient-background-two"></div> 
        <p className='text-white justify-center text-center w-[900px] mr-[100px]'>
          In this section you can find multiple components for the <span className='elegant-highlight font-bold'>Buttons</span> container :-
        </p>

          {/* preview content for Buttons*/}
        <div className="content-container h-[485px] w-[830px] mr-[70px] rounded-lg">
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

        {/* code Content for Buttons*/}
        {activeTab === 'preview' ? (
          <div className="tab-content" id="preview-content">
            <p>Preview Section</p>
            <p>In the following Preview section you will see how the component looks like in action!</p>
          </div>
        ) : (
          <div className="tab-content" id="code-content">
            <p>Code Section</p>
            <p>In the following Code section you will see how the codwe of the component is with comments!</p>
          </div>
        )}
      </div>
      <button className='but mr-[-15px]'>
        <span className="more-text">More</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
        <span className="more-symbols">&gt;</span>
      </button> 
      </div>
    </div>
  );
}
