// ContactForm.js

import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {


  return (
    <>
    <br></br><br></br><hr></hr>
    <section className="py-10 contact-form-background">
      <div className='text-center text-3xl font-semibold mb-6 text-white'>Contact Us</div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Div */}
          <div className="text-center md:text-left">
            
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Your First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Your Last Name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="suggestion" className="block text-sm font-medium text-white">
                  Suggestion
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  rows={4}
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Your suggestion here"
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Div */}
          <div className="md:flex md:flex-col md:justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Divine Quotes</h3>
              <p className="text-lg font-medium text-white">"Your quote here"</p>
              <p className="text-lg font-medium text-white">"Another quote here"</p>
              {/* Add more quotes as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>    
  );
};

export default ContactForm;
