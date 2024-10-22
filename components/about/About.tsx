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
            <p className="mb-3">Thanks for your time reading that, just would let you know about my daily life, working as a <strong>fullstack developer</strong>, focused more on client side as <strong>JavaScript environment</strong> pillar of my duties. As <strong>ReactJS and NextJS</strong> provides strong power to create full stack apps, I use regularly to work with client and server components.</p>

            <p className="mb-3">Outside of my current work, I am willing to grow my knowledgement <strong>cibersecurity</strong> context and the use of <strong>artifical intelligence and llm</strong>. Able to work with basic pentesting model, to enumerate, scan, find vulnerabilities, exploit them and finally gain root privileges in not complex machines.</p>

            <p className="mb-3">I've been learning a bit more, every day, about privacity and proper web and network security, playing and making my own python scripts. I keep up with the latest trends and developments in the field to better understand how to safeguard systems and data. This knowledge complements my work and personal projects, helping me approach problems with a security-conscious mindset.
            In terms of usages, <strong>OSINT tools</strong> and <strong>virtual machines</strong> serves me as a playgrounds to learn third party tools to make some <strong>scans or IDS</strong> controls.</p>

        </motion.section>
    )
}