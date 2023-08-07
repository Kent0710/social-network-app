import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";

const ViewAccount = async () => {
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

export default ViewAccount;