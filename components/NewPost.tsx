'use client'

import { createPost } from "@/app/actions/createPost";

import Box from "./Box";
import Button from "./Button";

const NewPost = () => {
    async function handleSubmit(formData : FormData) {
        console.log("form submitted")
        const { content } = Object.fromEntries(formData.entries());

        if (!content) return;

        // server action
        await createPost(content);

        console.log("post created successfully");
    }

    return (
        <form action={handleSubmit}>

            <Box className="bg- shadow-none w-full justify-start items-start gap-2 h-fit pb-0">
                
                <h2 className="font-semibold text-lg"> New Post </h2>
                <input 
                    type="text" 
                    name="content"
                    id="content"
                    placeholder="Type your post here..."
                    className=" ring-1 w-full h-[7rem] rounded-md px-5 focus:ring-2 focus:ring-inset focus:ring-blue-400 focus:outline-none"
                />
                <Button text="Post" className="w-[10rem] mt-1" type="submit"/>

            </Box>

        </form>
    )
};

export default NewPost;