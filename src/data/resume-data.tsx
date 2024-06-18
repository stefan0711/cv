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
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

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
      start: "2018",
      end: "2020",
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
      end: "present",
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
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
