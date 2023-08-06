

import Button from "./Button";
import { CgProfile } from 'react-icons/cg'

interface UsersItemProps {
    username : string;
    email : string;
    followers : number;
    following : number;
};
const UsersItem : React.FC<UsersItemProps> = ({
    username,
    email,
    followers,
    following
}) => {
    return (
        <div className="text-neutral-900 border-2 border-slate-200 w-full block p-7 rounded-md hover:bg-blue-50 hover:bg-opacity-40">
            
            <div className="flex gap-3 items-center">
                <CgProfile size={26} />
                <h1 className="font-semibold text-lg text-blue-700"> {username} </h1>  
            </div>

            <div className="pl-[2.30rem]">
                <h2> {email} </h2>         

                <div className="flex gap-10 mt-3">

                    <div className="flex flex-col items-center">
                        <h3> {followers} </h3>
                        <p> Followers </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3> {following} </h3>
                        <p> Following </p>
                    </div>

                </div>

                <div className="flex items-center justify-between">
                    <Button text="Follow" className="mt-2 rounded-sm text-sm w-[7rem] ml-8" />
                    <a href='/' className='text-blue-700 border-b-2 border-blue-400 ml-5 text-right'> View profile </a>
                </div>
            </div>


        </div>
    )
};

export default UsersItem;