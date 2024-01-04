/**
 * AboutContent.js
 *
 * Contains all text content to be displayed in the 'About' component
 */

import { Link } from "react-router-dom";

/**
 * Processes content for subsection "Who I am" in the 'About' component
 *
 * @param {String} componentLinks object containing in-app component links
 * @param {String} socials object containing social links
 * @returns {Object} Object containing text and relevant social links
 */
const whoIAm = (componentLinks, socials) => {
    const projectWork = <Link to={componentLinks[0].url}>project work</Link>;
    const experience = <Link to={componentLinks[2].url}>experience</Link>;
    const twitter = (
        <a href={socials[3].url} target="_blank" rel="noreferrer">
            Twitter/X
        </a>
    );
    const linkedin = (
        <a href={socials[1].url} target="_blank" rel="noreferrer">
            LinkedIn
        </a>
    );
    const email = (
        <a href={socials[2].url} target="_blank" rel="noreferrer">
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
