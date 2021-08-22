import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sanityClient from '@/sanity/client.js';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useRouter } from 'next/router';
import 'aos/dist/aos.css';
import styles from '@/styles/Design.module.css';
import Layout from '@/components/Layout';
import { useThemeContext } from '../../context/state';

const Design = ({ designData }) => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            offset: 230,
        });
        AOS.refresh();
    }, []);

    const location = useRouter();
    const { theme } = useThemeContext();


    return (
        <Layout title='Rui | Design Projects' currentUrl={`https://ruingwe.com${location.asPath}`}>
            <main className={styles.main} style={{ backgroundColor: `${theme.light ? '#fff' : '#11161f'}` }}>
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
                                <h1 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>Design Projects</h1>
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
                                        <Link href='/projects'><a
                                            style={{
                                                borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                            }}
                                        >
                                            Projects.
                                        </a></Link>
                                        <Link href='/projects/design'>
                                            <a>
                                                Design.
                                            </a>
                                        </Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.categoryPage} ${styles.areaPadding}`}>
                    <div className='container'>
                        <div className='row'>
                            {
                                designData?.map((design) => (
                                    <div
                                        key={design.projectImage.asset._id}
                                        data-aos='fade-up'
                                        className={`col-md-6 ${styles.margin_0}`}
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


export async function getStaticProps() {
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
                designData: data,
                revalidate: 60,
            },
        };
    } catch (error) {
        console.log(error);
    }

}