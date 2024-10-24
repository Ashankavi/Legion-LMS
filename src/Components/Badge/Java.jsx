import React, { useState } from 'react';

import Level1 from '../Assets/Badge/Java/Noice Java.png';
import Level2 from '../Assets/Badge/Java/Beginner JAVA.png';
import Level3 from '../Assets/Badge/Java/Advanced Java.png';
import Level4 from '../Assets/Badge/Java/Expert Java.png';
import Level5 from '../Assets/Badge/Java/Master Java.png';
import Level6 from '../Assets/Badge/Java/Legend Java.png';



const Java = () => {
  // Define state to hold checkbox statuses for all cards
  const [checkedCards, setCheckedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
  });

  // Function to handle checkbox change for each card
  const handleCheckboxChange = (card) => {
    setCheckedCards((prevState) => ({
      ...prevState,
      [card]: !prevState[card], // Toggle the checkbox state for the clicked card
    }));
  };

  return (
    <div className='gap-4 m-4'>
        <h1 className='mb-8 mr-8 text-3xl font-bold text-white font-roboto'>Java Badges</h1>

      <div className='flex flex-row gap-4'>
              {/* Card 1 */}
              <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#393939] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card1}
              onChange={() => handleCheckboxChange('card1')}
            />
          </div>
          <img src={Level1} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d] m-8" />
          <div className='flex flex-col m-2'>
            <h1 className='text-[22px] font-roboto text-center font-semibold text-[#c2c3c3]'>Noice</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#393939] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card2}
              onChange={() => handleCheckboxChange('card2')}
            />
          </div>
          <img src={Level2} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d] m-8" />
          <div className='flex flex-col m-2'>
          <h1 className='text-[22px] font-roboto text-center font-semibold text-[#c2c3c3]'>Beginner</h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#393939] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card3}
              onChange={() => handleCheckboxChange('card3')}
            />
          </div>
          <img src={Level3} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d] m-8" />
          <div className='flex flex-col m-2'>
          <h1 className='text-[22px] font-roboto text-center font-semibold text-[#c2c3c3]'>Advanced</h1>
          </div>
        </div>

        {/* Card 4 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#393939] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card4}
              onChange={() => handleCheckboxChange('card4')}
            />
          </div>
          <img src={Level4} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d] m-8" />
          <div className='flex flex-col m-2'>
          <h1 className='text-[22px] font-roboto text-center font-semibold text-[#c2c3c3]'>Expert</h1>
          </div>
        </div>

        {/* Card 5 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#393939] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card5}
              onChange={() => handleCheckboxChange('card5')}
            />
          </div>
          <img src={Level5} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d] m-8" />
          <div className='flex flex-col m-2'>
          <h1 className='text-[22px] font-roboto text-center font-semibold text-[#c2c3c3]'>Master</h1> 
          </div>
        </div>

        {/* Card 6 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#393939] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card5}
              onChange={() => handleCheckboxChange('card6')}
            />
          </div>
          <img src={Level6} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d] m-8" />
          <div className='flex flex-col m-2'>
          <h1 className='text-[22px] font-roboto text-center font-semibold text-[#c2c3c3]'>Legend</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Java;
