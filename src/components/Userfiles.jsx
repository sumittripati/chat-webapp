import React from 'react';

const Userfiles = () => {
  return (
    <div>
      <ul className="flex flex-col gap-1.5 w-full">
        <li className="flex items-center gap-2 border-1 border-gray-200 p-1 rounded-md">
          <img src="./files.png" alt="send files" />
          <div className='text-left'>
            <div className='font-bold text-xs'>Post 1</div>
            <div className='text-xs'>249kb, <span>JPG File</span></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Userfiles;

