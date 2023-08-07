"use server"

import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export async function getUsers() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return null;

        const users = await prisma.user.findMany({
            where : {
                email : {
                    not : currentUser.email
                }
            },
            take : 5
        });

        if (!users) return null;

        return users;
    } catch (err : any) {
        console.log(err, "SERVER_ERROR (get users)");
        return null;
    }
}