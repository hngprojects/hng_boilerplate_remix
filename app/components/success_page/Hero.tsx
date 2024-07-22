import { useState } from 'react';

const Hero = () => {
  const [showMessage, setShowMessage] = useState(true);

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <div className='mt-[-96px] w-[400px] md:w-[550px] h-screen mx-auto text-center flex flex-col justify-center'>
        {showMessage && (
          <div className='relative bg-green-100 border-green-500 border rounded-md w-full h-[50px] mx-auto flex items-center justify-between px-4'>
            <p className="py-3"><span className="text-green-500 font-bold text-xl mr-2">✓</span>Email Verified Successfully</p>
            <button 
              className="text-green-500 font-bold text-xl"
              onClick={handleCloseMessage}
            >
              &times;
            </button>
          </div>
        )}
          <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-6'>Verification Successful</p>
          </div>
          <p className='text-xl text-gray-600'>Your verification was successful, you can now proceed to reset your password</p>
          <button className='bg-orange-500 text-white w-full rounded-md font-medium my-6 mx-auto py-3'>
            Reset Password
          </button>
      </div>
    </div>
  );
};

export default Hero;
