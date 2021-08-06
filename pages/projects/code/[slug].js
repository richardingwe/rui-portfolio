import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import sanityClient from "@/sanity/client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { DiscussionEmbed } from 'disqus-react';
import AOS from "aos";
import { useRouter } from 'next/router';
import "aos/dist/aos.css";
import styles from "@/styles/SingleBlog.module.css";
import Layout from '@/components/Layout';
import { useThemeContext } from '@/context/state';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const CodeDetails = ({ codeDetails }) => {

    const location = useRouter();
    const { theme } = useThemeContext();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


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

            </main>
        </Layout>
    );
};

export default CodeDetails;


export const getStaticPaths = async () => {
    const res = await sanityClient.fetch(
        `*[_type == "CodeProject"]{
                slug,
            }`);

    const paths = res.map((code) => {
        return {
            params: { slug: code.slug?.current },
        };
    });

    return {
        paths,
        fallback: true,
    };
};



export async function getStaticProps({ params: { slug } }) {
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
                technologiesUsed,
                projectImage{
                asset->{
                    _id,
                    url
                },
                imagesGallery,
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