'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useEffect, useState } from "react"

import { like } from "@/app/actions/like";
import { checkIfLiked } from "@/app/actions/checkIfLiked";

interface LikeProps {
    postId : string;
    onClick? : any;
};
const Like : React.FC<LikeProps> = ({
    postId,
    onClick
}) => {
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        async function checkIfLikedClient() {
            await checkIfLiked(postId)
                .then((res) => {
                    if (res) setLiked(true);
                    else setLiked(false);
                })
                .catch((err) => {
                    throw new Error (`error on check if liked client : ${err}`)
                })
        };

        checkIfLikedClient();
    }, [postId])

    async function handleLike() {
        if (liked) setLiked(false);
        else setLiked(true);

        onClick();
        await like(postId);
    };

    if (!liked) return <AiOutlineHeart size={20} onClick={handleLike} />
    else return <AiFillHeart size={20}  onClick={handleLike} className="fill-blue-500" />
};

export default Like;