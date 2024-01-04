import React from 'react';


const Preloader: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      
      <div className="animate-spin rounded-full h-20 w-20 border-t-8 border-b-8 border-red-500 border-primary">
        
      </div>
    </div>
  );
};

export default Preloader;