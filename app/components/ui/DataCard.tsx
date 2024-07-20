import { ReactNode } from 'react'
type DataCardType = {
    title: string,
    amount: string,
    subText: string,
    icon: ReactNode,
}


const DataCard = ({ title, amount, subText, icon }: DataCardType) => {
    return (

        <section className='[box-shadow:0px_1px_18px_0px_#cbd5e1] px-6 pt-[23px] pb-10 inline-block rounded-[12px]'>

            <header className=" flex items-center gap-[158px]">
                <p className='font-medium text-sm text-[#0A0A0A]'>{title}</p>
                <span>{icon}</span>
            </header>
            <div className=" mt-1">
                <h4 className='font-semibold text-2xl text-[#0A0A0A]'>${amount}</h4>
                <p className='text-[#525252] text-[12px] font-normal'>{subText}</p>
            </div>

        </section>
    )
}

export default DataCard
