import Link from "next/link";
import { twMerge } from "tailwind-merge"

interface NavItemProps {
    text : string;
    href : string;
    active : boolean;
};

const NavItem : React.FC<NavItemProps> = ({
    text,
    href,
    active 
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                font-bold  text-lg
            `, active && "text-slate-400")}
        >
            {text}
        </Link>
    )
};

export default NavItem;