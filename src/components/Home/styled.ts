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
    h1 {
        font-size: 4.5rem;
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
        padding: 2rem 0;
    }

    p {
        font-size: 2.2rem;
        font-weight: 500;
        text-transform: uppercase;
        padding: 2rem 0;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 3.5rem;
        }

        p {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.6rem;
        }
    }
`;

export const Actions = styled.div`
    display: grid;
    padding: 2rem 0;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    button {
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 1rem 0;
        border-radius: 2rem;
        border: 3px solid rgba(179, 134, 113, 255);

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }

        svg {
            margin-right: 0.5rem;
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;

        svg {
            font-size: 1.5rem;
        }
    }
`;

export const ScheduleButton = styled.button`
    background-color: rgba(179, 134, 113, 255);

    a {
        color: white;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.5);
    }
`;

export const LocationButton = styled.button`
    a {
        color: rgba(79, 69, 68, 255);
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.5);
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
