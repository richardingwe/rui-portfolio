import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Navbar from './NavBar';
import MiniNavBar from './MiniNavBar';
import WhatsApp from './WhatsApp';

import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const Layout = ({ title, keywords, description, children }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen(!navOpen);
    };
    return (
        <div className={styles.Layout}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
                <script
                    src="https://kit.fontawesome.com/ad240720a8.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <AnimatedCursor
                innerSize={13}
                outerSize={15}
                color='255, 150, 150'
                outerAlpha={0.3}
                innerScale={1}
                outerScale={5.5}
            />
            <Navbar
                handleClick={handleClick}
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            {navOpen && <MiniNavBar handleClick={handleClick} />}
            <WhatsApp />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
};


Layout.defaultProps = {
    title: 'Rui',
    description: 'Richard Unimke Ingwe - RUI Portfolio',
    keywords: 'rui, web developer, brand identiy designer, richard ingwe'
};

export default Layout;
