import 'flowbite';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DonateButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex items-end justify-end">
        <button
          onClick={handleModalToggle}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-6 py-3 "
        >
          Donate Now
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="w-full max-w-2xl">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Static modal
                </h3>
                <button
                  onClick={handleModalToggle}
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

              <div className="p-6 space-y-6">
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
    </>
  );
};

export default DonateButton;
