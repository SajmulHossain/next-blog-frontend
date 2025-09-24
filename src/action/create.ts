"use server";

export const create = async(data: FormData) => {
    const info = Object.fromEntries(data.entries());
    const body = {
        ...info,
        authorId: 1,
        tags: info.tags.toString().split(",").map(tag => tag.trim()),
    }

    console.log(body);
}