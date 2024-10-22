import React from "react"
import { FaLaptop } from "react-icons/fa"


export const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Contact",
        hash: "#contact"
    }
] as const

export const background = [
    {
        title: "Software Frontend developer",
        company: "Netquest Soluciones Tecnológicas SL",
        date: "2022 - current",
        description: "As a junior software developer, my work mainly involves the frontend of the web portal and the resolution of support tickets involving some bugs, emails, landings and other internal issues. Also, working on AWS to control of buckets and pipelines needed in my everyday job.",
        tags: ["React", "NextJS", "AWS", "Jenkins", "MJML"],
        icon: React.createElement(FaLaptop)
    },
    {
        title: "Frontend Developer",
        company: "Monday Office Advisors SL",
        date: "2017 - 2023",
        description: "In the labor department, I was responsible for the layout of the web pages for services and the creation of labor management tools, such as payment calculators, subsidies, and other internal systems related to employee services.",
        tags: ["HTML", "CSS", "JavaScript", "Web Design", "Labor Tools"],
        icon: React.createElement(FaLaptop)
    },
    {
        title: "IT Recruiter",
        company: "Akuaro Network Solutions",
        date: "2016 - 2017",
        description: "As an IT recruiter, my responsibilities included searching, interviewing, and recruiting professionals in the technology sector according to client requirements, ensuring the right fit for roles in various projects.",
        tags: ["Recruitment", "IT Talent", "Interviews", "Client Management"],
        icon: React.createElement(FaLaptop)
    },
    {
        title: "HR Recruiter",
        company: "Selyco Consulting",
        date: "2016 - 2016",
        description: "As an HR recruiter, I was responsible for finding, interviewing, and selecting a wide range of professionals, adapting to the specific needs of different projects, from high-profile positions to more common roles.",
        tags: ["Recruitment", "HR", "Interviews", "Candidate Selection"],
        icon: React.createElement(FaLaptop)
    }
] as const

export const projects = [
    {
        title: "Deporunners Hybrid App",
        date: "Project Ongoing",
        description: "I developed a hybrid app using Ionic and Capacitor with the React framework, currently used by over 150 users. The app features interactive lists with cache and invalidation management and is available on both the Play Store and App Store. Includes managing key mobile permissions, such as push notifications, background processes, HTTP requests, file system access, and cookie preferences using Capacitor.",
        tags: ["Ionic", "Capacitor", "React", "Mobile Development", "Push Notifications"],
        imageUrl: "/img/mobile-cap.png"
    },
    {
        title: "Takespai Ecommerce Website",
        date: "Project Ongoing",
        description: "I developed a dynamic ecommerce website using NextJS for ordering food and beverages, integrated with Strapi for managing products, users, and categories via REST API. I implemented NextAuth for authentication and created private spaces for user access.",
        tags: ["NextJS", "Strapi", "Ecommerce", "REST API", "NextAuth", "Serverless", "CRUD Operations"],
        imageUrl: "/img/takespai.png"
    },    
    {
        title: "Cursa dels Colls Static Website",
        date: "Project Ongoing",
        description: "I created a static website for a sports event using React, providing links to subscription sites for participants. Key technical features include React hooks, reusable components, and responsive design for an optimal user experience across devices.",
        tags: ["React", "Static Website", "React Hooks", "Reusable Components", "Responsive Design", "FTP Deployment"],
        imageUrl: "/img/cursa.png"
    },    
    {
        title: "OpenAI Chatbot wit Python",
        date: "Project Ongoing",
        description: "I developed a chatbot using OpenAI's GPT series models, based on transformer architecture, to efficiently handle context and long text dependencies. The implementation includes managing tokens, the basic text units processed by the model. Proper functionality requires setting up an .env file with the OpenAI API key.",
        tags: ["OpenAI", "GPT", "Transformer Architecture", "Chatbot", "API Integration", "Token Management"],
        imageUrl: "/img/pic.jpeg"
    }    
] as const

export const skills = [
    "HTML",
    "CSS",
    "Sass",
    "TailwindCSS",
    "MaterialUI",
    "framer-motion",
    "Styled Components",
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "Python",
    "Express",
    "AWS",
    "Linux",
    "MySQL",
    "postgreSQL",
    "MongoDB"
] as const