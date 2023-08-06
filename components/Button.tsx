import { twMerge } from "tailwind-merge"

interface ButtonProps {
    text : string;
    className ? : string;
    onClick? : any;
    type? : any;
};
const Button : React.FC<ButtonProps> = ({
    text,
    className,
    onClick,
    type
}) => {
    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={twMerge(`
                bg-blue-700 text-white font-semibold w-[15rem] py-1 rounded-md
            `, className)}
        >
            {text}
        </button>
    )
};

export default Button;