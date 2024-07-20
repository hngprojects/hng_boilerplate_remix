

const Contact = () => {
  return (
    <div>
        
        <div className='bg-black text-white'>
            <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>BoilerPlate</h6>
                    <ul>
                        <a href="/"><li>Logo subject details and address</li></a>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>Legal</h6>
                    <ul>
                        <a href="/"><li className='py-2 text-sm'>Privacy Policy</li></a>
                        <a href="/"><li className='py-2 text-sm'>Terms and conditions</li></a>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>Navigation</h6>
                    <ul>
                        <a href="/"><li className='py-2 text-sm'>Home</li></a>
                        <a href="/"><li className='py-2 text-sm'>About us</li></a>
                        <a href="/"><li className='py-2 text-sm'>Career</li></a>
                        <a href="/"><li className='py-2 text-sm'>Feature updates</li></a>
                        <a href="/"><li className='py-2 text-sm'>Blog</li></a>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>Support</h6>
                    <ul>
                        <a href="/"><li className='py-2 text-sm'>Help Center</li></a>
                        <a href="/"><li className='py-2 text-sm'>FAQ</li></a>
                        <a href="/"><li className='py-2 text-sm'>Waiting list</li></a>
                        <a href="/"><li className='py-2 text-sm'>Pricing Experience</li></a>
                        <a href="/"><li className='py-2 text-sm'>Contact Us</li></a>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className="font-medium text-xl py-5">SignUp For Newsletter</h6>
                    <div className='bg-white rounded-md flex items-center w-[300px] h-[50px]'>
                        <input className='mx-2 text-black' type="email" placeholder='Enter email'/>
                        <button className='bg-orange-500 w-[90px] h-[35px] text-[13px] mx-2 rounded-md py-2 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[1px]"></div>
            <div className="bg-black flex justify-center items-center h-[100px]">
                <a href="/"><p className="mx-4">2024 All Rights Reserved</p></a>
                <a href="/"><p className="mx-4">Privacy Policy <span>Terms of Use</span></p></a>
            </div>
        </div>

    </div>
  )
}

export default Contact