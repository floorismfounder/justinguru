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
          <div className={styles.twocolbg}>
            <div className={styles.twocol}>
              <div className={styles.left}>
                <p className={styles.name}>UX Dev Ops A/R AI CS@SP Quant</p>
                <h1>Super Developer</h1>
                <button className={styles.button}>
                  
                  <Lottie
                    options={{
                      animationData: require('../public/lotties/Mail_Send_lottie.json'),
                    }}
                    width={54}
                    height={54}
                  />
                  <span>Hire Justin.guru</span>
                </button>
              </div>
              <div className={styles.right}>
                <div className={styles.heroimg}>
                  {/* <div className={styles.hidemobile}>
                    <Image
                      className={styles.line}
                      src="/images/line.svg"
                      alt="Justin Bartlett"
                      width={500}
                      height={500}
                      // priority
                    />
                  </div> */}
                {/* <Image
                  className={styles.bg}
                  src="/images/bg.svg"
                  alt="Justin Bartlett"
                  width={500}
                  height={500}
                  priority
                /> */}
                <Image
                  className={styles.meh}
                  src="/images/meh3.png"
                  alt="Justin Bartlett"
                  width={500}
                  height={500}
                  priority
                />
                 {/* <div className={styles.hidemobile}>
                    <Image
                      className={styles.triangle}
                      src="/images/triangle.svg"
                      alt="Justin Bartlett"
                      width={300}
                      height={300}
                      // priority
                    />
                  </div> */}
                </div>
              </div>
            </div>  
          </div>
          <div className={styles.threecolbg}>
            <div className={styles.threecol}>
              <div className={styles.left}>
                <div className={styles.icon}>
                  <Lottie
                    options={{
                      animationData: require('../public/lotties/Light-Bulb_lottie.json'),
                    }}
                    width={54}
                    height={54}
                  />
                </div>
                <h2>Design</h2>
                <p>I architect and create experiences and systems</p>
              </div>
              <div className={styles.middle}>
              <div className={styles.icon}>
                  <Lottie
                    options={{
                      animationData: require('../public/lotties/Keyboard_lottie.json'),
                    }}
                    width={54}
                    height={54}
                  />
                </div>
                <h2>Development</h2>
                <p>I write a lot of code for dashboards and apps</p>
              </div>
              <div className={styles.right}>
              <div className={styles.icon}>
                  <Lottie
                    options={{
                      animationData: require('../public/lotties/Clock_lottie.json'),
                    }}
                    width={54}
                    height={54}
                  />
                </div>
                <h2>Laborsaving</h2>
                <p>I reduce time consuming tasks through technology </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </PageTransition>
  );
}

export default forwardRef(Home);
