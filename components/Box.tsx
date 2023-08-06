import { twMerge } from "tailwind-merge";

interface BoxProps {
    children : React.ReactNode;
    className? : string;
}
const Box : React.FC<BoxProps> = ({
    children,
    className
}) => {

    return (
        <div
            className={twMerge(`
                w-[28rem] h-[33rem] bg-slate-100 shadow-2xl p-10 flex flex-col items-center justify-center rounded-md
            `, className)}
        >
            {children}
        </div>
    )
};

export default Box;