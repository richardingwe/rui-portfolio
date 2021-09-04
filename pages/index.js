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
import Slides from '@/components/Slides';

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
          <Slides
            caption='I Create Beautiful Experiences, That Could Keep Potential
                    Customers Glued && Loyal To Your Businesses, Brands And Websites.'
            mainStyle={styles.Main}
          />
        </Carousel.Item>

        <Carousel.Item>
          <Slides
            caption='I Create "Exquisite/Professional" Designs && Illustrations, That
                Keep Brands && Businesses Appealing To Their Customers.'
            mainStyle={styles.Main2}
          />
        </Carousel.Item>
      </Carousel>
      {location.pathname === '/' && <Socials />}
    </Layout >
  );
}
