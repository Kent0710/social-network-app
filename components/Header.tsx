'use client'

import { usePathname } from "next/navigation";
import { useMemo } from 'react';

import Box from "./Box";
import NavItem from "./NavItem";

const Header = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            text : 'Explore',
            href : "/",
            active : pathname === "/"
        },
        {
            text : "Account",
            href : '/account',
            active : pathname === "/account"
        },
        {
            text : "Following",
            href : "/following",
            active : pathname === "/following"
        },
        {
            text : "Logout",
            href : "",
            active : false
        }
    ], [pathname])

    return (
        <div>
            
            <Box className="w-full h-[7rem] flex-row justify-start gap-20 shadow-lg fixed">

                <h1 className="font-bold text-blue-700 text-lg"> Social Network App </h1>

                {routes.map((route) => (
                    <NavItem key={route.text} text={route.text} href={route.href} active={route.active} />
                ))}

            </Box>

        </div>
    )
};

export default Header;