import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  authorName: string;
  authorProfilePicture: string;
  tag: string;
  timeOfReading: string;
  blogImage: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  authorName,
  authorProfilePicture,
  tag,
  timeOfReading,
  blogImage,
  link,
}) => {
  return (
    <div className="max-w-sm lg:max-w-full lg:flex lg:flex-row rounded overflow-hidden shadow-lg m-4">
      <img className="w-full lg:w-1/3 lg:order-2" src={blogImage} alt={title} />
      <div className="p-4 lg:w-2/3 lg:order-1">
        <div className="flex items-center mb-2">
          <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
          <span className="text-sm font-semibold text-gray-700">{tag}</span>
        </div>
        <div>
          <a href={link} className="text-black hover:text-blue-800">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
          </a>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
        <div className="flex justify-between text-gray-500 text-sm mb-4">
          <span>{date}</span>
          <span>{timeOfReading} mins Read</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={authorProfilePicture}
            alt={authorName}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
