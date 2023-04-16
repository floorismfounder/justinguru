import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Post, getPostBySlug, getAllPostSlugs } from '../../lib/posts';
import PageTransition from '@/components/PageTransition';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import styles from '@/styles/post.module.scss';

type PostPageProps = {
  post: Post;
  ref?: React.Ref<HTMLDivElement>;
};

const PostPage: ForwardRefRenderFunction<HTMLDivElement, PostPageProps> = ({ post }, ref) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <PageTransition ref={ref}>
      <Layout title={post.frontmatter.title} router={router}>
        <article className={styles.post}>
          <p className={styles.topic}>{post.frontmatter.topic}</p>
          <h1>{post.frontmatter.title}</h1>
          <p className={styles.date}>by Justin Bartlett on {post.frontmatter.date}</p>
          <img className={styles.postimg} src={post.frontmatter.image} alt={post.frontmatter.title} />
          <div className={styles.articlecontent} dangerouslySetInnerHTML={{ __html: post.content }} />
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

  return {
    props: { post },
  };
};

export default forwardRef(PostPage);
