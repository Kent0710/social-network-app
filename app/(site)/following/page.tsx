'use client'

import Header from "@/components/Header";
import Posts from "@/components/Posts";

import { useEffect, useState } from "react";

const Following = () => {

    return (
        <div className="text-slate-600">
            
            <Header />

            <main className="pt-[7rem]">
                <Posts />
            </main>

        </div>
    )
};

export default Following;