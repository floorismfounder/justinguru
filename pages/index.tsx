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
          <div className={styles.twocol}>
            <div className={styles.left}>
              <p className={styles.name}>UX Dev Ops A/R AI CS@SP Quant</p>
              <h1>Augmented Ameliorator</h1>
              <button className={styles.button}>Hire a Polymath</button>
            </div>
            <div className={styles.right}>
              <div className={styles.heroimg}>
              <Image
                className={styles.line}
                src="/images/line.svg"
                alt="Justin Bartlett"
                width={500}
                height={500}
                priority
              />
              <Image
                className={styles.bg}
                src="/images/bg.svg"
                alt="Justin Bartlett"
                width={500}
                height={500}
                priority
              />
              <Image
                className={styles.meh}
                src="/images/meh3.png"
                alt="Justin Bartlett"
                width={500}
                height={500}
                priority
              />
              <Image
                className={styles.triangle}
                src="/images/triangle.svg"
                alt="Justin Bartlett"
                width={300}
                height={300}
                priority
              />
              </div>
            </div>
          </div>          
        </main>
      </Layout>
    </PageTransition>
  );
}

export default forwardRef(Home);
