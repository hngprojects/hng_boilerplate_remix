import RecentBlogCard from "./RecentBlogCard";
import { Button } from "./ui/button";

const blogPosts = [
  {
    title: "The Power of Networking: How to Build Meaningful connections",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/images/business.jpg",
    description: "Business",
    variant: 0,
  },
  {
    title: "The Global Impact of Climate Change: A Look at the Evidence",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/images/nature.png",
    description: "World News",
    variant: 1,
  },
  {
    title: "5 Easy and Delicious Recipes for Busy Weeknights",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/images/food1.jpg",
    description: "Food",
    variant: 2,
  },
  {
    title: "5 Simple Habits to Improve Your Mental Wellbeing",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/images/yoga.jpg",
    description: "Lifestyle",
    variant: 3,
  },
  {
    title: "The Ultimate Guide to Dressing Stylishly with Fewer Clothes",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/images/fashion.jpg",
    description: "Fashion",
    variant: 4,
  },
  {
    title: "The Future of Travel: What Will the World Look Like in 2030?",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/images/person with glasses.jpg",
    description: "World News",
    variant: 5,
  },
];

const BlogPost = () => {
  return (
    <section className="my-10 flex w-[100%] flex-col overflow-hidden md:px-10 lg:px-[100px]">
      <h3 className="my-5 px-4 text-[28px] font-bold text-[#525252]">
        Recent Blog posts
      </h3>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:pr-7">
        {blogPosts.map((post, index) => (
          <RecentBlogCard href={"/"} key={index} {...post} />
        ))}
      </div>
      <div className="my-11 flex items-center justify-center">
        <Button className="hover:default-foreground mt-4 bg-primary px-7">
          Show More Articles
        </Button>
      </div>
    </section>
  );
};

export default BlogPost;
