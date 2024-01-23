/**
 * AboutContent.js
 *
 * Contains all text content to be displayed in the 'About' component
 */

import { Link } from "react-router-dom";
import componentNames from "../content/ComponentNames";
import itemToPath from "../helpers/ConvertToPath";

/**
 * Processes content for subsection "Me" in the "About" component
 *
 * @param {String} links array containing in-app component names
 * @param {String} socials Object containing social links
 * @returns {Object} Object containing text and relevant social links
 */
const generateMeContent = (socials) => {
    const projectWork = <Link to={itemToPath(componentNames, "Projects")}>project work</Link>;
    const experience = <Link to={itemToPath(componentNames, "Experience")}>experience</Link>;

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
        background: (
            <>
                I am a passionate Software Engineer with a diverse skillset that spans front end and
                back end technologies. My first {experience} in the tech industry was a Mechatronics
                Engineering Internship, where I designed hardware and software components for
                embedded systems. Check out my {projectWork} to see what I have been working on
                recently.
            </>
        ),
        status: (
            <>
                I am currently open to opportunities that foster professional and personal growth. I
                invite you to reach out via {email} or {linkedin} if my skills and experience align
                with your needs.
            </>
        ),
    };

    return outputElements;
};

const skills = {
    Languages: ["Python", "JavaScript", "SQL", "C", "C++"],
    "Tools and Frameworks": [
        "HTML5",
        "CSS3",
        "React.js",
        "Django",
        "Node.js",
        "Django REST Framework",
        "Bootstrap",
        "Docker",
        "Webpack",
    ],
    "Database Management": ["MySQL", "SQLite"],
    "Version Control": ["Git", "GitHub"],
    Miscellaneous: ["UX/UI Design", "Bash (Unix Shell)"],
};

export { generateMeContent, skills };
