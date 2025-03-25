import React, { useRef } from 'react'
import { Link } from "react-router-dom";


const Modal = ({onClose}) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 flex pl-174 pt-32 z-50'>
          <div className='h-[30vh] w-[18vw] rounded-lg drop-shadow-lg bg-[rgb(10,3,34)] flex'>
                <div className='text-white pt-4 pl-10 cursor-pointer'>
                    <Link to="/services/holidays"><h3 className='py-3'>Holidays</h3></Link>
                    <Link to="/services/holidays"><h3 className='py-3'>Activities</h3></Link>
                    <Link to="/services/holidays"><h3 className='py-3'>Hotels</h3></Link>
                    <Link to="/services/holidays"><h3 className='py-3'>Transport</h3></Link>
                </div>
                <div className='text-white pt-4 pl-12 cursor-pointer'>
                    <h3 className='py-3'>Flights</h3>
                    <h3 className='py-3'>Rail Tickets</h3>
                    <h3 className='py-3'>Bus Tickets</h3>
                    <h3 className='py-3'>Offers</h3>
                </div>
       </div>
    </div>
  )
}

export default Modal
