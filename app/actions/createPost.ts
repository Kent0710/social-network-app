'use server'

import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export async function createPost(content : FormDataEntryValue) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return null;

        const newPost = await prisma.post.create({
            data : {
                content : content.toString(),
                authorId : currentUser.id,
            }
        });
        
        if (!newPost) return null;

        console.log("New post created")
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (createPost)");
        return null;
    }
};