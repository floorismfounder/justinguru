import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

type BlogPost = {
  title: string;
  content: string;
};

type BlogPostProps = {
  post: BlogPost;
};

export default function BlogPostPage({ post }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
}

export const getStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postFilenames = fs.readdirSync(postsDirectory);
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const post = { title: data.title, content };
  return { props: { post } };
};
