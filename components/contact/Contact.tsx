import React, { useState } from 'react'
import SectionHeading from '../UI/SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { sendEmail } from '@/actions/sendEmail'

type Inputs = {
    sender: string;
    message: string;
}

export default function Contact() {
    const [responseMessage, setResponseMessage] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await sendEmail(data)
        setResponseMessage(res.message);

        if(res.success) {
            reset()
        }

      }

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
        className='mt-10 flex flex-col text-black'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        >
            <input
            type='email'
            className='h-14 rounded-lg borderBlack p-4 text-black'
            placeholder='Your email'
            required
            maxLength={200}
            {...register("sender",
                {
                    required: true
                }
            )}
            />

            <textarea 
            className='h-52 my-3 rounded-lg borderBlack p-4 text-black'
            placeholder='Your message'
            required
            maxLength={1000}
            {...register("message",
                {
                    required: true
                }
            )}
            />

            <div className='pb-2 flex flex-col font-semibold'>
            {errors.sender && <span className='text-red-500'>Ups, wrong email </span>}
            {errors.message && <span className='text-red-500'>Ups, tell me something please 😊</span>}
            {responseMessage && <span className='text-blue-600'> {responseMessage} </span>}
            </div>

            <button 
            type='submit'
            className='group flex justify-center items-center gap-2 bg-gray-900 text-white rounded-full outline-none h-[3rem] w-[8rem] transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-gray-50 dark:text-gray-950'
            >
                Send
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
            </button>
        </form>
        
    </motion.section>
  )
}
