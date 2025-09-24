"use server";

import { redirect } from "next/navigation";

export const create = async(data: FormData) => {
    const info = Object.fromEntries(data.entries());
    const body = {
        ...info,
        authorId: 1,
        tags: info.tags.toString().split(",").map(tag => tag.trim()),
        isFeatured: Boolean(info.isFeatured)
    }
console.log({body, info, data});
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    })

    const result = await res.json();
    console.log({ result });
    if(result.success) {
        redirect("/blogs");
    }
    return result;
}