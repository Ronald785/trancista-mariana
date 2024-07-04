import { Pagination, Navigation } from "swiper/modules";
import { MainContent, TitleSection, SecondarySection } from "@/styles/styles";
import { ImageNext, StyledSwiper, StyledSwiperSlide } from "./styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Gallery = () => {
    return (
        <SecondarySection id="galeria">
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
                    spaceBetween={20}
                    modules={[Pagination]}
                >
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/1.png"
                            alt="Nagô com bubble"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô com bubble</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/2.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/3.png"
                            alt="Goddess Braids"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Goddess Braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/4.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/5.png"
                            alt="French Curl Braids"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>French Curl Braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/6.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/7.png"
                            alt="Box Braids  (gg)"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Box Braids (gg)</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/8.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/9.png"
                            alt="Box Braids (g)"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Box Braids (g)</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/10.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/11.png"
                            alt="Boxeadora"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Boxeadora</p>
                    </StyledSwiperSlide>
                    {/*Masculina*/}
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/12.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/13.png"
                            alt="Box Braids"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Box Braids</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/14.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/15.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/16.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/17.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/18.png"
                            alt="Nagô"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô</p>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <ImageNext
                            src="/images/gallery/19.png"
                            alt="Nagô finalização Bubble"
                            width={270}
                            height={380}
                            loading="lazy"
                        />
                        <p>Nagô finalização Bubble</p>
                    </StyledSwiperSlide>
                </StyledSwiper>
            </MainContent>
        </SecondarySection>
    );
};
