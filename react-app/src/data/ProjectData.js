// ProjectData.js - A separate file for storing project data
const projectsData = [
    {
        id: 1,
        title: "Family Kitchen",
        description: "Share recipes, plan meals, and organize ingredients with your household members",
        tech: ["React", "MongoDb", "Mongoose"],
        inDevelopment: true,
        github: "https://github.com/dmobley0608/family_kitchen",
        liveLink: null
    },
    {
        id: 2,
        title: "Trail Finder",
        description: "A platform designed for equestrian enthusiasts to catalog riding locations and log their trail riding experiences.",
        tech: ["React", "MongoDb", "Mongoose", "Google API", "Mapbox", "Tailwind CSS"],
        inDevelopment: true,
        github: null,
        liveLink: null
    },
    {
        id: 3,
        title: "Multi-Vendor Sales Tracking System",
        description: "A comprehensive multi-vendor sales tracking system with integrated cash register functionality.",
        tech: ["React", "Express.js", "Sequelize", "Postgres"],
        inDevelopment: false,
        github: "https://github.com/dmobley0608/multi_vendor",
        liveLink: null
    },
    {
        id: 4,
        title: "Peach State Euro Taxidermy",
        description: "A taxidermy showcase platform with trophy display and voting system.",
        tech: ["Next.js", "Sanity", "Clerk Auth", "Tailwind CSS", "Postgres"],
        inDevelopment: false,
        github: "https://github.com/dmobley0608/peach-state-euro",
        liveLink: "https://peachstateeuro.com"
    },
    {
        id: 5,
        title: "FlashCard Study App",
        description: "Interactive flashcard application enabling users to create and manage study materials.",
        tech: ["React", "Node.js", "Apollo Server", "GraphQL", "OpenAI"],
        inDevelopment: false,
        github: "https://github.com/dmobley0608/flashcards",
        liveLink: null
    },
    {
        id: 6,
        title: "DD Cattle Company",
        description: "Farm management system for tracking horses, vet checks, and maintenance schedules.",
        tech: ["React", "Node.js", "Express", "Postgres"],
        inDevelopment: false,
        github: "https://github.com/dmobley0608/ddcattle.git",
        liveLink: "https://ddcattle.company"
    }
];

export default projectsData;
