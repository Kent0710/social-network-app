'use server'
import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";
import { revalidatePath } from "next/cache";

export async function follow(email : string) {
    try {
        // the user who will follow
        const currentUser = await getCurrentUser();
        if (!currentUser) return null;

        // the user who will be followed
        const followUser = await prisma.user.findUnique({
            where : {
                email : email
            }
        });

        if (!followUser) return null;

        for (let i = 0; i < followUser.followedByIDs.length; i++) {

            if (followUser.followedByIDs[i] === currentUser.id) {
                await prisma.user.update({
                    where : {
                        email : email 
                    },
                    data : {
                        followedByIDs : {
                            set : followUser.followedByIDs.filter(ids => ids !== currentUser.id)
                        }
                    }
                });

                await prisma.user.update({
                    where : {
                        id : currentUser.id
                    },
                    data : {
                        followingIDs : {
                            set : currentUser.followingIDs.filter(ids => ids !== followUser.id)
                        }
                    }
                })

                console.log(`${currentUser.name} unfollowed ${followUser.name}`)
                return 
            }
        }

        await prisma.user.update({
            where : {
                email : email 
            },
            data : {
                followedBy : {
                    connect : { 
                        id : currentUser.id
                    }
                }
            }
        })
        console.log(`${currentUser.name} followed ${followUser.name}`)

    } catch (err : any) {
        console.log(err, "SERVER_ERROR (follow)");
        return null;
    }
}