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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const addJsonLd = () => {
        return {
            __html: `
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mariana Ferro",
          "jobTitle": "Trancista",
          "description": "Especialista em tranças nagô e box braids desde 2020.",
          "image": "https://trancista-mariana.vercel.app/images/icon.svg",
          "url": "https://trancista-mariana.vercel.app/",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        }
      `,
        };
    };

    return (
        <html
            lang="pt-BR"
            className={poppins.className}
        >
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Trancista Campinas | Mariana</title>
                <meta
                    name="description"
                    content="Trancista Mariana em Campinas, SP. Especialista em tranças nagô e box braids. Faço Fulani Braids, Gypsy Braids, Goddess Braids, Boxeadora Braids, French Curl Braids e Ghana Braids."
                />
                <meta
                    name="keywords"
                    content="Trancista, tranças, braids, Campinas, Box Braids, Fulani Braids, Gypsy Braids, Goddess Braids, Nagô Braids, Boxeadora Braids, French Curl Braids, Ghana Braids"
                />
                <meta
                    name="author"
                    content="Ronald Almeida"
                />
                <meta
                    property="og:title"
                    content="Mariana | Trancista Campinas"
                />
                <meta
                    property="og:description"
                    content="Trancista Campinas Mariana, especialista em tranças nagô e box braids desde 2020."
                />
                <meta
                    property="og:image"
                    content="/images/icon.svg"
                />
                <meta
                    property="og:url"
                    content="https://trancista-mariana.vercel.app/"
                />
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:site"
                    content="https://trancista-mariana.vercel.app/"
                />
                <meta
                    name="twitter:title"
                    content="Mariana | Trancista Campinas"
                />
                <meta
                    name="twitter:description"
                    content="Trancista Campinas Mariana, especialista em tranças nagô e box braids desde 2020."
                />
                <meta
                    name="twitter:image"
                    content="/images/icon.svg"
                />
                <link
                    rel="icon"
                    href="/images/icon.svg"
                />
                <link
                    rel="canonical"
                    href="https://trancista-mariana.vercel.app/"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addJsonLd()}
                    key="item-jsonld"
                />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-11480583163"
                ></script>
                <script>
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11480583163');
          `}
                </script>
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
