

const Hero = () => {
  return (
    <div>
         <div className='mt-[-96px] w-[400px] md:w-[550px] h-screen mx-auto text-center flex flex-col justify-center'>
            <div className='bg-green-200 border-green-500 border rounded-md w-full h-[50px] mx-auto'>
                <p className="py-3 pr-[200px] md:pr-[300px]">Email Verified Successfully</p>
            </div>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-6'>Verification Successful</p>
            </div>
            <p className='text-xl text-gray-600'>Your verification was successful, you can now proceed to reset your password</p>
            <button
            className='bg-orange-500 text-white w-full rounded-md font-medium my-6 mx-auto py-3'>Reset Password
            </button>
        </div>
    </div>
  )
}

export default Hero