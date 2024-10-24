import React, { useState } from 'react';
import ReactIMG from '../../Components/Assets/ReactCover.png';

import UserIcon from '../Assets/Search Bar/Girl.jpg';




const UserCard = () => {
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
    <div className='flex-col gap-4 m-4'>

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
          <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
          <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card2}
              onChange={() => handleCheckboxChange('card2')}
            />
          </div>
          <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
          <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
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
          <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
          <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
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
          <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
          <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
          </div>
        </div>

        {/* Card 5 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
          <div className="absolute top-2 right-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
              checked={checkedCards.card5}
              onChange={() => handleCheckboxChange('card5')}
            />
          </div>
          <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
          <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-row gap-4 my-8'>
        {/* Card 1 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
        <div className="absolute top-2 right-2">
            <input
            type="checkbox"
            className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
            checked={checkedCards.card1}
            onChange={() => handleCheckboxChange('card1')}
            />
        </div>
        <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
        <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
            <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
        </div>
        </div>

        {/* Card 2 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
            <div className="absolute top-2 right-2">
                <input
                type="checkbox"
                className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
                checked={checkedCards.card2}
                onChange={() => handleCheckboxChange('card2')}
                />
            </div>
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
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
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
                <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
            </div>
            </div>

            {/* Card 4 */}
            <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
            <div className="absolute top-2 right-2">
                <input
                type="checkbox"
                className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
                checked={checkedCards.card4}
                onChange={() => handleCheckboxChange('card4')}
                />
            </div>
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
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
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
                <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
            </div>
        </div>
    </div>

    <div className='flex flex-row gap-4 my-8'>
        {/* Card 1 */}
        <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
        <div className="absolute top-2 right-2">
            <input
            type="checkbox"
            className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
            checked={checkedCards.card1}
            onChange={() => handleCheckboxChange('card1')}
            />
        </div>
        <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
        <div className='flex flex-col m-2 text-center'>
            <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
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
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
                <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
            </div>
            </div>

            {/* Card 3 */}
            <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
            <div className="absolute top-2 right-2">
                <input
                type="checkbox"
                className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
                checked={checkedCards.card3}
                onChange={() => handleCheckboxChange('card3')}
                />
            </div>
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
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
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#313B3B]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
                <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
            </div>
            </div>

            {/* Card 5 */}
            <div className='relative flex flex-col flex-grow bg-[#242d2d] bg-cover bg-center border-2 border-[#FFCC18] rounded-3xl h-auto cursor-pointer'>
            <div className="absolute top-2 right-2">
                <input
                type="checkbox"
                className="appearance-none w-5 h-5 rounded-full border-2 border-[#ffffff] checked:bg-[#BC5454] bg-transparent"
                checked={checkedCards.card5}
                onChange={() => handleCheckboxChange('card5')}
                />
            </div>
            <img src={UserIcon} alt="logo" className="h-auto w-auto border-[7px] m-8 rounded-full border-[#FFCC18]" />
            <div className='flex flex-col m-2 text-center'>
                <h1 className='text-[22px] font-roboto font-semibold text-[#FFFFFF]'>Ashan Kavindu</h1>
                <h1 className='text-[15px] font-roboto font-semibold text-[#c2c3c3]'>05 July 2024</h1>
            </div>
        </div>
        </div>
      
    </div>
  );
};

export default UserCard;
