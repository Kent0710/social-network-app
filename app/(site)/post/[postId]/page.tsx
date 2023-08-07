'use client'

import { Post } from "@/types";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";
import PostsItem from "@/components/PostsItem";

import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

import { getPost } from "@/app/actions/getPost";
import { getMorePosts } from "@/app/actions/getMorePosts";

const ViewPost = () => {
    const pathname = usePathname();
    const postId = pathname.replace("/post/", "");
    
    const [post, setPost] = useState<Post>();
    const [morePosts, setMorePosts] = useState<Post[]>([]);
    useEffect(() => {
        
        async function getDBData() {
            const fetchedPost = await getPost(postId);
            if (fetchedPost) setPost(fetchedPost);

            const fetchedMorePosts = await getMorePosts(post?.authorId, postId);
            if (fetchedMorePosts) setMorePosts(fetchedMorePosts);
        };

        getDBData();

    }, [postId, post?.authorId])

    return (
        <div className="text-slate-600">
            
            <Header />

            <main className="pt-[7rem]" onClick={() => console.log(post)}>

                <Profile />
                <PostsItem id={post?.id} author={post?.author.name} content={post?.content} dateTime={post?.createdAt.toLocaleString()} likes={25} isViewing={true} isOwner={true} className="mt-7"  />
                <Posts title={`More from ${post?.author.name}`} posts={morePosts} />

            </main>

        </div>
    )
};

export default ViewPost;