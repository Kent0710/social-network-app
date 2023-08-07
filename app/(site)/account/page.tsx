'use client'

import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Posts from "@/components/Posts";

import { Post } from "@/types";

import { useEffect, useState } from "react";

import { getCurrentUserPosts } from "@/app/actions/getCurrentUserPosts";

const Account = () => {
    const [currentUserPosts, setCurrentUserPosts] = useState<Post[]>([]);
    useEffect(() => {

        async function getDBData() {
            const fetchedCurrentUserPosts = await getCurrentUserPosts();
            console.log(fetchedCurrentUserPosts);
            if (fetchedCurrentUserPosts) setCurrentUserPosts(fetchedCurrentUserPosts);
        };

        getDBData();

    }, [])

    return (
        <div className="text-slate-600">
            
            <Header />

            <main className="pt-[7rem]">
                <Profile />
                <Posts posts={currentUserPosts} />
            </main>

        </div>
    )
};

export default Account;