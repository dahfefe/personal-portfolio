// this file provides all variables for display inputs of personal details describing the person being showcased by the portfolio website

const logotext = "FELIX TENG";
const meta = {
    title: "Felix Teng",
    description: "I am a full stack developer, currently living in Sacramento, CA",
};

const introdata = {
    title: "Full Stack Developer",
    animated: {
        first: "Peak Efficiency",
        second: "Effective Team Leader",
        third: "Receptive, Reliable, Adaptable",
        fourth: "Exceeds Expectations",
    },
    description: "Specialize in Javascript, Python, & SQL",
    your_img_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/481057305_10233701944946982_3555981958317877324_n.jpg?stp=c59.0.1364.1364a_dst-jpg_s480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=MpwCkcY90KQQ7kNvgFuyjTS&_nc_oc=AdgD8T5kdwq6Ed6lbKkeX1TW7VdY-pw8-75wpjBlD3s4EEFyrgf-ZOuSGfBv3y1vCAI&_nc_zt=24&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AXRKGuoh5P8jH7fzjKOCiCy&oh=00_AYA3nU8U1FK4WEPIRQng5drbEAwtxhs8pU38OYC2bZd7_A&oe=67C71D28",
};

const dataabout = {
    title: "About Me",
    aboutme: "Currently, I am a freelance developer assisting clients dominantly with frontend design, e-commerce management, and data management.",
};
const worktimeline = [{
        jobtitle: "UC Berkeley Coding Bootcamp",
        where: "online",
        date: "2024",
    },
];

const skills = [
    {
        name: "JavaScript, HTML, CSS, Python, SQL",
        value: 80,
    },
    {
        name: "Object-Oriented Modeling, React, MERN",
        value: 60,
    },
    {
        name: "MySQL, MongoDB",
        value: 85,
    },
];

const educationList = [{
    title: "UC Berkeley Coding Bootcamp, Certificate, July 2024",
},
{
    title: "University of California, Davis, B.S., 2013",
},
];

const services = [{
        title: "Javascript",
        description: "Highly versed and always looking for challenge and growth",
    },
    {
        title: "Python",
        description: "Simplicity and versatility",
    },
    {
        title: "SQL",
        description: "Passionate about organization and data management",
    },
];

const dataportfolio = [{
        img: "https://dahfefe.github.io/2-portfolio-start/assets/images/Screenshot%202024-05-20%20at%209.26.51%E2%80%AFPM.png",
        description: "E-commerce Website",
        link: "https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products",
        gitHubLink: "https://github.com/ojds2022/Goat_E-Commerce/",
    },
    {
        img: "https://dahfefe.github.io/2-portfolio-start/assets/images/dsfsdfsfdf.png",
        description: "Calorie & BMI Tracker",
        link: "https://ojds2022.github.io/goat_calorie_tracker/",
        gitHubLink: "https://github.com/ojds2022/goat_calorie_tracker/",
    },
    {
        img: "https://dahfefe.github.io/2-portfolio-start/assets/images/felixthecat7587_an_animated_rendition_of_a_tool_that_generates__242020a1-3acd-4fbb-a285-7b4973b67bc2.png",
        description: "Password Generator Tool",
        link: "https://dahfefe.github.io/3-custom-password-generator/",
        gitHubLink: "https://github.com/dahfefe/3-custom-password-generator/",
    },
    {
        img: "https://dahfefe.github.io/2-portfolio-start/assets/images/felixthecat7587_a_animated_front_up_view_of_hand_taking_notes_o_a20e7e7f-a057-4056-bb6f-8930469b98cd.png",
        description: "Note-taking Application",
        link: "https://arcane-plateau-91110-cdcceaae4cc7.herokuapp.com/",
        gitHubLink: "https://github.com/dahfefe/11-note-taking-app/",
    },
    {
        img: "https://dahfefe.github.io/2-portfolio-start/assets/images/felixthecat7587_animated_colorful_picture_of_a_man_creating_a_s_3e6cb3a1-0dca-41a9-9f4f-0172373eeec9.png",
        description: "Daily Planner Application",
        link: "https://dahfefe.github.io/5-daily-planner/",
        gitHubLink: "https://github.com/dahfefe/5-daily-planner/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "felixsterlingteng@gmail.com",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/dahfefe",
    linkedin: "https://www.linkedin.com/in/felix-teng-477aa052/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};