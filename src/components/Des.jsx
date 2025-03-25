import React, {useRef} from 'react'


const Des = ({onClose}) => {
    const modalRef = useRef();
    
        const closeDes = (e) => {
            if(modalRef.current === e.target){
                onClose();
            }
        }

  return (
    <div ref={modalRef} onClick={closeDes} className='fixed inset-0 flex justify-center pt-112 z-50'>
          <div className='h-[16vh] w-[32vw] rounded-lg drop-shadow-lg bg-[rgb(10,3,34)] flex flex-col'>
                <div className='text-white pt-4 pl-10 flex gap-10 cursor-pointer'>
                    <h3 className='py-1'>Places to Visit</h3>
                    <h3 className='py-1'>Things to Do</h3>
                    <h3 className='py-1'>Adventure Activities</h3>
                </div>
                <div className='text-white pt-4 pl-12 flex gap-10 cursor-pointer'>
                    <h3 className='py-1 p'>Travel Tips</h3>
                    <h3 className='py-1 px-4'>Travel Festivals</h3>
                </div>
       </div>
    </div>
  )
}

export default Des
