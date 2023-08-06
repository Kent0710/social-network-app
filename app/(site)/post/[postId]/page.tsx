import { getServerSession } from "next-auth"
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import {redirect} from 'next/navigation'

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";
import PostsItem from "@/components/PostsItem";

const ViewPost = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");

    return (
        <div className="text-slate-600">
            
            <Header />

            <main className="pt-[7rem]">

                <Profile />
                <PostsItem author="Nami" content="Hello, world!" dateTime="January 1, 2023, 11:59 p.m." likes={10} className="mt-10 flex flex-col items-center" isViewing={true} isOwner={true}  />
                <Posts title="More from namikazenakiri" />

            </main>

        </div>
    )
};

export default ViewPost;