import React from 'react'

export default function Footer() {
  return (
    <footer className='max-w-[45rem] mx-auto mb-10 px-4 text-center text-gray-700 dark:text-gray-50'>
        <small className='text-sm block'>
            &copy; 2024 Jordi Sanchez, all rights reserved.
        </small>
        <p className='text-blue-800'>
            <span>About this website:</span> built with NextJS ( App router & Server Actions ), Typescript, TailwindCSS, Framer Motion, Resend and custom VPS.
        </p>
    </footer>
  )
}
