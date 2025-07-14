// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";

// const ProfilePopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Button (Trigger) */}
//       <button className='items-center pb-4 pl-2' onClick={togglePopup}>
//         <span className="text-xs">
//           <img src="./setting.png" alt="settings-icon" className="w-5 h-5 cursor-pointer" />
//         </span>
//       </button>

//       <button className='items-center pb-4 pl-2' onClick={togglePopup}>
//         <span className="text-xs">
         

// <div className='absolute bottom-0 bg-gray-100 w-96 ml-3 cursor-pointer'>
//                <div className="flex flex-col">
//                     <div className="flex items-center gap-2 border-1 border-gray-200 p-1 rounded-md">
//                       <img src="./groups.png" alt="send-link" />
//                       <div className='text-left'>
//                           <div className='font-bold'>admin</div>
//                           <div className='text-xs'>Love is in Nature</div>
//                       </div>
//                     </div>
//                 </div>
//             </div>


//         </span>
//       </button>

//       {/* Popup Overlay & Card */}
//       {isOpen && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-5">
//           <div className="w-100 h-100 bg-white rounded-lg shadow-lg p-6 relative">
//             {/* Close Button (optional) */}
//             <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={() => setIsOpen(false)}><RxCross2 /></button>

//             <div className="flex gap-15 h-full">
//                 <div className='flex flex-col justify-between'>
//                   <div>
//                     <ul>
//                       <li className="flex items-center gap-2 pt-3"><img src="./info.png" alt="overview" /><span className='cursor-pointer'>Overview</span></li>
//                       {/* <li className="flex items-center gap-2 pt-4"><img src="./Video.png" alt="media" /><span className='cursor-pointer'>Media</span></li>
//                       <li className="flex items-center gap-2 pt-4"><img src="./Filedoc.png" alt="files" /><span className='cursor-pointer'>Files</span></li>
//                       <li className="flex items-center gap-2 pt-4"><img src="./links.png" alt="links" /><span className='cursor-pointer'>Links</span></li>
//                       <li className="flex items-center gap-2 pt-4"><img src="./Group.png" alt="groups" /><span className='cursor-pointer'>Groups</span></li>
//                       <li className="flex items-center gap-2 pt-4"><img src="./Help.png" alt="Help" /><span className='cursor-pointer'>Help</span></li> */}
//                     </ul>
//                   </div>
//                   <div>
//                     <div className="flex items-center gap-2"><img src="./profile.png" alt="profile" /><span className='cursor-pointer'>Profile</span></div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-1.5 w-full border-1 border-gray-200 rounded-md p-2 h-80">
//                   <div><img src="./admin-image.png" alt="profile-pic" /></div>
//                   <div className='flex items-center justify-between'><span className='font-bold text-xl'>Sumit Tripathi</span><img src="./edit-icon.png" alt="edit" className='cursor-pointer'/></div>
//                   <div className='flex items-center justify-between'>
//                     <div className='text-left'>
//                       <div>About</div>
//                       <div className='font-bold text-md'>Hey There i using Chat Box</div>
//                     </div>
//                     <div><img src="./edit-icon.png" alt="edit" className='cursor-pointer' /></div>
//                   </div>
//                   <div className='text-left'>
//                     <div>Phone Number</div>
//                     <div className='font-bold'>+91 8810671910</div>
//                   </div>
//                   <button onClick={() => alert('Logging out...')}  className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded  hover:bg-blue-200 w-30 font-bold cursor-pointer">Log Out</button>
//                 </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePopup;






// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";

// const ProfilePopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isEditingName, setIsEditingName] = useState(false);
//   const [isEditingAbout, setIsEditingAbout] = useState(false);

//   const [name, setName] = useState('Sumit Tripathi');
//   const [about, setAbout] = useState('Hey There I am using Chat Box');
//   const [image, setImage] = useState('./admin-image.png');

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setImage(imgURL);
//     }
//   };

//   return (
//     <div>
//       {/* Trigger Button */}
//       <button className='items-center pb-4 pl-2' onClick={togglePopup}>
//         <span className="text-xs">
//           <img src="./setting.png" alt="settings-icon" className="w-5 h-5 cursor-pointer" />
//         </span>
//       </button>

//       {/* Optional Profile Summary */}
//       <div className='absolute bottom-0 bg-gray-100 w-96 ml-8 cursor-pointer' onClick={togglePopup}>
//         <div className="flex flex-col">
//           <div className="flex items-center gap-2 border-1 border-gray-200 p-1 rounded-md">
//             <img src="./groups.png" alt="send-link" />
//             <div className='text-left'>
//               <div className='font-bold'>admin</div>
//               <div className='text-xs'>Love is in Nature</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popup Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-5">
//           <div className="w-[700px] bg-white rounded-lg shadow-lg p-6 relative">
//             {/* Close Button */}
//             <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={() => setIsOpen(false)}><RxCross2 /></button>

//             <div className="flex gap-8">
//               {/* Sidebar Menu */}
//               <div className='flex flex-col justify-between'>
//                 <ul>
//                   <li className="flex items-center gap-2 pt-3"><img src="./info.png" alt="overview" /><span className='cursor-pointer'>Overview</span></li>
//                 </ul>
//                 <div className="flex items-center gap-2"><img src="./profile.png" alt="profile" /><span className='cursor-pointer'>Profile</span></div>
//               </div>

//               {/* Profile Content */}
//               <div className="flex flex-col gap-4 w-full border border-gray-200 rounded-md p-4 h-auto">
//                 {/* Editable Image */}
//                 <div className="relative w-28 h-28">
//                   <img
//                     src={image}
//                     alt="profile-pic"
//                     className="w-full h-full object-cover rounded-full border-2 border-amber-300"
//                   />
//                   <label className="absolute bottom-0 right-0 cursor-pointer bg-white p-1 rounded-full shadow">
//                     <img src="./edit-icon.png" alt="edit" className="w-5 h-5" />
//                     <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
//                   </label>
//                 </div>

//                 {/* Editable Name */}
//                 <div className='flex items-center justify-between'>
//                   {isEditingName ? (
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       onBlur={() => setIsEditingName(false)}
//                       className='border px-2 py-1 rounded-md font-bold text-xl w-full'
//                       autoFocus
//                     />
//                   ) : (
//                     <>
//                       <span className='font-bold text-xl'>{name}</span>
//                       <img src="./edit-icon.png" alt="edit" className='cursor-pointer w-5 h-5' onClick={() => setIsEditingName(true)} />
//                     </>
//                   )}
//                 </div>

//                 {/* Editable About */}
//                 <div className='flex items-center justify-between'>
//                   <div className='text-left w-full'>
//                     <div className='text-sm text-gray-500'>About</div>
//                     {isEditingAbout ? (
//                       <input
//                         type="text"
//                         value={about}
//                         onChange={(e) => setAbout(e.target.value)}
//                         onBlur={() => setIsEditingAbout(false)}
//                         className='border px-2 py-1 rounded-md font-medium w-full text-md'
//                         autoFocus
//                       />
//                     ) : (
//                       <div className='font-medium text-md'>{about}</div>
//                     )}
//                   </div>
//                   {!isEditingAbout && (
//                     <img src="./edit-icon.png" alt="edit" className='cursor-pointer w-5 h-5' onClick={() => setIsEditingAbout(true)} />
//                   )}
//                 </div>

//                 {/* Phone (not editable here) */}
//                 <div className='text-left'>
//                   <div className='text-sm text-gray-500'>Phone Number</div>
//                   <div className='font-bold'>+91 8810671910</div>
//                 </div>

//                 {/* Logout */}
//                 <button onClick={() => alert('Logging out...')} className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 w-30 font-bold cursor-pointer">
//                   Log Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePopup;











import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const ProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const [name, setName] = useState('Sumit Tripathi');
  const [about, setAbout] = useState('Hey There I am using Chat Box');
  const [image, setImage] = useState('./admin-image.png');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
    }
  };

  return (
    <div>
      {/* Trigger Button */}
      <button className='items-center pb-4 pl-2' onClick={togglePopup}>
        <span className="text-xs">
          <img src="./setting.png" alt="settings-icon" className="w-5 h-5 cursor-pointer" />
        </span>
      </button>

      {/* Optional Profile Summary */}
      {/* <div className='absolute bottom-0 bg-gray-100 w-96 ml-8 cursor-pointer' onClick={togglePopup}> */}
      <div 
  className='absolute bottom-0 bg-gray-100 w-96 ml-8 cursor-pointer hidden min-[625px]:block' onClick={togglePopup}>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 border-1 border-gray-200 p-1 rounded-md">
            <img src="./groups.png" alt="send-link" />
            <div className='text-left'>
              <div className='font-bold'>admin</div>
              <div className='text-xs'>Love is in Nature</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-5">
          <div className="w-[700px] bg-white rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer" onClick={() => setIsOpen(false)}><RxCross2 /></button>

            <div className="flex gap-8">
              {/* Sidebar Menu */}
              <div className='flex flex-col justify-between'>
                <ul>
                  <li className="flex items-center gap-2 pt-3"><img src="./info.png" alt="overview" /><span className='cursor-pointer'>Overview</span></li>
                </ul>
                <div className="flex items-center gap-2"><img src="./profile.png" alt="profile" /><span className='cursor-pointer'>Profile</span></div>
              </div>

              {/* Profile Content */}
              <div className="flex flex-col gap-4 w-full border border-gray-200 rounded-md p-4 h-auto">
                {/* Editable Image */}
                <div className="relative w-28 h-28">
                  <img
                    src={image}
                    alt="profile-pic"
                    className="w-full h-full object-cover rounded-full border-2 border-amber-300"
                  />
                  <label className="absolute bottom-0 right-0 cursor-pointer bg-white p-1 rounded-full shadow">
                    <img src="./edit-icon.png" alt="edit" className="w-5 h-5" />
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                </div>

                {/* Editable Name */}
                <div className='flex items-center justify-between'>
                  {isEditingName ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setIsEditingName(false)}
                      className='border px-2 py-1 rounded-md font-bold text-xl w-full'
                      autoFocus
                    />
                  ) : (
                    <>
                      <span className='font-bold text-xl'>{name}</span>
                      <img src="./edit-icon.png" alt="edit" className='cursor-pointer w-5 h-5' onClick={() => setIsEditingName(true)} />
                    </>
                  )}
                </div>

                {/* Editable About */}
                <div className='flex items-center justify-between'>
                  <div className='text-left w-full'>
                    <div className='text-sm text-gray-500'>About</div>
                    {isEditingAbout ? (
                      <input
                        type="text"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        onBlur={() => setIsEditingAbout(false)}
                        className='border px-2 py-1 rounded-md font-medium w-full text-md'
                        autoFocus
                      />
                    ) : (
                      <div className='font-medium text-md'>{about}</div>
                    )}
                  </div>
                  {!isEditingAbout && (
                    <img src="./edit-icon.png" alt="edit" className='cursor-pointer w-5 h-5' onClick={() => setIsEditingAbout(true)} />
                  )}
                </div>

                {/* Phone (not editable here) */}
                <div className='text-left'>
                  <div className='text-sm text-gray-500'>Phone Number</div>
                  <div className='font-bold'>+91 8810671910</div>
                </div>

                {/* Logout */}
                <button onClick={() => alert('Logging out...')} className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 w-30 font-bold cursor-pointer">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
