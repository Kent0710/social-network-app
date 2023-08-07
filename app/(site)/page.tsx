'use client'

import { Suspense } from "react";
import Header from "@/components/Header";
import NewPost from "@/components/NewPost";
import Loading from "@/components/Loading";
import Posts from "@/components/Posts";

import { Post } from "@/types";
import { Author } from "@/types";

import { useEffect, useState } from "react";

import { getPosts } from "../actions/getPosts";
import { getUsers } from "../actions/getUsers";

const Home = () => {
    // posts item & users item
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<Author[]>([]);
    useEffect(() => {

        async function getDBData() {
            const fetchedPosts = await getPosts();
            if (fetchedPosts) setPosts(fetchedPosts);

            const fetchedUsers = await getUsers();
            if (fetchedUsers) {
                setUsers(fetchedUsers);
            }

            setIsLoading(false);
        };

        getDBData();

    }, [])

    return (
        <div className="text-slate-600">

            <Header />

            <main className="pt-[7rem]">
                <NewPost />

                    {isLoading ? (
                        <Posts title="Posts" nav="People" posts={posts} users={users} className="animate-pulse" isLoading={true} />
                    ) : (
                        <Posts title="Posts" nav="People" posts={posts} users={users} />
                    )}
            </main>


        </div>
    )
};

export default Home;