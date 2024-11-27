'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

 export default function Intro() {

    return (
        <section 
        id="home"
        className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                    >
                        <Image
                        src={'/portrait.png'}
                        alt="Jordi portrait"
                        width={"192"}
                        height={"192"}
                        quality="95"
                        priority={true}
                        className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                        />
                    </motion.div>

                    <motion.span 
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    }}
                    className="absolute bottom-0 -right-2 text-3xl">
                        👋
                    </motion.span>
                </div>
                
            </div>

            <motion.h1 
            className="mb-10 font-medium mt-4 px-4 text-lg sm:text-2xl !leading-[1.5]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
                Hello! I'm Jordi, web developer, hybrid apps maker, cybersecurity beginner from Catalonia. Having over{" "}
                <span className="font-bold">three years of professional experience</span> in the IT field.
            </motion.h1>

            <motion.div 
            className="flex flex-col sm:flex-row items-center justify-around gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay: 0.1
            }}
            >
                <Link
                href="#contact"
                className="group min-w-[12rem] bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border border-black/10"
                >
                    Contact me
                    <BsArrowRight
                    className="opacity-70 group-hover:translate-x-1 transition"
                    />
                </Link>

                <a 
                href="/Jordi_CV.pdf"
                download
                className="group min-w-[12rem] bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 text-gray-950"
                >
                    Download CV
                    <HiDownload
                    className="opacity-60 group-hover:translate-y-1 transition"
                    />
                </a>

                <div className="flex gap-2">
                    <a 
                    href="https://www.linkedin.com/in/jordi-s-2b658245/"
                    target="_blank"
                    className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                    >
                        <BsLinkedin />
                    </a>

                    <a 
                    href="https://github.com/jorditosa"
                    target="_blank"
                    className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                    >
                        <BsGithub />
                    </a>
                </div>

            </motion.div>
        </section>
    )
 }