import { MainContent, TitleSection, PrimarySection } from "@/styles/styles";
import { CareCard, CareDescription, CareTitle, Grid } from "./styled";

export const Care = () => {
    return (
        <PrimarySection id="care">
            <MainContent>
                <TitleSection>Cuidados</TitleSection>
                <Grid>
                    <CareCard>
                        <CareTitle>Lavar o Cabelo</CareTitle>
                        <CareDescription>
                            Use um shampoo diluído para evitar acúmulo de resíduos, concentrando-se no couro cabeludo e
                            massageando suavemente.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Usar mousse</CareTitle>
                        <CareDescription>
                            Para aumentar a durabilidade deverá passar o mousse fixador após a lavagem com o cabelo
                            úmido/seco.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Secagem Adequada</CareTitle>
                        <CareDescription>
                            Após lavar as tranças, seque-as bem usando uma toalha e deixe secar ao ar livre ou com um
                            secador frio.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Proteção Noturna</CareTitle>
                        <CareDescription>
                            Durma com uma touca de cetim ou use uma fronha de seda para reduzir o atrito e evitar o
                            frizz.
                        </CareDescription>
                    </CareCard>
                </Grid>
            </MainContent>
        </PrimarySection>
    );
};
