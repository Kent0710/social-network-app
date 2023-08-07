'use client'

import { Post } from "@/types";
import { Author } from "@/types";

import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";

import Box from "./Box";
import PostsItem from "./PostsItem";
import UsersItem from "./UsersItem";
import Loading from "./Loading";

interface PostsProps {
    title? : string;
    nav? : string;
    posts ? : Post[];
    users ? : Author[];
    isLoading? : boolean;
    className? : string;
}
const Posts : React.FC<PostsProps> = ({
    title,
    nav,
    posts,
    users,
    className,
    isLoading
}) => {
    const [postsActive, setPostsActive] = useState(true);
    const handlePostsActive = () => setPostsActive(true);
    const handleUsersActive = () => setPostsActive(false);
    
    return (
        <Box className={twMerge(`
            bg- shadow-none w-full justify-start items-start gap-4 h-fit
        `, className)}>
            
            <div className="flex gap-10">
                {title && (
                    <h1 className={twMerge(`font-semibold text-2xl hover:cursor-pointer`, postsActive && 'text-slate-400')} onClick={handlePostsActive}> {title} </h1>
                )}
                {nav && (
                    <h1 className={twMerge(`font-semibold text-2xl hover:cursor-pointer`, !postsActive && "text-slate-400" )} onClick={handleUsersActive}> {nav} </h1>
                )}
            </div>

            {isLoading ? (
                <Loading />
            ) : (

            postsActive ? (
                posts?.map((post) => (
                    <PostsItem key={post.id} id={post.id} author={post.author.name} content={post.content} dateTime={post.createdAt.toLocaleString()} likes={post.likes.length}  isViewing={false} isOwner={false} />
                ))
            ) : (
                <div className="w-full flex flex-col gap-4">
                    {users?.map((user) => (
                        <UsersItem key={user.email} username={user.name} email={user.email} followers={user.followedByIDs.length || 0} following={user.followingIDs?.length || 0}  />
                    ))}
                </div>
            )
            )}

            

        </Box>
    )
};

export default Posts;