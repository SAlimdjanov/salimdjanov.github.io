/**
 * FooterSocals.js
 *
 * Contains icons and links to my social profiles
 */

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = {
    github: {
        icon: faGithub,
        url: "https://github.com/SAlimdjanov",
    },
    linkedin: {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/salimdjanov/",
    },
    email: {
        icon: faEnvelope,
        url: "mailto: alimdjanov.ss@gmail.com",
    },
    twitter: {
        icon: faTwitter,
        url: "https://twitter.com/shonasirdev",
    },
};

export default socials;
