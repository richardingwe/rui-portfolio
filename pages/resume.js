import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Resume.module.css';

const resume = () => {
    // const [downloadUrl, setDownloadUrl] = useState('/');

    // const download = () => {
    //     setDownloadUrl("/pdf/richard-ingwe-resume.pdf");
    // };
    return (
        <div id={`${styles.body} mont`} className='mont'>
            <Head>
                <title>Rui | Résumé</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link rel="shortcut icon" href="RUI100PX-Artboard-1-copy.png" type="image/x-icon" />
            </Head>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        <h1>RICHARD <span>INGWE</span></h1>
                        <h4>CONTACT</h4>
                    </div>
                    <div className={styles.titlePhone}>
                        <div>WEB DEVELOPER</div>
                        <div>+23480 955 40169</div>
                    </div>
                    <div className={styles.titleEmail}>
                        <div>BRAND IDENTITY DESIGNER</div>
                        <a className={styles.a} href="mailto:richardingwe5@gmail.com">
                            <div>richardingwe5@gmail.com</div>
                        </a>
                    </div>
                    <div className={styles.github}>
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path
                                    id="github"
                                    className={styles.cls3}
                                    d="M2.06,4.83H2C2.06,4.83,2.06,4.8,2.06,4.83Zm-.39,0,.06.06c.06.06.07,0,.07,0l-.05-.06A.06.06,0,0,0,1.67,4.83Zm.55,0a.09.09,0,0,0-.06.07.06.06,0,0,0,.08,0s.06,0,0-.06,0,0-.07,0ZM3,0A3,3,0,0,0,0,3,3.13,3.13,0,0,0,2.1,6c.16,0,.22-.07.22-.16V5.08s-.86.19-1-.37c0,0-.14-.36-.34-.45,0,0-.29-.2,0-.19a.68.68,0,0,1,.48.32.66.66,0,0,0,.88.28l0,0a.75.75,0,0,1,.2-.42c-.69-.08-1.39-.18-1.39-1.37a1,1,0,0,1,.29-.73,1.21,1.21,0,0,1,0-.84c.26-.09.86.33.86.33a3.17,3.17,0,0,1,1.56,0s.59-.42.85-.33a1.11,1.11,0,0,1,0,.84,1,1,0,0,1,.32.73c0,1.2-.73,1.29-1.42,1.37a.75.75,0,0,1,.21.58v1c0,.08.05.18.21.15a3.07,3.07,0,0,0,2.1-3,3,3,0,0,0-3-3ZM1.21,4.28v.06a0,0,0,0,0,.07,0V4.27C1.28,4.2,1.22,4.26,1.21,4.28Zm-.14-.1v.05h0A0,0,0,0,0,1.07,4.18Zm.4.44V4.7c0,.08.06,0,.08,0s0,0,0-.08a.06.06,0,0,0-.07,0Zm-.14-.18v.07c0,.07.06,0,.07,0a.06.06,0,0,0,0-.08H1.33Z"
                                />
                            </svg>
                            Find me on Github!
                        </div>
                        <a className={styles.a} href="https://github.com/richardingwe" target="_blank" rel='noopener noreferrer'>
                            <span>www.github.com/richardingwe</span>
                        </a>
                    </div>
                    <div className={styles.behance}>
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 7.16 4.48"
                            >
                                <defs>
                                </defs>
                                <path
                                    id="behance"
                                    className={styles.cls3}
                                    d="M2.88,2a1,1,0,0,0,.6-.92C3.48.21,2.83,0,2.07,0H0V4.4H2.13c.8,0,1.55-.39,1.55-1.28A1.05,1.05,0,0,0,2.88,2ZM1,.75h.9c.35,0,.67.1.67.5s-.25.53-.59.53H1v-1Zm1,2.9H1V2.44H2c.43,0,.69.18.69.63s-.32.58-.71.58Zm4.45-3H4.67V.22H6.45Zm.7,2.19A1.57,1.57,0,0,0,5.74,1.13H5.6A1.6,1.6,0,0,0,4,2.72v.09A1.55,1.55,0,0,0,5.42,4.48H5.6A1.42,1.42,0,0,0,7.09,3.41H6.32a.76.76,0,0,1-.7.41.71.71,0,0,1-.78-.65.43.43,0,0,1,0-.16h2.3V2.85ZM4.84,2.45a.69.69,0,0,1,.7-.68h0a.66.66,0,0,1,.7.62v.06Z"
                                />
                            </svg>
                            Find me on Behance!
                        </div>
                        <a className={styles.a} href="https://behance.net/richardingwe" target="_blank" rel='noopener noreferrer'>
                            <span>www.behance.net/richardingwe</span>
                        </a>
                    </div>
                    <div className={styles.linkedin}>
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 5.56 5.54"
                            >
                                <defs>
                                </defs>
                                <path
                                    id="linkedin-in"
                                    className={styles.cls3}
                                    d="M1.25,5.54H.1V1.83H1.25ZM.67,1.34A.67.67,0,1,1,1.34.67h0a.67.67,0,0,1-.67.67Zm4.89,4.2H4.41V3.73c0-.43,0-1-.59-1s-.7.47-.7,1V5.54H2V1.83H3.08v.51h0a1.24,1.24,0,0,1,1.09-.6c1.17,0,1.39.77,1.39,1.77v2Z"
                                />
                            </svg>
                            Find me on Linkedin!
                        </div>
                        <a className={styles.a} href="https://linkedin.com/in/richard-ingwe-9a91a5190" target='_blank' rel='noopener noreferrer'>
                            <span>www.linkedin.com/in/richard-ingwe-9a91a5190</span>
                        </a>
                    </div>
                    <div className={styles.website}>
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6.18"
                            >
                                <path
                                    className={styles.cls3}
                                    d="M1.91,2.67l-.4.89a.05.05,0,0,1-.06,0h-.2a.05.05,0,0,1-.06,0L1,3.14A1.12,1.12,0,0,1,1,3a1.12,1.12,0,0,0,0,.13l-.2.42a.06.06,0,0,1-.06,0H.44a.07.07,0,0,1-.07,0L0,2.67a.13.13,0,0,1,0-.06.08.08,0,0,1,.06,0H.29a.07.07,0,0,1,.07,0l.16.45a.36.36,0,0,0,0,.11s0-.07,0-.11l.2-.46a.07.07,0,0,1,.06,0h.19a.05.05,0,0,1,.06,0l.19.44.05.12a.49.49,0,0,1,0-.11l.17-.45a.07.07,0,0,1,.07,0h.22l0,0A.13.13,0,0,1,1.91,2.67ZM4,2.67l-.4.89a.05.05,0,0,1-.06,0h-.2a.05.05,0,0,1-.06,0l-.19-.42A1.12,1.12,0,0,1,3.07,3a1.12,1.12,0,0,0,0,.13l-.2.42a.06.06,0,0,1-.06,0H2.55a.06.06,0,0,1-.06,0l-.37-.89a.13.13,0,0,1,0-.06l.05,0h.23s.06,0,.06,0l.17.45,0,.11a.76.76,0,0,1,0-.11l.2-.46a.07.07,0,0,1,.06,0h.19a.05.05,0,0,1,.06,0l.19.44.05.12a.49.49,0,0,1,0-.11l.17-.45a.07.07,0,0,1,.07,0H4l0,0A.13.13,0,0,1,4,2.67Zm2.12,0-.4.89a.05.05,0,0,1-.06,0h-.2a.05.05,0,0,1-.06,0l-.19-.42a1.12,1.12,0,0,1,0-.13,1.12,1.12,0,0,0-.05.13l-.2.42a.06.06,0,0,1-.06,0H4.67a.06.06,0,0,1-.06,0l-.37-.89a.13.13,0,0,1,0-.06l0,0h.23s.06,0,.06,0l.17.45a.36.36,0,0,0,0,.11.76.76,0,0,1,0-.11L5,2.62a.06.06,0,0,1,.06,0h.19a.05.05,0,0,1,.06,0l.19.44,0,.12a.49.49,0,0,1,0-.11l.17-.45a.07.07,0,0,1,.07,0h.22l0,0A.13.13,0,0,1,6.15,2.67Z"
                                />
                                <path
                                    className={styles.cls3}
                                    d="M.63,2.14a3.23,3.23,0,0,1,.25-.49h.49c0,.15-.08.31-.11.48h.48a3.36,3.36,0,0,1,.14-.48H4.25a3.36,3.36,0,0,1,.13.48h.49c0-.17-.07-.33-.11-.48h.49a3.23,3.23,0,0,1,.25.49H6a3.08,3.08,0,0,0-5.87,0Zm4.22-1H4.57a3.07,3.07,0,0,0-.2-.36A2.41,2.41,0,0,1,4.85,1.19ZM3.06.48a1.21,1.21,0,0,1,1,.71H2.1A1.21,1.21,0,0,1,3.06.48ZM1.76.83a3.07,3.07,0,0,0-.2.36H1.28A2.15,2.15,0,0,1,1.76.83Z"
                                />
                                <path
                                    className={styles.cls3}
                                    d="M5.5,4a2.73,2.73,0,0,1-.25.48H4.76c0-.15.08-.31.11-.47H4.38a2.91,2.91,0,0,1-.13.47H1.88A2.89,2.89,0,0,1,1.74,4H1.26c0,.16.07.32.11.47H.88A2.73,2.73,0,0,1,.63,4H.13A3.08,3.08,0,0,0,6,4ZM1.28,5h.28a3.07,3.07,0,0,0,.2.36A2.15,2.15,0,0,1,1.28,5Zm1.78.71A1.21,1.21,0,0,1,2.1,5H4A1.21,1.21,0,0,1,3.06,5.7Zm1.31-.35A3.07,3.07,0,0,0,4.57,5h.28A2.41,2.41,0,0,1,4.37,5.35Z"
                                />
                            </svg>
                            View my portfolio webisite!
                        </div>
                        <a className={styles.a} href="https://ruingwe.com" target="_blank">
                            <span>www.ruingwe.com</span>
                        </a>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.aboutMe}>
                        <div className={styles.about}>
                            <h2>ABOUT</h2>
                            <div className={styles.paragraph}>
                                <p>
                                    I am a Software Developer and a Graphic Designer, I am very
                                    passionate about bringing ideas to reality through Codes and
                                    Graphic designs.
                                </p>
                                <p>
                                    For now, I build powerful, beautiful, and swift web applications
                                    that help businesses/brands keep potential customers and compete
                                    globally.
                                </p>
                                <p>
                                    I am obsessed with technology and I plan on working with
                                    technologies like Artificial Intelligence, Virtual Reality,
                                    Augmented Reality, and Mixed Reality in the future.
                                </p>
                                <p>
                                    I'm always open to new projects and freelance collaborations! So
                                    if you want us to work together, get in touch! I don’t scratch!
                                </p>
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <h2>SKILLS</h2>
                            <div className={styles.apps}>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Web Development</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Graphic Design</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>UI/UX Design</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>

                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Communication</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Marketting</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.software}>
                            <h2>SOFTWARES</h2>
                            <div className={styles.apps}>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Adobe Illustrator</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Adobe Photoshop</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Adobe XD</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Adobe InDesign</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.app}>
                                    <div className={styles.appName}>Adobe After Effects</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>

                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls2}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <h2 className={styles.heading}>STACK</h2>
                        <div className={styles.row1}>
                            <div>Javascript</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>React.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Vue.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Next.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>PWA</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Bootstrap</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Git</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>SASS</div>
                        </div>
                        <div className={styles.row2}>
                            <div>Node.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>MongoDB</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>MySql</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Firebase</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>AWS</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Redux</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className={styles.cls1} d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Sanity</div>
                        </div>
                    </div>
                    <div className={styles.expEdu}>
                        <div className={styles.exp}>
                            <h2 className={styles.heading}>EXPERIENCE</h2>
                            {/* <div className="row">
                                <h3>SATELLITE TOWN HOTEL</h3>
                                <div>2015 - 2017</div>
                                <p>
                                    worked in Satellite Town Hotel, Calabar, CRS. Nigeria, as a
                                    waiter, then I was later promoted to the post of a Barman. I
                                    lead, controlled and maintained the orderliness of the bar for a
                                    year.
							</p>
                            </div>  */}
                            <div className={styles.row}>
                                <h3>RUI CREATIVE</h3>
                                <div>2018 - 2021</div>
                                <p>
                                    I build powerful swift web applications for the company.
                                    <br />
                                    <br />
                                    - Improved the usability of the existing workflows by fixing several workflow bugs and UI issues based on user interviews, contextual inquiry and observations apart from user-reported bugs.
                                    <br />
                                    <br />
                                    - Responsible for maintaining  Quality Assurance in the company.
                                </p>
                            </div>
                        </div>
                        <svg
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 7.61 131.96"
                        >
                            <defs>
                            </defs>
                            <path
                                className={styles.cls1}
                                d="M7.61,3.81A3.81,3.81,0,1,1,3.81,0,3.8,3.8,0,0,1,7.61,3.81Z"
                            />
                            <path
                                className={styles.cls1}
                                d="M7.61,45.26a3.81,3.81,0,1,1-3.8-3.81A3.8,3.8,0,0,1,7.61,45.26Z"
                            />
                            <path
                                className={styles.cls1}
                                d="M7.61,86.71a3.81,3.81,0,1,1-3.8-3.81A3.8,3.8,0,0,1,7.61,86.71Z"
                            />
                            <path
                                className={styles.cls1}
                                d="M7.61,128.16a3.81,3.81,0,1,1-3.8-3.81A3.8,3.8,0,0,1,7.61,128.16Z"
                            />
                            <rect className={styles.cls1} x="3" y="3.81" width="1.6" height="123.71" />
                        </svg>
                        <div className={styles.edu}>
                            <h2 className={styles.heading}>PROJECTS</h2>
                            <div className={styles.row}>
                                <h3>Rui portfolio</h3>
                                <div>
                                    <a target='_blank' href='https://ruingwe.com'>ruingwe.com</a>
                                </div>
                                <p>
                                    Portfolio website for me.  Built with Next.js, and Sanity.
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>Disney Website Clone</h3>
                                <div>
                                    <a target='_blank' href='https://rui-disneyplus.netlify.app'>rui-disneyplus.netlify.app</a>
                                </div>
                                <p>
                                    Disney website clone built with react.js, styled components, and firebase.
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>Hulu Website Clone</h3>
                                <div>
                                    <a target='_blank' href='https://hulu-clone-ochre.vercel.app'>hulu-clone-ochre.vercel.app</a>
                                </div>
                                <p>
                                    Hulu website clone built with next.js, and tailwind.css
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>AKOCDS UI</h3>
                                <div>
                                    <a target='_blank' href='https://richardingwe.github.io/akocds'>richardingwe.github.io/akocds</a>
                                </div>
                                <p>
                                    I designed and built the UI for a Procurement system/database for Akwa Ibom state.
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>Color Palette Generator</h3>
                                <div>
                                    <a target='_blank' href='https://lucid-clarke-3e240e.netlify.app'>lucid-clarke-3e240e.netlify.app/</a>
                                </div>
                                <p>
                                    A color palette generator built with React.js, that generates different shades of colors from a picked color.
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>Nabitec Medical Technologies Website</h3>
                                {/* <div>
                                    <a target='_blank' href='https://lucid-clarke-3e240e.netlify.app'>lucid-clarke-3e240e.netlify.app/</a>
                                </div> */}
                                <p>
                                    A website for a medical engineering company,  a young leading supplier of medical imaging equipment precisely to Nigeria and Cameroon as well as project management and a financing corporation. It is a first-class international corporation with branches in west Africa, (Nigeria and Cameroon).
                                </p>
                            </div>

                        </div>
                        {/* <div className={styles.edu}>
                            <h2 className={styles.heading}>EDUCATION</h2>
                            <div className={styles.row}>
                                <h3>FSLC</h3>
                                <div>2009</div>
                                <p>
                                    ESTATE NURSERY AND PRIMARY SCHOOL, CALABAR, CROSSRIVER STATE,
                                    NIGERIA
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>WASSCE, NABTEB, NECO</h3>
                                <div>2015</div>
                                <p>
                                    DIVINE TECHNICAL COLLEGE, CALABAR, CROSSRIVER STATE, NIGERIA.
                                </p>
                            </div>
                            <div className={styles.row}>
                                <h3>BSC PHYSICS</h3>
                                <div>2020</div>
                                <p>CROSSRIVER UNIVERSITY OF TECHNOLOGY, NIGERIA.</p>
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.aboutMe}>
                        <div className={styles.about}>
                            <h2>INTEREST</h2>
                            <div className={styles.paragraph}>
                                <p>Design, Mathematics, Tech, Programming E.t.c...</p>
                            </div>
                        </div>
                        <div className={styles.software}>
                            <h2>LANGUAGES</h2>
                            <div className={styles.apps}>
                                <div className={styles.app}>
                                    <div className={styles.appName}>English</div>
                                    <div className={styles.appRating}>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className={styles.cls1}
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about}>
                            <h2>HOBBIES</h2>
                            <div className={styles.paragraph}>
                                <p>Designing, Coding, Reading, Writing, Gaming E.t.c...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className={`${styles.a} ${styles.download} ${styles.heartbeat} `} href='https://cdn.sanity.io/files/y0xdnwwh/production/cd06a537ca98b2382161607e5e30ded5311a1fcd.pdf?dl'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="-53 1 511 511.99906"
                >
                    <g id="surface1">
                        <path
                            d="M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 "
                            style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'rgb(255, 255, 255)',
                                fillOpacity: 1
                            }}
                        />
                        <path
                            d="M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 "
                            style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'rgb(255, 255, 255)',
                                fillOpacity: 1
                            }}
                        />
                        <path
                            d="M 194.292969 357.535156 C 196.644531 360.007812 199.859375 361.492188 203.320312 361.492188 C 206.785156 361.492188 210 360.007812 212.347656 357.535156 L 284.820312 279.746094 C 289.519531 274.796875 289.148438 266.882812 284.203125 262.308594 C 279.253906 257.609375 271.339844 257.976562 266.765625 262.925781 L 215.6875 317.710938 L 215.6875 182.664062 C 215.6875 175.859375 210.121094 170.296875 203.320312 170.296875 C 196.519531 170.296875 190.953125 175.859375 190.953125 182.664062 L 190.953125 317.710938 L 140 262.925781 C 135.300781 257.980469 127.507812 257.609375 122.5625 262.308594 C 117.617188 267.007812 117.246094 274.800781 121.945312 279.746094 Z M 194.292969 357.535156 "
                            style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'rgb(255, 255, 255)',
                                fillOpacity: 1
                            }}
                        />
                    </g>
                </svg>
                <span>Download</span>
            </a>
        </div>
    );
};

export default resume;
