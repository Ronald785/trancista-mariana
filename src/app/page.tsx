"use client";

import { Menu } from "@/components/Menu";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Braids } from "@/components/Braids";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { WHatsApp } from "@/components/WhatsApp";
import { Care } from "@/components/Care";

export default function Page() {
    return (
        <>
            <Menu />
            <Home />
            <About />
            <Braids />
            <Gallery />
            <Care />
            <Contact />
            <WHatsApp />
        </>
    );
}
