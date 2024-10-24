import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import User from '../Assets/Search Bar/Girl.jpg';

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectAll, setSelectAll] = useState(false); // New state for "Select All" feature
  const [messages, setMessages] = useState([ // State to store messages
    { text: 'Hello, how can I assist you?', time: new Date().toLocaleTimeString(), sender: 'default' } // Default message sender set to 'default'
  ]);
  const [newMessage, setNewMessage] = useState(''); // State for new input message

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        text: newMessage,
        time: new Date().toLocaleTimeString(),
        sender: 'user', // Every message sent by user
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll); // Toggle select all
  };

  return (
    <div className="flex flex-row h-auto">
      <div className="flex bg-[#181D1D] h-auto w-auto flex-grow">
        <div className="flex flex-col w-full h-auto p-4 m-4 rounded-3xl bg-[#202626]">
          <div className='flex flex-row w-full h-10 m-4'>
            <h1 className='mr-8 text-4xl font-bold text-white font-roboto'>Contact</h1>
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

            <div className="flex">
              <button className="px-8 py-2 text-white bg-blue-500 rounded-xl">
                New Message
              </button>
            </div>
          </div>

          <div className="flex h-auto">
            {/* Left Sidebar */}
            <div className="w-1/4 p-4 rounded-bl-lg bg-[#171a1a]">
              {/* Search Bar */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 text-white bg-[#313B3B] rounded-lg"
                />
              </div>

              {/* List of Chats */}
              <div className="overflow-y-auto">
                {Array(7).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 mb-2 bg-[#1C2323] rounded-lg cursor-pointer hover:bg-gray-700">
                    <img
                      src={User}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-white">Ashan Kavindu</h3>
                      <p className="text-sm text-green-500">Last Seen 10 min</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex flex-col flex-grow h-auto p-4 rounded-br-lg bg-[#181D1D]">
              {/* Chat Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={User}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Ashan Kavindu</h3>
                  <p className="text-green-500">Ashan is typing...</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow h-full p-4 bg-[#1C2323] rounded-lg overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col mb-4 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`${msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'} text-white p-3 rounded-lg max-w-xs w-fit`}>
                      <p>{msg.text}</p>
                    </div>
                    <small className="text-gray-400">{msg.time}</small>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-grow px-4 py-2 text-white bg-[#313B3B] rounded-lg"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="p-2 text-white bg-blue-500 rounded-lg"
                  onClick={handleSendMessage}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
