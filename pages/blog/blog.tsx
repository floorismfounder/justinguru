import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
};

type BlogProps = {
  posts: BlogPostSummary[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, title, excerpt }) => (
          <li key={slug}>
            <h2>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </h2>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

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
