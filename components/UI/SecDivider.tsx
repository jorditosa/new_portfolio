'use client'

import { motion } from "framer-motion";


export default function SecDivider() {

    return (
        <motion.div 
        className="bg-blue-800/15 my-24 h-16 w-2 rounded-full hidden sm:block dark:bg-gray-100/50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{
            delay: 0.125
        }}
        >

        </motion.div>
    )
} 