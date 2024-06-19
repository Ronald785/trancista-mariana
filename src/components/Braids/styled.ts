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

export const Card = styled.div`
    box-shadow: 0 0 10px 1px #00000091;
    border-radius: 1rem;
`;

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
    padding: 0 2rem 1.5rem 2rem;

    span {
        display: block;
        font-size: 1.6rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
    }
`;

export const IconContainer = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IlustrativePicture = styled.div`
    position: relative;

    p {
        position: absolute;
        font-size: 2rem;
        text-transform: uppercase;
        color: white;
        bottom: 0;
        width: 100%;
        padding: 1rem;
        background-color: rgba(179, 134, 113, 255);
        text-align: center;
    }
`;
