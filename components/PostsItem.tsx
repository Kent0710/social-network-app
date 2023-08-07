'use client'

import { twMerge } from 'tailwind-merge';
import { useState, useEffect } from 'react';

import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai';
import Button from './Button';
import Like from './Like.';

import { like } from '@/app/actions/like';
import { checkIfLiked } from '@/app/actions/checkIfLiked';

interface PostsItemProps {
    id : string;
    author : string;
    content : string;
    dateTime : string;
    likes : number;
    className? : string;
    isViewing : boolean;
    isOwner : boolean;
};
const PostsItem : React.FC<PostsItemProps> = ({
    author, 
    content,
    dateTime,
    likes,
    className,
    isViewing,
    isOwner,
    id
}) => {
    const [isOwnerState, setIsOwnerState] = useState(isOwner);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditPost = () => {
        setIsEditing(true); 
        setIsOwnerState(false);
    }
    const handleDiscard = () => {
        setIsEditing(false);
        setIsOwnerState(true);
    }

    //for likes
    const [likesState, setLikesState] = useState(likes);

    const like = () => {
        if (likesState === 0) setLikesState((likesState) => likesState + 1)
        else setLikesState((likesState) => likesState - 1)
    }

    return (
        <div
            className={twMerge(`
                text-neutral-900 border-2 border-slate-200 w-full block p-7 rounded-md hover:bg-blue-50 hover:bg-opacity-40
            `, className)}
        >
            <h3 className="font-semibold text-lg text-blue-700"> {author} </h3>
            <small> {dateTime} </small>

            {!isEditing ? (
                <p className='p-5'> {content} </p>
            ) : (
                <input 
                    type="text" 
                    placeholder="New post content goes here..."
                    className=" ring-1 w-full h-[7rem] rounded-md px-5 focus:ring-2 focus:ring-inset focus:ring-blue-400 focus:outline-none m-5"
                />
            )}
            
            <div className='flex items-center justify-between'>

                {isEditing ? (
                    <div>
                        <Button text='Save' className='ml-5 rounded-sm w-[7rem] text-sm' />
                        <Button text='Discard' className='ml-5 rounded-sm w-[7rem] text-sm bg-yellow-500' onClick={handleDiscard} />
                    </div>
                ) : (
                
                <div className='flex items-center gap-1  mn'>
                    <Like postId={id} onClick={like} />
                    <p> {likesState} </p>
                </div>
                )}

                {!isViewing && (
                    <a href={`/post/${id}`} className='text-blue-700 border-b-2 border-blue-400 ml-5'> View post </a>
                )}

                {isOwnerState && (
                    <button className='text-blue-700 border-b-2 border-blue-400 ml-5' onClick={handleEditPost}> Edit post </button>
                )}


            </div>

        </div>
    )
};

export default PostsItem;