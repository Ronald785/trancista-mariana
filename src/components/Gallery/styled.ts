import Image from "next/image";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ImageNext = styled(Image)`
    width: 100%;
`;

export const StyledSwiper = styled(Swiper)`
    width: 100%;
    padding: 4rem 0;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        max-width: 27rem;
        border-radius: 2rem 2rem 0 0;
    }
    p {
        padding: 2rem;
        text-align: center;
        font-size: 2rem;
        background-color: rgba(79, 69, 68, 255);
        width: 100%;
        max-width: 27rem;
        border-radius: 0 0 2rem 2rem;
        margin-bottom: 3rem;
    }
`;
