'use client'

import { motion } from "framer-motion";
import SectionHeading from "../UI/SectionHeading";

export default function About() {

    return (
        <motion.section
            id="about"
            className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">First of all, thanks for your time reading, just would let you know about my daily life, working as a <strong>fullstack developer</strong>, focused more on client side as <strong>JavaScript environment</strong> pillar of my professional growth. As <strong>ReactJS and NextJS</strong> provides strong power to create full stack apps, I use regularly to work both client and server components and develop my projects either acomplish my company goals.</p>

            <p>
            I have experience managing private servers to host my applications, utilizing <strong>AWS</strong> infrastructure for optimal performance and scalability. This includes configuring and maintaining EC2 instances, managing databases, and ensuring secure deployments through services like AWS S3 and Lightsail. My hands-on approach allows me to efficiently manage server environments, ensuring high availability and smooth operation of my applications.
            </p>

            <p className="mb-3">Outside of my current work, I am willing to grow my knowledgement <strong>cibersecurity</strong> context and the use of <strong>artifical intelligence</strong> to gain better solidity to my projects. Capable to work and understand de <strong>OWASP</strong> top ten project and work to protect my apps.</p>

            <p className="mb-3">I've been learning a bit more, every day, about privacity and proper web and network security, playing and making my own python scripts. I keep up with the latest trends and developments in the field to better understand how to safeguard systems and data. This knowledge complements my work and personal projects, helping me approach problems with a security-conscious mindset.
            </p>

        </motion.section>
    )
}