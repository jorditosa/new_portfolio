'use client'

import { projects } from '@/lib/data'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectItemProps = (typeof projects)[number]

export default function ProjectItem({
  title,
  description,
  tags,
  imageUrl
}: ProjectItemProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1])
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1])
  
  return (
    <motion.section 
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}
    className='group relative bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:h-[24rem] sm:pr-8 mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition'>
      <div className='pt-4 pb-7 px-5 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full gap-y-2 group-even:ml-[18rem]'>
        <h3 className='text-2xl'> {title}</h3>

        <p className='mt-2 leading-relaxed text-gray-700 text-[0.8rem]'>{description}</p>

        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li 
            key={index}
            className='bg-black/[0.7] py-1 px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
      src={imageUrl}
      alt={title}
      quality={95}
      width={900}
      height={900}
      className='absolute bottom-0 -right-40 w-[28rem] rounded-t-lg shadow-2xl object-cover group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition'
      />
        
    </motion.section>
  )
}
