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
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4" style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>
                                <h2><strong>Project</strong></h2>
                                <ul className='ml-3'>
                                    <li><strong>Title: </strong>{codeDetails.title}</li>
                                    <li className='text-capitalize'><strong>Type: </strong>{codeDetails.projectType}</li>
                                    <li><strong>Stack: </strong>{codeDetails.technologiesUsed.map((tech, i) => (
                                        `${tech[i] !== tech[codeDetails.technologiesUsed.length - 1] ? `${tech}, ` : `${tech}... `}`
                                    ))}</li>
                                </ul>
                            </div>
                            <div className="col-lg-8" style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>
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