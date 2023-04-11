import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '@/styles/resume.module.scss';
import PageTransition from '@/components/PageTransition';
import { forwardRef } from 'react';
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Resume({}, ref: IndexPageRef) {
  return (
    <>
      {/* <Head>
        <title>Resume | My Portfolio</title>
      </Head> */}
      <PageTransition ref={ref}>
        <Layout title="Resume">
          <div className={styles.resume}>
            <h2>My Resume</h2>
            <hr />
            <div className={styles.section}>
              <h3>Experience</h3>
              <ul>
                <li>Software Engineer, Company A (2019 - Present)</li>
                <li>Web Developer, Company B (2017 - 2019)</li>
              </ul>
            </div>
            <div className={styles.section}>
              <h3>Skills</h3>
              <ul>
                <li>Programming languages: JavaScript</li>
                <li>Frameworks: React, Node.js</li>
              </ul>
            </div>
          </div>
        </Layout>
      </PageTransition>
    </>
  );
}

export default forwardRef(Resume);