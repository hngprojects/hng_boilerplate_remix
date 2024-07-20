

const Contact = () => {
  return (
    <div>
        <div className='bg-black text-white'>
            <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>BoilerPlate</h6>
                    <ul>
                        <li>Logo subject details and address</li>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>Navigation</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>About us</li>
                        <li className='py-2 text-sm'>Career</li>
                        <li className='py-2 text-sm'>Feature updates</li>
                        <li className='py-2 text-sm'>Blog</li>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Help Center</li>
                        <li className='py-2 text-sm'>FAQ</li>
                        <li className='py-2 text-sm'>Waiting list</li>
                        <li className='py-2 text-sm'>Pricing Experience</li>
                        <li className='py-2 text-sm'>Contact Us</li>
                    </ul>
                </div>
                <div className="lg:col-span-1">
                    <h6 className='font-medium text-xl py-5'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Privacy Policy</li>
                        <li className='py-2 text-sm'>Terms and conditions</li>
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
        </div>

    </div>
  )
}

export default Contact