import React from 'react'

const Usermedia = () => {
  return (
    <div>
     <div className="flex flex-col gap-1 w-full">
        {/* <div className=""> */}
            <div className='grid grid-cols-3 gap-1 pl-3'>
                <div><img src="./media-image1.png" alt="image1" /></div>
                <div><img src="./media-image2.png" alt="image2" /></div>
                <div><img src="./media-image3.png" alt="image3" /></div>
                <div><img src="./media-image1.png" alt="image1" /></div>
                <div><img src="./media-image2.png" alt="image2" /></div>
                <div><img src="./media-image3.png" alt="image3" /></div>
            </div>
        {/* </div> */}
      </div>
    </div>
  ) 
}

export default Usermedia
