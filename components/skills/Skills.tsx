'use client'

import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import { skills } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transisiton: {
            delay: 0.1 * index,
        }
    })
}

export default function Skills() {
  return (
    <section
    id='skills'
    className='mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40'
    >
        <SectionHeading>
            Skills
        </SectionHeading>

        <ul className='flex flex-wrap justify-center gap-2 text-lg text-grey-800'>
            {
                skills.map((skill, index) => (
                    <motion.li 
                    key={index}
                    className='bg-white border border-black/[0.2] rounded-xl p-3'
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    custom={index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
