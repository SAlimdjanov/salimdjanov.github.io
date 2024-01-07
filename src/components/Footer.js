import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "../content/Socials";

/**
 * Computes footer icon anchors
 *
 * @param {Object} object Object containing social links and icons
 * @returns Icons as anchor elements
 */
const generateIconLinks = (object) => {
    const icons = [];

    for (const item in object) {
        icons.push(
            <a
                href={object[item].url}
                key={item}
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={object[item].icon} size="2x" />
            </a>
        );
    }

    return icons;
};

function Footer() {
    return (
        <>
            <section className="footer-socials">
                {generateIconLinks(socials)}
            </section>
            <section className="copyright-container">
                <p className="copyright-text">
                    Copyright &copy; 2023-2024 | Shonasir Alimdjanov
                </p>
            </section>
        </>
    );
}

export default Footer;
