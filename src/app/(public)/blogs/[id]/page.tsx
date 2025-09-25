/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getAllBlogs, getBlogbyId } from "@/services/PostServices";

export const generateStaticParams = async() => {
  // return [
  //   {
  //     id: "1"
  //   }
  // ]

  const { data: blogs} = await getAllBlogs();
  return blogs.map((blog: any) => ({
    id: String(blog.id),
  }));
}

export const generateMetadata = async({params}: {params: Promise<{id: string}>}) => {
  const { id } = await params;
  const blog = await getBlogbyId(id);

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
  const blog = await getBlogbyId(id);

  return (
    <div className="box">
      <h2 className="text-center text-4xl">Blog Details</h2>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;