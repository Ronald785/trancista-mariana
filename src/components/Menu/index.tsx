import Link from "next/link";
import {
    Check,
    Container,
    Flex,
    LabelCheck,
    List,
    MainContent,
    Nav,
} from "./styled";
import { useState } from "react";

export const Menu = () => {
    const [isOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <Check
                type="checkbox"
                id="closeMenu"
                checked={isOpen}
                onChange={toggleMenu}
            />
            <LabelCheck htmlFor="closeMenu" open={isOpen}></LabelCheck>
            <Container open={isOpen}>
                <MainContent>
                    <Flex>
                        <h1>Transcista Mari Ferro </h1>
                        <Nav>
                            <List>
                                <li onClick={closeMenu}>
                                    <Link href="#home">Home</Link>
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
