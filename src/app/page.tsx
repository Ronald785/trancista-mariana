"use client";

import { Menu } from "@/components/Menu";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Braids } from "@/components/Braids";

export default function Page() {
    return (
        <>
            <Menu />
            <Home />
            <About />
            <Braids />
        </>
    );
}
