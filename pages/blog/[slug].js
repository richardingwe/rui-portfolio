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
import { useThemeContext } from '../../context/state';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const SingleBlog = ({ singleBlog }) => {

    const location = useRouter();
    const { theme } = useThemeContext();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <Layout
            title={`Rui | Blog ${singleBlog ? `| ${singleBlog.title}` : " "}`}
            description={`${singleBlog ? `${singleBlog.subtitle}` : " "}`}
            currentUrl={`https://ruingwe.com${location.asPath}`}
            imageUrl={urlFor(singleBlog.mainImage?.asset.url).width(1200).url()}
            image_alt={singleBlog?.title}
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
                                    Blog Details
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
                                        <Link href="/blog">
                                            <a
                                                style={{
                                                    borderColor: `${!theme.light ? '#fff' : '#11161f'}`,
                                                }}
                                            >
                                                Blog.
                                            </a>
                                        </Link>
                                        <Link href='javascript:void(0)'>
                                            <a>
                                                Blog Details
                                            </a>
                                        </Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {singleBlog &&
                    <section className={`${styles.postContentArea} ${styles.sectionGap}`}>
                        <div className="container">
                            <div className="">
                                <div className="posts-list">
                                    <div className={`${styles.singlePost} row text-white`}>
                                        <div className="col-lg-12">
                                            <div data-aos="fade-up" data-aos-delay="300" className={styles.subtitle} style={{ borderColor: `${!theme.light ? '#fff' : '#11161f'}` }}>
                                                <p style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>{singleBlog.subtitle}</p>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="200" className={styles.featureImg} style={{ backgroundImage: `url(${singleBlog.mainImage?.asset.url})` }}>
                                                {/* <img className="img-fluid" src={singleBlog.mainImage.asset.url} alt={singleBlog.title} /> */}
                                            </div>
                                        </div>
                                        <div className={`col-lg-3  col-md-3 ${styles.metaDetails}`}>
                                            <div data-aos="fade-up" data-aos-delay="300" className="user-details row mt-2 justify-content-center align-items-center">
                                                <p className={`${styles.userName} col-lg-12 col-md-12 col-6`}>
                                                    <Link href="/about">
                                                        <a style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>
                                                            {singleBlog.name}
                                                            <img className={styles.authorImg} src={urlFor(singleBlog.authorImage).url()} alt=" ">
                                                            </img>
                                                        </a>
                                                    </Link>
                                                </p>
                                                <p
                                                    className={`${styles.date} col-lg-12 col-md-12 col-6`}
                                                    style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}
                                                >
                                                    {new Date(singleBlog.publishedAt).getDate()} {months[new Date(singleBlog.publishedAt).getMonth()]},  {new Date(singleBlog.publishedAt).getFullYear()}
                                                </p>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="300" className="col-lg-9 col-md-9">
                                            <h3 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }} className={`mt-5 mb-1 ${styles.blogTitle}`}>{singleBlog && singleBlog.title}</h3>
                                            <div style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }} className={styles.excert}>
                                                <BlockContent blocks={singleBlog.body} projectId="y0xdnwwh" dataset="production" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <h3 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }} className={styles.leaveComment}>
                                    Please leave a comment
                                </h3>
                            </div>

                            {theme.light ?
                                <DiscussionEmbed
                                    shortname='Rui'
                                    config={
                                        {
                                            url: `https://ruingwe.com/blog/${singleBlog.slug}`,
                                            identifier: singleBlog._id,
                                            title: singleBlog.title,
                                            language: 'en' //e.g. for Traditional Chinese (Taiwan)	
                                        }
                                    }
                                />
                                :
                                <div>
                                    <DiscussionEmbed
                                        shortname='Rui'
                                        config={
                                            {
                                                url: `https://ruingwe.com/blog/${singleBlog.slug}`,
                                                identifier: singleBlog._id,
                                                title: singleBlog.title,
                                                language: 'en' //e.g. for Traditional Chinese (Taiwan)	
                                            }
                                        }
                                    />
                                </div>
                            }
                        </div>
                    </section>
                }
            </main>
        </Layout>
    );
};

export default SingleBlog;


// export const getStaticPaths = async () => {
//     const res = await sanityClient.fetch(
//         `*[_type == "blog"]{
//                 slug,
//             }`);

//     const paths = res.map((blog) => {
//         return {
//             params: { slug: blog.slug.current },
//         };
//     });

//     return {
//         paths,
//         fallback: true,
//     };
// };



export async function getServerSideProps({ query: { slug } }) {
    try {
        const data = await sanityClient.fetch(
            `*[slug.current == "${slug}"]{
            title,
            subtitle,
            _id,
            slug,
        publishedAt,
            mainImage {
                asset-> {
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`);
        return {
            props: {
                singleBlog: data[0],
                // revalidate: 1,
            },
        };
    } catch (error) {
        console.log(error);
    }

}