import React from 'react'
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import User from '../Assets/Search Bar/Girl.jpg';
import Right from '../Assets/Right.png';

const Package = () => {
  return (
    <div className='flex flex-row h-auto'>

      <div className='flex bg-[#181D1D] h-auto w-auto flex-grow'>
        <div className='flex flex-col w-full h-auto p-4 m-4 rounded-3xl bg-[#202626]'>
          <div className='flex flex-row w-full h-10 m-4'>
            <h1 className='mr-8 text-4xl font-bold text-white font-roboto'>Packages</h1>
              <div className='flex flex-row justify-between w-full'> 

                <div className="flex items-center  bg-[#313b3b] rounded-lg px-4 py-2 w-[800px]">
                  <input 
                    type="text" 
                    placeholder="Search Product..." 
                    className="w-full text-white bg-transparent focus:outline-none" 
                  />
                  <FaSearch className="ml-2 text-white cursor-pointer" />
                </div>

                <div className='flex flex-row items-center mx-4 cursor-pointer'>
                <img src={User} alt="logo" className="h-10 w-10 mr-2 rounded-[50px] border-[3px] border-amber-400" />
                <h1 className="mr-4 text-white text-l">Chanodya</h1>
              </div>
              </div>
          </div>

          <div className='flex flex-row justify-end gap-8 my-4 mr-4 '>
                {/* <button className="px-8 py-2 text-white bg-red-500 rounded-xl">
                    Delete
                </button> */}
                <button className="px-8 py-2 text-white bg-blue-500 rounded-xl">
                    Add Listing
                </button>
            </div>
            
          <div className='flex flex-row gap-4 mx-4 my-8 '>

          <div className='flex flex-grow flex-col bg-[#ffffff] border-4 border-[#18FEF5] rounded-2xl justify-center text-center '>
                <h1 className='my-8 text-5xl font-bold text-black uppercase font-roboto'>Life Time</h1>
                <h1 className='text-2xl font-bold text-black font-roboto'>Package Include <span className=' text-[#787878]'>/one time</span></h1>

                <div className='my-8 '>
                      <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Unlimited access to all programming and web development courses.</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Lifetime updates and new course additions</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Unlimited access to all tutorials</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Access to exclusive content and community forums</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Priority support and mentorship</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Earn certificates and badges upon course completion</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Certification on course completion</p>
                    </div>
                </div>

                <h1 className='text-6xl font-bold text-black font-roboto'>$139.49<span className=' text-[#787878] text-4xl line-through'>$226.49</span></h1>

                <button className='py-4 mx-10 my-8 text-3xl bg-[#525FE0] font-bold text-white font-roboto rounded-3xl'>Edit</button>
            </div>
            <div className='flex flex-grow flex-col bg-[#ffffff] border-4 border-[#18FEF5] rounded-2xl justify-center text-center '>
                <h1 className='my-8 text-5xl font-bold text-black uppercase font-roboto'>Yearly Premium Access</h1>
                <h1 className='text-2xl font-bold text-black font-roboto'>Package Include <span className=' text-[#787878]'>/one time</span></h1>

                <div className='my-8 ml-8'>
                     <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Unlimited access to all programming and web development courses.</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Lifetime updates and new course additions</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Unlimited access to all tutorials</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Access to exclusive content and community forums</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Priority support and mentorship</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Earn certificates and badges upon course completion</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Certification on course completion</p>
                    </div>
                </div>

                <h1 className='text-6xl font-bold text-black font-roboto'>$139.49<span className=' text-[#787878] text-4xl line-through'>$226.49</span></h1>

                <button className='py-4 mx-10 my-8 text-3xl bg-[#525FE0] font-bold text-white font-roboto rounded-3xl'>Edit</button>
            </div>

            <div className='flex flex-grow flex-col bg-[#ffffff] border-4 border-[#18FEF5] rounded-2xl justify-center text-center '>
                <h1 className='my-8 text-5xl font-bold text-black uppercase font-roboto'>Monthly Premium Plan</h1>
                <h1 className='text-2xl font-bold text-black font-roboto'>Package Include <span className=' text-[#787878]'>/one time</span></h1>

                <div className='my-8 ml-8'>
                      <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Unlimited access to all programming and web development courses.</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Lifetime updates and new course additions</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Unlimited access to all tutorials</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Access to exclusive content and community forums</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Priority support and mentorship</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Earn certificates and badges upon course completion</p>
                    </div>
                    <div className='flex flex-row items-center mb-4 '>
                    <img src={Right} alt="logo" className="w-[30px] h-auto mx-4 " /> {/* Adjust the size of the logo */}
                        <p className='text-xl font-normal font-roboto'>Certification on course completion</p>
                    </div>
                </div>

                <h1 className='text-6xl font-bold text-black font-roboto'>$139.49<span className=' text-[#787878] text-4xl line-through'>$226.49</span></h1>
                <button className='py-4 mx-10 my-8 text-3xl bg-[#525FE0] font-bold text-white font-roboto rounded-3xl'>Edit</button>
            </div>

          </div>
      
    </div>
    </div>
    </div>
  )
}

export default Package
