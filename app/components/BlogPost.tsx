import React from "react";

import BlogCard from "./BlogCards";
import RecentBlogCard from "./RecentBlogCard";

const blogPosts = [
  {
    title: "The Power of Networking: How to Build Meaningful connections",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/public/images/business.jpg",
    description: "Business",
    link: "/post1",
  },
  {
    title: "The Global Impact of Climate Change: A Look at the Evidence",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/public/nature.png",
    description: "World News",
    link: "/post2",
  },
  {
    title: "5 Easy and Delicious Recipes for Busy Weeknights",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/public/food1.jpg",
    description: "Food",
    link: "/post3",
  },
  {
    title: "5 Simple Habits to Improve Your Mental Wellbeing",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/public/yoga.jpg",
    description: "Lifestyle",
    link: "/post4",
  },
  {
    title: "The Ultimate Guide to Dressing Stylishly with Fewer Clothes",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/public/fashion.jpg",
    description: "Fashion",
    link: "/post5",
  },
  {
    title: "The Future of Travel: What Will the World Look Like in 2030?",
    date: "Jul 12, 2024",
    timeRead: "5 mins read",
    image: "/public/person with glasses.jpg",
    description: "World News",
  },
];

const BlogPost = () => {
  return (
    <section>
      <h3>Reacent Blog Posts</h3>
      <div>
        {blogPosts.map((post, index) => (
          <RecentBlogCard key={index} {...post}/>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
