import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '@/styles/resume.module.scss';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | My Portfolio</title>
      </Head>
      <Layout title="Resume">
        <div className={styles.resume}>
          <h2>My Resume</h2>
          <hr />
          <div className={styles.section}>
            <h3>Education</h3>
            <ul>
              <li>Bachelor's Degree in Computer Science, XYZ University</li>
              <li>Master's Degree in Software Engineering, ABC University</li>
            </ul>
          </div>
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
              <li>Programming languages: JavaScript, Python, Java</li>
              <li>Frameworks: React, Node.js, Django</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
