'use client'

import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { CgProfile } from 'react-icons/cg'

import Box from "./Box";
import PostsItem from "./PostsItem";
import UsersItem from "./UsersItem";

interface PostsProps {
    title? : string;
    nav? : string;
}
const Posts : React.FC<PostsProps> = ({
    title,
    nav
}) => {
    const data = [
        {
            author : "Nami",
            content : "Hello, world!",
            dateTime : "January 1, 2015, 11:59 p.m.",
            likes : 3
        },
        {
            author : "Nami",
            content : "Hello, world!",
            dateTime : "January 1, 2015, 11:59 p.m.",
            likes : 3
        },
        {
            author : "Nami",
            content : "Hello, world!",
            dateTime : "January 1, 2015, 11:59 p.m.",
            likes : 3
        },
        {
            author : "Nami",
            content : "Hello, world!",
            dateTime : "January 1, 2015, 11:59 p.m.",
            likes : 3
        },
    ]

    const people = [
        {
            username : "Namikazenakiri",
            email : "namikazenakiri@gmail.com",
            followers : 100,
            following : 20
        },
        {
            username : "Namikazenakiri",
            email : "namikazenakiri@gmail.com",
            followers : 100,
            following : 20
        },
        {
            username : "Namikazenakiri",
            email : "namikazenakiri@gmail.com",
            followers : 100,
            following : 20
        },
    ]

    const [postsActive, setPostsActive] = useState(true);
    const handleActive = () => {
        if (postsActive) setPostsActive(false)
        else setPostsActive(true)
    }

    return (
        <Box className="bg- shadow-none w-full justify-start items-start gap-4 h-fit">
            
            <div className="flex gap-10">
                {title && (
                    <h1 className={twMerge(`font-semibold text-2xl hover:cursor-pointer`, postsActive && 'text-slate-400')} onClick={handleActive}> {title} </h1>
                )}
                {nav && (
                    <h1 className={twMerge(`font-semibold text-2xl hover:cursor-pointer`, !postsActive && "text-slate-400" )} onClick={handleActive}> {nav} </h1>
                )}
            </div>

            {postsActive ? (
                data.map((post) => (
                    <PostsItem key={post.content} {...post} isViewing={false} isOwner={false} />
                ))
            ) : (
                <div className="w-full flex flex-col gap-4">
                    {people.map((person) => (
                        <UsersItem key={person.email} {...person} />
                    ))}
                </div>
            )}
            

        </Box>
    )
};
            // add a usersItem component to render when the nav is set to the people

export default Posts;