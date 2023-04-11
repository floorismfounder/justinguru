import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
// import Header from './Header';
// import Footer from './Footer';
import styles from '@/styles/components/Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter();
  return (
    <>

      {children}

    </>
  );
}
