import React from 'react';
import yourLogo from "./assets/into3.png";
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Into3 = () => {

    const navigate = useNavigate();

    const handlePrevClick = () =>{
        navigate(-1)
    }

     const handleNextClick = () =>{
        navigate('/Into4');
    }
  return (
   
    <div className="h-screen flex items-center justify-center">
      <div 
        className="h-screen flex flex-col bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url(${yourLogo})` }}
      >
       
        <div className="flex-grow flex flex-col justify-end">
          <div className="bg-white bg-opacity-100 rounded-t-[40px] p-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
               Where agriculture meets excellence
              </h1>
              <p className="mt-2 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adollitia cum ea expedita nesciunt 
                quis nemo dignissimos iure aut! Officiis libero aut sed veniam eveniet, ab culpa eum!
              </p>
            </div>
            
            <div className="flex justify-center my-4">
              <div className="h-2 w-2 rounded-full bg-[#6CC51D] mx-1"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
            </div>

          <div className="flex space-x-4 justify-between items-center mt-auto">
              <Button onClick={handlePrevClick} className="bg-[#6CC51D] flex-1 text-white font-semibold py-3 px-6 rounded-lg">
                Previous
              </Button>
              <Button onClick={handleNextClick} className="bg-[#6CC51D] flex-1 text-white font-semibold py-3 px-6 rounded-lg">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Into3;