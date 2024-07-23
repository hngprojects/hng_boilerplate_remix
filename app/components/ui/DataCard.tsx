import type { ReactNode } from "react";

type DataCardType = {
  title: string;
  amount: string;
  subText: string;
  icon: ReactNode;
};

const DataCard = ({ title, amount, subText, icon }: DataCardType) => {
  return (
    <section className="inline-block rounded-[12px] px-6 pb-10 pt-[23px] [box-shadow:0px_1px_18px_0px_#cbd5e1]">
      <header className="flex items-center gap-[158px]">
        <p className="text-sm font-medium text-[#0A0A0A]">{title}</p>
        <span>{icon}</span>
      </header>
      <div className="mt-1">
        <h4 className="text-2xl font-semibold text-[#0A0A0A]">${amount}</h4>
        <p className="text-[12px] font-normal text-[#525252]">{subText}</p>
      </div>
    </section>
  );
};

export default DataCard;
