import { SecondarySection, MainContent, TitleSection } from "@/styles/styles";
import { Grid, Intro } from "./styled";

export const About = () => {
    return (
        <SecondarySection id="about">
            <MainContent>
                <Grid>
                    <Intro>
                        <TitleSection>Sobre</TitleSection>

                        <p>
                            Desde 2020, sou uma trancista especializada em
                            tranças nagô e box braids. Em cada trabalho, busco
                            alcançar excelência técnica e garantir sua total
                            satisfação. Como cristã, considero meu dom uma
                            bênção de Deus e busco honrá-lo em cada trança,
                            dedicando amor e cuidado a cada uma.
                        </p>
                    </Intro>
                </Grid>
            </MainContent>
        </SecondarySection>
    );
};
