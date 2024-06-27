import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    align-items: stretch;
    gap: 2rem;
    padding: 4rem 0;
`;

export const CareCard = styled.div`
    background-color: rgba(179, 134, 113, 255);
    height: 22rem;
    border-radius: 1rem;

    @media (max-width: 594px) {
        height: 20rem;
        padding: 0 3.5rem;
    }

    @media (max-width: 468px) {
        height: 22rem;
        padding: 0 2rem;
    }

    @media (max-width: 368px) {
        height: 24rem;
        padding: 0 1rem;
    }
`;

export const CareHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2rem;
`;

export const CareSvg = styled.img`
    max-width: 100%;
    width: 6.4rem;
`;

export const CareTitle = styled.h3`
    text-align: left;
    font-size: 2rem;
    font-weight: 800;
    color: white;
`;

export const CareDescription = styled.p`
    text-align: justify;

    padding: 0 2rem 1.5rem 2rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    height: 12rem;
`;
