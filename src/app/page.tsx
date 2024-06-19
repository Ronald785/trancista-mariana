"use client";

import { Menu } from "@/components/Menu";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Braids } from "@/components/Braids";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export default function Page() {
    return (
        <>
            <Menu />
            <Home />
            <About />
            <Braids />
            <Gallery />
            <Contact />
        </>
    );
}
