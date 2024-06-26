import Link from "next/link";
import { Check, Container, Flex, LabelCheck, List, Logo, MainContent, Nav } from "./styled";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiListBold } from "react-icons/pi";
import { isStringObject } from "util/types";

export const Menu = () => {
    const [isOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isOpen);
    };

    const closeMenu = (element: React.MouseEvent<HTMLLIElement>) => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const getVisibleSection = () => {
            const sections = document.querySelectorAll("section");
            const windowHeight = window.innerHeight;
            const windowScrollY = window.scrollY;

            let mostVisibleSection = "";
            let maxVisibleArea = 0;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                let sectionTop = rect.top + windowScrollY;
                let sectionBottom = sectionTop + section.offsetHeight;

                // Se for a seção 'about', considera 100 pixels a mais
                if (section.id === "about") {
                    sectionBottom += 200;
                }

                // Calcula os limites visíveis da seção
                const visibleTop = Math.max(sectionTop, windowScrollY);
                const visibleBottom = Math.min(sectionBottom, windowScrollY + windowHeight);
                const visibleHeight = visibleBottom - visibleTop;

                // Verifica se a seção está visível e calcula a área visível
                if (visibleHeight > 0) {
                    const visibleArea = visibleHeight * rect.width;
                    if (visibleArea > maxVisibleArea) {
                        maxVisibleArea = visibleArea;
                        mostVisibleSection = section.id;
                    }
                }
            });

            if (mostVisibleSection) {
                console.log("Seção mais visível:", mostVisibleSection);

                const active = document.querySelector(".active");
                active?.classList.remove("active");

                const anchors: HTMLAnchorElement[] = Array.from(document.querySelectorAll("nav li a"));

                const anchor = anchors.find((anchor: HTMLAnchorElement) => anchor.hash === "#" + mostVisibleSection);

                if (anchor) {
                    anchor.classList.add("active");
                }
            }
        };

        window.addEventListener("scroll", getVisibleSection);
        window.addEventListener("resize", getVisibleSection);

        getVisibleSection();
    }, []);

    return (
        <>
            <Check
                type="checkbox"
                id="closeMenu"
                checked={isOpen}
                onChange={toggleMenu}
            />
            <LabelCheck
                htmlFor="closeMenu"
                open={isOpen}
            >
                {isOpen ? <IoMdClose /> : <PiListBold />}
            </LabelCheck>
            <Container open={isOpen}>
                <MainContent>
                    <Flex>
                        <Link href="#home">
                            <Logo
                                src="/images/logo.svg"
                                alt="Logo Mariana Ferro"
                            />
                        </Link>
                        <Nav>
                            <List>
                                <li onClick={closeMenu}>
                                    <Link
                                        href="#home"
                                        className="active"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Link href="#about">Sobre</Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Link href="#braids">Tranças</Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Link href="#gallery">Galeria</Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Link href="#care">Cuidados</Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Link href="#contacts">Contato</Link>
                                </li>
                            </List>
                        </Nav>
                    </Flex>
                </MainContent>
            </Container>
        </>
    );
};
