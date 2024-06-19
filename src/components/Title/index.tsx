import { Container } from "./styled";

type TitleProps = {
    title: string;
};

export const Title = ({ title }: TitleProps) => {
    return <Container>{title}</Container>;
};
