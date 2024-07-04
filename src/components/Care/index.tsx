import { MainContent, TitleSection, PrimarySection } from "@/styles/styles";
import { CareCard, CareDescription, CareHeader, CareSvg, CareTitle, Grid } from "./styled";

export const Care = () => {
    return (
        <PrimarySection id="cuidados">
            <MainContent>
                <TitleSection>Cuidados pós tranças</TitleSection>
                <Grid>
                    <CareCard>
                        <CareHeader>
                            <CareSvg
                                src="/images/care/wash.svg"
                                alt="Wash hair"
                                width={64}
                                height={64}
                            />
                            <CareTitle>Lavar o Cabelo</CareTitle>
                        </CareHeader>
                        <CareDescription>
                            Use shampoo diluído para evitar o acúmulo de resíduos e massageie suavemente o couro
                            cabeludo.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareHeader>
                            <CareSvg
                                src="/images/care/mousse.svg"
                                alt="Use mousse"
                                width={64}
                                height={64}
                            />
                            <CareTitle>Usar Mousse</CareTitle>
                        </CareHeader>
                        <CareDescription>
                            Para aumentar a durabilidade, deverá passar o mousse fixador após a lavagem, com o cabelo
                            úmido ou seco.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareHeader>
                            <CareSvg
                                src="/images/care/dry.svg"
                                alt="Dry hair"
                                width={64}
                                height={64}
                            />
                            <CareTitle>Secagem Adequada</CareTitle>
                        </CareHeader>
                        <CareDescription>
                            Após lavar as tranças, seque-as bem usando uma toalha e deixe-as secar ao ar livre ou com um
                            secador frio.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareHeader>
                            <CareSvg
                                src="/images/care/sleep.svg"
                                alt="Sleeping cap"
                                width={64}
                                height={64}
                            />
                            <CareTitle>Proteção Noturna</CareTitle>
                        </CareHeader>
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
