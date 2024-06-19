import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;

    padding-top: 2rem;

    @media (min-width: 992px) {
        padding-top: 6rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Intro = styled.div`
    h2 {
        font-size: 4.5rem;
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
        padding: 2rem 0;
    }

    span {
        display: block;
    }

    h3,
    span {
        font-size: 2.2rem;
        font-weight: 500;
        text-transform: uppercase;
        padding: 2rem 0;
    }

    @media (max-width: 1024px) {
        h2 {
            font-size: 3.5rem;
        }

        h3,
        span {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 3rem;
        }

        h3,
        span {
            font-size: 1.6rem;
        }
    }
`;

export const Actions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    button {
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        padding: 1rem 0;
        border-radius: 2rem;
        border: 3px solid rgba(179, 134, 113, 255);

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: rgb(0 0 0 / 85%);
        }

        svg {
            margin-right: 0.5rem;
            width: 2.5rem;
            height: 2.5rem;
        }

        &:hover {
            cursor: pointer;
            background-color: rgba(179, 134, 113, 255);

            a {
                color: white;
            }
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        button {
            font-size: 1.2rem;

            svg {
                font-size: 1.5rem;
            }
        }
    }
`;

export const ProfilePictureWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ProfilePicture = styled.img`
    width: 100%;
    max-height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.3);
`;
