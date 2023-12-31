import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faGithub,
        url: "https://github.com/SAlimdjanov",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/salimdjanov/",
    },
    {
        icon: faEnvelope,
        url: "mailto: alimdjanov.ss@gmail.com",
    },
    {
        icon: faTwitter,
        url: "https://twitter.com/shonasirdev",
    },
];

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
