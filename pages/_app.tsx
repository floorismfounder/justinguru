import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <>
        <Header />
        <AnimatePresence initial={false} mode="popLayout">
        <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
        <Footer />
    </>
  )
}
