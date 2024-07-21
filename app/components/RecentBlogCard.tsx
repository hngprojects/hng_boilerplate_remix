import { Link } from "@remix-run/react";

interface RecentBlogcardProperties {
  title: string;
  date: string;
  timeRead: string;
  href: string;
  image: string;
  description: string;
  variant: number;
}

const RecentBlogCard = ({
  title,
  date,
  timeRead,
  href,
  image,
  description,
  variant,
}: RecentBlogcardProperties) => {
  const descriptionStyles = [
    "bg-[#f97316]",
    "bg-[#EAB308]",
    "bg-[#6DC347]",
    "bg-[#7F0682]",
    "bg-[#6DC347]",
    "bg-[#EAB308]",
  ];

  return (
    <Link to={href}>
      <div className="relative h-[384px] w-[354px] rounded-md bg-white px-2 pt-3">
        <p
          className={`absolute left-5 top-7 rounded-lg p-2 text-white ${
            descriptionStyles[variant % descriptionStyles.length]
          }`}
          style={{ padding: "5px 17px", borderRadius: "16px" }}
        >
          {description}
        </p>
        <img
          src={image}
          alt="{title}"
          className="h-[247px] w-full rounded-tl-[16px] rounded-tr-[16px] object-cover"
        />
        <h5 className="mb-1 p-2 text-[18px] font-bold text-[#525252]">
          {title}
        </h5>
        <div className="mb-1 flex justify-between p-2">
          <p className="text-gray-600">{date}</p>
          <p className="text-gray-600">{timeRead}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecentBlogCard;
