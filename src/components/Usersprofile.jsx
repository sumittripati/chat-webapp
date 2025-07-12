// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { MdOutlineNotificationsNone } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { CiStar } from "react-icons/ci";

// const Usersprofile = () => {

//     const [isOpen, setIsOpen] = useState(false);
    
//       const togglePopup = () => {
//         setIsOpen(!isOpen);
//       };

//   return (
//     <div>
//           {/* Button (Trigger) */}
//           <button className='items-cente pl-2 cursor-pointer' onClick={togglePopup}>
//             <h2 className="font-semibold text-sm sm:text-base">James Anderson</h2>
//             <p className="text-xs text-green-500 text-left">Online</p>
//           </button>
    
//           {/* Popup Overlay & Card */}
//           {isOpen && (
//             <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-5">
//               <div className="w-130 h-135 bg-white rounded-lg shadow-lg p-6 relative">
//                 {/* Close Button (optional) */}
//                 <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={() => setIsOpen(false)}><RxCross2 /></button>
    
//                 <div className="flex gap-15 h-full">
//                     <div className='flex flex-col justify-between'>
//                       <div>
//                         <ul>
//                           <li className="flex items-center gap-2 pt-3"><img src="./info.png" alt="overview" /><span className='cursor-pointer'>Overview</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./Video.png" alt="media" /><span className='cursor-pointer'>Media</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./Filedoc.png" alt="files" /><span className='cursor-pointer'>Files</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./links.png" alt="links" /><span className='cursor-pointer'>Links</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./Group.png" alt="groups" /><span className='cursor-pointer'>Groups</span></li>
//                         </ul>
//                       </div>
                      
//                     </div>
    
//                     <div className="flex flex-col gap-1.5 w-full border-1 border-gray-200 rounded-md p-4 h-124">
//                       <div className='flex justify-center'><img src="./admin-image.png" alt="profile-pic"/></div>
//                       <div className='flex flex-col items-center pb-2'>
//                         <div className='font-bo text-xl'>Sumit Tripathi</div>
//                         <div>~Anderson~</div>
//                       </div>
                      
//                       <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
//                         <IoCallOutline className='ml-32'/>
//                         <p className='font-bold'>Meet on Call Now</p>
//                       </div>
//                       <div className='flex items-center justify-between'>
//                         <div className='text-left'>
//                           <div>About</div>
//                           <div className='font-bold text-md'>Hey There i using Chat Box</div>
//                         </div>
//                       </div>
//                       <div className='text-left'>
//                         <div>Phone Number</div>
//                         <div className='font-bold'>+91 8810671910</div>
//                       </div>

//                       <div className=''>
//                         <div className='text-left'>Notification</div>
//                         <div className='flex items-center gap-2 cursor-pointer border-1 border-gray-300 rounded-md w-23'>
//                             <div><MdOutlineNotificationsNone /></div>
//                             <div className='font-bold'>Mute</div>
//                             <div><MdKeyboardArrowDown /></div>
//                         </div>
//                       </div>

                      
//                       <div className='flex items-center gap-6'>
//                         <button className="mt-4 py-2 bg-blue-100 text-blue-600 rounded  hover:bg-blue-200 w-30 font-bold cursor-pointer">Block</button>
//                         <button className="mt-4 py-2 bg-gray-200 rounded  hover:bg-blue-200 w-35 font-bold cursor-pointer">Report Contact</button>
//                       </div> 
//                     </div>

//                     <div className='absolute top-8 right-8'>
//                         <div className='pl-4 cursor-pointer'><CiStar /></div>
//                         <div className='text-xs'>Add To <br />Favorites</div>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//   )
// }

// export default Usersprofile







// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { MdOutlineNotificationsNone } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { CiStar } from "react-icons/ci";

// const Usersprofile = () => {

//     const [isOpen, setIsOpen] = useState(false);
    
//       const togglePopup = () => {
//         setIsOpen(!isOpen);
//       };

//   return (
//     <div>
//           {/* Button (Trigger) */}
//           <button className='items-cente pl-2 cursor-pointer' onClick={togglePopup}>
//             <h2 className="font-semibold text-sm sm:text-base">James Anderson</h2>
//             <p className="text-xs text-green-500 text-left">Online</p>
//           </button>
    
//           {/* Popup Overlay & Card */}
//           {isOpen && (
//             <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-5">
//               <div className="w-130 h-135 bg-white rounded-lg shadow-lg p-6 relative">
//                 {/* Close Button (optional) */}
//                 <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={() => setIsOpen(false)}><RxCross2 /></button>
    
//                 <div className="flex gap-15 h-full">
//                     <div className='flex flex-col justify-between'>
//                       <div>
//                         <ul>
//                           <li className="flex items-center gap-2 pt-3"><img src="./info.png" alt="overview" /><span className='cursor-pointer'>Overview</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./Video.png" alt="media" /><span className='cursor-pointer'>Media</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./Filedoc.png" alt="files" /><span className='cursor-pointer'>Files</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./links.png" alt="links" /><span className='cursor-pointer'>Links</span></li>
//                           <li className="flex items-center gap-2 pt-4"><img src="./Group.png" alt="groups" /><span className='cursor-pointer'>Groups</span></li>
//                         </ul>
//                       </div>
                      
//                     </div>
    
//                     <div className="flex flex-col gap-1.5 w-full border-1 border-gray-200 rounded-md p-4 h-124">
//                       <div className='flex justify-center'><img src="./admin-image.png" alt="profile-pic"/></div>
//                       <div className='flex flex-col items-center pb-2'>
//                         <div className='font-bo text-xl'>Sumit Tripathi</div>
//                         <div>~Anderson~</div>
//                       </div>
                      
//                       <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
//                         <IoCallOutline className='ml-32'/>
//                         <p className='font-bold'>Meet on Call Now</p>
//                       </div>
//                       <div className='flex items-center justify-between'>
//                         <div className='text-left'>
//                           <div>About</div>
//                           <div className='font-bold text-md'>Hey There i using Chat Box</div>
//                         </div>
//                       </div>
//                       <div className='text-left'>
//                         <div>Phone Number</div>
//                         <div className='font-bold'>+91 8810671910</div>
//                       </div>

//                       <div className=''>
//                         <div className='text-left'>Notification</div>
//                         <div className='flex items-center gap-2 cursor-pointer border-1 border-gray-300 rounded-md w-23'>
//                             <div><MdOutlineNotificationsNone /></div>
//                             <div className='font-bold'>Mute</div>
//                             <div><MdKeyboardArrowDown /></div>
//                         </div>
//                       </div>

                      
//                       <div className='flex items-center gap-6'>
//                         <button className="mt-4 py-2 bg-blue-100 text-blue-600 rounded  hover:bg-blue-200 w-30 font-bold cursor-pointer">Block</button>
//                         <button className="mt-4 py-2 bg-gray-200 rounded  hover:bg-blue-200 w-35 font-bold cursor-pointer">Report Contact</button>
//                       </div> 
//                     </div>

//                     <div className='absolute top-8 right-8'>
//                         <div className='pl-4 cursor-pointer'><CiStar /></div>
//                         <div className='text-xs'>Add To <br />Favorites</div>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//   )
// }

// export default Usersprofile





// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { MdOutlineNotificationsNone, MdKeyboardArrowDown } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { CiStar } from "react-icons/ci";
// import Userfiles from './Userfiles';
// import Userlinks from './Userlinks';
// import Usermedia from './Usermedia';
// import Usergroups from './Usergroups';

// const Usersprofile = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'files':
//         return <Userfiles />;
//       case 'media':
//         return <Usermedia />;
//       case 'links':
//         return <Userlinks />;
//       case 'groups':
//         return <Usergroups />;
//       default:
//         return (
//           <>
//             <div className='flex justify-center'>
//               <img src="./admin-image.png" alt="profile-pic" />
//             </div>
//             <div className='flex flex-col items-center pb-2'>
//               <div className='font-bo text-xl'>Sumit Tripathi</div>
//               <div>~Anderson~</div>
//             </div>

//             <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
//               <IoCallOutline className='ml-32' />
//               <p className='font-bold'>Meet on Call Now</p>
//             </div>
//             <div className='flex items-center justify-between'>
//               <div className='text-left'>
//                 <div>About</div>
//                 <div className='font-bold text-md'>Hey There i using Chat Box</div>
//               </div>
//             </div>
//             <div className='text-left'>
//               <div>Phone Number</div>
//               <div className='font-bold'>+91 8810671910</div>
//             </div>

//             <div>
//               <div className='text-left'>Notification</div>
//               <div className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md w-23'>
//                 <div><MdOutlineNotificationsNone /></div>
//                 <div className='font-bold'>Mute</div>
//                 <div><MdKeyboardArrowDown /></div>
//               </div>
//             </div>

//             <div className='flex items-center gap-6'>
//               <button className="mt-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 w-30 font-bold cursor-pointer">Block</button>
//               <button className="mt-4 py-2 bg-gray-200 rounded hover:bg-blue-200 w-35 font-bold cursor-pointer">Report Contact</button>
//             </div>
//           </>
//         );
//     }
//   };

//   return (
//     <div>
//       <button className='items-center pl-2 cursor-pointer' onClick={togglePopup}>
//         {/* <h2 className="font-semibold text-sm sm:text-base">James Anderson</h2>
//         <p className="text-xs text-green-500 text-left">Online</p> */}
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-50">
//           <div className="w-130 h-135 bg-white rounded-lg shadow-lg p-6 relative">
//             <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={() => setIsOpen(false)}>
//               <RxCross2 />
//             </button>

//             <div className="flex gap-15">
//               {/* Sidebar List */}
              // <div className='flex flex-col justify-between'>
              //   <ul>
              //     <li className={`flex items-center gap-2 pt-3 cursor-pointer ${activeTab === 'overview' ? 'font-bold' : ''}`} onClick={() => setActiveTab('overview')}>
              //       <img src="./info.png" alt="overview" />
              //       <span>Overview</span>
              //     </li>
              //     <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'media' ? 'font-bold' : ''}`} onClick={() => setActiveTab('media')}>
              //       <img src="./Video.png" alt="media" />
              //       <span>Media</span>
              //     </li>
              //     <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'files' ? 'font-bold' : ''}`} onClick={() => setActiveTab('files')}>
              //       <img src="./Filedoc.png" alt="files" />
              //       <span>Files</span>
              //     </li>
              //     <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'links' ? 'font-bold' : ''}`} onClick={() => setActiveTab('links')}>
              //       <img src="./links.png" alt="links" />
              //       <span>Links</span>
              //     </li>
              //     <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'groups' ? 'font-bold' : ''}`} onClick={() => setActiveTab('groups')}>
              //       <img src="./Group.png" alt="groups" />
              //       <span>Groups</span>
              //     </li>
              //   </ul>
              // </div>

//               {/* Main Content */}
//               <div className="flex flex-col gap-1.5 w-full border border-gray-200 rounded-md p-4  overflow-y-auto">
//                 {renderContent()}
//               </div>

//               {/* Star Button */}
//               {activeTab === 'overview' && (
//                 <div className='absolute top-8 right-8'>
//                   <div className='pl-4 cursor-pointer'><CiStar /></div>
//                   <div className='text-xs'>Add To <br />Favorites</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Usersprofile;



// popup










// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { MdOutlineNotificationsNone, MdKeyboardArrowDown } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { CiStar } from "react-icons/ci";
// import Userfiles from './Userfiles';
// import Userlinks from './Userlinks';
// import Usermedia from './Usermedia';
// import Usergroups from './Usergroups';

// const Usersprofile = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'files':
//         return <Userfiles />;
//       case 'media':
//         return <Usermedia />;
//       case 'links':
//         return <Userlinks />;
//       case 'groups':
//         return <Usergroups />;
//       default:
//         return (
//           <>
            // <div className='flex justify-center'>
            //   <img src="./admin-image.png" alt="profile-pic" />
            // </div>
            // <div className='flex flex-col items-center pb-2'>
            //   <div className='font-bo text-xl'>Sumit Tripathi</div>
            //   <div>~Anderson~</div>
            // </div>

            // <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
            //   <IoCallOutline className='ml-32' />
            //   <p className='font-bold'>Meet on Call Now</p>
            // </div>
            // <div className='flex items-center justify-between'>
            //   <div className='text-left'>
            //     <div>About</div>
            //     <div className='font-bold text-md'>Hey There i using Chat Box</div>
            //   </div>
            // </div>
            // <div className='text-left'>
            //   <div>Phone Number</div>
            //   <div className='font-bold'>+91 8810671910</div>
            // </div>

            // <div>
            //   <div className='text-left'>Notification</div>
            //   <div className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md w-23'>
            //     <div><MdOutlineNotificationsNone /></div>
            //     <div className='font-bold'>Mute</div>
            //     <div><MdKeyboardArrowDown /></div>
            //   </div>
            // </div>

            // <div className='flex items-center gap-6'>
            //   <button className="mt-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 w-30 font-bold cursor-pointer">Block</button>
            //   <button className="mt-4 py-2 bg-gray-200 rounded hover:bg-blue-200 w-35 font-bold cursor-pointer">Report Contact</button>
            // </div>
//           </>
//         );
//     }
//   };

//   return (
//     <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-50">
//       <div className="w-130 h-135 bg-white rounded-lg shadow-lg p-6 relative">
//         <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={onClose}>
//           <RxCross2 />
//         </button>

//         <div className="flex gap-15">
//           {/* Sidebar List */}
//           {/* ... your sidebar list here ... */}

//           {/* Main Content */}
//           <div className="flex flex-col gap-1.5 w-full border border-gray-200 rounded-md p-4  overflow-y-auto">
//             {renderContent()}
//           </div>

//           {activeTab === 'overview' && (
//             <div className='absolute top-8 right-8'>
//               <div className='pl-4 cursor-pointer'><CiStar /></div>
//               <div className='text-xs'>Add To <br />Favorites</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Usersprofile;




import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Userfiles from './Userfiles';
import Userlinks from './Userlinks';
import Usermedia from './Usermedia';
import Usergroups from './Usergroups';
// import Userprofile from './Userprofile';

const Usersprofile = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'files': return <Userfiles />;
      case 'media': return <Usermedia />;
      case 'links': return <Userlinks />;
      case 'groups': return <Usergroups />;
      default:
        return (
          <>
            {/* ...overview content... */}

            <div className='flex justify-center'>
              <img src="./admin-image.png" alt="profile-pic" />
            </div>
            <div className='flex flex-col items-center pb-2'>
              <div className='font-bo text-xl'>Sumit Tripathi</div>
              <div>~Anderson~</div>
            </div>

            <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
              <IoCallOutline className='ml-32' />
              <p className='font-bold'>Meet on Call Now</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-left'>
                <div>About</div>
                <div className='font-bold text-md'>Hey There i using Chat Box</div>
              </div>
            </div>
            <div className='text-left'>
              <div>Phone Number</div>
              <div className='font-bold'>+91 8810671910</div>
            </div>

            <div>
              <div className='text-left'>Notification</div>
              <div className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md w-23'>
                <div><MdOutlineNotificationsNone /></div>
                <div className='font-bold'>Mute</div>
                <div><MdKeyboardArrowDown /></div>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <button className="mt-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 w-30 font-bold cursor-pointer">Block</button>
              <button className="mt-4 py-2 bg-gray-200 rounded hover:bg-blue-200 w-35 font-bold cursor-pointer">Report Contact</button>
            </div>

          </>
        );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-50">
      <div className="w-130 h-135 bg-white rounded-lg shadow-lg p-6 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={onClose}>
          <RxCross2 />
        </button>

        <div className="flex gap-15">
          {/* Sidebar List */}
          {/* ... your sidebar list here ... */}

          <div className='flex flex-col justify-between'>
                <ul>
                  <li className={`flex items-center gap-2 pt-3 cursor-pointer ${activeTab === 'overview' ? 'font-bold' : ''}`} onClick={() => setActiveTab('overview')}>
                    <img src="./info.png" alt="overview" />
                    <span>Overview</span>
                  </li>
                  <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'media' ? 'font-bold' : ''}`} onClick={() => setActiveTab('media')}>
                    <img src="./Video.png" alt="media" />
                    <span>Media</span>
                  </li>
                  <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'files' ? 'font-bold' : ''}`} onClick={() => setActiveTab('files')}>
                    <img src="./Filedoc.png" alt="files" />
                    <span>Files</span>
                  </li>
                  <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'links' ? 'font-bold' : ''}`} onClick={() => setActiveTab('links')}>
                    <img src="./links.png" alt="links" />
                    <span>Links</span>
                  </li>
                  <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'groups' ? 'font-bold' : ''}`} onClick={() => setActiveTab('groups')}>
                    <img src="./Group.png" alt="groups" />
                    <span>Groups</span>
                  </li>
                </ul>
              </div>


          {/* Main Content */}
          <div className="flex flex-col gap-1.5 w-full border border-gray-200 rounded-md p-4  overflow-y-auto">
            {renderContent()}
          </div>

          {activeTab === 'overview' && (
            <div className='absolute top-8 right-8'>
              <div className='pl-4 cursor-pointer'><CiStar /></div>
              <div className='text-xs'>Add To <br />Favorites</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usersprofile;
