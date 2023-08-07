'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";

import { CgProfile } from 'react-icons/cg'

import Box from "./Box"
import Button from "./Button";

import { getCurrentUser } from "@/app/actions/getCurrentUser";

const Profile = () => {
    const session = useSession();

    const user = {
        username : session.data?.user?.name,
        email : session.data?.user?.email,
    };


    return (
        <Box className="bg- shadow-none w-full justify-start gap-2 h-fit pb-0">

            <CgProfile size={46}/>

            <h1 className="font-semibold text-lg"> {user.username} </h1>
            <h2> {user.email} </h2>
            
            <div className="flex gap-10">
                
                <div className="flex flex-col items-center">
                    <h3> 20 </h3>
                    <p> Followers </p>
                </div>

                <div className="flex flex-col items-center">
                    <h3> 20 </h3>
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