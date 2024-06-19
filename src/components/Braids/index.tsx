import { PrimarySection, MainContent, TitleSection } from "@/styles/styles";

import {
    Card,
    CardContent,
    CardDescription,
    CardImage,
    CardTime,
    Grid,
    IconContainer,
    IlustrativePicture,
} from "./styled";
import { FaHourglassEnd, FaRegClock } from "react-icons/fa";

export const Braids = () => {
    return (
        <PrimarySection id="braids">
            <MainContent>
                <TitleSection>Tranças</TitleSection>
                <Grid>
                    <Card>
                        <CardImage
                            src="/images/breads/1.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>Box Braids</h3>
                            <CardDescription>
                                As Box Braids são Compostas por várias tranças individuais que começam próximas ao couro
                                cabeludo e se estendem até as pontas.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 8h - 12h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 2 meses
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage
                            src="/images/breads/2.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>Fulani Braids</h3>
                            <CardDescription>
                                As Fulani Braids Caracterizadas por tranças detalhadas no topo, enraizadas (nagô) e com
                                box braids na parte de trás.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 8h - 12h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 2 meses
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <IlustrativePicture>
                            <CardImage
                                src="/images/breads/3.png"
                                loading="lazy"
                            />
                            <p>Imagem Ilustrativa</p>
                        </IlustrativePicture>
                        <CardContent>
                            <h3>Gypsy Braids</h3>
                            <CardDescription>
                                As gypsy braids são um estilo de trança que utiliza o método knotless (sem nó na raiz
                                das box braids), com cachos concentrados nas pontas.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 8h - 12h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 2 meses
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage
                            src="/images/breads/4.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>Goddess Braids</h3>
                            <CardDescription>
                                As goddess braids são um estilo de tranças soltas, com cachos concentrados no
                                comprimento.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 8h - 12h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 2 meses
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage
                            src="/images/breads/5.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>Nagô Braids</h3>
                            <CardDescription>
                                As nagô braids são bem rentes ao couro cabeludo, com desenhos variados.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 30m - 4h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 7 - 14 dias
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage
                            src="/images/breads/6.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>Boxeadora Braids</h3>
                            <CardDescription>
                                Tranças boxeadoras são duas tranças enraizadas feitas de cada lado da cabeça.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 2h - 4h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 10 - 15 dias
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage
                            src="/images/breads/7.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>French Curl Braids</h3>
                            <CardDescription>
                                Tranças com cachos nas extremidades, criando um visual elegante e ondulado.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 8h - 12h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 2 meses
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage
                            src="/images/breads/8.png"
                            loading="lazy"
                        />
                        <CardContent>
                            <h3>Ghana Braids</h3>
                            <CardDescription>
                                Tranças que começam finas e se tornam mais grossas com padrões intrincados.
                            </CardDescription>
                            <CardTime>
                                <IconContainer>
                                    <FaRegClock />
                                </IconContainer>
                                <span>
                                    <b>Tempo:</b> 2h - 6h
                                </span>
                            </CardTime>
                            <CardTime>
                                <IconContainer>
                                    <FaHourglassEnd />
                                </IconContainer>
                                <span>
                                    <b>Durabilidade:</b> 10 - 20 dias
                                </span>
                            </CardTime>
                        </CardContent>
                    </Card>
                </Grid>
            </MainContent>
        </PrimarySection>
    );
};
