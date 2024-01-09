import "./About.css";
import navLinks from "../content/ComponentNames";
import socials from "../content/Socials";
import { generateMeContent, skills } from "../content/AboutContent";

/**
 * Generates span elements for skills
 *
 * @param {Array} skillArr Array containing skill strings
 * @param {String} styleClass name of the CSS style class to be applied to each element
 * @returns Skills as span elements
 */
const mapSkills = (skillArr, styles) => {
    const skillTableItems = skillArr.map((item, index) => {
        return (
            <span key={index} className={styles}>
                {item}
            </span>
        );
    });

    return skillTableItems;
};

/**
 * Generate rows for skills section
 *
 * @param {Object} skillObj Object containing skills
 * @param {String} rowStyles name of styles class for table rows
 * @param {String} skillCellstyles name of styles class for skill cells
 * @param {String} skillStyles name of styles class for individual skills
 * @returns Table rows with styled data
 */
function generateRows(skillObj, rowStyles, skillCellstyles, skillStyles) {
    const regEx = /[\s]/g;
    const tableRows = [];

    for (const skill in skillObj) {
        let skillKey = skill;
        skillKey = skillKey.toLowerCase().replace(regEx, "-");

        tableRows.push(
            <div key={skillKey.concat("-row")} className={rowStyles}>
                <div key={skillKey}>{skill}</div>
                <div
                    key={skillKey.concat("-values")}
                    className={skillCellstyles}
                >
                    {mapSkills(skillObj[skill], skillStyles)}
                </div>
            </div>
        );
    }

    return tableRows;
}

function About() {
    const aboutContent = generateMeContent(navLinks, socials);

    return (
        <>
            <h1 id="about-title">About</h1>
            <section id="about">
                <article id="me">
                    <h2>About Me</h2>
                    <p>{aboutContent.background}</p>
                    <p>{aboutContent.socialEngagement}</p>
                    <p>{aboutContent.status}</p>
                </article>
                <article id="skills">
                    <h2>My Skills</h2>
                    <div id="skills-container">
                        {generateRows(
                            skills,
                            "skill-row",
                            "skill-cell",
                            "skill-style"
                        )}
                    </div>
                </article>
            </section>
        </>
    );
}

export default About;
