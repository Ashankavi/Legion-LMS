import React from 'react'


import { FaSearch } from 'react-icons/fa'; // Import the search icon


import User from '../Components/Assets/Search Bar/Girl.jpg';
import ProIcon from '../Components/Assets/Pro.png';

const Overview = () => {
  return (
    <div className='flex flex-row h-auto'>
      
      <div className='flex bg-[#181D1D] h-auto w-auto flex-grow'>
        <div className='flex flex-col w-full h-auto p-4 m-4 rounded-3xl bg-[#202626]'>
          <div className='flex flex-row w-full h-10 m-4'>
            <h1 className='mr-8 text-4xl font-bold text-white font-roboto'>Overview</h1>
              <div className='flex flex-row justify-between w-full'> 

                <div className="flex items-center  bg-[#313b3b] rounded-lg px-4 py-2 w-[800px]">
                  <input 
                    type="text" 
                    placeholder="Search Product..." 
                    className="w-full text-white bg-transparent focus:outline-none" 
                  />
                  <FaSearch className="ml-2 text-white cursor-pointer" />
                </div>
                {/* Link here Admin.jsx*/}
                <div className='flex flex-row items-center mx-4 cursor-pointer'> 
                <img src={User} alt="logo" className="h-10 w-10 mr-2 rounded-[50px] border-[3px] border-amber-400" />
                <h1 className="mr-4 text-white text-l">Chanodya</h1>
              </div>

              </div>
          </div>

          <div className='flex flex-row m-4 rounded-lg bg-[#242d2d] border-2 border-[#393939]'>
              <div className='flex flex-row items-center w-full p-8 justify-evenly'>
                <div className='font-medium text-center'>
                  <h1 className='text-white text-7xl font-roboto'>1.8k</h1>
                  <h1 className='text-2xl font-roboto text-[#6a6e7b]'>Total visit</h1>
                </div>

                <div className='font-medium text-center'>
                  <h1 className='text-white text-7xl font-roboto'>4.4k</h1>
                  <h1 className='text-2xl font-roboto text-[#6a6e7b]'>Total Views</h1>
                </div>

                <div className='font-medium text-center'>
                  <h1 className='text-white text-7xl font-roboto'>2.6k</h1>
                  <h1 className='text-2xl font-roboto text-[#6a6e7b]'>Total Users</h1>
                </div>

                <div className='font-medium text-center'>
                  <h1 className='text-white text-7xl font-roboto'>$750</h1>
                  <h1 className='text-2xl font-roboto text-[#6a6e7b]'>Total Purchases</h1>
                </div>
              </div>
            </div>

            {/* <Language /> */}

            <div className='flex flex-row gap-4 m-4 '>

            <div className='flex flex-col flex-grow bg-[#242d2d] border-2 border-[#393939] rounded-lg h-auto p-4'>
            <h1 className='text-2xl font-semibold text-white font-roboto'>Premium Users</h1>

            <div className='flex justify-between p-4 bg-[#242d2d] border-b-2 border-[#393939] mt-4'>
              <div className='flex flex-row'>
                <img src={User} alt="logo" className="h-14 w-14 mr-2 rounded-[50px]" /> 
                <div className='flex flex-col ml-4'>
                  <h1 className='text-2xl font-roboto font-semibold text-[#ffffff]'>Ashan Kavindu</h1>
                  <p className='text-l font-roboto text-[#ffffff]'>ashan@gmail.com</p>
                </div>
              </div>
              <img src={ProIcon} alt="logo" className="h-[50px] w-[95px] mr-2 rounded-[50px]" /> 
            </div>

            <div className='flex justify-between p-4 bg-[#242d2d] border-b-2 border-[#393939] '>
              <div className='flex flex-row'>
                <img src={User} alt="logo" className="h-14 w-14 mr-2 rounded-[50px]" /> 
                <div className='flex flex-col ml-4'>
                  <h1 className='text-2xl font-roboto font-semibold text-[#ffffff]'>Ashan Kavindu</h1>
                  <p className='text-l font-roboto text-[#ffffff]'>ashan@gmail.com</p>
                </div>
              </div>
              <img src={ProIcon} alt="logo" className="h-[50px] w-[95px] mr-2 rounded-[50px]" />
            </div>

            <div className='flex justify-between p-4 bg-[#242d2d] border-b-2 border-[#393939] '>
              <div className='flex flex-row'>
                <img src={User} alt="logo" className="h-14 w-14 mr-2 rounded-[50px]" /> 
                <div className='flex flex-col ml-4'>
                  <h1 className='text-2xl font-roboto font-semibold text-[#ffffff]'>Ashan Kavindu</h1>
                  <p className='text-l font-roboto text-[#ffffff]'>ashan@gmail.com</p>
                </div>
              </div>
              <img src={ProIcon} alt="logo" className="h-[50px] w-[95px] mr-2 rounded-[50px]" /> 
            </div>

            <div className='flex justify-between p-4 bg-[#242d2d] border-b-2 border-[#393939]'>
              <div className='flex flex-row'>
                <img src={User} alt="logo" className="h-14 w-14 mr-2 rounded-[50px]" /> 
                <div className='flex flex-col ml-4'>
                  <h1 className='text-2xl font-roboto font-semibold text-[#ffffff]'>Ashan Kavindu</h1>
                  <p className='text-l font-roboto text-[#ffffff]'>ashan@gmail.com</p>
                </div>
              </div>
              <img src={ProIcon} alt="logo" className="h-[50px] w-[95px] mr-2 rounded-[50px]" /> 
            </div>

            <div className='flex justify-between p-4 bg-[#242d2d] border-b-2 border-[#393939]'>
              <div className='flex flex-row'>
                <img src={User} alt="logo" className="h-14 w-14 mr-2 rounded-[50px]" />      
                  <div className='flex flex-col ml-4'>
                  <h1 className='text-2xl font-roboto font-semibold text-[#ffffff]'>Ashan Kavindu</h1>
                  <p className='text-l font-roboto text-[#ffffff]'>ashan@gmail.com</p>
                </div>
              </div>
              <img src={ProIcon} alt="logo" className="h-[50px] w-[95px] mr-2 rounded-[50px]" /> 
            </div>

          </div>


              <div className=' flex flex-col flex-grow bg-[#242d2d] border-2 border-[#393939] rounded-lg h-auto p-4'> 
              <h1 className='text-2xl font-semibold text-white font-roboto'>Private Note</h1>
              <textarea 
                className="mt-4 w-full h-auto p-4 text-white bg-[#242d2d] border-t-2 border-dashed border-[#393939] focus:outline-none focus:ring-0 focus:ring-[#393939]"
                placeholder="Write your private note here..."
              />
              </div>
              
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Overview;
