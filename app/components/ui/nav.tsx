import {useState} from 'react'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
         <header className="bg-white shadow">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
            <div className="text-2xl font-bold">HNG Boilerplate</div>
            <ul className="flex space-x-6 hidden md:flex">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            </ul>
            <div className="flex space-x-4 hidden md:flex">
                <button className="px-4 py-2 border border-orange-300 text-gray-600 rounded hover:bg-gray-100">Login</button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Sign Up</button>
            </div>
            <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md mt-2">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Features</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Login</a>
              <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-100">Login</button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Sign Up</button>
            </nav>
          </div>
        )}
    </header>

    </div>
  )
}

export default Nav