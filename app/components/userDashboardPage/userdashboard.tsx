import avatar from "/images/spec/avatar.png";
import logo from "/images/spec/logo.png";
import { useEffect, useState } from "react";
import Dashboard from './Dashboard';
import { Bell, ChevronDown, CircleHelp, Delete, Menu, Search } from 'lucide-react';

export default function UserDashboardPage() {
    return (
        <section className="flex h-screen w-full flex-col items-center">
            <Navbar />
            <Dashboard />
        </section>
    );
}

function Navbar() {
    const [state, setstate] = useState({
        switch: false,
    });

    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <>
            <nav className="flex w-full flex-row items-center justify-between px-[10px] py-[6px] sm:px-[40px] sm:py-[16px]">
                <div className="flex flex-row items-center gap-[50px] sm:w-[46%]">
                    <div className="flex flex-row items-center justify-start gap-[15px]">
                        <div
                            onClick={() =>
                                setstate((previous) => ({ ...previous, switch: !state.switch }))
                            }
                        >
                            <Menu />
                        </div>
                        <img src={logo} className="h-[18px] w-[18px] object-cover" />
                        <p className="font-sans text-2xl font-semibold">Boilerplate.</p>
                    </div>
                    <ul className="hidden flex-col items-center gap-[22px] sm:flex sm:flex-row">
                        <li className="font-sans text-[12px] font-medium text-[#F97316]">
                            Overviews
                        </li>
                        <li className="font-sans text-[12px] font-medium">Customers</li>
                        <li className="font-sans text-[12px] font-medium">Products</li>
                    </ul>
                </div>
                <div className="mx-0 flex w-1/4 flex-row items-center justify-end gap-[20px] self-center sm:w-[40%]">
                    <div className="hidden min-w-[60%] flex-row items-center gap-[12px] rounded-md border border-[#E4E4E7] px-[12px] sm:flex">
                        <Search />
                        <input
                            placeholder="Search options..."
                            type="text"
                            className="w-[90%] py-[8px] font-sans text-sm font-medium text-[#525252] outline-none placeholder:text-[#525252]"
                        />
                    </div>
                    <div className="relative hidden justify-end text-end sm:flex">
                        <Bell className='text-xs' />
                        <div className="absolute right-1 top-0 h-[5px] w-[5px] z-30 rounded-full bg-red-600"></div>
                    </div>
                    <div className='flex sm:hidden'>
                        <Search />
                    </div>
                    <div className="flex justify-end">
                        <CircleHelp />
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[5px] self-center">
                        <img
                            src={avatar}
                            className="min-h-[38px] min-w-[38px] object-cover sm:min-w-[50px] sm:min-h-[50px]"
                        />
                        <ChevronDown />
                    </div>
                </div>
            </nav>
            <Sidebar on={state.switch} />
        </>
    );
}

function Sidebar({ on }: { on: boolean }) {
    return (
        <aside
            className={`absolute top-0 z-50 sm:hidden flex h-screen w-full flex-row items-start duration-1000 ${on ? "left-0" : "-left-full"}`}
        >
            <div className="flex h-full w-[85%] flex-col items-start bg-[#E4E4E7]">
                <div className="flex w-full flex-row items-center justify-between p-8">
                    <div className="flex flex-row items-center gap-3">
                        <img src={logo} className="h-[18px] w-[18px] object-cover" />
                        <p className="font-sans text-2xl font-semibold">Boilerplate.</p>
                    </div>
                    <Delete />
                </div>
                <div className="mt-10 flex w-full flex-col items-start gap-6 p-5">
                    <p className="font-sans text-xl font-medium text-[#F97316]">
                        Overviews
                    </p>
                    <p className="font-sans text-xl font-medium">Customers</p>
                    <p className="font-sans text-xl font-medium">Products</p>
                </div>
                <div className="h-[1px] w-full bg-[#c5c5c5]"></div>
                <div className="mt-10 flex w-full flex-col items-center gap-7 p-5">
                    <div className="flex w-full flex-row items-start justify-start gap-4">
                        <CircleHelp />
                        <p className="self-center font-sans text-xl font-medium">Help</p>
                    </div>
                    <div className="flex w-full flex-row items-start justify-start gap-4">
                        <Bell />
                        <p className="self-center font-sans text-xl font-medium">
                            Notification
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
