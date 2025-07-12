import React from 'react'

const Usergroups = () => {
  return (
    <div className='flex flex-col gap-1'>
        <div><input type="text" placeholder="Search Messages" className='w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'/></div>
        <div>
            <ul className="flex flex-col gap-1.5 w-full">
                <li className="flex items-center gap-2 border-1 border-gray-200 p-1 rounded-md">
                    <img src="./groups.png" alt="send-link" />
                    <div className='text-left'>
                        <div className='font-bold'>Team Probey(Day Time)</div>
                        <div className='text-xs'>24 Members</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Usergroups
