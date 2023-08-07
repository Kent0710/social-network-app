'use server'
import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export async function like(postId : string) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return null;

        const post = await prisma.post.findUnique({
            where : {
                id : postId
            },
            include : {
                likes : true
            }
        });

        if (!post) return null;

        for (let i = 0; i < post.likes.length; i++) {

            // already liked
            if (post.likes[i].userId === currentUser.id) {
                const deleteLikeId = post.likes[i].id;

                await prisma.like.delete({
                    where : {
                        id : deleteLikeId
                    }
                });

                console.log("Unliked")
                return 
            }   
        }

        // not liked
        await prisma.like.create({
            data : {
                postId : postId,
                userId : currentUser.id
            }
        });

        console.log("Liked")
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (like)");
        return null;
    }
}