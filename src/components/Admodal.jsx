import React, { useRef } from 'react'

const Admodal = ({onClose}) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 flex justify-center z-50 pt-32'>
          <div className='h-[50vh] w-[40vw] rounded-lg drop-shadow-lg bg-[rgb(10,3,34)] flex'>
                <div className='text-white pt-4 pl-14 cursor-pointer'>
                    <h3 className='py-3 text-[rgb(255,99,33)] text-xl'>Aerial Activities</h3>
                    <h3 className='py-3'>Paragliding</h3>
                    <h3 className='py-3'>Paramotoring</h3>
                    <h3 className='py-3'>Hot Air Balloon</h3>
                    <h3 className='py-3'>Hummerchute Ride</h3>
                    <h3 className='py-3'>Skydiving</h3>
                </div>
                <div className='text-white pt-4 pl-12 cursor-pointer'>
                    <h3 className='py-3 text-[rgb(255,99,33)] text-xl'>Water Activities</h3>
                    <h3 className='py-3'>Scuba Diving</h3>
                    <h3 className='py-3'>Kayaking</h3>
                    <h3 className='py-3'>Boating</h3>
                    <h3 className='py-3'>Flyboarding</h3>
                    <h3 className='py-3'>Surfing</h3>
                </div>
                <div className='text-white pt-4 pl-12 cursor-pointer'>
                    <h3 className='py-3 text-[rgb(255,99,33)] text-xl'>Land Activities</h3>
                    <h3 className='py-3'>Trekking</h3>
                    <h3 className='py-3'>Camping</h3>
                    <h3 className='py-3'>Bunngee Jumping</h3>
                    <h3 className='py-3'>Bike Trips</h3>
                    <h3 className='py-3'>ATV Ride</h3>
                </div>
       </div>
    </div>
  )
}

export default Admodal
