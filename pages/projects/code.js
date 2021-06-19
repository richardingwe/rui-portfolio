import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import sanityClient from '@/sanity/client.js';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/Code.module.css';
// import LoaderTwo from './LoaderTwo';

const Code = ({ codeData }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const location = useRouter();

    // if (!codeData)
    //     return (
    //         <div>
    //             <div className='preloader-area'>
    //                 <div className='loader-box'>
    //                     <LoaderTwo />
    //                     {/* <div className='loader'></div> */}
    //                 </div>
    //             </div>
    //         </div>
    //     );

    return (
        <Layout title='Rui | Code Projects' currentUrl={`https://ruingwe.com${location.asPath}`}>
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
                                <h1 className='text-white'>Code Projects</h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box}>
                                        <Link href='/'>Home</Link>
                                        <Link href='/projects'>Projects</Link>
                                        <Link href='/projects/code'>Code</Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.aboutArea} ${styles.sectionGap}`}>
                    <div className='container'>
                        {
                            codeData?.map((code, index) => (
                                <div
                                    key={index}
                                    className='row align-items-center justify-content-between my-5'
                                >
                                    <div
                                        data-aos='fade-up'
                                        data-aos-delay='200'
                                        className='col-lg-6'
                                    >
                                        <Image width='1044' height='587'
                                            className='img-fluid'
                                            src={
                                                code.projectImage
                                                    ? code.projectImage.asset.url
                                                    : '/images/imageNotAvailable.jpg'
                                            }
                                            alt={code.alt || 'hello'}
                                        />
                                    </div>
                                    <div
                                        data-aos='fade-up'
                                        data-aos-delay='300'
                                        className='col-lg-5 col-md-12'
                                    >
                                        <div className={`${styles.sectionTitle} text-white`}>
                                            <h2>{code.title}</h2>
                                        </div>
                                        <div className='text-white'>
                                            <div className={styles.techUsed}>
                                                {code.technologiesUsed &&
                                                    code.technologiesUsed.map((tech, i) => (
                                                        <div key={i} className={styles.tech}>
                                                            {tech}
                                                        </div>
                                                    ))}
                                            </div>
                                            <div>
                                                <p>{code.description && code.description}</p>
                                            </div>
                                            <div className={styles.links}>
                                                {code.link && (
                                                    <a
                                                        href={code.link}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            role='img'
                                                            viewBox='0 0 194.818 194.818'
                                                        >
                                                            <title>External</title>
                                                            <g>
                                                                <path
                                                                    className={styles.st0}
                                                                    d='M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z'
                                                                ></path>
                                                                <path
                                                                    className={styles.st0}
                                                                    d='M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z'
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                )}
                                                {code.githubLink && (
                                                    <a
                                                        href={code.githubLink}
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
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Code;



export async function getServerSideProps() {
    try {
        const data = await sanityClient.fetch(
            `*[_type == "CodeProject"]{
                title,
                date,
                place,
                description,
                projectType,
                link,
                githubLink,
                technologiesUsed,
                projectImage{
                asset->{
                    _id,
                    url
                },
                alt
                }
            }`
        );
        return {
            props: {
                codeData: data
            },
        };
    } catch (error) {
        console.log(error);
    }

}