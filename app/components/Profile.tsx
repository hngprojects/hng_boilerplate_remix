export default function Profile({ expanded }: { expanded: boolean }) {
  return (
    <div className={`flex items-center gap-1 ${expanded ? "ml-0" : "-ml-2"}`}>
      <div className="h-[2.6875rem] w-[2.6875rem] rounded-full border-[1px] border-[#f973164d] bg-background bg-cover bg-no-repeat sm:hidden"></div>
      <div
        className={`${expanded ? "" : "hidden"} flex flex-col items-start justify-center`}
      >
        <h3 className="text-[0.875rem] font-semibold text-[#0A0A0A]">
          Your Profile
        </h3>
        <p className="ml-[2px] text-[0.75rem] font-[500] text-[#525252]">
          Login
        </p>
      </div>
    </div>
  );
}
