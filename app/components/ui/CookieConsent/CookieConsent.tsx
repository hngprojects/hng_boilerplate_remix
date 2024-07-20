import React, {useState} from "react";
import styles from './CookieConsent.module.css';
import CookieSettings from "./CookieSettings";

export default function CookieConsent(){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"'>
            <div className={`${styles.modal} bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full m-10`}>
                <div className={`mb-6`}>
                    <p className="text-xl font-semibold">Customize cookies</p>
                    <p className="text-sm text-gray-600 mt-2 mb-10">
                        Cookies are small text files that are stored on your device when you visit websites. 
                        They are used to remember information about you, such as your login details, preferences, and browsing history. 
                        Cookies help enhance your browsing experience by allowing websites to remember your actions and preferences over time, 
                        ensuring that you don’t have to re-enter information each time you visit a site. 
                        They also help website owners analyze traffic and user behavior to improve their services. 
                        Read our <a href="#" className="text-orange-600 hover:underline" target="_blank">Privacy Policy</a> for more details
                    </p>
                    <div className="relative mb-2">
                        <div className="flex justify-between items-start">
                            <div className="pr-8 flex-grow">
                                <div className='flex justify-between items-center mb-2'>
                                    <p className="font-medium">Strictly necessary</p>
                                    <div className="ml-4" onClick={toggleExpand} role="button" tabIndex="0">
                                        <img 
                                            src={isExpanded ? '/chevron-down.svg' : '/chevron-up.svg'}
                                            alt={isExpanded ? 'Collapse' : 'Expand'}
                                        />
                                    </div>
                                </div>
                                <p className={`text-sm text-gray-600 ${isExpanded ? '' : 'hidden'}`}>
                                    These cookies are essential for the website to function properly.
                                    They enable basic functions like page navigation, secure login, 
                                    and access to protected areas of the site. Without these cookies, 
                                    the website cannot perform properly.
                                </p>
                                <hr className="my-6" />
                            </div>
                            <p className="text-gray-500 text-sm whitespace-nowrap">Always Enabled</p>
                        </div>
                    </div>
                    <CookieSettings/>
                    <div className="flex justify-end mt-6">
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">Save & Accept</button>
                    </div>
                </div>
            </div>
        </div>
        
      )
}