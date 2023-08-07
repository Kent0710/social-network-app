'use server'
import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export async function checkIfLiked(postId : string) {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) return null;

        const post = await prisma.post.findUnique({
            where : {
                id : postId
            },
            include : {
                likes : true
            }
        });

        if (!post) return  null;

        for (let i = 0; i < post.likes.length; i++) {

            if (post.likes[i].userId === currentUser.id) {
                return true;
            }

        }

        return false;
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (check if liked)");
        return null;
    }
}