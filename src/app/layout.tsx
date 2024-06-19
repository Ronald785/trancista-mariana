"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global-syles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
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
