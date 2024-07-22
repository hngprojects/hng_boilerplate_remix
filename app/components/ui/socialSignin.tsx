export default function SocialSignin({
  msg,
  icon,
}: {
  msg: string;
  icon: string;
}) {
  return (
    <div className="mb-6 w-full rounded-xl border-2 border-gray-300 py-2 pe-2 ps-4 lg:mb-0">
      <button className="flex h-12 items-center justify-center gap-4 bg-white text-center text-base text-gray-900">
        <img src={icon} />
        <p>{msg}</p>
      </button>
    </div>
  );
}
