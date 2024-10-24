import React, { useState } from 'react';
import ReactIMG from '../../Components/Assets/ReactCover.png';

const Listingcard = () => {
  // Define state to hold checkbox statuses for all cards
  const [checkedCards, setCheckedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
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
          <img src={ReactIMG} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d]" />
          <div className='flex flex-col m-2'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#c2c3c3]'>React Beginner Part 01</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
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
          <img src={ReactIMG} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d]" />
          <div className='flex flex-col m-2'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#c2c3c3]'>React Beginner Part 02</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
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
          <img src={ReactIMG} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d]" />
          <div className='flex flex-col m-2'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#c2c3c3]'>React Beginner Part 03</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
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
          <img src={ReactIMG} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d]" />
          <div className='flex flex-col m-2'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#c2c3c3]'>React Beginner Part 04</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
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
          <img src={ReactIMG} alt="logo" className="h-auto w-auto border-[4px] rounded-3xl border-[#242d2d]" />
          <div className='flex flex-col m-2'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#c2c3c3]'>React Beginner Part 05</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Listingcard;