import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/components/Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
