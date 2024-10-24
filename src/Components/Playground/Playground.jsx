import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import User from '../Assets/Search Bar/Girl.jpg';
import PlaygroundCards from './PlaygroundCards';
import Pagination from '../Pagination';


const Playground = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectAll, setSelectAll] = useState(false); // New state for "Select All" feature
  
    const handleSelectAll = () => {
      setSelectAll(!selectAll); // Toggle select all
    };
    
  return (
<div className="flex flex-row h-auto">

<div className="flex bg-[#181D1D] h-auto w-auto flex-grow">
  <div className="flex flex-col w-full h-auto p-4 m-4 rounded-3xl bg-[#202626]">
    <div className='flex flex-row w-full h-10 m-4'>
      <h1 className='mr-8 text-4xl font-bold text-white font-roboto'>Playground</h1>
      <div className='flex flex-row justify-between w-full'>

        {/* Search Bar */}
        <div className="flex items-center bg-[#313b3b] rounded-lg px-4 py-2 w-[800px]">
          <input 
            type="text" 
            placeholder="Search Product..." 
            className="w-full text-white bg-transparent focus:outline-none" 
          />
          <FaSearch className="ml-2 text-white cursor-pointer" />
        </div>

        {/* User Profile */}
        <div className='flex flex-row items-center mx-4 cursor-pointer'>
          <img src={User} alt="logo" className="h-10 w-10 mr-2 rounded-[50px] border-[3px] border-amber-400" />
          <h1 className="mr-4 text-white text-l">Chanodya</h1>
        </div>

      </div>
    </div>

    {/* Button Group */}
    <div className='relative z-10 flex flex-row items-center justify-between m-4'>
      
      {/* Left Side Buttons */}
      <div className="flex items-center space-x-4">
        <h1 className='text-2xl font-semibold text-white font-roboto'>Select</h1>



        {/* Date Picker */}
        <div className="relative">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={
              <button className="px-8 py-2 text-white bg-gray-700 rounded-xl">
                {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
              </button>
            }
          />
        </div>

        {/* Select All Button */}
        <button
          onClick={handleSelectAll} // toggle select all
          className="px-8 py-2 text-white bg-gray-700 rounded-xl"
        >
          {selectAll ? "Unselect All" : "Select All"}
        </button>

        {/* Delete Button */}
        <button className="px-8 py-2 text-white bg-red-500 rounded-xl">
          Delete
        </button>
      </div>

      {/* Right Side Add Listing Button */}
      <div className="flex">
        <button className="px-8 py-2 text-white bg-blue-500 rounded-xl">
          Add Playground
        </button>
      </div>
    </div>
    <PlaygroundCards/>

    <PlaygroundCards/>

    <Pagination/>



    </div>
    
    </div>
      
    </div>
  )
}

export default Playground
