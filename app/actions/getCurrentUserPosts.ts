'use server'

import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export async function getCurrentUserPosts() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return null;

        const posts = await prisma.post.findMany({
            where : {
                author : {
                    email : currentUser.email
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

        if (!posts) return null;

        return posts;
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (get current user posts)");
        return null;
    }
}