import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import User1 from '../Assets/Search Bar/Girl.jpg';

import Pagination from '../Pagination';
import UserCard from './UserCard';

const User = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('All Users');
  const [selectAll, setSelectAll] = useState(false); // New state for "Select All" feature

  const toggleDropdown1 = () => setDropdown1(!dropdown1);

  const options = ["Premium", "Free"];

  const handleSelectOption1 = (option) => {
    setSelectedOption1(option);
    setDropdown1(false); // Close dropdown after selection
  };


  const handleSelectAll = () => {
    setSelectAll(!selectAll); // Toggle select all
  };

  return (
    <div className="flex flex-row h-auto">

      <div className="flex bg-[#181D1D] h-auto w-auto flex-grow">
        <div className="flex flex-col w-full h-auto p-4 m-4 rounded-3xl bg-[#202626]">
          <div className='flex flex-row w-full h-10 m-4'>
            <h1 className='mr-8 text-4xl font-bold text-white font-roboto'>Listing</h1>
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
                <img src={User1} alt="logo" className="h-10 w-10 mr-2 rounded-[50px] border-[3px] border-amber-400" />
                <h1 className="mr-4 text-white text-l">Chanodya</h1>
              </div>

            </div>
          </div>

          {/* Button Group */}
          <div className='relative z-10 flex flex-row items-center justify-between m-4'>
            
            {/* Left Side Buttons */}
            <div className="flex items-center space-x-4">
              <h1 className='text-2xl font-semibold text-white font-roboto'>Select</h1>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown1}
                  className="flex items-center px-8 py-2 text-white bg-gray-700 rounded-xl"
                >
                  {selectedOption1}
                  <span className="ml-2">&#x25BC;</span>
                </button>
                {dropdown1 && (
                  <div className="absolute w-full mt-1 bg-white rounded shadow-lg">
                    {options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectOption1(option)}
                        className="block w-full px-4 py-2 text-left text-black hover:bg-gray-300"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
            {/* <div className="flex">
              <button className="px-8 py-2 text-white bg-blue-500 rounded-xl">
                Add Listing
              </button>
            </div> */}

          </div>

          {/* Listing Cards */}
          <UserCard
            key={1} // Add unique key
            checked={selectAll} // pass the select all state
            onCheckboxChange={() => setSelectAll(false)} // uncheck if manually clicked
          />

          <Pagination/>
          
        </div>

      </div>
      
    </div>
  );
};

export default User;
