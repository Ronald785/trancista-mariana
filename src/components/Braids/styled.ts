import styled from "styled-components";

interface CardImageProps {
    img: string;
}

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    align-items: stretch;
    gap: 2rem;
    padding: 4rem 0;
`;

export const Card = styled.div``;

export const CardImage = styled.img`
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: 30rem;
    object-fit: cover;
`;

export const CardContent = styled.div`
    border-radius: 0 0 1rem 1rem;

    background-color: white;
    color: black;

    h3 {
        font-size: 2rem;
        font-weight: 800;
        padding: 1.5rem 2rem;
        /* text-align: center; */
    }
`;

export const CardDescription = styled.p`
    padding: 0 2rem 1.5rem 2rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    height: 12rem;
    text-align: justify;
`;

export const CardTime = styled.div`
    display: flex;
    align-items: center;
    svg {
        font-size: 2rem;
        padding: 0 1rem 1.5rem 2rem;
        font-weight: 500;
        width: 2.5rem;
        color: black;
    }
    span {
        display: block;
        padding-bottom: 1.5rem;
        font-size: 1.6rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
    }
`;
