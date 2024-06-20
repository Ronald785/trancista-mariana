"use client";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

const poppins = Poppins({
    weight: ["400", "500", "600", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            className={poppins.className}
        >
            <head>
                <title>Trancista Mari Ferro</title>
                <meta
                    name="description"
                    content="Trancista Mari Ferro, especialista em tranças nagô e box braids desde 2020. Transformando fios em arte com excelência técnica e dedicação. Descubra os diferentes estilos, como Box Braids, Fulani Braids, Gypsy Braids, Goddess Braids, Nagô Braids, Boxeadora Braids, French Curl Braids e Ghana Braids. Localizada em Campinas, SP. Contate-nos para agendar seu próximo visual incrível!"
                />
                <link
                    rel="icon"
                    href="/images/icon.svg"
                />
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <StyledComponentsRegistry>
                        {children}
                        <GlobalStyles />
                    </StyledComponentsRegistry>
                </ThemeProvider>
            </body>
        </html>
    );
}
