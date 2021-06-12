import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Project = () => {
    return (
        <Layout title='Rui - Projects'>
            <main className={styles.main}>
                <section className={`${styles.bannerArea} ${styles.relative}`}>
                    <div className='container'>
                        <div className='row d-flex align-items-center justify-content-center'>
                            <motion.div
                                initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 1.2 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`${styles.aboutContent} col-lg-12`}
                            >
                                <h1 className='text-white'>Projects.</h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box}>
                                        <Link href='/'>Home.</Link>
                                        <Link href='/projects'>Projects.</Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/*  design/code area start  */}
                <section className='why-choose-us-area bg-gray section-padding-80-0 clearfix'>
                    <div className='container'>
                        {/* <div className='row'>
                            <motion.div
                                initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 1.5 }}
                                animate={{ y: 0, opacity: 1 }}
                                className='col-12'
                            >
                                <div
                                    className='section-heading text-white text-center wow fadeInUp'
                                    data-wow-delay='100ms'
                                >
                                    <h2>Design Or Code??</h2>
                                </div>
                            </motion.div>
                        </div> */}

                        <div className='row'>
                            <motion.div className={`col-md-6 ${styles.card}`} initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 1.8 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <Link href='/projects/design'>
                                    <div
                                        className={styles.cardDetails}
                                    >
                                        <motion.h1
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                                            animate={{ y: 0, opacity: 1 }}
                                        >
                                            I Design <br /> Stunning Stuff.
                                        </motion.h1>
                                        <motion.div
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 2.3 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className='action about-area'
                                        >
                                            <div
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
                                            </div>
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>

                            <motion.div className={`col-md-6 ${styles.card}`} initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <Link href='/projects/code'>
                                    <div
                                        className={styles.cardDetails}
                                    >
                                        <motion.h1
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 300, delay: 2.2 }}
                                            animate={{ y: 0, opacity: 1 }}
                                        >
                                            I Code & <br /> Build Stuff.
                                        </motion.h1>
                                        <motion.div
                                            initial={{ y: '10vh', opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 2.5 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className='action about-area'
                                        >
                                            <div
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
                                            </div>
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Project;
