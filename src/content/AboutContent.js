/**
 * AboutContent.js
 *
 * Contains all text content to be displayed in the 'About' component
 */

import { Link } from "react-router-dom";
import componentNames from "../content/ComponentNames";
import itemToPath from "../helpers/ConvertToPath";

/**
 * Processes content for subsection "Who I am" in the "About" component
 *
 * @param {String} links array containing in-app component names
 * @param {String} socials Object containing social links
 * @returns {Object} Object containing text and relevant social links
 */
const whoIAm = (links, socials) => {
    const projectWork = (
        <Link to={itemToPath(componentNames, "Projects")}>project work</Link>
    );
    const experience = (
        <Link to={itemToPath(componentNames, "Experience")}>experience</Link>
    );

    const twitter = (
        <a href={socials["twitter"].url} target="_blank" rel="noreferrer">
            Twitter/X
        </a>
    );
    const linkedin = (
        <a href={socials["linkedin"].url} target="_blank" rel="noreferrer">
            LinkedIn
        </a>
    );
    const email = (
        <a href={socials["email"].url} target="_blank" rel="noreferrer">
            email
        </a>
    );

    const outputElements = {
        title: "Who I am",
        background: (
            <>
                I am a passionate Software Engineer with a diverse skillset that
                spans frontend and backend technologies. My first {experience}{" "}
                in the tech industry was a Mechatronics Engineer Intern
                position, where I designed hardware and software components for
                embedded systems. Check out my {projectWork} to see what I have
                been working on recently.
            </>
        ),
        socialEngagement: (
            <>
                I enjoy sharing my work and other tech related content on{" "}
                {twitter} for fellow engineers, developers and tech enthusiasts
                to see.
            </>
        ),
        status: (
            <>
                I am currently open to opportunities that foster both
                professional and personal growth. I invite you to reach out via{" "}
                {email} or {linkedin} if my skills and experiences align with
                your needs.
            </>
        ),
    };

    return outputElements;
};

const skills = {
    Languages: ["Python", "JavaScript", "SQL", "C++"],
    "Tools and Frameworks": [
        "HTML5",
        "CSS3",
        "React",
        "Django",
        "Node.js",
        "Django REST Framework",
    ],
    "Database Management": ["MySQL", "SQLite"],
    "Version Control": ["Git", "GitHub"],
    Miscellaneous: ["UX/UI Design", "Bash (Unix Shell)"],
};

export { whoIAm, skills };
