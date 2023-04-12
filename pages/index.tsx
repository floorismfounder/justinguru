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
          <div className={styles.lines}>
          <Lottie options={{
            animationData: require('../public/Lines2.json'),
            loop: true,
            autoplay: true,
          }} />
          </div>
          <p className={styles.alert}>🦄 I&apos;m still very much working on this website</p>
          <div className={styles.twocol}>
            <div className={styles.left}>
              
              <h1>Justin Bartlett</h1>
              <p>Introducing Justin, a versatile JavaScript developer, investor, sailor, and polymath from Virginia</p>
              <p><span className={styles.green}>Let&apos;s Work Together</span>.  I&apos;m available at</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/justinbartlett/">LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:justin@floorism.com">justin@floorism.com</a>
                </li>
                <li>
                  <a href="https://g.dev/jbar">Google Developer</a>
                </li>
                <li>
                  <a href="https://www.codementor.io/@justinbartlett">Codementor</a>
                </li>
                <li>
                  <a href="https://en.gravatar.com/justinbartlett">Gravatar</a>
                </li>
                <li>
                  <a href="https://github.com/floorismfounder">GitHub</a>
                </li>
                <li>
                  <a href="https://twitter.com/floorismfounder">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/lazylepton/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.gritandmerit.com">Grit & Merit</a>
                </li>
                <li>
                  <a href="https://www.floorism.com">Floorism</a>
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <div className={styles.heroimg}>
              <Image
                className={styles.meh}
                src="/meh3.png"
                alt="Justin Bartlett and Peter Bartlett"
                width={500}
                height={500}
                priority
              />
              <div className={styles.plus}>
                + <br />
                + <br />
                + <br />
                + <br />
              </div>
              </div>
              
            </div>
          </div>

          {/* <p>
          Friends and esteemed colleagues, allow me to introduce you to the one and only Justin! He is a JavaScript wizard, investment enthusiast, and sailor extraordinaire, hailing from the beautiful state of Virginia. You can catch him exploring the great outdoors, strumming his guitar, or cooking up a mean grill, and he's always up for a good game of chess or a round of marksmanship.
          </p>

But don't be fooled by his seemingly laid-back lifestyle, for Justin is also a man of diverse talents and accomplishments. He's a former Navy Nuke turned designer turned developer turned DevOps and ML specialist, with a background in quantitative finance and a proven track record of providing technical and design leadership on high-volume projects. He's even founded two organizations, Floorism and Grit & Merit, that use technology to foster self-actualization for economic growth and societal good.

When he's not coding or pursuing his many interests, you can find him cutting a rug on the dance floor with his trusty Husky puppy, Pete.But perhaps what sets Justin apart the most is his deep commitment to service and mentoring others. We can't wait to see what he'll accomplish next. */}

          {/* <div className={styles.animation}>
            <Lottie
              options={{
                animationData: require('../public/Scene1.json'),
                
              }}
            />
          </div> */}

          
        </main>
      </Layout>
    </PageTransition>
  );
}

export default forwardRef(Home);
