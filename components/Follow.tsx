'use client'

import Button from "./Button";

import { useState, useEffect } from "react";

import { follow } from "@/app/actions/follow";
import { checkIfFollow } from "@/app/actions/checkIfFollowed";

interface FollowProps {
    email : string;
    onClick? : any;
}
const Follow : React.FC<FollowProps> = ({
    email,
    onClick
}) => {
    const [followed, setIsFollowed] = useState(false);
    useEffect(() => {
        async function checkIfFollowClient() {
            await checkIfFollow(email)
                .then((res) => {
                    if (res) setIsFollowed(true);
                    else setIsFollowed(false);
                })
                .catch((err) => {
                    throw new Error (`Err : ${err}`)
                })
        };

        checkIfFollowClient();
    }, [email])

    async function handleFollow() {
        if (followed) setIsFollowed(false);
        else setIsFollowed(true);

        onClick();
        await follow(email)
    }

    const FollowButton = (props : any) => {
        return (
            <Button text={props.text} className="mt-2 rounded-sm text-sm w-[7rem] ml-8" onClick={handleFollow} />
        )
    }

    if (!followed) return <FollowButton text="Follow" />
    return <FollowButton text="Unfollow" />
};

export default Follow