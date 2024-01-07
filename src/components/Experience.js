import "./Experience.css";
import { summary, education, employment } from "../content/ExperienceContent";
import generateListElements from "../helpers/GenerateListElements";

function Experience() {
    return (
        <>
            <section id="intro">
                <h1>Experience</h1>
                <p>{summary}</p>
            </section>
            <section id="experience">
                <article id="education">
                    <h2>Education</h2>
                    <h3 className="title-and-term">
                        <span className="title">{education.degree} </span>
                        <span className="term">{education.term}</span>
                    </h3>
                    <h4 className="org-and-location">
                        <span>{education.school} </span>-
                        <span> {education.location} </span>
                    </h4>
                    <h5>Relevant Courses</h5>
                    <ul className="bulleted-list">
                        {generateListElements(education.relevantCourses)}
                    </ul>
                    <h5>Relevant Experience</h5>
                    <ul id="education-experience">
                        {generateListElements(education.relevantExperiences)}
                    </ul>
                </article>
                <article id="employment">
                    <h2>Employment</h2>
                    <h3 className="title-and-term">
                        <span className="title">
                            {employment.internship.position}
                        </span>
                        <span className="term">
                            {employment.internship.term}
                        </span>
                    </h3>
                    <h4 className="org-and-location">
                        <span>{employment.internship.company} </span>-
                        <span> {employment.internship.location} </span>
                    </h4>
                    <ul className="bulleted-list job-responsibilities">
                        {generateListElements(
                            employment.internship.responsibilities
                        )}
                    </ul>
                </article>
            </section>
        </>
    );
}

export default Experience;
