/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";

export const generateStaticParams = async() => {
  // return [
  //   {
  //     id: "1"
  //   }
  // ]

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts?limit=2`);
  const { data: blogs} = await res.json();
  return blogs.map((blog: any) => ({
    id: String(blog.id),
  }));
}

export const generateMetadata = async({params}: {params: Promise<{id: string}>}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`);
  const blog = await res.json();

  return {
    title: blog.title
  }
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="box">
      <h2 className="text-center text-4xl">Blog Details</h2>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;