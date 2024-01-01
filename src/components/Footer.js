import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "../content/FooterSocials";

function Footer() {
    return (
        <>
            <section className="footer-socials">
                {socials.map((social, index) => {
                    return (
                        <a href={social.url} key={index}>
                            <FontAwesomeIcon icon={social.icon} size="2x" />
                        </a>
                    );
                })}
            </section>
            <section className="copyright-container">
                <p className="copyright-text">Copyright &copy; 2023-2024</p>
            </section>
        </>
    );
}

export default Footer;
