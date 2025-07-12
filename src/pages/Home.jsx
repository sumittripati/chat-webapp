import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import ProfilePopup from '../components/ProfilePopup';
import Usersprofile from '../components/Usersprofile';


const Home = () => {
  return (
    <div>
      <div className="flex h-screen font-sans bg-gray-50">

      <div className="w-[40px] flex justify-between flex-col">
        <div className='flex flex-col items-center gap-4 pt-6'>
          <span className="text-xs pb-3"><img src="./message.png" alt="message-icon" /></span>
          <span className="text-xs pb-3"><img src="./phone.png" alt="phone-icon" /></span>
          <span className="text-xs"><img src="./search.png" alt="search-icon" /></span>
        </div>
        <button className='items-center pb-4 pl-2'><span className="text-xs"><ProfilePopup /></span></button>
      </div>


      {/* Sidebar (User List) */}
      <aside className="w-1/3 md:w-1/4 border-r border-gray-200 bg-gray-100 flex flex-col max-h-[40vh] md:max-h-full md:h-full">
        <div className="p-3 border-1 border-gray-200 bg-gray-100">
          <div className='flex items-center justify-between gap-1'>
            <div>
              <h2 className="text-lg font-semibold flex justify-between items-center">Messages <span className='pt-1 pl-1'><img src="./arrow-Iconsax.png" alt="arrow-icon" /></span><span className="text-xs bg-gray-200 px-2 py-1 ml-2 rounded-full">12</span></h2> 
            </div>
            <div className='flex items-center gap-1 size-12'>
              <span><img src="./Filter_big.png" alt="filter" /></span>
               <span><img src="./Iconsax.png" alt="plush-sign" /></span>
            </div>
          </div>
          
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto flex-1">
        <div className="px-4 py-2">
            <input type="text" placeholder="Search messages" className="mt-1 w-full p-2 text-sm focus:outline-none bg-gray-100 rounded-md"/>
          </div>
          {/* Sample User */}
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3 cursor-pointer">
              <img src="./userone.jpg" alt="avatar" className="w-10 h-10 rounded-full"/>
              <div className="flex-1">
                <p className="font-medium text-sm">Sumit</p>
                <p className="text-xs text-gray-500 truncate">woohoooo</p>
              </div>
                <span className="text-xs text-gray-400">24m</span>
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3 cursor-pointer">
              <img src="./usertwo.png" alt="avatar" className="w-10 h-10 rounded-full"/>
              <div className="flex-1">
                <p className="font-medium text-sm">Vishal</p>
                <p className="text-xs text-gray-500 truncate">cvbj ghjk</p>
              </div>
              <span className="text-xs text-gray-400">12m</span>
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3 cursor-pointer">
              <img src="./usertwo.png" alt="avatar" className="w-10 h-10 rounded-full"/>
              <div className="flex-1">
                <p className="font-medium text-sm">Prince</p>
                <p className="text-xs text-gray-500 truncate">cvbj ghjk</p>
              </div>
              <span className="text-xs text-gray-400">12m</span>
            </li>
          </ul>

        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-full">
        {/* Topbar */}
        <div className="flex items-center justify-between p-4 border-1 border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <img
              src="./userone.jpg"
              className="rounded-full w-10 h-10"
            />
            <button>
              {/* <h2 className="font-semibold text-sm sm:text-base">James Anderson</h2>
              <p className="text-xs text-green-500 text-left">Online</p> */}
              <Usersprofile/>
            </button>
          </div>
          <button className="bg-blue-100 px-3 py-1 text-sm rounded-md text-blue-600 hover:bg-blue-200 transition flex">
          <FaPhone className='mt-1'/><span className="pl-1">Call</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {/* Sender */}
          <div className="text-left">
            <div className="inline-block bg-white px-4 py-2 rounded-lg shadow text-sm">
              omg, this is amazing
            </div>
          </div>

          {/* Receiver */}
          <div className="text-right">
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow text-sm">
              woohoooo
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-3 flex items-center gap-2 bg-white">
          <div className='flex gap-3'><BsEmojiSmile className='mt-1'/> <img src="./send-file.png" alt="fil-transfer" className='size-4 mt-1'/></div>
          <input type="text" placeholder="Type a message" className="flex-1 border-1 border-gray-300 rounded-md p-2 px-4 text-sm focus:outline-none"/>
          <button className='absolute right-5'><img src="./Mic.png" alt="Mic" /></button>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Home