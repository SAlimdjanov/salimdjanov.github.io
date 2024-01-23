import leadflow from "../assets/leadflow-pro.png";
import luminaBlinds from "../assets/lumina-smart-blinds.png";
import visualizer from "../assets/visualizer.png";

const projects = [
    {
        name: "LeadFlow Pro",
        imgSrc: leadflow,
        imgAlt: "leadflow",
        description: `A full-stack application powered by React and Django. Utilizes REST APIs
         to maintain records of business leads.`,
        gitRepo: "https://github.com/SAlimdjanov/LeadFlow",
    },
    {
        name: "SpaceX Launch Visualizer",
        imgSrc: visualizer,
        imgAlt: "restaurant-app",
        description: `A Plotly Dash Application that visualizes Falcon9 launch outcomes. Utilized
         NumPy and Pandas for data processing`,
        gitRepo: "https://github.com/SAlimdjanov/SpaceX-Dash-Visualizer",
    },
    {
        name: "Lumina Smart Blinds",
        imgSrc: luminaBlinds,
        imgAlt: "lumina-smart-blinds",
        description: `Embedded software for remote controllable, solar power generating blinds.
         Written in C++ within the Arduino framework.`,
        gitRepo: "https://github.com/SAlimdjanov/Lumina-Smart-Blinds",
    },
];

export default projects;
