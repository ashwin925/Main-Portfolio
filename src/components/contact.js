import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className='templates-container'>
      <div className="ripples-container"></div>
      <form className="contact-form">
      <h1 className="contact-title font-semibold">Contact Me</h1>
        {/* Name */}
        <div className="mb-4">
          <label className=" tc block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="input-field w-[240px]"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        {/* Gmail */}
        <div className="mb-4">
          <label className="tc block text-gray-700 font-bold mb-2" htmlFor="email">
            Gmail
          </label>
          <input
            className="input-field w-[240px]"
            id="email"
            type="email"
            placeholder="Enter your Gmail"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="tc block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="input-field h-[100px] w-[240px]"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="submit-button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
