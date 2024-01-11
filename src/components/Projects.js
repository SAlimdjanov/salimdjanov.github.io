import "./Projects.css";
import projects from "../content/ProjectContent";
import Card from "./cards/Card";

/**
 * Passing props to generate cards to display projects
 *
 * @param {Array[Object]} content Array of objects with project info
 * @returns Project card components
 */
const mapProjectContent = (content) => {
    return content.map((project, index) => {
        return (
            <Card
                key={index}
                name={project.name}
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                description={project.description}
                footerContent={project.gitRepo}
            />
        );
    });
};

function Projects() {
    return (
        <>
            <h1 id="projects-title">Projects</h1>
            <section id="project-display">
                {mapProjectContent(projects)}
            </section>
        </>
    );
}

export default Projects;
