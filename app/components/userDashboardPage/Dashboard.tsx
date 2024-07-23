import active from "/images/active.png";
import date from "/images/date.png";
import revenue from "/images/revenue.png";
import sales from "/images/sales.png";
import subscript from "/images/subscript.png";

import "../../styles/new.css";

import BarComponent from "./barchart";
import { Calendar, CalendarDays, DollarSign, Users, CreditCard, TrendingUp } from 'lucide-react';

const fakeData2 = [
    {
        name: "Jackson Lee",
        mail: "jackson.lee@gmail.com",
        price: "-$2,999.00",
        bg: "bg-gradient-to-t from-[#E77F1E] to-[#F6C790]",
    },
    {
        name: "Olivia Martin",
        mail: "olivia.martins@gmail.com",
        price: "-$7,999.00",
        bg: "bg-gradient-to-t from-[#0F172A] to-[#F81404]",
    },
    {
        name: "Joseph Chernysuck",
        mail: "olivia.martins@gmail.com",
        price: "+$5,999.00",
        bg: "bg-gradient-to-t from-[#0AB025] to-[#04BEF8]",
    },
    {
        name: "Paul Halland",
        mail: "olivia.martins@gmail.com",
        price: "+$12,999.00",
        bg: "bg-gradient-to-t from-[#7F838D] via-[#0F172A] to-[#FFFFFF]",
    },
    {
        name: "Eden Hazard",
        mail: "olivia.martins@gmail.com",
        price: "+$3,999.00",
        bg: "bg-gradient-to-t from-[#3A1EE7] to-[#1E1D1C]",
    },
    {
        name: "Ronaldo Messi",
        mail: "jackson.lee@gmail.com",
        price: "+$4,999.00",
        bg: "bg-gradient-to-t from-[#7EA7D9] to-[#EF9B38]",
    },
];

const fakeData1 = [
    {
        name: "Total Revenue",
        amount: "$45,000.00",
        remark: "+20% from last month",
        icon: <DollarSign />,
    },
    {
        name: "Subscription",
        amount: "+2350",
        remark: "+150% from last month",
        icon: <Users />,
    },
    {
        name: "Sales",
        amount: "15,000",
        remark: "+10% from last month",
        icon: <CreditCard />,
    },
    {
        name: "Active Now",
        amount: "574",
        remark: "+201 since last hour",
        icon: <TrendingUp />,
    },
];

export default function Dashboard() {
    return (
        <>
            <section className="mx-auto mt-5 flex w-full flex-col items-start justify-start gap-[10px] px-[20px] py-[6px] sm:flex-row sm:items-center sm:justify-between sm:px-[40px] sm:py-[16px]">
                <div className="flex w-full flex-col items-start gap-[16px] self-center sm:w-auto sm:gap-[24px]">
                    <p className="text-start font-sans text-4xl font-bold">Dashboard</p>
                    <div
                        className="flex w-full flex-row items-start justify-between rounded-md border border-[#CBD5E1] px-[5px] py-[4px] sm:w-auto sm:items-center sm:justify-start"
                        id="shadxs"
                    >
                        <p className="cursor-pointer px-[12px] py-[6px] text-center font-sans text-base font-medium hover:bg-[#F1F5F9]">
                            Overview
                        </p>
                        <p className="cursor-pointer px-[12px] py-[6px] text-center font-sans text-base font-medium hover:bg-[#F1F5F9]">
                            Analytics
                        </p>
                        <p className="cursor-pointer px-[12px] py-[6px] text-center font-sans text-base font-medium hover:bg-[#F1F5F9]">
                            Reports
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-row items-start justify-between gap-[8px] self-center sm:w-auto sm:items-center sm:justify-end">
                    <div className="flex flex-row justify-start gap-[2px] self-center sm:items-center">
                        <CalendarDays />
                        <p className="self-center font-sans text-xs font-normal sm:text-sm">
                            Jan 18, 2024 - Feb 18, 2024
                        </p>
                    </div>
                    <button className="rounded bg-[#F97316] px-[16px] py-[8px] text-white">
                        Download
                    </button>
                </div>
            </section>
            <section className="flex min-h-[134px] w-full flex-row items-center justify-between gap-[16px] overflow-x-scroll px-[10px] py-[6px] sm:overflow-hidden sm:px-[40px] sm:py-[20px]">
                {fakeData1.map((item, index) => {
                    return (
                        <div
                            id="shadxs"
                            key={index}
                            className="padding-[24px] flex min-w-[200px] flex-row justify-between rounded-[12px] border-[0.5px] p-[24px] sm:w-full"
                        >
                            <div className="padding-[24px] flex w-full flex-col items-start gap-[5px]">
                                <div className="flex w-full flex-row items-center justify-between">
                                    <p className="text-start font-sans text-sm font-semibold">
                                        {item.name}
                                    </p>
                                    <div>{item.icon}</div>
                                </div>
                                <p className="text-start font-sans text-2xl font-semibold">
                                    {item.amount}
                                </p>
                                <p className="text-start text-xs text-stone-400">
                                    {item.remark}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className="flex w-full flex-col items-center justify-between gap-[16px] px-[10px] py-[6px] sm:flex-row sm:px-[40px] sm:py-[16px]">
                <section
                    className="flex w-full flex-col justify-center self-stretch"
                    id="shadsm"
                >
                    <p className="py-7 pl-7 text-start text-base font-semibold">
                        Overview
                    </p>
                    <BarComponent/>
                </section>
                <section
                    className="flex w-full flex-col gap-[24px] self-start p-[24px] pb-[28px]"
                    id="shadsm"
                >
                    <div className="flex w-full flex-col items-start">
                        <p className="text-[16px] font-semibold text-[#080808]">
                            Recent Sales
                        </p>
                        <p className="text-sm font-medium text-[#626262]">
                            You made 265 sales this week
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-[24px]">
                        {fakeData2.map((item, index) => {
                            return (
                                <div
                                    className="flex w-full flex-row items-center justify-between"
                                    key={index}
                                >
                                    <div className="flex flex-row items-center gap-[16px]">
                                        <div
                                            className={`${item.bg} h-[40px] w-[40px] rounded-full`}
                                        ></div>
                                        <div className="flex flex-col items-start gap-[5px]">
                                            <p className="text-start font-sans text-[14px] font-medium">
                                                {item.name}
                                            </p>
                                            <p className="text-start font-sans text-xs font-normal">
                                                {item.mail}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="self-start text-end text-[12px] font-semibold">
                                        {item.price}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </>
    );
}
