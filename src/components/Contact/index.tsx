import { MainContent, PrimarySection, SecondarySection } from "@/styles/styles";
import { CardContact, Grid, IconContainer, InfoContact, Maps, SocialLink, TitleContact } from "./styled";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
export const Contact = () => {
    return (
        <SecondarySection id="contatos">
            <MainContent>
                <Grid>
                    <CardContact>
                        <TitleContact>Contato</TitleContact>

                        <InfoContact>
                            <SocialLink
                                href="https://maps.app.goo.gl/oY71fLGr2QDfqhkn8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconContainer>
                                    <FaMapMarkerAlt />
                                </IconContainer>
                                <p>Av Baden Powell, 1093 - Jardim Nova Europa - Campinas - SP</p>
                            </SocialLink>
                        </InfoContact>
                        <InfoContact>
                            <SocialLink
                                href="https://wa.me/5519992109540"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconContainer>
                                    <FaWhatsapp />
                                </IconContainer>
                                <p>(19) 99210-9540</p>
                            </SocialLink>
                        </InfoContact>
                        <InfoContact>
                            <SocialLink
                                href="https://www.instagram.com/trancista.mariferro/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconContainer>
                                    <FaInstagram />
                                </IconContainer>
                                <p>@trancista.mariferro</p>
                            </SocialLink>
                        </InfoContact>
                    </CardContact>

                    <Maps
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.2482156577066!2d-47.06175002404441!3d-22.9410840390989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9c42e8d8773%3A0xe1e675ffafd10d97!2sTrancista%20Mariana%20Ferro%20%7C%20Nag%C3%B4%20e%20Box%20Braids!5e0!3m2!1spt-BR!2sbr!4v1718735245900!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        aria-hidden="false"
                    ></Maps>
                </Grid>
            </MainContent>
        </SecondarySection>
    );
};
