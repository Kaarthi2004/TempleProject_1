/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isHolisDropdownOpen, setIsHolisDropdownOpen] = useState(false);
  const [isPoojaDropdownOpen, setIsPoojaDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  
  function handleClick1(event: any) {
    navigate('Form1.tsx');
  }

  function handleClick2(event: any) {
    navigate('Home.tsx');
  }

  function handleClick3(event: any) {
    navigate('Event.tsx');
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
 
  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const toggleHolisDropdown = () => {
    setIsHolisDropdownOpen(!isHolisDropdownOpen);
  };

  const togglePoojaDropdown = () => {
    setIsPoojaDropdownOpen(!isPoojaDropdownOpen);
  };

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<>
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 py-0">
      <div className=" justify-start xl:w-full 2xl:w-full shadow-xl ">
        <div className="flex items-center justify-between mx-auto">
        <div className='flex justify-between items-center gap-8 space-x-2 py-4'> 
      
        <div className="flex lg:flex sm:hidden xl:flex md:flex items-center">
          <img
            src="logo.png" // Replace with your logo image source
            alt="Company Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-gray-800 font-bold text-xl min-w-min">TEMPLE PROJECT</span>
        </div>
        <div className="hidden lg:flex sm:hidden xl:flex md:hidden items-center justify-center">
          <div className="relativepx-4">
            <a href="src\pages\Home" type="button" onSubmit={handleClick2} className="text-base font-semibold text-gray-800 hover:text-red-500  py-2 px-4 rounded-full">Home</a>
            
          </div>
          <div className="relative px-4">
            <button
              className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500 text-base font-semibold"
              onClick={togglePagesDropdown}
            >
              Pages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform ${
                  isPagesDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isPagesDropdownOpen && (
              <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</button>
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Earnings</button>
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign out</button>
              </div>
            )}
          </div>
          <div className="relative px-4">
            <button
              className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500 text-base font-semibold"
              onClick={toggleHolisDropdown}
            >
              Holis
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform ${
                  isHolisDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isHolisDropdownOpen && (
              <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</button>
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Earnings</button>
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign out</button>
              </div>
            )}
          </div>
          <div className="relative  px-4">
            <button
              className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500 text-base font-semibold"
              onClick={togglePoojaDropdown}
            >
              Pooja
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform ${
                  isPoojaDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isPoojaDropdownOpen && (
              <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</a>
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Earnings</a>
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign out</a>
              </div>
            )}
          </div>

        <div className="relative px-4">
          <button
            className="flex font-semibold items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500"
            onClick={toggleEventDropdown}
          >
            Events
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform ${
                isEventDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isEventDropdownOpen && (
            <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
              
                <a href="../pages/Event" type="button" onSubmit={handleClick3} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Event</a>
                <a href="" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Event Details</a>
            </div>
          )}
        </div>
        </div>
          
        </div>
        <div className="hidden xl:flex lg:flex ml-auto space-x-5">
            <a href="../pages/Form1" type="button" onSubmit={handleClick1} className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">Fill Form</a>
            <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full" onClick={toggleModal}>
              Donate Now
            </button>
        </div>
        </div>
{isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="w-full max-w-2xl">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Static modal
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

            <div className=" p-6 space-y-6 md:min-w-full">
                <p className="text-base leading-relaxed text-gray-500">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>    
				
			     
        </div>
      </div>
    </div>
)}
<div className="flex justify-end lg:hidden sm:flex xl:hidden md:flex">
        <button
          className="flex items-center px-2 rounded-md hover:bg-gray-200 hover:text-red-500  font-semibold"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        </div>
</div>
        {/* Mobile menu */}
        
        {isMobileMenuOpen && (
        <><div className="flex flex-col items-center justify-center mt-2">
            <a href="src\pages\Home" type="button" onSubmit={handleClick2} className="text-base font-semibold text-gray-800 hover:text-red-500  py-2 px-4 rounded-full">Home</a>
            {/* Add other navbar elements here */}
            {/* ... */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500 text-base font-semibold"
                onClick={togglePagesDropdown}
              >
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd" />
                </svg>
              </button>
              {isPagesDropdownOpen && (
                <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Earnings</button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign out</button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500 text-base font-semibold"
                onClick={toggleHolisDropdown}
              >
                Holis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${isHolisDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd" />
                </svg>
              </button>
              {isHolisDropdownOpen && (
                <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Earnings</button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign out</button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500 text-base font-semibold"
                onClick={togglePoojaDropdown}
              >
                Pooja
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${isPoojaDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd" />
                </svg>
              </button>
              {isPoojaDropdownOpen && (
                <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Earnings</button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign out</button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex font-semibold items-center px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-500"
                onClick={toggleEventDropdown}
              >
                Events
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${isEventDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd" />
                </svg>
              </button>
              {isEventDropdownOpen && (
                <div className="z-50 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                  <a href="../pages/Event" type="button" onSubmit={handleClick3} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Event</a>
                  <a href="" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Event Details</a>
                </div>
              )}
            </div>
          </div>
            <div className='block space-x-5 justify-end items-end'>
              <a href="../pages/Form1" type="button" onSubmit={handleClick1} className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-5 rounded-full">Fill Form</a>
              <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-5 rounded-full" onClick={toggleModal}>
              Donate Now
              </button>
          </div></>
        
      )}
      </nav>
      </>
  );
};

export default Nav;