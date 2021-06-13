import { useState, useEffect } from 'react';
import Link from 'next/link';
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
        <Layout title='Rui - Code Projects'>
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
                                        <img
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
                                                        <i className='fa fa-github' aria-hidden='true'></i>
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