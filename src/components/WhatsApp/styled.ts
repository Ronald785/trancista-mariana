import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    z-index: 99;
    bottom: 2rem;
    right: 2rem;

    height: 5rem;
    width: 5rem;
    font-size: 3rem;
    color: white;
    background-color: #40c351;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #3db54c;
    }
`;
