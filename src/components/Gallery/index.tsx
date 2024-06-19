import { Pagination, Navigation } from "swiper/modules";
import { MainContent, TitleSection, SecondarySection } from "@/styles/styles";
import { Image, StyledSwiper, StyledSwiperSlide } from "./styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Gallery = () => {
    return (
        <SecondarySection id="gallery">
            <MainContent>
                <TitleSection>Galeria</TitleSection>
                <StyledSwiper
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        595: {
                            slidesPerView: 2,
                        },
                        865: {
                            slidesPerView: 3,
                        },
                        1135: {
                            slidesPerView: 4,
                        },
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={40}
                    modules={[Pagination]}
                >
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/1.png"
                            alt="Nagô com bubble"
                            loading="lazy"
                        />
                        <p>Nagô com bubble</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/2.png"
                            alt="Goddess braids"
                            loading="lazy"
                        />
                        <p>Goddess braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/3.png"
                            alt="Nagô braids"
                            loading="lazy"
                        />
                        <p>Nagô braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/4.png"
                            alt="Nagô braids"
                            loading="lazy"
                        />
                        <p>Nagô braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/5.png"
                            alt="Box braids"
                            loading="lazy"
                        />
                        <p>Box braids (gg)</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/6.png"
                            alt="Box braids"
                            loading="lazy"
                        />
                        <p>Box braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/7.png"
                            alt="French Curl Braids"
                            loading="lazy"
                        />
                        <p>French Curl Braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/8.png"
                            alt="Box braids (g)"
                            loading="lazy"
                        />
                        <p>Box braids (g)</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/9.png"
                            alt="Boxeadora braids"
                            loading="lazy"
                        />
                        <p>Boxeadora braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/10.png"
                            alt="Nagô braids"
                            loading="lazy"
                        />
                        <p>Nagô braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/11.png"
                            alt="Nagô braids"
                            loading="lazy"
                        />
                        <p>Nagô braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/12.png"
                            alt="Nagô finalização bubble"
                            loading="lazy"
                        />
                        <p>Nagô finalização bubble</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/14.png"
                            alt="Nagô braids"
                            loading="lazy"
                        />
                        <p>Nagô braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Image
                            src="/images/gallery/15.png"
                            alt="Nagô lateral"
                            loading="lazy"
                        />
                        <p>Nagô lateral</p>
                    </StyledSwiperSlide>
                </StyledSwiper>
            </MainContent>
        </SecondarySection>
    );
};
