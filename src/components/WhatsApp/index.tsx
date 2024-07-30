import Link from "next/link";
import { Container } from "./styled";
import { FaWhatsapp } from "react-icons/fa";

export const WHatsApp = () => {
    return (
        <Link
            href="https://wa.me/5519992109540?text=Ol%C3%A1%20Mari.%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20tran%C3%A7as"
            title="WhatsApp Link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Container>
                <FaWhatsapp />
            </Container>
        </Link>
    );
};
