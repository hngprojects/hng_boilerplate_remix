import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <div>
  
  <footer className="bg-white py-6 mt-10 shadow-md">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-lg">BoilerPlate</h3>
            <p className="text-gray-600">Logo and additional details</p>
          </div>
          <div>
                    <h3 className="font-bold">Navigation</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Support</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Legal</h3>
                    <ul>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                    </ul>
            <h3 className="font-bold text-lg mt-4">Sign Up for Newsletter</h3>
            <input type="email" placeholder="Email address" className="px-4 py-2 border border-orange-300 rounded mt-2 w-full" />
          </div>
        </div>
        <div className="py-4 mt-8">
          <div className="container mx-auto px-6">
            <div className="border-t border-gray-300 mb-4"></div>
            <div className="flex space-x-6 justify-start">
              <a href="#" className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full flex items-center justify-center text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full flex items-center justify-center text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full flex items-center justify-center text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full flex items-center justify-center text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

 





    </div>
  )
}

export default Footer