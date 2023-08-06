import Box from "@/components/Box";
import LoginButton from "@/components/LoginButton";

const Login = async () => {
    return (
        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            
            
            <Box className="gap-10">

                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl"> Social Network App </h1>
                    <p> A twitter like app built using Next.js </p>
                </div>

                
                <LoginButton />


                <div className="flex flex-col items-center">
                    <h2> Developed by :  </h2>
                    <p className="font-semibold"> nami </p>
                </div>

            </Box>


        </div>
    )
};

export default Login;