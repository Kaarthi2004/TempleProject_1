import React from 'react';
import Footer from '../components/Footer';
import EventDisp from '../components/EventDisp';

const Event = () => {
  return (
    <>
      <div className="relative">
        <img className="w-full h-[60vh] object-cover" src="https://www.revv.co.in/blogs/wp-content/uploads/2021/08/murugan-temple-madurai.jpg" alt="" />
      </div>
      <EventDisp/>
      <Footer/>
    </>
  );
};

export default Event;
