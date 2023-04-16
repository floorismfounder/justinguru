import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
// import Footer from './Footer';
import styles from '@/styles/components/Layout.module.scss';
import { NextRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  router: NextRouter;
};

export default function Layout({ children, title, router }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>
        <Header router={router} />
        {children}
      </div>
    </>
  );
}
