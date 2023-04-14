import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '@/styles/resume.module.scss';
import PageTransition from '@/components/PageTransition';
import { forwardRef } from 'react';
import Image from 'next/image';

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Resume({}, ref: IndexPageRef) {
return (
<>
<Head>
<title>Resume | Justin Bartlett</title>
</Head>
<PageTransition ref={ref}>
<Layout title="Resume">
<div className={styles.resume}>
  <div className={styles.section}>
    <div className={styles.job}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
          <div className={styles.headingwrap}>
            {/* <Image
              className={styles.square}
              src="/images/sun.svg"
              alt="Justin Bartlett"
              width={200}
              height={200}
              priority
            /> */}
            <h1>Resume</h1>
          </div>
          <h3>Experience</h3>
      </div>
    </div>
    <ul>
      <li>
        <div className={styles.job}>
          <div className={styles.left}>
            <p>Founder</p>
            <p><a href="https://floorism.com">Floorism</a>, Inc.</p>
            <p>San Francisco, CA</p>
            <p>03/2022 - Present</p>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                Consultancy focusing on quantitative backtested technical strategies and augmented reality applications, utilizing React, Firebase, Firestore, NLP, Cloud Functions, Redux, React Router, Node, Express, Webrtc, Stripe, Socket.io, ML & AI.
              </li>
              <li>
                Accelerator programs: Y Combinator Startup School, Microsoft for Startups, Google for Startups, AWS Startup Loft, Stripe Atlas Program, and GitHub Copilot Labs.
              </li>
              <li>
                Fosters self-actualization for economic growth and societal good following the eightfold noble path for the surety and welfare of all humankind.
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div className={styles.job}>
          <div className={styles.left}>
            <p>Senior Software Engineer</p>
            <p>Forcepoint</p>
            <p>Herndon, VA</p>
            <p>06/2020 - 03/2022</p>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                Led technical and design aspects of a high-volume cybersecurity dashboard for major clients, including CVS, Boeing, Raytheon, and Toyota.
              </li>
              <li>
                Developed real-time data visualizations with D3 and Apex Charts, and integrated MongoDB change streams and an Apollo GraphQL server using React and Jest TDD front-end development techniques.
              </li>
              <li>
                Designed and implemented the API with Swagger and Express, including user authentication and management following Auth0 best practices, and containerized the frontend, data guard, and backend microservices using Docker with Logstash for docker logs and a Docker Selenium Grid.
              </li>
            </ul>
          </div>
      </div>
    </li>
    <li>
      <div className={styles.job}>
        <div className={styles.left}>
          <p>Senior Software Engineer</p>
          <p>Mastercard</p>
          <p>St Louis, MO</p>
          <p>06/2020 - 12/2020</p>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              Contributed to The Time & Expense Dashboard, a comprehensive solution for managing travel expenses from a single account, leveraging Mastercard Smart Data and smartdata.gen2TM.
            </li>
            <li>
              Streamlined the process of booking travel and tracking expenses, providing seamless financial information flow into accounting systems, resulting in improved control, employee satisfaction, and expense management, ultimately saving time and money.
            </li>
            <li>
              Utilized TD Angular, NGRX, Cypress, and web components across microfrontends.
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <div className={styles.job}>
        <div className={styles.left}>
          <p>Lead Consultant</p>
          <p>Excella</p>
          <p>Arlington, VA</p>
          <p>11/2018 - 10/2019</p>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              Utilized full stack Javascript TDD skills to win Federal Government contracts in hackathon competitions
            </li>
            <li>
              Maintained and updated 9 Voice of America hybrid mobile apps using React Native, Cordova, and other technologies
            </li>
            <li>
              Refactored GraphQL schemas, implemented predictive analytics services, updated CircleCI pipeline, migrated to Azure, and fully automated test, build, and deployment to App and Play stores. 
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <div className={styles.job}>
        <div className={styles.left}>
          <p>Senior UX Designer</p>
          <p>FINRA</p>
          <p>Rockville, MD</p>
          <p>10/2014 - 03/2015</p>
        </div>
        <div className={styles.right}>
          <p>Drove UX vision and workflows for big data applications, and designed enterprise applications that analyzed millions of daily transactions using Polymer and Angular Material.</p>
        </div>
      </div>
    </li>
    <li>
      <div className={styles.job}>
        <div className={styles.left}>
          <p>Senior Software Engineer </p>
          <p>CGI</p>
          <p>Fairfax, VA</p>
          <p>10/2013 - 06/2014</p>
        </div>
        <div className={styles.right}>
          <p>Led development of Assets.cms.gov, a responsive and 508-compliant framework that resolved front-end issues for healthcare.gov and medicare.gov, resolving over 500 logged accessibility and functionality issues, while utilizing tools such as Yeoman, Grunt, and Git.</p>
        </div>
      </div>
    </li>
    <li>
      <div className={styles.job}>
        <div className={styles.left}>
          <p>Senior Technologist</p>
          <p>Woodpile Studios</p>
          <p>Vienna, VA</p>
          <p>06/2011 - 08/2013</p>
        </div>
        <div className={styles.right}>
          <p>Successfully led a team of 4 while designing and developing award-winning site and app designs for clients including NCUA, VA, and BB&T. Redesigned VA.gov website, creating web standards guidelines, performing UX planning, and pitching and presenting the redesign project to senior officials.</p>
        </div>
      </div>
    </li>
    </ul>
  </div>
  <div className={styles.section}>
    <div className={styles.job}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <h3>Education</h3>
        <p>Naval Nuclear Power Training Command, Goose Creek, SC | 2003</p>
      </div>
    </div>
  </div>
  <div className={styles.section}>
    <div className={styles.job}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
      <h3>Additional Projects</h3>
        <ul>
          <li><a href="https://www.gritandmerit.com">Grit & Merit</a></li>
          <li><a href="https://redvector.ai/">Red Vector</a></li>
          <li><a href="https://www.bobtail.com/">Bobtail Capital</a></li>
          <li>TaskFit</li>
          <li><a href="https://anant.us">Anant</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </Layout>
</PageTransition>
</>
);
}

export default forwardRef(Resume);
