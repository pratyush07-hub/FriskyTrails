import { useRef } from 'react'
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className='fixed inset-0 flex justify-center z-50 pt-29 px-4 sm:px-6 md:px-8'
        >
            <div className='relative h-[24vh] lg:h-[30vh] text-xl lg:text-base w-[50vw] sm:w-[50vw] lg:w-[25vw] xl:w-[20vw] rounded-lg drop-shadow-lg bg-[rgb(10,3,34)] flex'>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-1 right-4 text-white text-2xl font-bold hover:text-[rgb(255,99,33)] transition duration-200'
                    aria-label="Close Modal"
                >
                    &times;
                </button>

                <div className='text-white pt-4 pl-6 sm:pl-10 md:pl-14 cursor-pointer'>
                    <Link to="/services/holidays"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Holidays</h3></Link>
                    <Link to="/services/activities"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Activities</h3></Link>
                    <Link to="/services/hotels"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Hotels</h3></Link>
                    <Link to="/services/transport"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Cab Service</h3></Link>
                </div>

                <div className='text-white pt-4 pl-8 sm:pl-8 md:pl-12 cursor-pointer'>
                    <Link to="/services/flights"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Flights</h3></Link>
                    <Link to="/services/rail-tickets"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Rail Tickets</h3></Link>
                    <Link to="/services/bus-tickets"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Bus Tickets</h3></Link>
                    {/* <Link to="/services/offers"><h3 className='py-3 hover:text-[rgb(255,99,33)]'>Offers</h3></Link> */}
                </div>

            </div>
        </div>
    )
}

export default Modal;