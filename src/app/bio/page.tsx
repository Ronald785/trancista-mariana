"use client";

import { MainContent } from "@/styles/styles";
import { PrimarySection, Picture, PictureWrapper, Border, Title, SubTitle, Contacts, Buttons } from "./styled";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { CiMail } from "react-icons/ci";

export default function Page() {
    return (
        <PrimarySection>
            <Border></Border>
            <MainContent>
                <PictureWrapper>
                    <Picture
                        src="/images/mariana.png"
                        alt="Mariana Ferro"
                        width={500}
                        height={500}
                        quality={100}
                    />
                </PictureWrapper>
                <Title>Mariana Soares Ferro</Title>
                <SubTitle>Transcista Campinas</SubTitle>
                <Contacts>
                    <Link
                        href="https://www.instagram.com/mariferro_/"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://wa.me/5519992109540?text=Ol%C3%A1%20Mari.%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20tran%C3%A7as"
                        title="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </Link>
                    <Link
                        href="mailto:trancista.mariferro@gmail.com"
                        title="E-mail"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiMail />
                    </Link>
                </Contacts>

                <Buttons>
                    <a
                        href="https://wa.me/5519992109540?text=Ol%C3%A1%20Mari.%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio"
                        target="_blank"
                    >
                        Agende seu horário
                    </a>
                    <a
                        href="https://wa.me/5519992109540?text=Ol%C3%A1%20Mari.%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio"
                        target="_blank"
                    >
                        Contato
                    </a>
                </Buttons>
            </MainContent>
        </PrimarySection>
    );
}