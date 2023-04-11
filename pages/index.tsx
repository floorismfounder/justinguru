import Layout from '@/components/Layout';
import styles from '@/styles/index.module.scss';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import { forwardRef } from 'react';
import Lottie from 'lottie-react-web';
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Home({}, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <Layout title="My Portfolio">
        <main className={styles.main}>
          <div className={styles.description}>
            <p>Welcome to my portfolio site. Feel free to explore!</p>
          </div>

          <div className={styles.animation}>
            <Lottie
              options={{
                animationData: require('../public/Scene1.json'),
                
              }}
            />
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
    </PageTransition>
  );
}

export default forwardRef(Home);
