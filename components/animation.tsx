'use client'
import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";

function Anima() {
    return (
        <motion.div
            animate={{ rotate: 360, opacity: 1 }}
            initial={{ opacity: 0 }}
            className='w-24'
        >
            <p>Buh</p>
        </ motion.div>
    );
}


export { Anima };