import React, { useState } from 'react';

interface CookieSetting {
    title: string;
    description: string;
    id: string;
}

interface CookiePreferenceProps extends CookieSetting {
    isExpanded: boolean;
    onToggle: () => void;
}


const  CookiePreference: React.FC<CookiePreferenceProps>= ({ title, description, isExpanded, onToggle, id }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-start">
                <div className="flex-grow pr-20">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-lg font-medium">{title}</p>
                        <div className="ml-4 cursor-pointer" onClick={onToggle}  role="button" tabIndex="0">
                            <img 
                                src={isExpanded ? '/chevron-down.svg' : '/chevron-up.svg'} 
                                alt={isExpanded ? 'Collapse' : 'Expand'}
                            />
                        </div>
                    </div>
                    <p className={`text-sm text-gray-600 ${isExpanded ? '' : 'hidden'}`}>
                        {description}
                    </p>
                    <hr className="my-6" />
                </div>
                <label className="relative inline-flex items-center cursor-pointer" htmlFor={id}>
                    <input type="checkbox" className="sr-only peer" id={id}/>
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
            </div>
        </div>
    );
};

const CookieSettings: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const cookieSettings = [
        {
            title: "Performance Cookies",
            id:"pc",
            description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site."
        },
        {
            title: "Functional Cookies",
            id:"fc",
            description: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages."
        },
        {
            title: "Targeting Cookies",
            id:"tc",
            description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites."
        }
    ];

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            {cookieSettings.map((setting, index) => (
                <CookiePreference 
                    key={index}
                    title={setting.title}
                    description={setting.description}
                    isExpanded={expandedIndex === index}
                    onToggle={() => handleToggle(index)}
                    id={setting.id}
                />
            ))}
        </div>
    );
};

export default CookieSettings;