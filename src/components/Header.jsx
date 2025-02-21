import React from 'react'

const Header = () => {
  return (
    <div className='h-[6vh] w-full mt-4'>
        <div className='flex justify-between'>
            <div className="email flex justify-center items-center gap-4 ml-28">
              <a href="https://www.facebook.com/friskytrails/" target="_blank"><div className='flex justify-center items-center'><img className="w-5 h-5 object-cover" src="./src/assets/email.svg" alt="" /><h3 className='text-gray-500'>friskytrails@gmail.com</h3></div></a>
              
              <div className="border-1 h-full border-gray-400"></div> {/* Vertical Line */}
              <div className="number flex justify-center items-center">
                <img className="w-5 h-5 object-cover" src="./src/assets/calling.svg" alt="" /><h3 className='text-gray-500'>+91-75015 16714</h3>
              </div>
            </div>
            <div className="images flex justify-center items-center gap-4 mr-28">
              <h3 className='text-gray-500'>Follow Us On:</h3>
              <a href="https://www.facebook.com/friskytrails/" target="_blank">
              <img className="w-5 h-5 object-cover" src="./src/assets/facebook.svg" alt="" />
              </a>
              <div className="border-1 h-full border-gray-400"></div> {/* Vertical Line */}
              <a href="https://x.com/frisky_trails" target="_blank"><img className="w-5 h-5 object-cover" src="./src/assets/twitter.svg" alt="" /></a>
              <div className="border-1 h-full border-gray-400"></div> {/* Vertical Line */}
              <a href="https://www.linkedin.com/company/friskytrails/" target="_blank"><img className="w-5 h-5 object-cover" src="./src/assets/linkedin.svg" alt="" /></a>
              <div className="border-1 h-full border-gray-400"></div> {/* Vertical Line */}
              <a href="https://www.instagram.com/friskytrails/" target="_blank"><img className="w-5 h-5 object-cover" src="./src/assets/instagram.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Header
