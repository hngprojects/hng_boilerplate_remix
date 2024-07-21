import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './cardComponent';
 

interface RevenueCardProps {
  revenue: string;
  change: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ revenue, change }) => {
  return (
    <Card className=" w-full max-w-[337.33px] h-[134px] px-[24px] pt-[23px] pb-[28px]  sm:w-1/2 md:w-1/3 lg:w-1/4">
      
      <CardContent className=" ">
      <div className='flex justify-between items-center pb-1'>
      <h1 className='text-[14px] leading-[16.94px] font-medium'>Total Revenue</h1>
     <img className='w-[24px] h-[24px]' src="/images/doller.png" alt="" />
      </div>
        
          <h4 className="text-[24px] text-[#0A0A0A] font-semibold leading-[29.05px] mb-1">${revenue}</h4>
          <CardDescription className="text-[#525252] text-[12px] leading-[14.52px] font-normal">{change}</CardDescription>
      
      </CardContent>
    </Card>
  );
};

export default RevenueCard;
