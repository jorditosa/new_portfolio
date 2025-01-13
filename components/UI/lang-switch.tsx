'use client'

import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'

type Lang = "en" | "ca"

export default function LangSwitch() {
    const [lang, setLang] = useState<Lang>("en");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const currentLang = pathname.split('/')[1] as Lang;
        if (currentLang && currentLang !== lang) {
            setLang(currentLang);
        }
    }, [pathname, lang]);

    const toggleLang = () => {
        const newLang = lang === 'en' ? 'ca' : 'en';

        if (newLang !== lang) {
            setLang(newLang);
            router.push(`/${newLang}`);
        }
    }

    return (
        <button
            className='fixed bottom-5 right-24 bg-white w-[4rem] h-[3rem] bg-opacity-50 backdrop-blur-[0.5rem] border-white border-opacity-40 dark:bg-gray-950 dark:bg-opacity-50 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all text-xs border dark:border-black/40 font-semibold'
            onClick={toggleLang}
        >
            {lang === 'en' ? 'English' : 'Català'}
        </button>
    )
}
