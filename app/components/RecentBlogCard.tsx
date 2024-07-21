import { Link } from "@remix-run/react";
import React from "react";

interface RecentBlogcardProps {
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
}: RecentBlogcardProps) => {
  const descriptionStyles = [
    "bg-[#f97316]",
    "bg-[#EAB308]",
    "bg-[#6DC347]",
    "bg-[#7F0682]",
    "bg-[#6DC347]",
    "bg-[#EAB308]",
  ];

  return(
  <Link  to={href}>
      <div className="bg-white rounded-md pt-3 px-2 w-[384px] h-[384px] relative">
        <p
          className={`text-white rounded-lg p-2 absolute top-5 ${
            descriptionStyles[variant % descriptionStyles.length]
          }`}
          style={{ padding: "5px 17px", borderRadius: "16px" }}
        >
          {description}
        </p>
        <img src={image} alt="{title}" className="w-full h-[247px]  object-cover rounded-tl-[16px] rounded-tr-[16px]" />
        <h5 className="text-[18px] font-bold  mb-1 p-2 text-[#525252]">{title}</h5>
        <div className="flex justify-between mb-1 p-2 ">
          <p className="text-gray-600 ">{date}</p>
          <p className="text-gray-600 ">{timeRead}</p>
        </div>
      </div>

  </Link>
  );
};

export default RecentBlogCard;
