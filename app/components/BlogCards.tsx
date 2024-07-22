interface BlogCardProperties {
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

const BlogCard: React.FC<BlogCardProperties> = ({
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
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg lg:flex lg:max-w-full lg:flex-row">
      <img className="w-full lg:order-2 lg:w-1/3" src={blogImage} alt={title} />
      <div className="p-4 lg:order-1 lg:w-2/3">
        <div className="mb-2 flex items-center">
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-400"></span>

          <span className="text-sm font-semibold text-gray-700">{tag}</span>
        </div>
        <div>
          <a href={link} className="text-black hover:text-blue-800">
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
          </a>
          <p className="mb-4 text-base text-gray-700">{description}</p>
        </div>
        <div className="mb-4 flex justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{timeOfReading} mins Read</span>
        </div>
        <div className="flex items-center">
          <img
            className="mr-4 h-10 w-10 rounded-full"
            src={authorProfilePicture}
            alt={authorName}
          />
          <div className="text-sm">
            <p className="leading-none text-gray-900">{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
