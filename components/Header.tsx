'use client'

import { signOut } from "next-auth/react";

import { usePathname } from "next/navigation";
import React, { useMemo } from 'react';

import Box from "./Box";
import NavItem from "./NavItem";
import Button from "./Button";

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
    ], [pathname])

    const logout = async (e : React.SyntheticEvent) => {
        e.preventDefault();
        await signOut({callbackUrl : "/login"})
    } 

    return (
        <div>
            
            <Box className="w-full h-[7rem] flex-row justify-start gap-20 shadow-lg fixed">

                <h1 className="font-bold text-blue-700 text-lg shrink-0"> Social Network App </h1>

                {routes.map((route) => (
                    <NavItem key={route.text} text={route.text} href={route.href} active={route.active} />
                ))}

                <div className="w-full flex flex-row-reverse">
                    <Button text="Logout" className=" text-white font-semibold text-lg w-[10rem] bg-yellow-500 rounded-sm" onClick={logout}/>
                </div>

            </Box>

        </div>
    )
};

export default Header;