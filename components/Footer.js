import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Footer.module.css";
import { useRouter } from 'next/router';
import { useThemeContext } from '../context/state';


const Footer = () => {
    const location = useRouter();
    const { theme } = useThemeContext();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <footer className={styles.Footer} style={{
            color: `${!theme.light ? '#fff' : '#11161f'}`,
            backgroundColor: `${theme.light ? '#f5f5f5' : '#0b0d14'}`,
        }}>
            <div data-aos={location.pathname === '/' ? '' : "fade-in"} data-aos-delay="200" data-aos-offset="50" >
                <span>© {new Date().getFullYear()} Rui Creative. All rights reserved. </span>
                {/* <br /> */}
                <a href="https://github.com/richardingwe" target="_blank" rel="nofollow noopener noreferrer" className="">
                    Designed && Built By Rui.
                </a>
            </div>
        </footer>
    );
};

export default Footer;
