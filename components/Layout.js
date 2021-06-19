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

const Layout = ({ title, keywords, description, children, currentUrl, imageUrl, image_alt }) => {
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
                <meta property="og:url" content={currentUrl} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:url" content={currentUrl} />
                <meta property="og:description" content={description} />
                <meta property="twitter:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:alt" content={image_alt} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content={image_alt} />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
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
    title: 'Rui | Software Developer & Brand Identity Designer',
    currentUrl: 'https://ruingwe.com',
    description: 'Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued & Loyal To Your Businesses, Brands & Websites.',
    keywords: 'rui, frontend developer, web developer, brand identiy designer, graphic designer, richard ingwe',
    imageUrl: 'https://ruingwe.com/logo512.png',
    image_alt: 'Rui logo'
};

export default Layout;
