import Link from "next/link";
import { Container } from "./styled";
import { FaWhatsapp } from "react-icons/fa";

export const WHatsApp = () => {
    return (
        <Link
            href="https://wa.me/5519992109540"
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
