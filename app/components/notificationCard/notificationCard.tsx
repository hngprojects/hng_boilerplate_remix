interface notification {
  unreadMessageCount?: number;
  notificationPreview: { header: string; time: string }[];
}

function timeAgo(date: string) {
  const now = new Date();
  const secondsPast = (now.getTime() - new Date(date).getTime()) / 1000;

  let timeString;

  if (secondsPast < 60) {
    const seconds = Math.floor(secondsPast);
    timeString = `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    timeString = `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (secondsPast < 86_400) {
    const hours = Math.floor(secondsPast / 3600);
    timeString = `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (secondsPast < 2_592_000) {
    const days = Math.floor(secondsPast / 86_400);
    timeString = `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (secondsPast < 31_536_000) {
    const months = Math.floor(secondsPast / 2_592_000);
    timeString = `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(secondsPast / 31_536_000);
    timeString = `${years} ${years === 1 ? "year" : "years"} ago`;
  }

  return timeString;
}

const NotificationCard = ({
  notificationPreview,
  unreadMessageCount = notificationPreview.length,
}: notification) => {
  return (
    <div className="font-inter max-w-[378px] rounded-lg border border-solid border-slate-300 bg-white p-6 shadow-sm">
      <p className="leading-29.05 text-2xl font-semibold text-[#0A0A0A]">
        Notifications
      </p>
      <p className="mb-[24px] mt-[6px] text-sm font-normal leading-[16.94px] text-[#525252]">
        You have {unreadMessageCount} unread messages.
      </p>
      <div className="mb-[16px] flex w-full items-center justify-between rounded-md border border-slate-300 p-4">
        <img src="/images/bell-ring.svg" alt="notication icon" />
        <div className="mx-[18px] text-sm leading-[16.94px]">
          <p className="font-medium text-[#0A0A0A]">Push Notifications</p>
          <p className="mt-1 text-[#71717A]">Send notifications to device.</p>
        </div>
        <button className="h-[22px] w-[46px] rounded-[50px] bg-[#D0D6D6] p-[2px]">
          <img src="/images/ellipse.svg" alt="ellipse" />
        </button>
      </div>
      {notificationPreview.map(({ header, time }, index) => (
        <div className="mb-[32px] flex items-start" key={index}>
          <img
            src="/images/bulletpoint.svg"
            className="mr-[16px] mt-[4px]"
            alt="bulletpoints"
          />
          <div>
            <p className="mt-0 text-[14px] font-medium leading-[16.94px] text-[#0A0A0A]">
              {header}
            </p>
            <p className="mt-0 text-[14px] font-normal leading-[16.94px] text-[#525252]">
              {timeAgo(time)}
            </p>
          </div>
        </div>
      ))}
      <button
        className="w-full rounded-[6px] bg-[#F97316] px-[16px] py-[8px] text-[14px] font-medium leading-[24px] text-white"
        disabled={unreadMessageCount === 0}
      >
        Mark all as read
      </button>
    </div>
  );
};
export default NotificationCard;
