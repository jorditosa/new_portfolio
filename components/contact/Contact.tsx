'use client'

import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {

  return (
    <motion.section
    id='contact'
    className='mb-20 sm:mb-28 w-[min(100%,45rem)]'
    initial={{ opacity: 0 }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true
    }}
    >
        <SectionHeading>
            Contact me
        </SectionHeading>

        <p>Please contact me directly at <a
        className='underline hover:text-opacity-70'
        href='mailto:jordisato88@gmail.com'
        >my personal email</a>{" "}.</p>

        <form
        className='mt-10 flex flex-col'
        action={async (formData) => {
            await sendEmail(formData)
        }}
        >
            <input
            type='email'
            name='senderEmail'
            className='h-14 rounded-lg borderBlack p-4'
            placeholder='Your email'
            required
            maxLength={200}
            />
            <textarea 
            name='message'
            className='h-52 my-3 rounded-lg borderBlack p-4'
            placeholder='Your message'
            required
            maxLength={1000}
            />
            <button 
            type='submit'
            className='group flex justify-center items-center gap-2 bg-gray-900 text-white rounded-full outline-none h-[3rem] w-[8rem] transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-gray-50 dark:text-gray-950'
            >
                Submit
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
            </button>
        </form>
        
    </motion.section>
  )
}
