import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import '../styles/global.css';
import styles from '@/styles/app.module.scss';

interface MyAppProps extends AppProps {
  title: string;
}

export default function App({ Component, pageProps, title }: MyAppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="preload" 
          href="../public/fonts/space-grotesk/SpaceGrotesk-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          href="../public/fonts/space-grotesk/SpaceGrotesk-Bold.ttf"
          rel="stylesheet"
        />
        <link
          href="../public/fonts/space-grotesk/SpaceGrotesk-Medium.ttf"
          rel="stylesheet"
        />
      </Head>
        <div className={styles.app}>
        <div className={styles['uni-header-section-indicator'] + styles['uk-text-xsmall dark:uk-text-white'] 
        + styles['uk-visible@l']}>
                <ul className={styles.ukList}>
                    <li data-selector=".uni-hero">About me</li>
                    <li data-selector=".uni-works">Featured works</li>
                    <li data-selector=".uni-testimonials">Clients</li>
                    <li data-selector=".uni-blog-posts">Latest insights</li>
                    <li data-selector=".uni-cta-footer">Get in touch</li>
                </ul>
            </div>
          <Header />
          <AnimatePresence initial={false} mode="popLayout">
            <Component key={pageKey} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </div>
    </>
  );
}
