import Index from "~/routes/_index";


interface notification {
    unreadMessageCount?: number;
    notificationPreview: {header: string, time: string}[]
  }
  const NotificationCard = ({ notificationPreview, unreadMessageCount=notificationPreview.length }: notification) =>{

        function timeAgo(date: string) {
        const now = new Date();
        const secondsPast = (now.getTime() - new Date(date).getTime()) / 1000;
      
        let timeString;
      
        if (secondsPast < 60) {
          const seconds = Math.floor(secondsPast);
          timeString = `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
        } else if (secondsPast < 3600) {
          const minutes = Math.floor(secondsPast / 60);
          timeString = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (secondsPast < 86400) {
          const hours = Math.floor(secondsPast / 3600);
          timeString = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (secondsPast < 2592000) {
          const days = Math.floor(secondsPast / 86400);
          timeString = `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else if (secondsPast < 31536000) {
          const months = Math.floor(secondsPast / 2592000);
          timeString = `${months} ${months === 1 ? 'month' : 'months'} ago`;
        } else {
          const years = Math.floor(secondsPast / 31536000);
          timeString = `${years} ${years === 1 ? 'year' : 'years'} ago`;
        }
      
        return timeString;
      }
      
    return(
        <div className="max-w-[378px] shadow-sm rounded-lg border-solid border bg-white border-slate-300 p-6 font-inter">
            <p className="font-semibold text-2xl leading-29.05 text-[#0A0A0A]">Notifications</p>
            <p className="text-[#525252] font-normal text-sm leading-[16.94px] mt-[6px] mb-[24px]">You have {unreadMessageCount} unread messages.</p>
            <div className="flex w-full rounded-md p-4 border border-slate-300 mb-[16px] justify-between items-center">
                <img src="/images/bell-ring.svg" alt="notication icon"/>
                <div className="text-sm leading-[16.94px] mx-[18px]">
                    <p className="font-medium text-[#0A0A0A]">Push Notifications</p>
                    <p className="text-[#71717A] mt-1">Send notifications to device.</p>
                </div>
                <button className="w-[46px] h-[22px] bg-[#D0D6D6] rounded-[50px] p-[2px]"><img src="/images/ellipse.svg" alt="ellipse"/></button>
            </div>
            {
                notificationPreview.map(({header, time})=>(
                    <div className="flex items-start mb-[32px]">
                        <img src="/images/bulletpoint.svg" className="mr-[16px] mt-[4px]" alt="bulletpoints"/>
                        <div>
                        <p className="font-medium text-[14px] leading-[16.94px] text-[#0A0A0A] mt-0">{header}</p>
                        <p className="font-normal text-[14px] leading-[16.94px] text-[#525252] mt-0">{timeAgo(time)}</p>
                        </div>
                    </div>
                ))
            }
            <button className="bg-[#F97316] w-full py-[8px] px-[16px] rounded-[6px] text-white font-medium text-[14px] leading-[24px]" disabled={unreadMessageCount===0}>Mark all as read</button>
        </div>
    )
  }
  export default NotificationCard;