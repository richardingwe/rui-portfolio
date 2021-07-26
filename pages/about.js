import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sanityClient from '@/sanity/client.js';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
// import LoaderTwo from './LoaderTwo.js';
import AOS from 'aos';
// import cv from '../files/MY CV.pdf';
import 'aos/dist/aos.css';
import styles from '../styles/About.module.css';
import Layout from '../components/Layout.js';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const About = ({ author }) => {
    // const [downloadUrl, setDownloadUrl] = useState('/');

    // const download = () => {
    // 	setDownloadUrl(cv);
    // };

    const location = useRouter();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    // if (!author)
    //     return (
    //         <div>
    //             <div className='preloader-area'>
    //                 <div className='loader-box'>
    //                     {/* <LoaderTwo /> */}
    //                     {/* <div className='loader'></div> */}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    return (
        <Layout title='Rui | About Me' imageUrl={author.authorImage && urlFor(author.authorImage).url()} image_alt={author && author.name} currentUrl={`https://ruingwe.com${location.asPath}`} description='Richard Unimke Ingwe is a Software Developer and a Graphic Designer, I am very passionate about bringing ideas to reality through Codes and Graphic designs. For now, I build powerful, beautiful, and swift web applications that help businesses / brands keep potential customers and compete globally. I am obsessed with technology and I plan on working with technologies like Artificial Intelligence, Virtual Reality, Augmented Reality, and Mixed Reality in the future. I am currently the lead developer / designer of Rui Creative and I am also available for partnerships.'>
            <main className={`${styles.main}`}>
                <section className={`${styles.bannerArea} ${styles.relative}`}>
                    <div className='container'>
                        <div className='row d-flex align-items-center justify-content-center'>
                            <motion.div
                                initial={{ y: '10vh', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 1.2 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`${styles.aboutContent} col-lg-12`}
                            >
                                <h1 className='text-white'>About Me.</h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box}>
                                        <Link href='/'>Home.</Link>
                                        <Link href='/about'>About.</Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {author && (
                    <section className={`${styles.aboutArea} ${styles.sectionGap}`}>
                        <div className='container'>
                            <div className='row align-items-center justify-content-between'>
                                <motion.div
                                    initial={{ y: '10vh', opacity: 0 }}
                                    transition={{ type: 'spring', stiffness: 300, delay: 1.6 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className={`col-lg-6 about-left`}
                                >
                                    <Image width='810' height='1080'
                                        className='img-fluid'
                                        src={urlFor(author.authorImage).url()}
                                        alt='Richard Ingwe'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ y: '10vh', opacity: 0 }}
                                    transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className='col-lg-5 col-md-12 about-right'
                                >
                                    <div className={`${styles.sectionTitle} text-white`}>
                                        <h2>about myself.</h2>
                                    </div>
                                    <div
                                        className={`${styles.mb50} text-white`}
                                    >
                                        <div data-aos='fade-up' data-aos-delay='300'>
                                            <BlockContent
                                                blocks={author.bio}
                                                projectId='y0xdnwwh'
                                                dataset='production'
                                            />
                                        </div>
                                        <a
                                            data-aos='fade-up'
                                            data-aos-delay='300'
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
                                        <Link href='/resume'>
                                            <a
                                                // onClick={download}
                                                data-aos='fade-up'
                                                data-aos-delay='300'
                                                target='_blank'
                                                rel='noopener noreferrer'
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
                                        <div
                                            data-aos='fade-up'
                                            data-aos-delay='300'
                                            className={styles.socials}
                                        >
                                            <a
                                                href='https://github.com/richardingwe'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="github"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 496 512">
                                                    <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a
                                                href='https://dribbble.com/Rui_Creative'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="dribbble"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a
                                                href='https://behance.net/richardingwe'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="behance"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a
                                                href='https://twitter.com/RichardIngwe?s=09'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="twitter"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a
                                                href='https://facebook.com/ruitech00'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="facebook-f"
                                                    className={styles.facebook}
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a
                                                href='https://linkedin.com/in/richard-ingwe-9a91a5190'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="linkedin-in"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a
                                                href='https://instagram.com/rui_creative'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="instagram"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                )}

                <section className={`our-team-area ${styles.sectionPadding80_50}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div
                                    className={`${styles.sectionHeading} text-white text-center`}
                                    data-wow-delay='100ms'
                                >
                                    <h2
                                        data-aos='fade-up'
                                        data-aos-delay='200'
                                        className='stack-tools'
                                    >
                                        Stack And Tools.
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                data-aos-offset='200'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='100ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/js.jpg' alt='javascript' />
                                    </div>
                                    <h5>Javascript</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                data-aos-offset='200'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='300ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/react.jpg' alt='react.js' />
                                    </div>
                                    <h5>React.js</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                data-aos-offset='200'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='300ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/next.jpg' alt='next.js' />
                                    </div>
                                    <h5>Next.js</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                data-aos-offset='200'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='500ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/vue.jpg' alt='vue.js' />
                                    </div>
                                    <h5>Vue.js</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='500ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/pwa.jpg' alt='pwa' />
                                    </div>
                                    <h5>PWA</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='500ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/bs.jpg' alt='bootstrap' />
                                    </div>
                                    <h5>Bootstrap</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/git.jpg' alt='git' />
                                    </div>
                                    <h5>Git</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/sass.jpg' alt='sass' />
                                    </div>
                                    <h5>Sass</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/node.jpg' alt='node.js' />
                                    </div>
                                    <h5>Node.js</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/mongo.jpg' alt='mongoDB' />
                                    </div>
                                    <h5>MongoDB</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/mysql.jpg' alt='mysql' />
                                    </div>
                                    <h5>MySql</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/firebase.jpg' alt='firebase' />
                                    </div>
                                    <h5>Firebase</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/aws.jpg' alt='aws' />
                                    </div>
                                    <h5>AWS</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/redux.jpg' alt='redux' />
                                    </div>
                                    <h5>Redux</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/sanity.jpg' alt='sanity' />
                                    </div>
                                    <h5>Sanity</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/ai.jpg' alt='adobe illustrator' />
                                    </div>
                                    <h5>Illustrator</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/ps.jpg' alt='adobe photoshop' />
                                    </div>
                                    <h5>Photoshop</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/xd.jpg' alt='adobe xd' />
                                    </div>
                                    <h5>XD</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/id.jpg' alt='adobe indesign' />
                                    </div>
                                    <h5>InDesign</h5>
                                </div>
                            </div>

                            <div
                                data-aos='fade-up'
                                data-aos-delay='300'
                                className='col-4 col-sm-4 col-md-3 col-xl-2'
                            >
                                <div
                                    className={`${styles.teamContentArea} text-center ${styles.mb30}`}
                                    data-wow-delay='700ms'
                                >
                                    <div className={styles.memberThumb}>
                                        <Image width='500' height='500' src='/images/ae.jpg' alt='adobe after effects' />
                                    </div>
                                    <h5>AfterEffects</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default About;



export async function getServerSideProps() {
    try {
        const data = await sanityClient.fetch(
            `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        );
        return {
            props: {
                author: data[0]
            },
        };
    } catch (error) {
        console.log(error);
    }

}