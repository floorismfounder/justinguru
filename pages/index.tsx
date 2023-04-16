import Layout from '@/components/Layout';
import styles from '@/styles/index.module.scss';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import Lottie from 'lottie-react-web';
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Home({}, ref: IndexPageRef) {
  const router = useRouter();
  return (
    <PageTransition ref={ref}>
      <Layout title="My Portfolio" router={router}>
        <main className={styles.main}>
          <div className={styles.twocolbg}>
            <div className={styles.twocol}>
              <div className={styles.left}>
                <p className={styles.name}>UX Dev Ops A/R AI CS@SP Quant</p>
                <h1>Prompt Engineer</h1>
                <button className={styles.button}>
                  
                  <Lottie
                    options={{
                      animationData: require('../public/lotties/Mail_Send_lottie.json'),
                    }}
                    width={54}
                    height={54}
                  />
                  <span>Contact Justin Bartlett</span>
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
                  src="/images/justinface3.svg"
                  alt="Justin Bartlett"
                  width={278}
                  height={398}
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
              <span>Contact Justin Bartlett</span>
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
                <p>Microservice and microfrontend design, microinteractions, macrodiagrams, & architecture</p>
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
                <h2>DevOps</h2>
                <p>Custom React Native, Redux, Angular, Vue, Next, & Express apps on AWS, GCP, & Azure</p>
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
                <h2>Delegation</h2>
                <p>I can reduce your time consuming tasks with Chat-GPT, APIs, and Lambdas</p>
              </div>
            </div>
          </div>
          <div className={styles.logos}>
            <h3>I&apos;ve worked with these fine brands</h3>
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
