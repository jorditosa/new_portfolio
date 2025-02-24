'use client'

import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import { skills } from '@/lib/data'
import { motion } from 'framer-motion'

interface Props {
    dict: { [key: string]: string };
  }

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

export default function Skills({ dict }: Props) {
  return (
    <section
    id='skills'
    className='mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40'
    >
        <SectionHeading>
        {dict["studies-skills"]}
        </SectionHeading>

        <ul className='flex flex-wrap justify-between gap-2 text-lg text-grey-700'>
            {
                skills.map((skill, index) => (
                    <motion.li 
                    key={index}
                    className='bg-white shadow-lg shadow-black/25 rounded-xl p-1 sm:p-3 dark:text-gray-950'
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
