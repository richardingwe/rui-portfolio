import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';
// import Footer from './Footer';
import Navbar from './Navbar';
// import Showcase from './Showcase';

const Layout = ({ title, keywords, description, children }) => {
    // const router = useRouter();
    return (
        <div className={styles.Layout}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            </Head>

            <Navbar />
            {/* {router.pathname === '/' && <Showcase />} */}
            <div>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    );
};


Layout.defaultProps = {
    title: 'Rui',
    description: 'Richard Unimke Ingwe - RUI Portfolio',
    keywords: 'rui, web developer, brand identiy designer, richard ingwe'
};

export default Layout;
