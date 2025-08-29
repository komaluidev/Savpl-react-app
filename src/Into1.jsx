import React from 'react';
import yourLogo from "./assets/into1.png";
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Into1 = () => {

    const navigate = useNavigate();

    const handlePrevClick = () =>{
        navigate(-1)
    }

     const handleNextClick = () =>{
        navigate('/Into2');
    }
  return (
   
    <div className="h-screen flex items-center justify-center">
      <div 
        className="h-screen  flex flex-col bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url(${yourLogo})` }}
      >
       
        <div className="flex-grow flex flex-col justify-end">
          <div className="bg-white bg-opacity-100 rounded-t-[40px] p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                From Our Fields to Your Table
              </h1>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla corporis fuga, mollitia cum ea expedita nesciunt 
                quis nemo dignissimos iure aut! Officiis libero aut sed veniam eveniet, ab culpa eum!
              </p>
            </div>
            
            <div className="flex justify-center my-4">
              <div className="h-2 w-2 rounded-full bg-[#6CC51D] mx-1"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
            </div>

           <div className="flex space-x-4 justify-between items-center mt-4">
          <Button
            onClick={handlePrevClick}
            className=" bg-[#6CC51D] "
          >
            Previous
          </Button>
          <Button
            onClick={handleNextClick}
            className=" bg-[#6CC51D]"
          >
            Next
          </Button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Into1;