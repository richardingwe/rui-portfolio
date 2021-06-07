import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from '@/styles/Layout.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Showcase from './Showcase';

const Layout = ({ title, keywords, description, children }) => {
    // const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Navbar />
            {/* {router.pathname === '/' && <Showcase />} */}
            <div className={styles.container}>
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
