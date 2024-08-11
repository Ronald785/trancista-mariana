import { MainContent, PrimarySection } from "@/styles/styles";
import { Actions, Grid, Intro, LocationButton, ProfilePicture, ProfilePictureWrapper, ScheduleButton } from "./styled";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const Home = () => {
    return (
        <PrimarySection id="home">
            <MainContent>
                <Grid>
                    <Intro>
                        <p>Desde 2020 transformando fios em arte</p>

                        <h1>Especialista em tranças nagô e box braids</h1>

                        <Actions>
                            <ScheduleButton>
                                <a
                                    href="https://wa.me/5519995606984?text=Ol%C3%A1%20Mari.%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20tran%C3%A7as"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp />
                                    Agende seu horário
                                </a>
                            </ScheduleButton>
                            <LocationButton>
                                <a
                                    href="https://maps.app.goo.gl/oY71fLGr2QDfqhkn8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaMapMarkerAlt />
                                    Como chegar
                                </a>
                            </LocationButton>
                        </Actions>
                    </Intro>

                    <ProfilePictureWrapper>
                        <ProfilePicture
                            src="/images/mariana.png"
                            alt="Mariana Soares Ferro"
                            width={555}
                            height={555}
                            quality={100}
                        />
                    </ProfilePictureWrapper>
                </Grid>
            </MainContent>
        </PrimarySection>
    );
};
