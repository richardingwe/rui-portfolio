import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import sanityClient from "@/sanity/client";
import AOS from "aos";
import { useRouter } from 'next/router';
import "aos/dist/aos.css";
import styles from "@/styles/Blog.module.css";
import Layout from '@/components/Layout';
// import LoaderTwo from './LoaderTwo';

const Post = ({ blogData }) => {
    useEffect(() => {
        AOS.init({
            delay: 200
        });
        AOS.refresh();
    }, []);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const location = useRouter();

    // if (!blogData) return (
    //     <div>
    //         <div className="preloader-area">
    //             <div className="loader-box">
    //                 <LoaderTwo />
    //                 {/* <div className="loader"></div> */}
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <Layout title='Rui | Blog' currentUrl={`https://ruingwe.com${location.asPath}`}>
            <main className={styles.main}>
                <section className={`${styles.bannerArea} ${styles.relative}`}>
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <motion.div
                                initial={{ y: "10vh", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, delay: 1.2 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`${styles.aboutContent} col-lg-12`}>
                                <h1 className="text-white">
                                    Blog
                                </h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box}>
                                        <Link href="/">Home</Link>
                                        <Link href="/blog">Blog</Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {!blogData.length && (
                    <div className={`${styles.noPost} container text-white text-center d-flex align-items-center justify-content-center my-5`} >
                        <h1>Oops!! No Blog Post Is Available For Now.</h1>
                    </div>
                )}
                <section className={`${styles.ftcoSection} text-white`}>
                    <div className="container">
                        <div className="row d-flex" >
                            {blogData && blogData.map((blog, index) => (
                                <div data-aos="fade-up" className='col-lg-4 col-md-6 col-xs-12 d-flex' key={blog.slug.current}>
                                    <div className={`${styles.blogEntry} justify-content-end`}>
                                        <Link href={`/blog/${blog.slug.current}`} >
                                            <a className={styles.block20} style={{ backgroundImage: `url(${blog.mainImage.asset.url})` }} ></a>
                                        </Link>
                                        <div className={`${styles.text} mt-3 text-light float-right d-block`}>
                                            <div className={`d-flex align-items-center pt-2 mb-4 ${styles.topp}`}>
                                                <div className="one mr-3">
                                                    <span className={styles.day}>{new Date(blog.publishedAt).getDate()}</span>
                                                </div>
                                                <div className="two">
                                                    <span className={styles.yr}>{new Date(blog.publishedAt).getFullYear()}</span>
                                                    <span className={styles.mos}>{months[new Date(blog.publishedAt).getMonth()]}</span>
                                                </div>
                                            </div>
                                            <h3 className={styles.heading}><Link href={`/blog/${blog.slug.current}`}>{blog.title}</Link></h3>
                                            <p>
                                                {blog.subtitle || blog.body[0].children[0].text.substr(0, 130).concat("...")}
                                            </p>
                                            <div className={`d-flex align-items-center justify-content-center mt-4 ${styles.meta}`}>
                                                <p className="mb-0">
                                                    <Link href={`/blog/${blog.slug.current}`}>
                                                        <a className="btn text-white btn-secondary">
                                                            Read More
                                                            <span className="ion-ios-arrow-round-forward">
                                                            </span>
                                                        </a>
                                                    </Link>
                                                </p>
                                                <p className="ml-auto mb-0">
                                                    <Link href="/about">
                                                        <a className={styles.tomato}>
                                                            {blog.name}
                                                        </a>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main >
        </Layout>
    );
};

export default Post;


export async function getServerSideProps() {
    try {
        const data = await sanityClient.fetch(
            `*[_type == "blog"]{
                title,
                slug,
                publishedAt,
                body,
                subtitle,
                "name": author->name,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`);
        return {
            props: {
                blogData: data
            },
        };
    } catch (error) {
        console.log(error);
    }

}