/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts?limit=3`, {
    next: {
      tags: ['BLOGS']
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div className="box">
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog: any) => (
          <BlogCard post={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
