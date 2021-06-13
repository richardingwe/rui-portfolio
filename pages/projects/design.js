import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sanityClient from '../../client';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/Design.module.css';
import Layout from '@/components/Layout';
// import LoaderTwo from './LoaderTwo';

const Design = ({ designData }) => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            offset: 230,
        });
        AOS.refresh();
    }, []);

    // if (!designData)
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
        <Layout title='Rui - Design Projects'>
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
                                <h1 className='text-white'>Design Projects</h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box}>
                                        <Link href='/'>Home</Link>
                                        <Link href='/projects'>Projects</Link>
                                        <Link href='/projects/design'>Design</Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.categoryPage} ${styles.areaPadding}`}>
                    <div className='container'>
                        <div className='row'>
                            {designData &&
                                designData.map((design) => (
                                    <div
                                        key={design.projectImage.asset._id}
                                        data-aos='fade-up'
                                        className='col-md-6'
                                    >
                                        <div className={styles.singleCategory}>
                                            <a
                                                className='d-block'
                                                href={design.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <div className={styles.thumb}>
                                                    <Image width='1000' height='1000'
                                                        className='img-fluid'
                                                        src={design.projectImage.asset.url}
                                                        alt={design.alt}
                                                    />
                                                </div>
                                                <div className={styles.short_details}>
                                                    <h4>{design.title}</h4>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};
export default Design;


export async function getServerSideProps() {
    try {
        const data = await sanityClient
            .fetch(
                `*[_type == "DesignProject"]{
                title,
                date,
                place,
                description,
                projectType,
                link,
                tags,
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
                designData: data
            },
        };
    } catch (error) {
        console.log(error);
    }

}