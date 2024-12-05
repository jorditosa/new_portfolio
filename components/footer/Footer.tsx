import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-footer-light dark:bg-footer-dark bg-cover bg-bottom w-full py-[6rem] md:pt-[14rem] md:pb-[2rem] mx-auto px-4 text-center text-slate-950 dark:text-slate-50 font-semibold text-sm'>
        <p>
            &copy; 2024 Jordi Sanchez, all rights reserved.
        </p>
        <p>
            <span>About this website:</span> built with NextJS ( App router & Server Actions ), Typescript, TailwindCSS, Framer Motion, Resend and custom VPS.
        </p>
    </footer>
  )
}
