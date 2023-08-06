// display the username
// display the email
// display the number of followers
// display the number of people that the user follows
// display all the posts of that user
// follow or unfollow for other user
'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { CgProfile } from 'react-icons/cg'

import Box from "./Box"
import Button from "./Button";

const Profile = () => {
    const session = useSession();
    if (!session) redirect("/login");

    const user = {
        username : session.data?.user?.name,
        email : session.data?.user?.email,
        followers : 100,
        following : 20
    }

    return (
        <Box className="bg- shadow-none w-full justify-start gap-2 h-fit pb-0">

            <CgProfile size={46}/>

            <h1 className="font-semibold text-lg"> {user.username} </h1>
            <h2> {user.email} </h2>
            
            <div className="flex gap-10">
                
                <div className="flex flex-col items-center">
                    <h3> {user.followers} </h3>
                    <p> Followers </p>
                </div>

                <div className="flex flex-col items-center">
                    <h3> {user.following} </h3>
                    <p> Following </p>
                </div>

            </div>

            <div>

                <Button text="Follow" className="rounded-sm mt-1"/>

            </div>

        </Box>
    )
};

export default Profile;