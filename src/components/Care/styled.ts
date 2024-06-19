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
    height: 16rem;
    border-radius: 1rem;

    @media (max-width: 594px) {
        height: 13rem;
    }

    @media (max-width: 468px) {
        height: 16rem;
    }
`;

export const CareTitle = styled.h3`
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    padding: 1.5rem 2rem;
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
