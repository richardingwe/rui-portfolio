import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title='Rui - Richard Unimke Ingwe' description='I Create Beautiful Experiences, That Could Keep Potential Customers Glued && Loyal To Your Businesses, Brands And Websites.'>

      <Carousel pause={false} interval={7000}>
        <Carousel.Item>
          <main className={styles.Main}>
            <section className={`container ${styles.headingText}`}>
              <motion.h1
                initial={{ x: '-10vw', opacity: 0 }}
                transition={{ type: 'spring', delay: 1, stiffness: 300 }}
                animate={{ x: 0, opacity: 1 }}
                className='text-white font-bold'
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
                I Create Beautiful Experiences, That Could Keep Potential
                Customers Glued && Loyal To Your Businesses, Brands And Websites.
							</motion.p>
              <motion.div
                initial={{ y: '10vh', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 2 }}
                animate={{ y: 0, opacity: 1 }}
                className={`${styles.action} ${styles.aboutArea}`}
              >
                <a
                  href='mailto:ruitech00@gmail.com'
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
                <a
                  // onClick={download}
                  href='https://richardingwe.github.io/my-cv/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.primaryBtn}
                  data-text='Resume.'
                >
                  <span>R</span>
                  <span>e</span>
                  <span>s</span>
                  <span>u</span>
                  <span>m</span>
                  <span>e</span>
                  <span>.</span>
                </a>
              </motion.div>
            </section>
            {/* <Footer /> */}
            <motion.div
              initial={{ y: '10vh', opacity: 0 }}
              transition={{ delay: 2.3 }}
              animate={{ y: 0, opacity: 1 }}
              className={styles.socials}
            >
              <a
                href='https://github.com/richardingwe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github' aria-hidden='true'></i>
              </a>
              <a
                href='https://dribbble.com/Rui_Creative'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-dribbble' aria-hidden='true'></i>
              </a>
              <a
                href='https://behance.net/richardingwe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-behance' aria-hidden='true'></i>
              </a>
              <a
                href='https://twitter.com/RichardIngwe?s=09'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-twitter' aria-hidden='true'></i>
              </a>
              <a
                href='https://facebook.com/ruitech00'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-facebook' aria-hidden='true'></i>
              </a>
              <a
                href='https://linkedin.com/in/richard-ingwe-9a91a5190'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-linkedin' aria-hidden='true'></i>
              </a>
              <a
                href='https://instagram.com/rui_creative'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-instagram' aria-hidden='true'></i>
              </a>
              <div className={styles.Line} />
            </motion.div>
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
                  href='mailto:ruitech00@gmail.com'
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
                <a
                  // onClick={download}
                  href='https://richardingwe.github.io/my-cv/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.primaryBtn}
                  data-text='Resume.'
                >
                  <span>R</span>
                  <span>e</span>
                  <span>s</span>
                  <span>u</span>
                  <span>m</span>
                  <span>e</span>
                  <span>.</span>
                </a>
              </motion.div>
            </section>
            {/* <Footer /> */}
            <motion.div
              initial={{ y: '10vh', opacity: 0 }}
              transition={{ delay: 2.3 }}
              animate={{ y: 0, opacity: 1 }}
              className={styles.socials}
            >
              <a
                href='https://github.com/richardingwe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github' aria-hidden='true'></i>
              </a>
              <a
                href='https://dribbble.com/Rui_Creative'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-dribbble' aria-hidden='true'></i>
              </a>
              <a
                href='https://behance.net/richardingwe'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-behance' aria-hidden='true'></i>
              </a>
              <a
                href='https://twitter.com/RichardIngwe?s=09'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-twitter' aria-hidden='true'></i>
              </a>
              <a
                href='https://facebook.com/ruitech00'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-facebook' aria-hidden='true'></i>
              </a>
              <a
                href='https://linkedin.com/in/richard-ingwe-9a91a5190'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-linkedin' aria-hidden='true'></i>
              </a>
              <a
                href='https://instagram.com/rui_creative'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=' fa fa-instagram' aria-hidden='true'></i>
              </a>
              <div className={styles.Line} />
            </motion.div>
          </main>
        </Carousel.Item>
      </Carousel>
    </Layout >
  );
}
