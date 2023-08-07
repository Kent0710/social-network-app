'use server'

import prisma from "@/lib/prisma";

export async function getMorePosts(authorId : string, postId : string) {
    try {
        const morePosts = await prisma.post.findMany({
            where : {
                authorId : authorId,
                id : {
                    not : postId
                }
            },
            include : {
                author : true,
                likes : {
                    include : {
                        user : true
                    }
                }
            },
            take : 5
        });

        if (!morePosts) return null;

        return morePosts
        
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (get posts)");
        return null;
    }
}