import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import styles from '@/styles/blog.module.scss';
import { forwardRef, useEffect } from 'react';

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

type BlogPostSummary = {
  slug: string;
  title: string;
  topic: string;
  thumbnail: string;
  date: string;
};

type BlogProps = {
  posts: BlogPostSummary[];
};

function Blog({ posts }: BlogProps, ref: IndexPageRef) {
  useEffect(() => {
    // Preload all thumbnail images
    posts.forEach((post) => {
      const img = new Image();
      img.src = post.thumbnail;
    });
  }, [posts]);

  return (
    <>
      <PageTransition ref={ref}>
        <Layout title="Blog">
          <div className={styles.blog}>
            <div className={styles.blogheader}>
              <h1>
                Justin&apos;s <span>Blog</span>
              </h1>
            </div>
            <div className={styles.ulbg}>
              <ul>
                {posts.map(({ slug, title, topic, thumbnail, date }) => (
                  <li key={slug}>
                    <Link href={`/blog/${slug}`}>
                      {thumbnail && (
                        <img
                          className={styles.logoimg}
                          src={thumbnail}
                          alt={`Thumbnail for ${title}`}
                        />
                      )}
                      <p>
                        <span>{date}</span>
                        <span>{topic}</span>
                      </p>
                      <h2>{title}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      </PageTransition>
    </>
  );
}

export default forwardRef(Blog);

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postFilenames = fs.readdirSync(postsDirectory);
  const posts = postFilenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title,
      topic: data.topic || '',
      date: data.date || '',
      thumbnail: data.image || '', // <-- read thumbnail path from frontmatter
    };
  });
  return { props: { posts } };
};
