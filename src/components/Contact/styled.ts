import styled from "styled-components";

export const Grid = styled.div`
    padding: 4rem 0;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const TitleContact = styled.h2`
    margin: 0;
    padding: 0;
    padding-bottom: 2rem;
    font-weight: 700;
    font-size: 4.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px black;
`;

export const CardContact = styled.div``;

export const InfoContact = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    svg {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
        background-color: rgba(179, 134, 113, 255);
        padding: 1.5rem;
        border-radius: 0.5rem;

        &:hover {
            cursor: pointer;
            box-shadow: 3px solid black;
        }
    }
`;

export const SocialLink = styled.a`
    font-size: 1.8rem;
    color: inherit;
    text-decoration: none;

    display: flex;
    align-items: center;
`;

export const Maps = styled.iframe`
    border-radius: 1rem;
    width: 100%;
    height: 300px;
`;
