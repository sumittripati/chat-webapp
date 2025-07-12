// import React, { useState } from 'react';
// import { FaPhone } from "react-icons/fa6";
// import { BsEmojiSmile } from "react-icons/bs";
// import ProfilePopup from '../components/ProfilePopup';
// import Usersprofile from '../components/Usersprofile';

// const Home = () => {
//   const [showProfile, setShowProfile] = useState(false);

//   const users = [
//     {
//       id: 1,
//       name: "Sumit",
//       status: "Online",
//       img: "./userone.jpg",
//       lastMsg: "woohoooo",
//       lastSeen: "24m",
//       messages: [
//         { from: "them", text: "omg, this is amazing" },
//         { from: "me", text: "woohoooo" },
//       ],
//       phone: "+91 8810671910",
//       about: "Hey There I am using Chat Box",
//     },
//     {
//       id: 2,
//       name: "Vishal",
//       status: "Offline",
//       img: "./usertwo.png",
//       lastMsg: "cvbj ghjk",
//       lastSeen: "12m",
//       messages: [
//         { from: "them", text: "hey Vishal here" },
//         { from: "me", text: "What's up bro!" },
//       ],
//       phone: "+91 9988776655",
//       about: "Yo! Vishal is here.",
//     },
//     {
//       id: 3,
//       name: "Prince",
//       status: "Offline",
//       img: "./usertwo.png",
//       lastMsg: "cvbj ghjk",
//       lastSeen: "12m",
//       messages: [
//         { from: "them", text: "yo! long time" },
//         { from: "me", text: "yeah man, wassup!" },
//       ],
//       phone: "+91 1122334455",
//       about: "Prince on the move!",
//     },
//   ];

//   const [activeUser, setActiveUser] = useState(users[0]);

//   return (
//     <div className="flex h-screen font-sans bg-gray-50">

//       {/* Left Sidebar */}
//       <div className="w-[40px] flex justify-between flex-col">
//         <div className='flex flex-col items-center gap-4 pt-6'>
//           <img src="./message.png" alt="message-icon" className="text-xs pb-3" />
//           <img src="./phone.png" alt="phone-icon" className="text-xs pb-3" />
//           <img src="./search.png" alt="search-icon" className="text-xs" />
//         </div>
//         <button className='items-center pb-4 pl-2'>
//           <span className="text-xs"><ProfilePopup /></span>
//         </button>
//       </div>

//       {/* User List */}
//       <aside className="w-1/3 md:w-1/4 border-r border-gray-200 bg-gray-100 flex flex-col max-h-[40vh] md:max-h-full md:h-full">
//         <div className="p-3 bg-gray-100">
//           <div className='flex items-center justify-between'>
//             <h2 className="text-sm font-semibold">Messages</h2>
//             <div className='flex items-center gap-1'>
//               <img src="./Filter_big.png" alt="filter" />
//               <img src="./Iconsax.png" alt="plus" />
//             </div>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="px-4 py-2">
//           <input type="text" placeholder="Search messages" className="w-full p-2 text-xs focus:outline-none bg-gray-100 rounded-md" />
//         </div>

//         {/* User Items */}
//         <ul className="overflow-y-auto">
//           {users.map(user => (
//             <li
//               key={user.id}
//               className="px-4 py-2 hover:bg-gray-200 flex items-center gap-3 cursor-pointer"
//               onClick={() => setActiveUser(user)}
//             >
//               <img src={user.img} alt="avatar" className="w-10 h-10 rounded-full" />
//               <div className="flex-1">
//                 <p className="font-medium text-sm">{user.name}</p>
//                 <p className="text-xs text-gray-500 truncate">{user.lastMsg}</p>
//               </div>
//               <span className="text-xs text-gray-400">{user.lastSeen}</span>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Chat Area */}
//       <main className="flex-1 flex flex-col h-full">

//         {/* Header */}
//         <div
//           className="flex items-center justify-between p-4 border-b bg-white cursor-pointer"
//           onClick={() => setShowProfile(true)}
//         >
//           <div className="flex items-center gap-3">
//             <img src={activeUser.img} className="rounded-full w-10 h-10" />
//             <div>
//               <h2 className="text-sm font-semibold">{activeUser.name}</h2>
//               <p className="text-xs text-green-500">{activeUser.status}</p>
//             </div>
//           </div>
//           <button className="bg-blue-100 px-3 py-1 text-sm rounded-md text-blue-600 hover:bg-blue-200 flex items-center">
//             <FaPhone className='mr-1' /> Call
//           </button>
//         </div>

//         {/* 👇 Profile Popup */}
//         {showProfile && (
//           <Usersprofile
//             isOpen={showProfile}
//             onClose={() => setShowProfile(false)}
//             user={activeUser}
//           />
//         )}

//         {/* Messages */}
//         <div className="flex-1 p-4 overflow-y-auto space-y-4">
//           {activeUser.messages.map((msg, index) => (
//             <div key={index} className={msg.from === 'me' ? 'text-right' : 'text-left'}>
//               <div className={`inline-block px-4 py-2 rounded-lg shadow text-sm ${msg.from === 'me' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Message Input */}
//         <div className="p-3 flex items-center gap-2 bg-white relative">
//           <div className='flex gap-3'>
//             <BsEmojiSmile className='mt-1' />
//             <img src="./send-file.png" alt="file" className='size-4 mt-1' />
//           </div>
//           <input type="text" placeholder="Type a message" className="flex-1 border border-gray-300 rounded-md p-2 px-4 text-sm focus:outline-none" />
//           <button className='absolute right-5'><img src="./Mic.png" alt="Mic" /></button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;






import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import ProfilePopup from '../components/ProfilePopup';
import Usersprofile from '../components/Usersprofile';
import { IoSend } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  const users = [
    {
      id: 1,
      name: "Sumit",
      status: "Online",
      img: "./userone.jpg",
      lastMsg: "woohoooo",
      lastSeen: "24m",
      messages: [
        { from: "them", text: "omg, this is amazing" },
        { from: "me", text: "woohoooo" },
      ],
      phone: "+91 8810671910",
      about: "Hey There I am using Chat Box",
    },
    {
      id: 2,
      name: "Vishal",
      status: "Offline",
      img: "./usertwo.png",
      lastMsg: "cvbj ghjk",
      lastSeen: "12m",
      messages: [
        { from: "them", text: "hey Vishal here" },
        { from: "me", text: "What's up bro!" },
      ],
      phone: "+91 9988776655",
      about: "Yo! Vishal is here.",
    },
    {
      id: 3,
      name: "Prince",
      status: "Offline",
      img: "./usertwo.png",
      lastMsg: "cvbj ghjk",
      lastSeen: "12m",
      messages: [
        { from: "them", text: "yo! long time" },
        { from: "me", text: "yeah man, wassup!" },
      ],
      phone: "+91 1122334455",
      about: "Prince on the move!",
    },
  ];

  const [activeUser, setActiveUser] = useState(users[0]);

  return (
    <div className="flex h-screen font-sans bg-gray-50">

      {/* Left Sidebar */}
      <div className="w-[40px] flex justify-between flex-col">
        <div className='flex flex-col items-center gap-4 pt-6'>
          <img src="./message.png" alt="message-icon" className="text-xs pb-3" />
          <img src="./phone.png" alt="phone-icon" className="text-xs pb-3" />
          <img src="./search.png" alt="search-icon" className="text-xs" />
        </div>
        <button className='items-center pb-4 pl-2'>
          <span className="text-xs"><ProfilePopup /></span>
        </button>
      </div>

      {/* User List */}
      <aside className="w-1/3 md:w-1/4 border-r border-gray-200 bg-gray-100 flex flex-col max-h-[40vh] md:max-h-full md:h-full">
        <div className="p-3 bg-gray-100">
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <h2 className="text-lg font-semibold">Messages</h2>
              <IoIosArrowDown className='pt-3'/>
              <p>12</p>
            </div>
            <div className='flex items-center gap-1'>
              <img src="./Filter_big.png" alt="filter" />
              <img src="./Iconsax.png" alt="plus" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-4">
          <input type="text" placeholder="Search messages" className="w-full p-2 text-xs focus:outline-none bg-gray-300 rounded-md" />
        </div>

        {/* User Items */}
        <ul className="overflow-y-auto">
          {users.map(user => (
            <li
              key={user.id}
              className="px-4 py-2 hover:bg-gray-200 flex items-center gap-3 cursor-pointer"
              onClick={() => setActiveUser(user)}
            >
              <img src={user.img} alt="avatar" className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.lastMsg}</p>
              </div>
              <span className="text-xs text-gray-400">{user.lastSeen}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col h-full">

        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b bg-white cursor-pointer"
          onClick={() => setShowProfile(true)}
        >
          <div className="flex items-center gap-3">
            <img src={activeUser.img} className="rounded-full w-10 h-10" />
            <div>
              <h2 className="text-sm font-semibold">{activeUser.name}</h2>
              <p className="text-xs text-green-500">{activeUser.status}</p>
            </div>
          </div>
          <button className="bg-blue-100 px-3 py-1 text-sm rounded-md text-blue-600 hover:bg-blue-200 flex items-center">
            <FaPhone className='mr-1' /> Call
          </button>
        </div>

        {/* 👇 Profile Popup */}
        {showProfile && (
          <Usersprofile
            isOpen={showProfile}
            onClose={() => setShowProfile(false)}
            user={activeUser}
          />
        )}

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {activeUser.messages.map((msg, index) => (
            <div key={index} className={msg.from === 'me' ? 'text-right' : 'text-left'}>
              <div className={`inline-block px-4 py-2 rounded-lg shadow text-sm ${msg.from === 'me' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-3 flex items-center gap-2 bg-white relative">
          <div className='flex gap-3'>
            <BsEmojiSmile className='mt-1' />
            <img src="./send-file.png" alt="file" className='size-4 mt-1' />
          </div>
          <div className='flex-1 flex items-center gap-2'>
            <input type="text" placeholder="Type a message" className="border border-gray-300 rounded-md p-2 px-4 text-sm focus:outline-none w-full" />
            <IoSend className='cursor-pointer' />
            <button className=''><img src="./Mic.png" alt="Mic" /></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

