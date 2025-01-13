'use client'

import { motion } from "framer-motion";
import SectionHeading from "../UI/SectionHeading";

interface Props {
    dict: { [key: string]: string };
}

export default function About({ dict }: Props) {

    return (
        <motion.section
            id="about"
            className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay: 0.2
            }}
        >
            <SectionHeading>
            {dict["about-title"]}
            </SectionHeading>
            <p className="mb-3">
            {dict["about-text-1"]}
            </p>
            <p>
            {dict["about-text-2"]}
            </p>

            <p className="mb-3">
            {dict["about-text-3"]}
            </p>

            <p className="mb-3">
            {dict["about-text-4"]}
            </p>

        </motion.section>
    )
}