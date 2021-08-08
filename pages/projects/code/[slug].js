import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import sanityClient from "@/sanity/client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import AOS from "aos";
import { useRouter } from 'next/router';
import "aos/dist/aos.css";
import styles from "@/styles/CodeDetails.module.css";
import Layout from '@/components/Layout';
import { useThemeContext } from '@/context/state';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const CodeDetails = ({ codeDetails }) => {
    // console.log(codeDetails);
    const location = useRouter();
    const { theme } = useThemeContext();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '30px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '30px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Layout
            title={`Rui | Projects | Code ${codeDetails ? `| ${codeDetails.title}` : " "}`}
            description={`${codeDetails ? `${codeDetails.description}` : " "}`}
            currentUrl={`https://ruingwe.com${location.asPath}`}
            imageUrl={urlFor(codeDetails.mainImage?.asset.url).width(1200).url()}
            image_alt={codeDetails?.title}
        >
            <main className={styles.main} style={{ backgroundColor: `${theme.light ? '#fff' : '#11161f'}` }}>
                <section className={`${styles.bannerArea} ${styles.relative}`}>
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <motion.div
                                initial={{ y: "10vh", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, delay: 1.2 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`${styles.aboutContent} col-lg-12`}>
                                <h1 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>
                                    Project Details
                                </h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box} style={{
                                        borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                        color: `${!theme.light ? '#fff' : '#11161f'}`,
                                    }}>
                                        <Link href="/">
                                            <a
                                                style={{
                                                    borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                                }}
                                            >
                                                Home.
                                            </a>
                                        </Link>
                                        <Link href="/projects">
                                            <a
                                                style={{
                                                    borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                                }}
                                            >
                                                Projects.
                                            </a>
                                        </Link>
                                        <Link href="/projects/code">
                                            <a
                                                style={{
                                                    borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                                }}
                                            >
                                                Code.
                                            </a>
                                        </Link>
                                        <Link href='javascript:void(0)'>
                                            <a>
                                                Details.
                                            </a>
                                        </Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mt-5">
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="col-12">
                            {/* Section Heading  */}
                            <div className={`text-center`} style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>
                                <h2 className="text-capitalize">{codeDetails.title}</h2>
                            </div>
                        </motion.div>
                    </div>
                    {
                        codeDetails.imagesGallery && (
                            <motion.div
                                initial={{ y: "10vh", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`${styles.slider} container`}>
                                <Slider {...settings}>
                                    {codeDetails.imagesGallery.map(image => (
                                        <img src={image.asset.url} alt={image.asset._id} key={image.asset._id} />
                                    ))}
                                </Slider>
                            </motion.div>
                        )
                    }
                    <div className="container py-5" >
                        <div className="row">
                            <div className="col-lg-4" style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }} data-aos='fade-up' data-aos-delay='300'>
                                <h2><strong>Project</strong></h2>
                                <ul className='ml-3' style={{ listStyleType: 'circle' }}>
                                    <li><strong>Title: </strong>{codeDetails.title}</li>
                                    <li className='text-capitalize'><strong>Type: </strong>{codeDetails.projectType}</li>
                                    <li><strong>Stack: </strong>{codeDetails.technologiesUsed.map((tech, i) => (
                                        `${tech[i] !== tech[codeDetails.technologiesUsed.length - 1] ? `${tech}, ` : `${tech}... `}`
                                    ))}</li>
                                    {
                                        (codeDetails.links || codeDetails.githubLink) &&
                                        <li>
                                            <strong>Links: </strong>
                                            <span className={`${!theme.light ? styles.links : styles.linksLight}`}>
                                                {codeDetails.link && (
                                                    <a
                                                        href={codeDetails.link}
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
                                                                    className={!theme.light ? styles.svg_light : styles.svg_dark}
                                                                    d='M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z'
                                                                ></path>
                                                                <path
                                                                    className={!theme.light ? styles.svg_light : styles.svg_dark}
                                                                    d='M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z'
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                )}
                                                {codeDetails.githubLink && (
                                                    <a
                                                        href={codeDetails.githubLink}
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
                                                            <path
                                                                className={!theme.light ? styles.svg_light : styles.svg_dark}
                                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                )}
                                            </span>
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div className="col-lg-8" style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }} data-aos='fade-up' data-aos-delay='350'>
                                <h2><strong>Info</strong></h2>
                                {
                                    codeDetails.body ? (
                                        <div style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }} className={styles.excert}>
                                            <BlockContent blocks={codeDetails.body} imageOptions={{ w: 320, h: 240, fit: 'max' }} projectId="y0xdnwwh" dataset="production" />
                                        </div>
                                    ) : (
                                        <p>{codeDetails.description}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default CodeDetails;


// export const getStaticPaths = async () => {
//     const res = await sanityClient.fetch(
//         `*[_type == "CodeProject"]{
//                 slug,
//             }`);

//     const paths = res.map((code) => {
//         return {
//             params: { slug: code.slug?.current },
//         };
//     });

//     return {
//         paths,
//         fallback: true,
//     };
// };



export async function getServerSideProps({ params: { slug } }) {
    try {
        const data = await sanityClient.fetch(
            `*[slug.current == "${slug}"]{
                title,
                slug,
                date,
                place,
                description,
                body,
                projectType,
                link,
                githubLink,
  				imagesGallery[]{
                    asset->{
                    _id,
                    url
                    }
                },
                technologiesUsed,
                projectImage{
                asset->{
                    _id,
                    url
                },
                alt
                }
            }`);
        return {
            props: {
                codeDetails: data[0],
                revalidate: 1,
            },
        };
    } catch (error) {
        console.log(error);
    }

}