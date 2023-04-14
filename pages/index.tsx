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
                  src="/images/meh5.png"
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
            <button className={styles.buttonmobile}>
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
          <div className={styles.logos}>
            <h3>I've worked with these fine brands</h3>
            <ul>
              <li>
                <Image src="/images/logos/capitalone.svg" alt="Capital One" width={224} height={80} className="capitalone" />
              </li>
              <li>
                <Image src="/images/logos/finra.svg" alt="FINRA" width={188} height={67} className='finra' />
              </li>
              <li>
                <Image src="/images/logos/forcepoint.svg" alt="Forcepoint" width={199} height={37} />
              </li>
              <li>
                <Image src="/images/logos/mastercard.svg" alt="Mastercard" width={120} height={92} />
              </li>
              <li>
                <Image src="/images/logos/va.svg" alt="VA" width={248} height={56} />
              </li>
              <li>
                <Image src="/images/logos/microsoft.svg" alt="Microsoft" width={151} height={69} />
              </li>
              <li>
                <Image src="/images/logos/aws.svg" alt="AWS" width={121} height={73} />
              </li>
              <li>
                <Image src="/images/logos/google.svg" alt="AWS" width={170} height={71} />
              </li>
            </ul>
          </div>
        </main>
      </Layout>
    </PageTransition>
  );
}

export default forwardRef(Home);
