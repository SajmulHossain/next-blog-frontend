export const getBlogbyId = async (id: string) => {
     const res = await fetch(
       `${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`,
       {
         cache: "no-store",
       }
     );
     return await res.json();
}