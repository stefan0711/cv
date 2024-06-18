import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon,Scholar } from "@/components/icons";

export const RESUME_DATA = {
  name: "Zhipeng Yin",
  initials: "ZY",
  location: "Miami, Florida, US",
  locationLink: "https://www.google.com/maps/place/miami",
  about:
    "Ph.D. Student in Computer Science @FIU, Ex.Software/ Game Server engineer @Rivergame.",
  summary:
    "I'm Zhipeng Yin, a Ph.D. student at the Knight Foundation School of Computing and Information Sciences (KFSCIS) at Florida International University.    My academic focus is in machine learning and interpretable AI, with a particular emphasis on addressing fairness-related issues.    I investigate how machine learning algorithms can be developed and optimized to ensure fairer and more equitable outcomes, contributing to the creation of fairer AI systems.    My supervisor, Dr. Wenbin Zhang, has extensive research experience in machine learning fairness.\n" +
      "\n" +
      "In addition to my academic pursuits, I have a rich background in software development, including full-time roles in game server development and application backend development.",
  avatarUrl: "https://users.cs.fiu.edu/~wbzhang/images/zhipeng.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "luckyzhip.y@gmail.com",
    tel: "+646yks7995",
    social: [
      {
        name: "GitHub",
        url: "https:////github.com/stefan0711",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/steffen-yin/",
        icon: LinkedInIcon,
      },
      {
        name:"GoogleScholar",
        url:"https://scholar.google.com/citations?user=1nVpMXgAAAAJ&hl=en",
        icon:Scholar,

      },
    ],
  },
  education: [
    {
      school: "Stevens Institute of Technology",
      degree: "Master's Degree in Computer Science",
      start: "2021",
      end: "2023",
    },
    {
      school: "Florida International University",
      degree: "Doctoral Degree in Computer Science",
      start: "2023",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Rivergame",
      link: "https://www.rivergame.net/en/default.html",
      badges: ["fulltime"],
      title: "Software development engineer",
      logo: ConsultlyLogo,
      start: "2018.7",
      end: "2020.9",
      description:
        "Responsible for the friends module of the TOPWAR game, which included real-time communication, adding friends, and visiting other players' bases.  This feature significantly enhanced social interaction for all players.  \n" +
          "Developed sharing functionality through Facebook, Twitter, and WeChat SDKs, increasing the player base by 10%.  Additionally, implemented ad-based traffic monetization, boosting gaming revenue by 15%. Technologies: SpringBoot, Hibernate, MongoDB.",
    },
    {
      company: "Florida International University",
      link: "https://www.fiu.edu/",
      badges: ["fulltime"],
      title: "Research assistant",
      logo: ParabolLogo,
      start: "2023.8",
      end: "Present",
      description:
        "As a Research Assistant specializing in AI fairness at Florida International University, I develop methodologies for detecting and mitigating bias in machine learning models, evaluate the fairness of existing AI systems, and implement frameworks that enhance equitable outcomes.  My work involves hands-on coding, running models, data analysis, and collaborating on research publications under the guidance of Dr. Wenbin Zhang.",
    },
    {
      company: "Florida International University",
      link: "https://www.fiu.edu/",
      badges: ["fulltime"],
      title: "Teaching assistant",
      logo: ClevertechLogo,
      start: "2024.5",
      end: "Present",
      description:
        "As a Teaching Assistant for the CEN3721 (Introduction to Human-Computer Interaction) and CEN4072 (Fundamentals of Software Testing), I assist in course instruction, grade assignments, and provide support to students in understanding complex topics.",
    },

  ],
  skills: [
    "Java",
    "Python",
    "Html/Css",
    "Javascript",
    "SpringBoot/JPT/MVC",
    "Hibernate",
    "SQL/MySQL/Oracle/PostgreSQL",
    "NoSQL/MongoDB/Redis",
    "AWS EC2/S3",
    "Kafka",
    "Node.js",
    "JUnit",
    "RESTFul API",
    "Microservice",
    "Maven",
    "Docker",
    "Tomcat",
    "Git",
    "Postman",
    "Shell",
  ],
  projects: [
    {
      title: "TOPWAR",
      techStack: [
        "Backend",
        "SpringBoot",
        "Hibernate",
        "Redis",
        "AWS",
      ],
      description:
        "Responsible for backend development of friends and game sharing modules for TopWar, a strategy mobile game with 2 million active players",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://www.rivergame.net/download.html",
      },
    },
    {
      title: "DuckBook",
      techStack: [
          "Full-stack",
        "Node.js",
        "Javascript",
        "MongoDB",
      ],
      description:
        "Led a team of 3 friends to develop an online bookstore using Node.js and MongoDB, designed a user-friendly React front-end, and integrated the PayPal API",
      logo: EvercastLogo,

    },
    {
      title: "University club application system",
      techStack: [
        "SpringBoot",
        "Hibernate",
        "Kafka",
        "MySQL",
        "Docker",
      ],
      description:
          "Developed a webapp for 1,000 students to apply to the club online, deployed on AWS EC2 using Docker, and implemented automated emails with JavaMail, increasing processing speed by 20%.",
      logo: EvercastLogo,

    },
  ],
} as const;
