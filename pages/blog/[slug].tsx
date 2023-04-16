import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Post, getPostBySlug, getAllPostSlugs } from '../../lib/posts';
import PageTransition from '@/components/PageTransition';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import styles from '@/styles/post.module.scss';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkHtml from 'remark-html';

type PostPageProps = {
  post: Post;
  content: string;
  ref?: React.Ref<HTMLDivElement>;
};

const PostPage: ForwardRefRenderFunction<HTMLDivElement, PostPageProps> = ({ post, content }, ref) => {
  const router = useRouter();
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (articleRef.current) {
      const codeBlocks = articleRef.current.querySelectorAll('pre code');
      codeBlocks.forEach((block) => hljs.highlightBlock(block as HTMLElement));
    }
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <PageTransition ref={ref}>
      <Layout title={post.frontmatter.title} router={router}>
        <article className={styles.post} ref={articleRef}>
          <p className={styles.topic}>{post.frontmatter.topic}</p>
          <h1>{post.frontmatter.title}</h1>
          <p className={styles.date}>by Justin Bartlett on {post.frontmatter.date}</p>
          <img className={styles.postimg} src={post.frontmatter.image} alt={post.frontmatter.title} />
          <div className={styles.articlecontent} dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </Layout>
    </PageTransition>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.content);

  const contentHtml = content.toString();

  return {
    props: {
      post,
      content: contentHtml,
    },
  };
};

export default forwardRef(PostPage);
