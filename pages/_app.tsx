import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import styles from '@/styles/app.module.scss';

// extend the AppProps interface to include a title property
interface MyAppProps extends AppProps {
    title: string
}

export default function App({ Component, pageProps, title }: MyAppProps) {
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="My portfolio site" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@40,800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.app}>

        <Header />
        <AnimatePresence initial={false} mode="popLayout">
            <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
        <Footer />
        </div>
    </>
  )
}
