import React from 'react';
import styles from "@/styles/Success.module.css";
import { useRouter } from 'next/router';
import { useThemeContext } from '../context/state';

const Success = () => {
    const location = useRouter();
    const { theme } = useThemeContext();

    setTimeout(() => {
        location.prefetch('/contact');
    }, 3000);

    return (
        <div className={styles.main} style={{ backgroundColor: `${theme.light ? '#fff' : '#11161f'}` }}>
            <div><img src="/images/email.svg" alt="message sent" /></div>
            <h1 style={{ color: `${!theme.light ? '#fff' : '#11161f'}` }}>Your Message Was Sent Successfully</h1>
        </div>
    );
};

export default Success;
