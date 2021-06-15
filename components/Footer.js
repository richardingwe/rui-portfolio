import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Footer.module.css";
import { useRouter } from 'next/router';


const Footer = () => {
    const location = useRouter();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <footer className={styles.Footer} style={{
            display: `${location.pathname === '/resume' ? 'none' : 'flex'
                }`,
        }}>
            <div data-aos={location.pathname === '/' ? '' : "fade-in"} data-aos-delay="200" data-aos-offset="50" >
                <span>© 2021 Rui Creative. All rights reserved. </span>
                {/* <br /> */}
                <a href="https://github.com/richardingwe" target="_blank" rel="nofollow noopener noreferrer" className="">
                    Designed && Coded By Rui.
                </a>
            </div>
        </footer>
    );
};

export default Footer;
