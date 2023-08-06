import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import {redirect} from 'next/navigation'

import Header from "@/components/Header";
import NewPost from "@/components/NewPost";
import Posts from "@/components/Posts";

const Home = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");

    return (
        <div className="text-slate-600">

            <Header />

            <main className="pt-[7rem]">
                <NewPost />
                <Posts title="Posts" nav="People" />
            </main>


        </div>
    )
};

export default Home;