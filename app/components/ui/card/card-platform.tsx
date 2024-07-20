import { useState } from "react";
import { cn } from "~/lib/utils/cn";

type PlatformCardProps = {
    /**
     *  Displaying the platform name or title.
     */
    heading: string;

     /**
     * Displaying the platform logo or icon.
     */
    logo: string;
    /**
     * Providing a brief overview of the platform.
     */
    description: string;
    /**
     * Additional class names for customizing the container style.
     */
    containerClassName?: string;
};

/**
 * A card component that displays platform details including a heading, logo, description, and a toggle switch.
 * The toggle switch allows admins to activate or deactivate the platform.
 * 
 * @param {PlatformCardProps} props - The properties for the component.
 * @returns The CardPlatform component.
 */

export default function CardPlatform({ heading, logo, description, containerClassName }: PlatformCardProps) {

    const [isActivated, setIsActivated] = useState(false)

    const toggleSwitchHandler = () => setIsActivated(prev => !prev)

    return (
        <div className={cn("w-full bg-white border-[1px] border-[#CBD5E1] rounded-[6px] py-[24px] px-[16px]", containerClassName)}>
            <header className="flex items-center justify-between mb-[24px]">
                <figure>
                    <img src={logo} alt={heading} className="w-[32px] h-[32px]" />
                </figure>
                <button onClick={toggleSwitchHandler} className={cn("h-[22px] w-[46px] rounded-full px-[2px]", isActivated ? "bg-[#F97316]" : "bg-[#D0D6D6]")}>
                    <div className={cn("h-[18px] w-[18px] rounded-full transition duration-300", isActivated ? "bg-white translate-x-[24px]" : "bg-[#F9F9F9] translate-x-0")}>
                    </div>
                </button>
            </header>
            <div>
                <h2 className="text-[16px] text-[#0A0A0A] font-semibold mb-[6px]">{heading}</h2>
                <p className="text-[#0A0A0A] text-[12px]">{description}</p>
            </div>
        </div>
    );
}