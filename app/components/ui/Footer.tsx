import { Link } from "@remix-run/react";
import { X } from "lucide-react";

export default function Footer() {
	return (
		<div className="bg-[#FAFAFA] ">
			<footer className="pt-16 pb-8 px-8 md:px-24 text-gray-700 w-full">
				<div className="flex flex-row lg:items-start lg:justify-evenly flex-wrap gap-12 lg:gap-4 mb-6">
					<div className="text-center lg:text-left flex-1 grow lg:mb-0 order-1">
						<h3 className="font-bold text-lg mb-5">BoilerPlate</h3>
						<p className="text-sm text-gray-800 font-semibold">
							Logo subject details and address
						</p>
					</div>

					<div className="lg:flex-1 order-2">
						<h3 className="font-bold text-lg mb-5">Navigation</h3>
						<ul className="space-y-2 text-base font-semibold">
							<li>
								<Link to="/" className="hover:text-gray-900">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className="hover:text-gray-900">
									About us
								</Link>
							</li>
							<li>
								<Link to="/job-listing" className="hover:text-gray-900">
									Job Listing
								</Link>
							</li>
							<li>
								<Link to="/feature-updates" className="hover:text-gray-900">
									Feature updates
								</Link>
							</li>
							<li>
								<Link to="/blog" className="hover:text-gray-900">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div className="lg:flex-1 order-3">
						<h3 className="font-bold text-lg mb-5">Support</h3>
						<ul className="space-y-2 text-base font-semibold">
							<li>
								<Link to="/help-center" className="hover:text-gray-900">
									Help Center
								</Link>
							</li>
							<li>
								<Link to="/faq" className="hover:text-gray-900">
									FAQ
								</Link>
							</li>
							<li>
								<Link to="/waiting-list" className="hover:text-gray-900">
									Waiting list
								</Link>
							</li>
							<li>
								<Link to="/pricing-experience" className="hover:text-gray-900">
									Pricing Experience
								</Link>
							</li>
							<li>
								<Link to="/contact-us" className="hover:text-gray-900">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div className="lg:flex-1 order-4">
						<h3 className="font-bold text-lg mb-5">Legal</h3>
						<ul className="space-y-2 text-base font-semibold">
							<li>
								<Link to="/privacy-policy" className="hover:text-gray-900">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms-and-conditions"
									className="hover:text-gray-900">
									Terms and condition
								</Link>
							</li>
						</ul>
					</div>

					<div className="lg:flex-1 order-last md:hidden ml-[-6]">
						<h3 className="font-bold text-lg mb-5">Follow Us</h3>
						<div className="flex space-x-1 mb-4">
							<a
								href="#"
								className="text-white text-xs bg-[#f97316] rounded-full p-1">
								<img src="/twitter.svg" alt="instagram" className="w-4 h-4" />
							</a>

							<a
								href="#"
								className="text-white text-xs bg-[#f97316] rounded-full p-1"
								aria-label="YouTube">
								<img
									src="/youtube.svg"
									alt="youtube"
									className="w-4 h-4 text-white bg-[#f97316]"
								/>
							</a>
							<a
								href="#"
								className="text-white text-xs bg-[#f97316] rounded-full p-1"
								aria-label="Instagram">
								<img src="/instagram.svg" alt="instagram" className="w-4 h-4" />
							</a>
							<a
								href="#"
								className="text-white text-xs bg-[#f97316] rounded-full p-1"
								aria-label="LinkedIn">
								<img src="/linkedin.svg" alt="linkedin" className="w-4 h-4" />
							</a>
							<a
								href="#"
								className="text-white text-xs bg-[#f97316] rounded-full p-1"
								aria-label="Facebook">
								<img src="/facebook.svg" alt="facebook" className="w-4 h-4" />
							</a>
						</div>
					</div>

					<div className="text-center lg:text-left flex-1 mb-8 mt-[-8] md:mt-[0] lg:mb-0 order-1 md:order-last">
						<h3 className="font-bold text-lg mb-4">Sign Up For Newsletter</h3>
						<form className="flex items-center justify-center">
							<input
								type="email"
								placeholder="Enter Email"
								className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200"
							/>
							<button className="px-4 py-2 bg-[#f97316] text-white font-semibold rounded-l-md rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#f97316] -ml-3">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</footer>
			<hr className="h-0.5 bg-gray-800" />
			<div className="lg:flex lg:justify-between lg:items-center pt-4 pb-10 text-sm px-8 md:px-24">
				<div className="hidden lg:flex space-x-1 mb-4 lg:mb-0">
					<a
						href="#"
						className="text-white text-xs bg-[#f97316] rounded-full p-2"
						aria-label="Twitter">
						<img src="/twitter.svg" alt="twitter" className="w-5 h-5" />
					</a>
					<a
						href="#"
						className="text-white text-xs bg-[#f97316] rounded-full p-2"
						aria-label="YouTube">
						<img src="/youtube.svg" alt="youtube" className="w-5 h-5" />
					</a>
					<a
						href="#"
						className="text-white text-xs bg-[#f97316] rounded-full p-2"
						aria-label="Instagram">
						<img src="/instagram.svg" alt="instagram" className="w-5 h-5" />
					</a>
					<a
						href="#"
						className="text-white text-xs bg-[#f97316] rounded-full p-2"
						aria-label="LinkedIn">
						<img src="/linkedin.svg" alt="linkedin" className="w-5 h-5" />
					</a>
					<a
						href="#"
						className="text-white text-xs bg-[#f97316] rounded-full p-2"
						aria-label="Facebook">
						<img src="/facebook.svg" alt="facebook" className="w-5 h-5" />
					</a>
				</div>

				<p className="text-gray-300 mb-4 lg:mb-0 text-center font-bold flex items-center gap-2">
					<span>
						<img src="/copyright.svg" alt="copyright" className="w-4 h-4" />
					</span>{" "}
					2024 All Rights Reserved
				</p>

				<div className="hidden lg:flex space-x-4">
					<Link to="/privacy-policy" className="text-black font-semibold">
						Privacy Policy
					</Link>
					<Link to="/terms-of-use" className="text-black font-semibold">
						Terms of Use
					</Link>
				</div>
			</div>
		</div>
	);
}
