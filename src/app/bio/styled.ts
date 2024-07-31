import Image from "next/image";
import styled from "styled-components";

export const PrimarySection = styled.section`
    background-color: rgb(229 229 229);
    color: white;
    height: 100vh;
`;

export const Border = styled.div`
    width: 100%;
    height: 15rem;
    position: fixed;
    background-color: rgba(79, 69, 68, 255);
`;

export const PictureWrapper = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    top: 1.5rem;
`;

export const Picture = styled(Image)`
    width: 15rem;
    height: 15rem;
`;

export const Title = styled.h1`
    padding-top: 2rem;
    text-align: center;
    font-size: 3rem;
    color: black;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const SubTitle = styled.h2`
    padding-top: 1rem;
    text-align: center;
    font-size: 2.5rem;
    color: black;
    font-weight: 400;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const Contacts = styled.div`
    padding: 2rem 0;
    /* background-color: red; */
    text-align: center;

    svg {
        font-size: 3rem;
        color: black;
        margin: 0 1rem;
    }
`;

export const Buttons = styled.div`
    text-align: center;
    a {
        text-decoration: none;
        color: #000000ad;
        background-color: white;
        width: 100%;
        border-radius: 5px;
        max-width: 315px;
        padding: 1.5rem 1rem;
        font-size: 1.6rem;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        display: block;
        margin: 0 auto;
        margin-bottom: 2rem;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
`;
