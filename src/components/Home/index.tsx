import { MainContent, PrimarySection } from "@/styles/styles";
import { Actions, Grid, Intro, ProfilePicture, ProfilePictureWrapper } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    return (
        <PrimarySection id="home">
            <MainContent>
                <Grid>
                    <Intro>
                        <h3>Especialista em trança nagô e box braids</h3>

                        <h2>Desde 2020 transformando fios em arte</h2>

                        <Actions>
                            <button>
                                <a
                                    href="https://wa.me/5519992109540"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Agende seu horário
                                </a>
                            </button>
                            <button>
                                <a
                                    href="https://maps.app.goo.gl/oY71fLGr2QDfqhkn8"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    Como chegar
                                </a>
                            </button>
                        </Actions>
                    </Intro>

                    <ProfilePictureWrapper>
                        <ProfilePicture
                            src="/images/mariana.png"
                            alt="Foto da Mariana Ferreira"
                        />
                    </ProfilePictureWrapper>
                </Grid>
            </MainContent>
        </PrimarySection>
    );
};
