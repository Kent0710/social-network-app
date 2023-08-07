'use server'
import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export async function checkIfFollow(email : string) {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) return null;

        const user = await prisma.user.findUnique({
            where : {
                email :email
            }
        });

        if (!user) return null;

        for (let i = 0; i < user.followedByIDs.length; i++) {
            
            if (user.followedByIDs[i] === currentUser.id) {
                return true;
            }

        }

        return false;

    } catch (err : any) {
        console.log(err, "SERVER_ERROR (check if follow)");
        return null;
    }
}