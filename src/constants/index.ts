import {
  profileTam,
  profileTho,
  gameIcon,
  webIcon,
  mobileIcon,
  databaseIcon,
  project1,
  typescriptIcon,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
  tailwindcssIcon,
  nodejsIcon,
  postgresqlIcon,
  mysqlIcon,
  reactNativeIcon,
  graphqlIcon,
  muiIcon,
  mongodbIcon,
  reduxIcon,
  sassIcon,
} from "@/assets";
import { ProfileName, ProjectName } from "@/enums";

export const navLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const profiles = [
  {
    title: "Software Engineer",
    icon: profileTam,
    name: ProfileName.TAM,
  },
  {
    title: "Software Engineer",
    icon: profileTho,
    name: ProfileName.THO,
  },
];

export const profileDetail = {
  [ProfileName.TAM]: {
    skills: [
      {
        title: "Web Developer",
        icon: webIcon,
      },
      {
        title: "Mobile Developer",
        icon: mobileIcon,
      },
      {
        title: "Backend Developer",
        icon: databaseIcon,
      },
    ],
    position: "Software Engineer",
    description: `I'm a Front-end Software Engineer with 3 years of software
              development experience. I have 1.5 years of experience in Mobile
              Application Development and 1.5 years of experience in Web
              Development. With my knowledge of UI/UX I can solve functionality
              and performance issues. Of course, also find solutions to optimize
              costs for the project. I also spend time learning new technology and
              best practices to become a better engineer.`,
  },
  [ProfileName.THO]: {
    skills: [
      {
        title: "Web Developer",
        icon: webIcon,
      },
      {
        title: "Mobile Developer",
        icon: mobileIcon,
      },
      {
        title: "Backend Developer",
        icon: databaseIcon,
      },
      {
        title: "Game Developer",
        icon: gameIcon,
      },
    ],
    position: "Software Engineer",
    description: `Self-taught frontend developer with a high willingness to absorb and embrace emerging technology.
                    Love to automate everything.`,
  },
};

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1.src,
    source_code_link: "https://github.com/",
  },
];

export const experiences = {
  [ProfileName.TAM]: {
    experiences: [
      {
        title: "React Native/Typescript/Redux/Redux Saga",
        company_name: "PAAVE - Difisoft JSC",
        icon: mobileIcon.src,
        iconBg: "#383E56",
        date: "Aug 2021 - Aug 2023",
        points: [
          "Developed and maintained Paave mobile applications using React Native framework.",
          "Integrated RESTful APIs and interacted with back-end systems to fetch and display data.",
          "Participated in Agile Scrum methodologies, including daily stand-ups, sprint planning, sprint reviews, and retrospectives.",
          "Optimized application performance by identifying and resolving performance bottlenecks.",
          "Participate in fixing bugs and maintaining the stock website.",
        ],
      },
      {
        title:
          "ReactJs/Typescript/Material UI/GraphQL/ Timestream/DynamoDB/Lambda/S3/ Cloudwatch/IAM/SQS/SES",
        company_name: "KOZOCOM VIETNAM CO.,LTD",
        icon: webIcon.src,
        iconBg: "#E6DEDD",
        date: "Sep 2023 - Present",
        points: [
          "Develop and maintain the project.",
          "Optimize performance on the Front-end and Back-end.",
          "Provide recommendations to clients for cost optimization when working with Amazon Web Service.",
          "Participate in suggesting ways to increase project performance for the client.",
        ],
      },
    ],
  },
  [ProfileName.THO]: {
    experiences: [
      {
        title: "React Native/PHP/Expo",
        company_name: "ACE ESPORTS",
        icon: mobileIcon.src,
        iconBg: "#383E56",
        date: "Jan 2016 - Jan 2019",
        points: [
          "Start up project for Esports data and news",
          "Role: Frontend developer; Project owner; Scrum master",
        ],
      },
      {
        title: "React/NodeJS",
        company_name: "TOPOST",
        icon: webIcon.src,
        iconBg: "#E6DEDD",
        date: "Jan 2019 - Jan 2021",
        points: [
          "Start up project for social network.",
          "Role: Frontend developer; Project owner.",
        ],
      },
      {
        title: "React Native/NodeJS/Java/ MySQL/Redux Saga/Socket",
        company_name: "REACT NATIVE DEVELOPER – DIFISOFT JSC",
        icon: mobileIcon.src,
        iconBg: "#383E56",
        date: "Jan 2021 - Jan 2022",
        points: [
          "Engage from start to release of both Paave and NHSV; Coordinate with the team to set up the coding rules and coding styles.",
          "Take part in the requirements analysis, and code review.",
          "Troubleshot application-related issues & ensure/main- tain high performance for high-response real-time data, and code charts.",
          "Participate in recruitment for the company.",
          "Frontend team size: 5",
        ],
      },
      {
        title:
          "NextJS/Angular/ReactNative/NodeJS/ PostgreSQL/Ex-po/Aws/Redux/ReactQuery/Zustand",
        company_name: "FULL STACK DEVELOPER – VITABLE",
        icon: webIcon.src,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Jan 2024",
        points: [
          "Develop & maintain websites, apps, page administrators, & databases of Vitable; Refactor the app's architecture in particular.",
          "Conduct code reviews, git flow & software development.",
          "Troubleshoot application related issues.",
          "Frontend team size: 5",
        ],
      },
      {
        title: "MyQSL/React/React Native/NodeJS/Socket/MQTT/Redux",
        company_name: "FULL STACK DEVELOPER (PART-TIME) – LUVLINK",
        icon: webIcon.src,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Present",
        points: [
          "Develop and maintain websites, apps, page administra- tors, and databases of Luvlink; Refactor the app's archi- tecture in particular.",
          "Conduct code reviews, and git flow and participated in software development.",
          "Collaborate with cross-functional teams to troubleshoot application related issues.",
          "Team size: 3",
        ],
      },
    ],
  },
};

export const technicalSkill = {
  [ProfileName.TAM]: {
    techs: [
      {
        name: "TypeScript",
        icon: typescriptIcon.src,
      },
      {
        name: "JavaScript",
        icon: javascriptIcon.src,
      },
      {
        name: "ReactJS",
        icon: reactIcon.src,
      },
      {
        name: "NextJS",
        icon: nextjsIcon.src,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcssIcon.src,
      },
      {
        name: "NodeJS",
        icon: nodejsIcon.src,
      },
      {
        name: "MySQL",
        icon: mysqlIcon.src,
      },
      {
        name: "React Native",
        icon: reactNativeIcon.src,
      },
      {
        name: "GraphQL",
        icon: graphqlIcon.src,
      },
      {
        name: "MUI",
        icon: muiIcon.src,
      },
      {
        name: "MongoDB",
        icon: mongodbIcon.src,
      },
      {
        name: "Redux",
        icon: reduxIcon.src,
      },
      {
        name: "SASS",
        icon: sassIcon.src,
      },
    ],
  },
  [ProfileName.THO]: {
    techs: [
      {
        name: "TypeScript",
        icon: typescriptIcon.src,
      },
      {
        name: "JavaScript",
        icon: javascriptIcon.src,
      },
      {
        name: "ReactJS",
        icon: reactIcon.src,
      },
      {
        name: "NextJS",
        icon: nextjsIcon.src,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcssIcon.src,
      },
      {
        name: "NodeJS",
        icon: nodejsIcon.src,
      },
      {
        name: "PostgreSQL",
        icon: postgresqlIcon.src,
      },
      {
        name: "MySQL",
        icon: mysqlIcon.src,
      },
      {
        name: "React Native",
        icon: reactNativeIcon.src,
      },
      {
        name: "GraphQL",
        icon: graphqlIcon.src,
      },
      {
        name: "MUI",
        icon: muiIcon.src,
      },
      {
        name: "MongoDB",
        icon: mongodbIcon.src,
      },
      {
        name: "Redux",
        icon: reduxIcon.src,
      },
      {
        name: "SASS",
        icon: sassIcon.src,
      },
    ],
  },
};

export const projectDetail = {
  [ProjectName.CARRENT]: {
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    technical: [
      {
        name: "ReactNative",
        icon: reactNativeIcon.src,
      },
      {
        name: "SASS",
        icon: sassIcon.src,
      },
      {
        name: "MySQL",
        icon: mysqlIcon.src,
      },
    ],
    background: project1.src,
    images: [
      {
        src: project1.src,
        alt: "project1",
      },
      {
        src: project1.src,
        alt: "project1",
      },
      {
        src: project1.src,
        alt: "project1",
      },
    ],
  },
  [ProjectName.JOBIT]: {
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    technical: [
      {
        name: "ReactJs",
        icon: reactIcon.src,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcssIcon.src,
      },
      {
        name: "PostgreSQL",
        icon: postgresqlIcon.src,
      },
    ],
    background: project1.src,
    images: [
      {
        src: project1.src,
        alt: "project1",
      },
      {
        src: project1.src,
        alt: "project1",
      },
      {
        src: project1.src,
        alt: "project1",
      },
    ],
  },
  [ProjectName.TRIPGUIDE]: {
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",

    technical: [
      {
        name: "NextJS",
        icon: nextjsIcon.src,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcssIcon.src,
      },
      {
        name: "NodeJS",
        icon: nodejsIcon.src,
      },
    ],
    background: project1.src,
    images: [
      {
        src: project1.src,
        alt: "project1",
      },
      {
        src: project1.src,
        alt: "project1",
      },
      {
        src: project1.src,
        alt: "project1",
      },
    ],
  },
};
