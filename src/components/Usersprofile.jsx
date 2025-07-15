// // user content 

// import { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { CiStar } from "react-icons/ci";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { MdOutlineNotificationsNone } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import Userfiles from './Userfiles';
// import Userlinks from './Userlinks';
// import Usermedia from './Usermedia';
// import Usergroups from './Usergroups';
// // import Userprofile from './Userprofile';

// const Usersprofile = ({ isOpen, onClose, user }) => {
// const [activeTab, setActiveTab] = useState('overview');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'files': return <Userfiles />;
//       case 'media': return <Usermedia />;
//       case 'links': return <Userlinks />;
//       case 'groups': return <Usergroups />;
//       default:
//         return (
//           <>
//             <div className='flex justify-center'>
//               <img src={user.img} alt="profile-pic" className='w-20 h-20 rounded-full' />
//             </div>
//             <div className='flex flex-col items-center pb-2'>
//               <div className='font-bo text-xl'>{user.name}</div>
//               <div>~Anderson~</div>
//             </div>

//             <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
//               <IoCallOutline className='ml-32' />
//               <p className='font-bold text-center'>Meet on Call Now</p>
//             </div>

//             <div className='text-left mt-2'>
//               <div>About</div>
//               <div className='font-bold text-md'>{user.about}</div>
//             </div>

//             <div className='text-left mt-2'>
//               <div>Phone Number</div>
//               <div className='font-bold'>{user.phone}</div>
//             </div>

//             <div className='mt-2'>
//               <div className='text-left'>Notification</div>
//               <div className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md w-23 p-1'>
//                 <MdOutlineNotificationsNone />
//                 <div className='font-bold'>Mute</div>
//                 <MdKeyboardArrowDown />
//               </div>
//             </div>

//             <div className='flex items-center gap-6 mt-4'>
//               <button className="py-2 px-4 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 font-bold cursor-pointer">Block</button>
//               <button className="py-2 px-4 bg-gray-200 rounded hover:bg-blue-200 font-bold cursor-pointer">Report Contact</button>
//             </div>
//           </>
//         );
//     }
//   };

//   if (!isOpen || !user) return null;

//   return (
//     <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-50">
//       <div className="w-130 h-135 bg-white rounded-lg shadow-lg p-6 relative">
//         <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={onClose}>
//           <RxCross2 />
//         </button>

//         <div className="flex gap-15 border-2">
//           {/* Sidebar List */}
//           <div className='flex flex-col justify-between border-2'>
//             <ul>
//               <li className={`flex items-center gap-2 pt-3 cursor-pointer ${activeTab === 'overview' ? 'font-bold' : ''}`} onClick={() => setActiveTab('overview')}>
//                 <img src="./info.png" alt="overview" />
//                 <span>Overview</span>
//               </li>
//               <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'media' ? 'font-bold' : ''}`} onClick={() => setActiveTab('media')}>
//                 <img src="./Video.png" alt="media" />
//                 <span>Media</span>
//               </li>
//               <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'files' ? 'font-bold' : ''}`} onClick={() => setActiveTab('files')}>
//                 <img src="./Filedoc.png" alt="files" />
//                 <span>Files</span>
//               </li>
//               <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'links' ? 'font-bold' : ''}`} onClick={() => setActiveTab('links')}>
//                 <img src="./links.png" alt="links" />
//                 <span>Links</span>
//               </li>
//               <li className={`flex items-center gap-2 pt-4 cursor-pointer ${activeTab === 'groups' ? 'font-bold' : ''}`} onClick={() => setActiveTab('groups')}>
//                 <img src="./Group.png" alt="groups" />
//                 <span>Groups</span>
//               </li>
//             </ul>
//           </div>

//           {/* Main Content */}
//           <div className="flex flex-col gap-1.5 w-full border border-gray-200 rounded-md p-4 overflow-y-auto">
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




// phone view



// user content 

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

const Usersprofile = ({ isOpen, onClose, user }) => {
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
            <div className='flex justify-center'>
              <img src={user.img} alt="profile-pic" className='w-20 h-20 rounded-full' />
            </div>
            <div className='flex flex-col items-center pb-2'>
              <div className='font-bo text-xl'>{user.name}</div>
              <div>~Anderson~</div>
            </div>

            <div className='flex flex-col bg-gray-200 p-1 rounded-md cursor-pointer'>
              <IoCallOutline className='ml-32' />
              <p className='font-bold text-center'>Meet on Call Now</p>
            </div>

            <div className='text-left mt-2'>
              <div>About</div>
              <div className='font-bold text-md'>{user.about}</div>
            </div>

            <div className='text-left mt-2'>
              <div>Phone Number</div>
              <div className='font-bold'>{user.phone}</div>
            </div>

            <div className='mt-2'>
              <div className='text-left'>Notification</div>
              <div className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md w-23 p-1'>
                <MdOutlineNotificationsNone />
                <div className='font-bold'>Mute</div>
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className='flex items-center gap-6 mt-4'>
              <button className="py-2 px-4 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 font-bold cursor-pointer">Block</button>
              <button className="py-2 px-4 bg-gray-200 rounded hover:bg-blue-200 font-bold cursor-pointer">Report Contact</button>
            </div>
          </>
        );
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-50">
      <div className="w-130 h-140 bg-white rounded-lg shadow-lg p-6 relative max-[620px]:w-full max-[620px]:h-auto max-[620px]:relative max-[620px]:left-0 max-[620px]:top-0">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={onClose}>
          <RxCross2 />
        </button>

        <div className="flex gap-15 w-full h-full max-[620px]:flex-col-reverse max-[620px]:gap-0 max-[620px]:h-auto max-[620px]:relative max-[620px]:left-0 max-[620px]:top-0 max-[620px]:w-full">
          {/* Sidebar List */}
          <div className='flex flex-col justify-between'>
            <ul>
              <li className={`flex items-center gap-2 max-[620px]:gap-1 max-[620px]:pt-1 pt-3 cursor-pointer ${activeTab === 'overview' ? 'font-bold' : ''}`} onClick={() => setActiveTab('overview')}>
                <img src="./info.png" alt="overview" />
                <span>Overview</span>
              </li>
              <li className={`flex items-center gap-2 pt-4 max-[620px]:gap-1 max-[620px]:pt-1 cursor-pointer ${activeTab === 'media' ? 'font-bold' : ''}`} onClick={() => setActiveTab('media')}>
                <img src="./Video.png" alt="media" />
                <span>Media</span>
              </li>
              <li className={`flex items-center gap-2 pt-4 max-[620px]:gap-1 max-[620px]:pt-1 cursor-pointer ${activeTab === 'files' ? 'font-bold' : ''}`} onClick={() => setActiveTab('files')}>
                <img src="./Filedoc.png" alt="files" />
                <span>Files</span>
              </li>
              <li className={`flex items-center gap-2 pt-4 max-[620px]:gap-1 max-[620px]:pt-1 cursor-pointer ${activeTab === 'links' ? 'font-bold' : ''}`} onClick={() => setActiveTab('links')}>
                <img src="./links.png" alt="links" />
                <span>Links</span>
              </li>
              <li className={`flex items-center gap-2 pt-4 max-[620px]:gap-1 max-[620px]:pt-1 cursor-pointer ${activeTab === 'groups' ? 'font-bold' : ''}`} onClick={() => setActiveTab('groups')}>
                <img src="./Group.png" alt="groups" />
                <span>Groups</span>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-1.5 w-full rounded-200 rounded-md p-4 overflow-y-auto border border-gray-200 max-[620px]:w-full max-[620px]:h-auto">
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




