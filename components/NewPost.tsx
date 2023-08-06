import Box from "./Box";
import Button from "./Button";



const NewPost = () => {
    return (
        <form>

            <Box className="bg- shadow-none w-full justify-start items-start gap-2 h-fit pb-0">
                
                <h2 className="font-semibold text-lg"> New Post </h2>
                <input 
                    type="text" 
                    placeholder="Type your post here..."
                    className=" ring-1 w-full h-[7rem] rounded-md px-5 focus:ring-2 focus:ring-inset focus:ring-blue-400 focus:outline-none"
                />
                <Button text="Post" className="w-[10rem] mt-1"/>

            </Box>

        </form>
    )
};

export default NewPost;