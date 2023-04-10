import Layout from '@/components/Layout';
import styles from '@/styles/index.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="My Portfolio">
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to my portfolio site. Feel free to explore!</p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </Layout>
  );
}
