import React, { useRef } from 'react';
import styles from "@/styles/Success.module.css";
import { useRouter } from 'next/router';
import { useThemeContext } from '../context/state';
import Link from 'next/link';

const Success = () => {
    const location = useRouter();
    const { theme } = useThemeContext();


    const link = useRef(null);
    setTimeout(() => {
        link.current.click();
    }, 3000);

    return (
        <div className={styles.main} style={{ backgroundColor: `${theme.light ? '#fff' : '#11161f'}` }}>
            <div><img src="/images/email.svg" alt="message sent" /></div>
            <h1 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>Your Message Was Sent Successfully</h1>
            <Link href='/contact'><a ref={link} >Go back</a></Link>
        </div>
    );
};

export default Success;
