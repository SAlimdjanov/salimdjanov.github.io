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
    relevantExperiences: [
        `Simulated and visualized various physical phenomena using Python libraries such as
         Matplotlib and NumPy. These scripts were crucial in conveying my findings in laboratories
         and calculating design parameters for my final year project, which is described below:`,
        `I was a member of a three-person team in designing and assembling automated window blinds.
         These blinds were remotely controllable and featured mini solar panels on each slat for
         reserve power. I managed the procurement and assembly of the embedded system, including a
         stepper motor, battery system, limit switches, and an ESP32 microcontroller. I also
         designed the embedded software using the Arduino Framework. My teammates handled structural
         design, and they developed a web app in JavaScript for remote control. The app communicated
         with the microcontroller via websockets, allowing users to open, close, and orient the slats
         for optimal solar charging.`,
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
            `Executed debugging activities and crafted unit tests for diverse features, conducting
             comprehensive hardware tests with multiple HMIs`,
            `Contributed to design reviews led by Engineering Management and collaborated with external
             firms to validate compliance with project specifications and industry standards`,
        ],
    },
};

export { summary, education, employment };
