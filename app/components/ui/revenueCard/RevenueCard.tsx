import { Card, CardContent, CardDescription } from "./cardComponent";

interface RevenueCardProperties {
  revenue: string;
  change: string;
}

const RevenueCard: React.FC<RevenueCardProperties> = ({ revenue, change }) => {
  return (
    <Card className="h-[134px] w-full max-w-[337.33px] px-[24px] pb-[28px] pt-[23px] sm:w-1/2 md:w-1/3 lg:w-1/4">
      <CardContent className=" ">
        <div className="flex items-center justify-between pb-1">
          <h1 className="text-[14px] font-medium leading-[16.94px]">
            Total Revenue
          </h1>
          <img
            className="h-[24px] w-[24px]"
            src="/images/doller.png"
            alt="doller-sign"
          />
        </div>

        <h4 className="mb-1 text-[24px] font-semibold leading-[29.05px] text-[#0A0A0A]">
          ${revenue}
        </h4>
        <CardDescription className="text-[12px] font-normal leading-[14.52px] text-[#525252]">
          {change}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default RevenueCard;
