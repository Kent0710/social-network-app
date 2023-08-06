'use client'

import { signIn } from "next-auth/react"

import Button from "./Button";

const LoginButton = () => {
    return (
        <Button text="Get started" onClick={() => signIn('auth0', {callbackUrl : '/'})}/>
    )
};

export default LoginButton;