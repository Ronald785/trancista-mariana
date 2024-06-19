import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* background-color: rgba(79,69,68,255); */
    }

    :root {
        --swiper-theme-color: rgba(79, 69, 68, 255);
        --swiper-pagination-bullet-size: 1.6rem;
        --swiper-pagination-bullet-width: 1.6rem;
        --swiper-pagination-bullet-height: 1.6rem;
    }
`;
