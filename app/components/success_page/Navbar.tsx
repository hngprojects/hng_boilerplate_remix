

const Navbar = () => {
  return (
    <div className="bg-[rgba(200,200,200,0.2)]">
      
      <div className="text-gray-600 flex justify-between items-center max-w-[1100px] h-[70px] mx-auto">
        <h1 className="font-bold text-[23px]">HNG Boilerplate</h1>
        <ul className='hidden md:flex items-center'>
          <li className='p-4'>Pricing</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Career</li>
        </ul>

        <div className="hidden md:flex">
          <button className='text-black bg-white border-orange-500 mx-2 border-2 px-6 py-2 rounded-md hover:scale-105 duration-300'>
            Log In
          </button>
          <button className='text-white bg-orange-500 mx-2 px-6 py-2 rounded-md hover:scale-105 duration-300'>
            Get Started
          </button>
        </div>
      </div>

    </div>
  )
}

export default Navbar