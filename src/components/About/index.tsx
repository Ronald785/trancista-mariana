import { SecondarySection, MainContent, TitleSection } from "@/styles/styles";
import { Grid, Intro } from "./styled";

export const About = () => {
    return (
        <SecondarySection id="sobre">
            <MainContent>
                <Grid>
                    <Intro>
                        <TitleSection>Sobre</TitleSection>

                        <p>
                            Prazer, sou Mariana Ferro! Trabalho com trança desde 2020 e tenho mais de 5 cursos
                            profissionalizantes na área. Em cada trabalho, busco alcançar a excelência técnica e a
                            satisfação dos meus clientes, pois cada cabelo e cada pessoa é única.
                        </p>
                        <p>
                            Como cristã, considero meu dom uma benção de Deus e busco honrá-lo em cada trança, dedicando
                            amor e cuidado a cada uma. Vamos conversar, será um prazer lhe atender!
                        </p>
                    </Intro>
                </Grid>
            </MainContent>
        </SecondarySection>
    );
};
