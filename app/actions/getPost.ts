'use server'

import prisma from "@/lib/prisma";

export async function getPost(postId : string) {
    try {
        const post = await prisma.post.findUnique({
            where : {
                id : postId
            },
            include : {
                author : true,
                likes : {
                    include : {
                        user  :true
                    }
                }
            }
        });

        if (!post) return null;

        return post;
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (get post data)");
        return null;
    }
};