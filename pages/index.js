import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Loader from '@/components/Loader';
import Socials from '@/components/Socials';
import { useRouter } from 'next/router';

export default function Home() {
  const [load, setLoad] = useState(true);
  const location = useRouter();

  const showContents = () => {
    setTimeout(() => {
      setLoad(false);
    }, 4000);
  };

  useEffect(() => {
    showContents();
  }, []);


  return (
    <Layout title='Rui | Software Developer & Brand Identity Designer' description='Richard Unimke Ingwe Creates Beautiful Experiences, That Could Keep Potential Customers Glued and Loyal To Your Businesses, Brands And Websites.'>
      <Head>
        <meta name="google-site-verification" content="w31_gCqMJnNbzIL-ENdtt90gIVc75fMw8T0LJ4mOvKk" />
      </Head>
      {load &&
        <Loader />
      }
      <Carousel pause={false} interval={7000}>
        <Carousel.Item>
          <main className={styles.Main}>
            <section className={`container ${styles.headingText}`}>
              <motion.h1
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 5, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className='text-white font-bold'
                className={`text-white font-bold ${styles.playfair} ${styles.homeName}`}
              >
                <span className={styles.hello}>Hello,</span>
                <br /> I am Rui.
              </motion.h1>
              <motion.div
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 5.2, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className={styles.title}
              >
                <div />
                <p>Software Developer.</p>
              </motion.div>
              <motion.div
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 5.4, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className={styles.title}
              >
                <div />
                <p>Brand Identity Designer.</p>
              </motion.div>
              <motion.p
                initial={{ x: '10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 5.6, stiffness: 200 }}
                animate={{ x: 0, opacity: 1 }}
              >
                I Create Beautiful Experiences, That Could Keep Potential
                Customers Glued && Loyal To Your Businesses, Brands And Websites.
              </motion.p>
              <motion.div
                initial={{ y: '10vh', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 6 }}
                animate={{ y: 0, opacity: 1 }}
                className={`${styles.action} ${styles.aboutArea}`}
              >
                <a
                  href='mailto:richardingwe5@gmail.com'
                  className={`${styles.primaryBtn} ${styles.white}`}
                  data-text='Hire Me.'
                >
                  <span>H</span>
                  <span>i</span>
                  <span>r</span>
                  <span>e</span>
                  <span style={{ marginLeft: '5px' }}></span>
                  <span>M</span>
                  <span>e</span>
                  <span>.</span>
                </a>
                <Link
                  href='https://docs.google.com/document/d/1xZCuXL-igFCgDNnR7lRylyK4-aBuu1RCTn29OMmQqYI'
                >
                  <a
                    target='_blank'
                    className={styles.primaryBtn}
                    data-text='Résumé.'
                  >
                    <span>R</span>
                    <span>é</span>
                    <span>s</span>
                    <span>u</span>
                    <span>m</span>
                    <span>é</span>
                    <span>.</span>
                  </a>
                </Link>
              </motion.div>
            </section>
          </main>
        </Carousel.Item>

        <Carousel.Item>
          <main className={styles.Main2}>
            <section className={`container ${styles.headingText}`}>
              <motion.h1
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 1, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className={`text-white font-bold ${styles.playfair} ${styles.homeName}`}
              >
                <span className={styles.hello}>Hello,</span>
                <br /> I am Rui.
              </motion.h1>
              <motion.div
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 1.2, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className={styles.title}
              >
                <div />
                <p>Software Developer.</p>
              </motion.div>
              <motion.div
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 1.4, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className={styles.title}
              >
                <div />
                <p>Brand Identity Designer.</p>
              </motion.div>
              <motion.p
                initial={{ x: '10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 1.6, stiffness: 200 }}
                animate={{ x: 0, opacity: 1 }}
              >
                I Create "Exquisite/Professional" Designs && Illustrations, That
                Keep Brands && Businesses Appealing To Their Customers.
              </motion.p>
              <motion.div
                initial={{ y: '10vh', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                animate={{ y: 0, opacity: 1 }}
                className={`${styles.action} ${styles.aboutArea}`}
              >
                <a
                  href='mailto:richardingwe5@gmail.com'
                  className={`${styles.primaryBtn} ${styles.white}`}
                  data-text='Hire Me.'
                >
                  <span>H</span>
                  <span>i</span>
                  <span>r</span>
                  <span>e</span>
                  <span style={{ marginLeft: '5px' }}></span>
                  <span>M</span>
                  <span>e</span>
                  <span>.</span>
                </a>
                <Link
                  href='https://docs.google.com/document/d/1xZCuXL-igFCgDNnR7lRylyK4-aBuu1RCTn29OMmQqYI'
                >
                  <a
                    target='_blank'
                    className={styles.primaryBtn}
                    data-text='Résumé.'
                  >
                    <span>R</span>
                    <span>é</span>
                    <span>s</span>
                    <span>u</span>
                    <span>m</span>
                    <span>é</span>
                    <span>.</span>
                  </a>
                </Link>
              </motion.div>
            </section>
          </main>
        </Carousel.Item>
      </Carousel>
      {location.pathname === '/' && <Socials />}
    </Layout >
  );
}
