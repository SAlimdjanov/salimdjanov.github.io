/**
 * ExperienceContent.js
 *
 * Contains text content for the "Experience" component
 */

const summary = `The blend of mathematics, physics principles, and engineering methodologies
    provided quite the setup for my entry into the field of software engineering. Applying this
    combination to my first position was an enriching experience and is a valuable asset at this
    stage of my career.`;

const education = {
    degree: "B.Eng. - Engineering Physics",
    school: "McMaster University",
    term: "Sept. 2018 - Apr. 2023",
    location: "Hamilton, Ontario, Canada",
    relevantCourses: [
        "Vector Calculus & Integral Theorems",
        "Linear Algebra",
        "Computational Physics",
        "Probability & Statistics",
        "Numerical Methods for Engineers",
        "Embedding & Programming Microcontrollers",
    ],
    relevantExperiences: [
        `Simulated and visualized various physical phenomena using Python libraries such as
         Matplotlib and NumPy. These scripts were crucial in conveying my findings in laboratories
         and calculating design parameters for my final year project, which I will describe next.`,
        `I was a member of a three-man team that designed and assembled automated window blinds.
         These shutters were remote controllable and generated reserve power through mini solar
         panels mounted on each slat. This project was appealing to the market in two ways: It
         can be integrated with smart home ecosystems and utilizes solar energy. I carried out
         the procurement and eventual assembly of the electrical system, which contained a stepper
         motor, battery system, limit switches, and an ESP32 microcontroller. I led the design of
         the embedded software, which was written in the Arduino Framework. My teammates handled
         the structural design and development of a web app that enabled remote control of the
         blinds. The app was written in JavaScript and communicated with the microcontroller via
         websockets upon user input. Users were able to open, close, and orient the slats to the
         optimum angle for charging the batteries.`,
    ],
};

const employment = {
    internship: {
        position: "R&D Mechatronics Engineering Intern",
        company: "ATG Pharma Inc.",
        location: "Oakville, Ontario, Canada",
        term: "Sept. 2021 - Aug. 2022",
        responsibilities: [
            `Engaged in the design and prototyping phases of an embedded system for a 3-axis
             dispensing robot`,
            `Developed C++ modules tailored for Arduino-based ESP32 microcontrollers, focusing on
             robot movement functionalities and seamless integration with Human-Machine Interfaces
             (HMIs)`,
            `Executed debugging activities and crafted units for diverse features, conducting
             comprehensive hardware tests with multiple HMIs`,
            `Contributed to code reviews led by Engineering Management and collaborated with external
             firms to validate compliance with project specifications and industry standards`,
        ],
    },
};

export { summary, education, employment };
