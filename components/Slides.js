import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const Slides = ({ caption, mainStyle }) => {
    return (
        <main className={mainStyle}>
            <section className={`container ${styles.headingText}`}>
                <motion.h1
                    initial={{ x: '-10vw', opacity: 0 }}
                    transition={{ type: 'spring', delay: 5, stiffness: 300 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`text-white font-bold ${styles.playfair} ${styles.homeName}`}
                >
                    <span className={styles.hello}>Hello,</span>
                    <br /> I am Rui.
                </motion.h1>
                <motion.div
                    initial={{ x: '-10vw', opacity: 0 }}
                    transition={{ type: 'spring', delay: 5.2, stiffness: 300 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={styles.title}
                >
                    <div />
                    <p>Frontend Web Developer.</p>
                </motion.div>
                <motion.div
                    initial={{ x: '-10vw', opacity: 0 }}
                    transition={{ type: 'spring', delay: 5.4, stiffness: 300 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={styles.title}
                >
                    <div />
                    <p>Mobile Application Developer.</p>
                </motion.div>
                <motion.p
                    initial={{ x: '10vw', opacity: 0 }}
                    transition={{ type: 'spring', delay: 5.6, stiffness: 200 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    {caption}
                </motion.p>
                <motion.div
                    initial={{ y: '10vh', opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 6 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`${styles.action} ${styles.aboutArea}`}
                >
                    <a
                        href='mailto:richardingwe5@gmail.com'
                        className={`${styles.primaryBtn} ${styles.white}`}
                        data-text='Hire Me.'
                    >
                        <span>H</span>
                        <span>i</span>
                        <span>r</span>
                        <span>e</span>
                        <span style={{ marginLeft: '5px' }}></span>
                        <span>M</span>
                        <span>e</span>
                        <span>.</span>
                    </a>
                    <Link
                        href='https://docs.google.com/document/d/1xZCuXL-igFCgDNnR7lRylyK4-aBuu1RCTn29OMmQqYI'
                    >
                        <a
                            target='_blank'
                            className={styles.primaryBtn}
                            data-text='Résumé.'
                        >
                            <span>R</span>
                            <span>é</span>
                            <span>s</span>
                            <span>u</span>
                            <span>m</span>
                            <span>é</span>
                            <span>.</span>
                        </a>
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default Slides;
