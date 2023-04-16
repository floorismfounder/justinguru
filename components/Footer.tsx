import styles from '@/styles/components/Footer.module.scss';
import Lottie from 'lottie-react-web';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footerbackground}>
    <div className={styles.footer}>
      <div className={styles.footerupper}>
        <div className={styles.left}>
        <Image src="/images/house.svg" className={styles.foothouse} alt="House of Bartlett" width={197} height={152} priority />
        </div>
        <div className={styles.right}>
        <h2>Human being & being social</h2>
          
          {/* <button className={styles.button}>     
            <Lottie
              options={{
                animationData: require('../public/lotties/Mail_Send_lottie.json'),
              }}
              width={54}
              height={54}
            />
            <span>Contact Justin Bartlett</span>
          </button> */}
        </div>
      </div>
      <div className={styles.footermiddle}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/justinbartlett/">LinkedIn</a>
          </li>
          <li>
            <a href="https://g.dev/jbar">Google Developer</a>
          </li>
          <li>
            <a href="https://www.codementor.io/@justinbartlett">Codementor</a>
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
          <li>
            <a href="https://medium.com/@floorism">Medium</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerlower}>
        <p>
          &copy; 2023 Justin.guru
        </p>
      </div>
    </div>
    </footer>
  );
}
