import styled from "styled-components";

interface OpenProps {
    open: boolean;
}

export const Check = styled.input`
    display: none;
`;

export const LabelCheck = styled.label<OpenProps>`
    display: none;
    @media (max-width: 992px) {
        display: initial;

        position: fixed;

        top: 2rem;
        right: 2rem;
        padding: 0.5rem;

        width: 4rem;
        height: 4rem;
        border-radius: 0.5rem;

        text-align: center;
        font-size: 3rem;
        color: white;
        background-color: ${({ open }) => (open ? "black" : "black")};
        z-index: 1000;
        cursor: pointer;
    }
`;

export const Container = styled.div<OpenProps>`
    z-index: 100;
    background-color: white;
    position: fixed;
    width: 100%;

    @media (max-width: 992px) {
        display: ${({ open }) => (open ? "block" : "none")};
    }
`;

export const MainContent = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 3rem;

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        color: black;
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }
`;

export const Logo = styled.img`
    width: 15rem;

    @media (max-width: 992px) {
        width: 30rem;
        padding: 2rem 0;
    }
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    li {
        list-style: none;
        padding: 2rem;
        color: black;

        a {
            text-decoration: none;
            color: inherit;

            &.active {
                padding-bottom: 2px;
                border-bottom: 3px solid rgba(121, 77, 48, 255);
            }
        }
        a:hover {
            color: rgba(121, 77, 48, 255);
        }
    }

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;
