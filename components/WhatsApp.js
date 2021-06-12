import React from 'react';
import "animate.css";
import { useRouter } from 'next/router';
import styles from "../styles/WhatsApp.module.css";


function WhatsApp() {
    const location = useRouter();
    return (
        <div style={{
            display: `${location.pathname === '/resume' ? 'none' : 'flex'
                }`,
        }}
            className={`${styles.WhatsApp} animate__animated animate__pulse animate__infinite infinite`}>
            <a href="https://wa.me/message/FI6OFAJRBKVMI1" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
        </div>
    );
}

export default WhatsApp;
