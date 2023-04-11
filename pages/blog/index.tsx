import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import { forwardRef } from 'react';

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
};

type BlogProps = {
  posts: BlogPostSummary[];
};

function Blog({ posts }: BlogProps, ref: IndexPageRef) {
  return (
    <>
      <PageTransition ref={ref}>
        <Layout title="Blog">
        <h1>Blog</h1>
        <ul>
          {posts.map(({ slug, title, excerpt }) => (
            <li key={slug}>
              <h2>
                <Link href={`/blog/${slug}`}>
                  <span>{title}</span>
                </Link>
              </h2>
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
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
      excerpt: data.excerpt || '',
    };
  });
  return { props: { posts } };
};
