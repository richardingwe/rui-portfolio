import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { motion } from 'framer-motion';
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
    // const [author, setAuthor] = useState(null);
    // const [downloadUrl, setDownloadUrl] = useState('/');

    // const download = () => {
    // 	setDownloadUrl(cv);
    // };

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
        <Layout title='Rui - About' description='I am a Software Developer and a Graphic Designer, I am very passionate about bringing ideas to reality through Codes and Graphic designs. For now, I build powerful, beautiful, and swift web applications that help businesses / brands keep potential customers and compete globally. I am obsessed with technology and I plan on working with technologies like Artificial Intelligence, Virtual Reality, Augmented Reality, and Mixed Reality in the future. I am currently the lead developer / designer of Rui Creative and I am also available for partnerships.'>
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
                                            href='mailto:ruitech00@gmail.com'
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
                                        <a
                                            // onClick={download}
                                            data-aos='fade-up'
                                            data-aos-delay='300'
                                            href='https://richardingwe.github.io/my-cv/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className={styles.primaryBtn}
                                            data-text='Resume.'
                                        >
                                            <span>R</span>
                                            <span>e</span>
                                            <span>s</span>
                                            <span>u</span>
                                            <span>m</span>
                                            <span>e</span>
                                            <span>.</span>
                                        </a>
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