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
                        <CareTitle>Evitar Pesos Excessivos</CareTitle>
                        <CareDescription>
                            Evite acessórios pesados nas tranças para prevenir tensão no couro cabeludo e quebra do
                            cabelo.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Proteção Noturna</CareTitle>
                        <CareDescription>
                            Durma com uma touca de cetim ou use uma fronha de seda para reduzir o atrito e evitar o
                            frizz.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Manutenção</CareTitle>
                        <CareDescription>
                            Ajuste as tranças afrouxando e repare as pontas com frizz perto do couro cabeludo.
                        </CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Limite o Tempo de Uso</CareTitle>
                        <CareDescription>Não deixe as tranças por mais de 2 meses.</CareDescription>
                    </CareCard>
                    <CareCard>
                        <CareTitle>Conclusão</CareTitle>
                        <CareDescription>
                            Seguir essas dicas ajudará a manter suas tranças box braids bonitas e saudáveis por mais
                            tempo.
                        </CareDescription>
                    </CareCard>
                </Grid>
            </MainContent>
        </PrimarySection>
    );
};
