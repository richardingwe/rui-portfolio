import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import AOS from "aos";
import { useRouter } from 'next/router';
import "aos/dist/aos.css";
import styles from "@/styles/Contact.module.css";
import Layout from '@/components/Layout';
import "animate.css";
import { useForm } from '@formspree/react';

const Post = () => {

    const [state, handleSubmit] = useForm("xknkqwpq");
    const [btnMsg, setBtnMsg] = useState("Send Message");

    // if (state.succeeded) {
    //     setBtnMsg('Message Sent');
    //     setTimeout(() => {
    //         setBtnMsg('Send Message');
    //     }, 3000);
    // }


    useEffect(() => {
        AOS.init({
            delay: 200
        });
        AOS.refresh();
    }, []);


    const location = useRouter();

    return (
        <Layout title='Rui | Contact Me' currentUrl={`https://ruingwe.com${location.asPath}`}>
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
                                    Contact Me.
                                </h1>
                                <p className={styles.linkNav}>
                                    <span className={styles.box}>
                                        <Link href="/">Home.</Link>
                                        <Link href="/contact">Contact Me.</Link>
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Area Start */}
                <section id="contact" className={`${styles.contact_area} text-light bg-gray ${styles.ptb_100}`}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <motion.div
                                initial={{ y: "10vh", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="col-12 col-md-10 col-lg-8">
                                {/* Section Heading  */}
                                <div className={`${styles.section_heading} text-center`}>
                                    <h2 className="text-capitalize">Let's Work</h2>
                                    <p className=" mt-4">I'm always open to new projects and freelance collaborations!
                                        So if you want us to work together, get in touch! I don’t scratch!</p>
                                    <p className="mt-4">Please send me a message.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-12 col-md-5">
                                {/* Contact Us  */}
                                <div className={styles.contact_us}>
                                    {/* <p className="mb-3">Covering everything from your servers and network infrastructure, to cloud, to your computers, workstations and mobile devices, we provide end-to-end solutions for all of your technology needs.</p>
                                    <p>Please send us a message</p> */}
                                    {/* <ul>
                                        <li className="py-2" data-aos='fade-up'
                                            data-aos-delay='300'>
                                            <a className="media" href="#">
                                                <div className={`${styles.social_icon} mr-3`}>
                                                    <i className="fas fa-home" aria-hidden="true"></i>
                                                </div>
                                                <span className="media-body align-self-center">8 Pebblestone Circle Brampton, Ontario L6X 4M8</span>
                                            </a>
                                        </li>
                                        <li className="py-2" data-aos='fade-up'
                                            data-aos-delay='350'>
                                            <a className="media" href="tel:+1 905 226 9774">
                                                <div className={`${styles.social_icon} mr-3`}>
                                                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                                                </div>
                                                <span className="media-body align-self-center">+1 905 226 9774</span>
                                            </a>
                                        </li>
                                        <li className="py-2" data-aos='fade-up'
                                            data-aos-delay='400'>
                                            <a className="media" href="mailto:info@greeneyeit.com">
                                                <div className={`${styles.social_icon} mr-3`}>
                                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                                </div>
                                                <span className="media-body align-self-center">info@greeneyeit.com</span>
                                            </a>
                                        </li>
                                    </ul> */}
                                    <div data-aos='fade-up'
                                        data-aos-delay='300' className={`${styles.svg_body} d-none d-sm-block mt-5`}>
                                        <img src="/images/contact2.svg" alt="" />
                                        <img className={`${styles.svg2} animate__animated animate__pulse animate__infinite infinite`} src="/images/contact3.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-4 pt-md-0">
                                {/* Contact Box  */}
                                <div className={`${styles.contact_box} text-center`}>
                                    {/* Contact Form  */}
                                    <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group" data-aos='fade-up' data-aos-delay='300'>
                                                    <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                                                </div>
                                                <div className="form-group" data-aos='fade-up' data-aos-delay='350'>
                                                    <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                                </div>
                                                <div className="form-group" data-aos='fade-up' data-aos-delay='400'>
                                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group" data-aos='fade-up' data-aos-delay='450'>
                                                    <textarea className="form-control" name="message" placeholder="Message" required="required"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12" data-aos='fade-up' data-aos-delay='400'>
                                                <button type="submit" disabled={state.submitting} className="text-white btn btn-lg btn-block mt-3">
                                                    <span className="text-white pr-3">
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" className={styles.svg_plane} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z">
                                                            </path>
                                                        </svg>
                                                    </span>{btnMsg}</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-message"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Area End */}

            </main >
        </Layout>
    );
};

export default Post;

