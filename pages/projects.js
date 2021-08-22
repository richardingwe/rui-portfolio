import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { useThemeContext } from '../context/state';

const Project = () => {

    const location = useRouter();
    const { theme } = useThemeContext();

    return (
        <Layout title='Rui | Projects' currentUrl={`https://ruingwe.com${location.asPath}`}>
            <main style={{ backgroundColor: `${theme.light ? '#fff' : '#11161f'}` }} className={styles.main}>
                <div className={styles.pattern} style={{ opacity: `${theme.light ? '1' : '0.07'}` }} />
                <section className={`${styles.bannerArea} ${styles.relative}`}>
                    <div className='container'>
                        <div className='row d-flex align-items-center justify-content-center'>
                            <motion.div
                                initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 1.2 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`${styles.aboutContent} col-lg-12`}
                            >
                                <h1 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>Projects.</h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box} style={{
                                        borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                        color: `${!theme.light ? '#fff' : '#11161f'}`,
                                    }}>
                                        <Link href='/'>
                                            <a
                                                style={{
                                                    borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                                }}
                                            >
                                                Home.
                                            </a>
                                        </Link>
                                        <Link href='/projects'>
                                            <a>
                                                Projects.
                                            </a>
                                        </Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/*  design/code area start  */}
                <section className='why-choose-us-area bg-gray section-padding-80-0 clearfix'>
                    <div className='container'>
                        <div className='row'>
                            <motion.div className={`col-md-6 ${styles.card}`} initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 1.8 }}
                                animate={{ y: 0, opacity: 1 }}
                                style={{ backgroundColor: `${theme.light ? '#f9f9f9' : '#0b0d14'}`, }}
                            >
                                <div>
                                    <div
                                        className={styles.cardDetails}
                                    >
                                        <motion.h1
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            style={{ color: `${!theme.light ? '#f9f9f9' : '#0b0d14'}`, }}
                                        >
                                            I Design <br /> Stunning Stuff.
                                        </motion.h1>
                                        <motion.div
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 2.3 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className='action about-area'
                                        >
                                            <Link
                                                href='/projects/design'
                                            >
                                                <a
                                                    className={`${styles.primaryBtn}`}
                                                    data-text='See Design Projects.'
                                                >
                                                    <span>S</span>
                                                    <span>e</span>
                                                    <span>e</span>
                                                    <span style={{ marginLeft: '5px' }}></span>
                                                    <span>D</span>
                                                    <span>e</span>
                                                    <span>s</span>
                                                    <span>i</span>
                                                    <span>g</span>
                                                    <span>n</span>
                                                    <span style={{ marginLeft: '5px' }}></span>
                                                    <span>P</span>
                                                    <span>r</span>
                                                    <span>o</span>
                                                    <span>j</span>
                                                    <span>e</span>
                                                    <span>c</span>
                                                    <span>t</span>
                                                    <span>s</span>
                                                    <span>.</span>
                                                </a>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className={`col-md-6 ${styles.card}`} initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                                animate={{ y: 0, opacity: 1 }}
                                style={{ backgroundColor: `${theme.light ? '#f9f9f9' : '#0b0d14'}`, }}
                            >
                                <div>
                                    <div
                                        className={styles.cardDetails}
                                    >
                                        <motion.h1
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 300, delay: 2.2 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            style={{ color: `${!theme.light ? '#f9f9f9' : '#0b0d14'}`, }}
                                        >
                                            I Code & <br /> Build Stuff.
                                        </motion.h1>
                                        <motion.div
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 2.5 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className='action about-area'
                                        >
                                            <Link
                                                href='/projects/code'
                                            >
                                                <a
                                                    className={`${styles.primaryBtn} ${styles.white}`}
                                                    data-text='See Code Projects.'
                                                >
                                                    <span>S</span>
                                                    <span>e</span>
                                                    <span>e</span>
                                                    <span style={{ marginLeft: '5px' }}></span>
                                                    <span>C</span>
                                                    <span>o</span>
                                                    <span>d</span>
                                                    <span>e</span>
                                                    <span style={{ marginLeft: '5px' }}></span>
                                                    <span>P</span>
                                                    <span>r</span>
                                                    <span>o</span>
                                                    <span>j</span>
                                                    <span>e</span>
                                                    <span>c</span>
                                                    <span>t</span>
                                                    <span>s</span>
                                                    <span>.</span>
                                                </a>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Project;
