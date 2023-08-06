import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route";
import {redirect} from 'next/navigation'

import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Posts from "@/components/Posts";

const Account = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");

    return (
        <div className="text-slate-600">
            
            <Header />

            <main className="pt-[7rem]">
                <Profile />
                <Posts />
            </main>

        </div>
    )
};

export default Account;