// ExperienceData.js - A separate file for storing professional experience data
const experienceData = [
    {
        id: 1,
        position: "Event Coordinator",
        company: "Hall County Government",
        location: "Gainesville, GA",
        period: "03/2019 - Present",
        description: [
            "Coordinated schedules and timelines for events.",
            "Adapted quickly when faced with unexpected challenges or changes in plans, maintaining composure while finding effective solutions.",
            "Managed event logistics and operations.",
            "Collaborated with cross-functional teams to ensure seamless event execution and positive outcomes.",
            "Established positive relationships with clients, ensuring their needs were met throughout the event planning process.",
            "Facilitated smooth transitions between event segments by creating detailed schedules and providing clear communication to staff and participants."
        ]
    },
    {
        id: 2,
        position: "Software Developer",
        company: "Freelance",
        location: "Gillsville, GA",
        period: "06/2017 - Present",
        description: [
            "Developed applications for small businesses, including inventory management systems, data mining tools, multi-vendor sales platforms, and static websites.",
            "Improved software efficiency by troubleshooting and resolving coding issues.",
            "Enhanced user experience through designing and implementing user-friendly interfaces.",
            "Updated old code bases to modern development standards, improving functionality.",
            "Developed customized software solutions for diverse clients, resulting in increased satisfaction and repeat business."
        ]
    },
    {
        id: 3,
        position: "Animal Control Officer",
        company: "Hall County Government",
        location: "Gainesville, GA",
        period: "07/2007 - 05/2013",
        description: [
            "Collaborated with local law enforcement agencies to enforce animal control ordinances and handle dangerous or aggressive animals.",
            "Handled emergency situations calmly and effectively, employing appropriate restraint techniques for various species while prioritizing public safety.",
            "Conducted thorough investigations into cases of suspected animal cruelty or neglect, gathering evidence to support legal action when necessary.",
            "Developed strong working relationships with veterinarians, rescue organizations, and other stakeholders within the community for improved collaboration on shared goals.",
            "Enhanced public safety by responding to and investigating reports of animal abuse, neglect, and nuisance complaints.",
            "Managed accurate record-keeping systems for all impounded animals, ensuring timely updates and smooth communication with other departments.",
            "Decreased the number of repeat offenses by providing guidance to pet owners on proper care and legal requirements."
        ]
    },
    {
        id: 4,
        position: "19D Cavalry Scout",
        company: "Army National Guard",
        location: "Griffin, GA",
        period: "05/2004 - 05/2012",
        description: [
            "Developed risk assessments to evaluate potential hazards during missions, ensuring adequate precautions were taken for each scenario encountered.",
            "Performed route reconnaissance for safe troop movement, reducing risk of enemy encounters.",
            "Contributed valuable insights during after-action reviews, facilitating continuous improvement in unit performance.",
            "Collaborated with other military units for joint training exercises, fostering teamwork and improving inter-unit coordination.",
            "Participated in force protection measures to safeguard personnel from potential threats at all times.",
            "Executed mounted and dismounted navigation, data collection, and patrols.",
            "Awarded Army Commendation Medal, Good Conduct Medal, Afghan Campaign Medal, and multiple battalion coins."
        ]
    }
];

const educationData = [
    {
        id: 1,
        degree: "Bachelor's Degree in Computer Information Systems",
        institution: "Florida Institute of Technology",
        location: "Melbourne, FL",
        year: "2017"
    },
    {
        id: 2,
        degree: "High School Diploma",
        institution: "Cairo High School",
        location: "Cairo, GA",
        year: "2005"
    }
];

const skillsData = {
    development: [
        "JavaScript", "HTML", "CSS", "React.js", "Python", "Django"
    ],
    design: [
        "Interactive Design Implementation", "Responsive Design", "Website Optimization"
    ],
    tools: [
        "Bootstrap", "Docker containerization"
    ],
    databases: [
        "SQL databases", "NoSQL databases"
    ]
};

export { experienceData, educationData, skillsData };
